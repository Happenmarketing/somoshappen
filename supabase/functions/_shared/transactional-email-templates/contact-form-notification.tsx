import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  nombre?: string
  email?: string
  mensaje?: string
}

const Email = ({ nombre, email, mensaje }: Props) => (
  <Html lang="es" dir="ltr">
    <Head />
    <Preview>Nuevo mensaje de {nombre || 'alguien'} desde somoshappen.com</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nuevo mensaje desde la web</Heading>
        <Text style={lead}>
          Recibiste un nuevo mensaje desde el formulario de contacto de somoshappen.com.
        </Text>

        <Hr style={hr} />

        <Section>
          <Text style={label}>Nombre</Text>
          <Text style={value}>{nombre || '—'}</Text>

          <Text style={label}>Email</Text>
          <Text style={value}>{email || '—'}</Text>

          <Text style={label}>Mensaje</Text>
          <Text style={messageBox}>{mensaje || '—'}</Text>
        </Section>

        <Hr style={hr} />

        <Text style={footer}>
          Para responder, escribí directamente a {email || 'el remitente'}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Props) =>
    `Nuevo mensaje de ${data?.nombre || 'la web'} - somoshappen`,
  displayName: 'Notificación de formulario de contacto',
  to: 'hola@happenmarketing.com',
  previewData: {
    nombre: 'Juan Pérez',
    email: 'juan@example.com',
    mensaje: 'Hola, quería consultar por sus servicios de branding.',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: "'Outfit', Arial, sans-serif",
}

const container = {
  padding: '32px 28px',
  maxWidth: '560px',
  margin: '0 auto',
}

const h1 = {
  color: '#1c2a6b',
  fontSize: '26px',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  margin: '0 0 12px',
}

const lead = {
  color: '#4a5275',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0',
}

const hr = {
  borderColor: '#e6e8f0',
  margin: '24px 0',
}

const label = {
  color: '#7a83a8',
  fontSize: '12px',
  fontWeight: 600,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  margin: '12px 0 4px',
}

const value = {
  color: '#1c2a6b',
  fontSize: '16px',
  margin: '0 0 8px',
}

const messageBox = {
  color: '#1c2a6b',
  fontSize: '15px',
  lineHeight: '1.6',
  backgroundColor: '#f4f5fb',
  padding: '14px 16px',
  borderRadius: '12px',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
}

const footer = {
  color: '#7a83a8',
  fontSize: '13px',
  margin: '0',
}
