import { Resend } from 'resend'

export const sendEmail = async (to: string, subject: string, html: string) => {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to,
    subject,
    html,
  })

  if (error) {
    throw error
  } else {
    return data
  }
}
