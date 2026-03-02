import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div>
      <p>
        <strong>Nome:</strong> ${name}
      </p>
      <p>
        <strong>Email:</strong> ${email}
      </p>
      <p>
        <strong>Mensagem:</strong> ${message}
      </p>
    </div>
  );
}
