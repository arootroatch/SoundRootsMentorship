import fetch from "node-fetch";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

const clientPromise = client.connect();

const handler = async (event) => {
  let emailSucess = false;
  let dbSuccess = false;
  let dbError;
  let emailError;

  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }
  const data = JSON.parse(event.body);

  await fetch(`${process.env.URL}/.netlify/functions/emails/contact-form`, {
    headers: {
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
      }
    })
  }).then((res) => {
    console.log('email response', res.status)
    if(res.status === 200){
      emailSucess = true;
    }
  })

  try {
    const database = (await clientPromise).db('Mentorship');
    const collection = database.collection('contact-form');

    collection.insertOne(data).then((res) => {
      console.log('dbResponse', res);
      dbSuccess = true;
    })
  } catch (error) {
    dbError = error;
  }

  if (dbSuccess && emailSucess) {
    return {
      statusCode: 200,
    }
  } else {
    return {
      statusCode: 500,
      body: JSON.stringify({
        emailError,
        dbError
      })
    }
  }
};

export { handler };
