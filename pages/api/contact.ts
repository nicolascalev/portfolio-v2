import { contactSchema } from 'lib/joiSchemas';
import sendEmail from 'lib/sendEmail';
import { NextApiRequest, NextApiResponse } from 'next';

if (!process.env.BREVO_API_KEY) {
  throw new Error('BREVO_API_KEY is required');
}

export default async function contactHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const validated = contactSchema.validate(req.body);
    if (validated.error) {
      return res.status(400).send(validated.error.message);
    }

    try {
      await sendEmail({
        brevoApiKey: process.env.BREVO_API_KEY as string,
        message: req.body.message,
        senderEmail: 'no-reply@nicolascalev.com',
        senderName: 'nicolascalev.com notifications',
        subject: `[PERSONAL WEBSITE CONTACT] new message from ${req.body.name} ${req.body.email}`,
        to: [{ email: 'nicolascalevg@gmail.com', name: 'Nicolas Guillen' }],
      });
      return res.status(200).send('Email sent successfully');
    } catch (err) {
      const error: any = err;
      // eslint-disable-next-line no-console
      console.error('Error with contact form possibly brevo: ', error?.response?.data || error);
      return res.status(500).json(error?.response?.data || error);
    }
  }

  return res.status(501).send('Not implemented');
}
