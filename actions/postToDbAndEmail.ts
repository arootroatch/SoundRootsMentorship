"use server";
import fetch from "node-fetch";
import { MongoClient } from "mongodb";

//@ts-ignore
const client = new MongoClient(process.env.MONGODB_URI);

const clientPromise = client.connect();

export default async function postToDbAndEmail(formData: FormData) {
  let emailSucess = false;
  let dbSuccess = false;
  let dbError;
  let emailError;

  const token = String(formData.get("token"));

  const params = new URLSearchParams();
  params.append("response", token);
  params.append("secret", String(process.env.HCAPTCHA_SECRET));

  const response = await fetch("https://hcaptcha.com/siteverify", {
    method: "POST",
    body: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const json: any = await response.json();
  const { success } = json;

  if (!success) {
    return {
      statusCode: 400,
      body: JSON.stringify("Captcha failed. Please try again."),
    };
  } else {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      experience: formData.get("experience"),
      goals: formData.get("goals"),
      date: new Date().toISOString(),
    };

    if (
      !data.date ||
      !data.name ||
      !data.email ||
      !data.experience ||
      !data.goals
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify(
          "Empty field detected. Please fill out all fields."
        ),
      };
    }

    await fetch(`${process.env.URL}/.netlify/functions/emails/contact-form`, {
      headers: {
        //@ts-ignore
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
      },
      method: "POST",
      body: JSON.stringify({
        from: "alex@soundrootsproductions.com",
        to: "alex@soundrootsproductions.com",
        subject: "Mentorship Contact Form Submission",
        parameters: {
          name: data.name,
          email: data.email,
          experience: data.experience,
          goals: data.goals,
        },
      }),
    }).then((res) => {
      if (res.status === 200) {
        emailSucess = true;
      }
    });

    try {
      const database = (await clientPromise).db("Mentorship");
      const collection = database.collection("contact-form");

      collection.insertOne(data);
      dbSuccess = true;
    } catch (error) {
      dbError = error;
    }

    if (dbSuccess && emailSucess) {
      return {
        statusCode: 200,
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({
          emailError,
          dbError,
        }),
      };
    }
  }
}
