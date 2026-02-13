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

    const messageText = `이름/Name: ${name}\n이메일/Email: ${email}\n연락처/Phone: ${phone || 'N/A'}\n학년/Grade: ${grade || 'N/A'}\n제목/Subject: ${subject}\n문의사항/Question: ${question}`
    const messageHtml = `
      <div style="max-width:600px;margin:0 auto;border-radius:10px;overflow:hidden;font-family:'Noto Sans KR',sans-serif;">
        <div style="background:#102a63;color:#fff;padding:32px 0;text-align:center;font-size:1.5rem;font-weight:700;">
          컨설팅 문의
        </div>
        <div style="background:#fafafa;padding:32px 24px 24px 24px;">
          <table style="width:100%;font-size:1rem;">
            <tr><td style="font-weight:600;padding:8px 0;">이름/Name:</td><td>${name}</td></tr>
            <tr><td style="font-weight:600;padding:8px 0;">이메일/Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="font-weight:600;padding:8px 0;">연락처/Phone:</td><td>${phone || 'N/A'}</td></tr>
            <tr><td style="font-weight:600;padding:8px 0;">학년/Grade:</td><td>${grade || 'N/A'}</td></tr>
            <tr><td style="font-weight:600;padding:8px 0;">제목/Subject:</td><td>${subject}</td></tr>
            <tr><td style="font-weight:600;padding:8px 0;">문의사항/Question:</td><td>${question}</td></tr>
          </table>
          <hr style="margin:24px 0 8px 0;border:none;border-top:1px solid #eee;">
          <div style="color:#888;font-size:0.95rem;text-align:center;">
            이 메일은 THE-I PREP 웹사이트를 통해 자동으로 발송되었습니다.
          </div>
        </div>
      </div>
    `.trim()

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@resend.dev',
        to: toAddress,
        reply_to: email,
        subject: `[THE-I PREP] 컨설팅 문의 - ${name}`,
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
