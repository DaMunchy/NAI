// File: app/about/page.tsx
"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white flex flex-col font-inter antialiased relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none z-0"></div>

      <header className="sticky top-0 z-20 w-full bg-black/80 backdrop-blur-lg p-4 shadow-2xl border-b border-purple-800/50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:-translate-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
          </a>
          <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg tracking-wide md:text-4xl">
                Tentang NAI
          </h1>
          <div className="w-24"></div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-6 invisible-scrollbar z-10 flex items-center justify-center">
        <div className="max-w-3xl mx-auto bg-gray-800/70 p-8 rounded-3xl shadow-2xl border border-gray-700/50 space-y-6 text-lg leading-relaxed text-gray-200">
          <p>
            Selamat datang di <span className="font-bold text-purple-400">NAI</span>, platform inovatif tempat Anda dapat berinteraksi dengan berbagai karakter AI yang unik dan menarik. Kami percaya bahwa masa depan interaksi digital adalah tentang koneksi yang personal dan bermakna.
          </p>
          <p>
            Masing-masing AI di sini dirancang dengan kepribadian dan keahlian khusus, memungkinkan Anda untuk menjelajahi berbagai topik, mendapatkan bantuan, atau sekadar menikmati percakapan yang menyenangkan. Dari asisten yang informatif hingga teman curhat yang empatik, NAI ada di sini untuk memperkaya pengalaman digital Anda.
          </p>
          <p>
            Visi kami adalah menciptakan jembatan antara manusia dan kecerdasan buatan, di mana setiap interaksi terasa alami dan inspiratif. Kami terus berinovasi untuk membawa lebih banyak karakter dan fitur menarik ke hadapan Anda.
          </p>
          <p className="text-center text-sm text-gray-400 pt-4">
            Terima kasih telah menjadi bagian dari perjalanan kami!
          </p>
          <p className="text-center text-sm text-gray-400 pt4">
            Email: munchynes@gmail.com
          </p>
        </div>
      </main>
    </div>
  );
}
