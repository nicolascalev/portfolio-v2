import axios from 'axios';

type EmailParams = {
  brevoApiKey: string;
  senderEmail: string;
  senderName: string;
  subject: string;
  message: string;
  to: { email: string; name: string }[];
};

export default async function sendEmail(params: EmailParams) {
  try {
    const data = await axios
      .post(
        'https://api.brevo.com/v3/smtp/email',
        {
          sender: {
            email: params.senderEmail,
            name: params.senderName,
          },
          subject: params.subject,
          htmlContent: params.message,
          messageVersions: [
            {
              to: params.to,
            },
          ],
        },
        {
          headers: {
            'api-key': params.brevoApiKey,
          },
        }
      )
      .then((res) => res.data);
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
}
