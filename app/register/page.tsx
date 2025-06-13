// File: app/register/page.tsx
"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Kata sandi tidak cocok!");
      return;
    }

    // Placeholder for actual registration logic
    console.log({ username, email, password });
    setSuccess("Pendaftaran berhasil! Silakan masuk.");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    // In a real app, you'd send this data to an API
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white flex flex-col font-inter antialiased relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none z-0"></div>

      <header className="sticky top-0 z-20 w-full bg-black/80 backdrop-blur-lg p-4 shadow-2xl border-b border-purple-800/50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:-translate-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Kembali
          </a>
          <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg tracking-wide md:text-4xl">
            Daftar Akun Baru
          </h1>
          <div className="w-24"></div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-6 invisible-scrollbar z-10 flex items-center justify-center">
        <div className="max-w-md w-full bg-gray-800/70 p-8 rounded-3xl shadow-2xl border border-gray-700/50 space-y-6 text-gray-200 animate-fade-in duration-700">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500">
            Bergabunglah dengan NAI
          </h2>

          {error && <p className="text-red-400 text-center text-sm">{error}</p>}
          {success && <p className="text-green-400 text-center text-sm">{success}</p>}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">Nama Pengguna</label>
              <input
                type="text"
                id="username"
                className="w-full p-3 rounded-xl bg-gray-700/70 text-white placeholder-gray-400 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all duration-200 text-lg"
                placeholder="Masukkan nama pengguna Anda"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-xl bg-gray-700/70 text-white placeholder-gray-400 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all duration-200 text-lg"
                placeholder="email@contoh.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Kata Sandi</label>
              <input
                type="password"
                id="password"
                className="w-full p-3 rounded-xl bg-gray-700/70 text-white placeholder-gray-400 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all duration-200 text-lg"
                placeholder="Minimal 6 karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">Konfirmasi Kata Sandi</label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-3 rounded-xl bg-gray-700/70 text-white placeholder-gray-400 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all duration-200 text-lg"
                placeholder="Ulangi kata sandi Anda"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-br from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-lg font-semibold transform hover:scale-105"
            >
              Daftar Sekarang
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 pt-2">
            Sudah punya akun? <a href="/login" className="text-purple-400 hover:text-white font-medium transition-colors">Masuk di sini</a>
          </p>
        </div>
      </main>
    </div>
  );
}
