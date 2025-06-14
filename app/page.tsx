"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { personas } from "@/lib/personas";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="relative flex justify-center items-center flex-col z-10">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500 mb-4"></div>
          <p className="text-white text-3xl font-extrabold tracking-wide animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden flex flex-col relative">
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 pointer-events-none"></div>

      <header className="w-full bg-black/80 backdrop-blur-md p-4 shadow-2xl border-b border-purple-900 z-20 sticky top-0">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-4">
          <Link href="/" className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-105 transition-transform duration-300 drop-shadow-md">
            NAI.AI
          </Link>
          <ul className="flex space-x-8">
            <li>
              <Link href="/about" className="text-lg text-gray-300 hover:text-purple-400 relative group transition-colors duration-300">
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow p-6 flex flex-col items-center justify-center relative z-10 pt-16 pb-20">
        <h1 className="text-6xl font-extrabold mb-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-2xl animate-pulse-light tracking-tight md:text-7xl lg:text-8xl">
          NAI
        </h1>
        <p className="text-center text-xl mb-16 max-w-3xl font-light text-gray-300 animate-fade-in duration-1000 leading-relaxed">
          Jelajahi beberapa karakter AI dan ngobrol dengan mereka
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4">
          {personas.map((p, index) => (
            <Link href={`/chat/${p.id}`} key={p.id}>
              <div
                className={`bg-gray-800/60 hover:bg-purple-700/80 transition-all duration-500 p-8 rounded-3xl shadow-xl hover:shadow-purple-500/30 cursor-pointer transform hover:-translate-y-3 hover:scale-105 border border-gray-700 hover:border-purple-600 relative overflow-hidden group animate-slide-in-bottom`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient from-purple-500/20 to-transparent scale-0 group-hover:scale-150 transition-transform duration-500 origin-center rounded-3xl"></div>

                <h2 className="text-3xl font-bold mb-3 text-purple-300 group-hover:text-white transition-colors duration-300 animate-text-gradient-pulse">
                  {p.name}
                </h2>
                <p className="text-base opacity-90 group-hover:opacity-100 text-gray-200 transition-opacity duration-300">
                  {p.description}
                </p>
                <div className="mt-4 flex justify-end">
                  <span className="text-sm font-semibold text-purple-400 group-hover:text-white transition-colors duration-300">
                    Mulai Obrolan &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
