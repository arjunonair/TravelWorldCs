import twilio from 'twilio';
const accountSid = 'AC0bb9c31a47b2263284e70b2cb41868e7';
const authToken = '939d00ef14db1c3b3bdca94618d7c853';
const twilioPhoneNumber = '+18144984473';
// const recipientPhoneNumber = '6238783921';

const client = twilio(accountSid, authToken);

export async function sendSMS(req, res) {
  const { to, message } = req.body;

  try {
    const sentMessage = await client.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: to
    });

    console.log(`Message SID: ${sentMessage.sid}`);
    res.json({ message: 'SMS sent successfully' });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ error: 'Failed to send SMS' });
  }
}
