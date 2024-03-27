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

  await fetch("https://api.resend.com", {
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    method: "POST",
    body
  })




  return {
    statusCode: 200,
  }
};

export { handler };
