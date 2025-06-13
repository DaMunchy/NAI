// File: app/chat/[persona]/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { personas } from "@/lib/personas";

export default function ChatPage() {
  const { persona } = useParams();
  const currentPersona = personas.find(p => p.id === persona);
  const [messages, setMessages] = useState([{ role: "system", content: currentPersona?.prompt ?? "" }]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [isLoadingReply, setIsLoadingReply] = useState(false);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoadingReply(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ persona: currentPersona, messages: [...messages, userMessage] })
      });

      const data = await res.json();
      const aiMessage = { role: "assistant", content: data.reply };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Failed to fetch AI reply:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "Oops! Sepertinya ada masalah koneksi. Coba lagi nanti." }]);
    } finally {
      setIsLoadingReply(false);
    }
  };

  function formatMessage(content: string) {
    const escaped = content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const formatted = escaped.replace(/\*(.*?)\*/g, '<span class="italic text-gray-400">$1</span>');
    return formatted;
  }

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none z-0"></div>

      <header className="sticky top-0 z-20 w-full bg-black/80 backdrop-blur-lg p-4 shadow-2xl border-b border-purple-800/50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:-translate-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
          </Link>
          <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg tracking-wide md:text-4xl">
            {currentPersona?.name}
          </h1>
          <div className="w-5 text-right">
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 scrollbar-none">


        <div className="max-w-4xl mx-auto space-y-5 pb-4">
          {messages.slice(1).map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-4 rounded-3xl shadow-xl transition-all duration-300 ease-in-out transform break-words ${
                  msg.role === "user"
                    ? "bg-gradient-to-br from-purple-700 to-pink-600 text-white rounded-br-none"
                    : "bg-gray-800/90 text-gray-100 rounded-bl-none border border-gray-700"
                }`}
                style={{ maxWidth: "75%", whiteSpace: "pre-wrap" }}
              >
                <p
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
                />
              </div>
            </div>
          ))}
          {isLoadingReply && (
            <div className="flex justify-start">
              <div className="bg-gray-800/90 text-gray-100 p-4 rounded-3xl rounded-bl-none shadow-xl max-w-fit animate-pulse border border-gray-700 flex items-center justify-center">
                <svg className="animate-spin h-6 w-6 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            </div>
          )}
          <div ref={chatEndRef} className="scroll-mt-40" />
        </div>
      </main>

      <div className="w-full bg-black/90 px-4 pt-2 pb-5 border-t border-purple-800/50">

        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage()}
            className="flex-1 py-3 px-4 rounded-full bg-gray-800/80 text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all duration-300 text-base shadow-inner"
            placeholder={`Ketik pesan ke ${currentPersona?.name}...`}
            disabled={isLoadingReply}
          />
          <button
            onClick={sendMessage}
            className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={isLoadingReply || !input.trim()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
