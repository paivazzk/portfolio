import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfólio" <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Mensagem de ${name}`,
      replyTo: email,
      text: `
Nome: ${name}
Email: ${email}
Mensagem: ${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Erro ao enviar email" }, { status: 500 });
  }
}