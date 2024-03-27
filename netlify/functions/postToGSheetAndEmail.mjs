import fetch from "node-fetch";

const handler = async (event) => {

  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }
  const data = JSON.parse(event.body);
  console.log(data)

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
  })

  return {
    statusCode: 200,
  }
};

export { handler };
