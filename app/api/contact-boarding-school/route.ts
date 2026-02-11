import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, grade, subject, question } = body

    // Validate required fields
    if (!name || !email || !subject || !question) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    const fromAddress = process.env.RESEND_FROM
    const toAddress = process.env.RESEND_TO

    if (!fromAddress || !toAddress) {
      return NextResponse.json(
        { error: 'Email service sender/recipient is not configured' },
        { status: 500 }
      )
    }

    const messageText = `이름/Name: ${name}\n연락처/Phone: ${phone || 'N/A'}\n이메일/Email: ${email}\n학년/Grade: ${grade || 'N/A'}\n\n문의사항/Question:\n${question}`
    const messageHtml = `
      <p><strong>이름/Name:</strong> ${name}</p>
      <p><strong>연락처/Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>이메일/Email:</strong> ${email}</p>
      <p><strong>학년/Grade:</strong> ${grade || 'N/A'}</p>
      <p><strong>문의사항/Question:</strong></p>
      <pre>${question}</pre>
    `.trim()

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: toAddress,
        reply_to: email,
        subject: `[Boarding Contact] ${subject}`,
        text: messageText,
        html: messageHtml,
      }),
    })

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text()
      console.error('Resend error:', errorText)
      return NextResponse.json(
        { error: errorText || 'Failed to send email' },
        { status: 502 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
