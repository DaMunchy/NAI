// File: app/api/chat/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { persona, messages } = await req.json();

  const formattedMessages = messages
    .filter((msg: any) => msg.role !== "system")
    .map((msg: any) => ({
      role: msg.role,
      parts: [{ text: msg.content }]
    }));

  // Inject prompt ke pesan pertama
  if (formattedMessages.length > 0) {
    const firstMessage = formattedMessages[0];
    firstMessage.parts[0].text = `${persona.prompt}\n\n${firstMessage.parts[0].text}`;
  }

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=AIzaSyA_23o0zqpeIL7r8ao9EnWpmi2fxHgNbPA`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: formattedMessages
      })
    }
  );

  if (!res.ok) {
    console.error("Gemini REST error", await res.text());
    return NextResponse.json({ reply: "⚠️ AI gagal merespons." }, { status: 500 });
  }

  const data = await res.json();
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "⚠️ Tidak ada jawaban.";

  return NextResponse.json({ reply });
}
