import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export const sendMessage = (req, res) => {
  const { contacts, message } = req.body;

  if (!contacts || !message) {
    return res.status(400).send("Contacts and message are required");
  }

  contacts.forEach((contact) => {
    client.messages
      .create({
        from: `whatsapp:${process.env.TWILIO_NUMBER}`,
        to: `whatsapp:${contact.phone}`,
        body: `${contact.name}, ${message}`,
      })
      .then((message) =>
        console.log(`Message sent to ${contact.name}: ${message.sid}`)
      )
      .catch((error) =>
        console.error(
          `Failed to send message to ${contact.name}: ${error.message}`
        )
      );
  });

  res.send("Messages sent");
};
