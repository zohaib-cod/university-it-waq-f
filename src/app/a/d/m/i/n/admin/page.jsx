'use client';

import Link from 'next/link';

export default function AdminPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/40 to-black px-4">

      {/* GLASS CARD */}
      <div className="w-full max-w-xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10 text-center">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-white mb-2">
          Admin Panel
        </h1>

        <p className="text-gray-400 mb-8">
          Manage Applications & Courses
        </p>

        {/* BUTTONS WRAPPER */}
        <div className="space-y-4">

          {/* ADMISSIONS */}
          <Link href="admin/Admissions-Applications">
            <div className="group cursor-pointer bg-white/10 hover:bg-purple-500/20 transition-all duration-300 border border-white/10 rounded-2xl p-5 flex items-center justify-between">

              <span className="text-white font-semibold text-lg">
                Admissions Applications
              </span>

              <span className="text-purple-400 group-hover:translate-x-2 transition">
                →
              </span>

            </div>
          </Link>
          {/* contact-us */}
          <Link href="admin/contact-us-admin">
            <div className="group cursor-pointer bg-white/10 hover:bg-purple-500/20 transition-all duration-300 border border-white/10 rounded-2xl p-5 flex items-center justify-between">

              <span className="text-white font-semibold text-lg">
                Contact-Us
              </span>

              <span className="text-purple-400 group-hover:translate-x-2 transition">
                →
              </span>

            </div>
          </Link>

          {/* COURSES */}
          <Link href="admin/Course-Applications">
            <div className="group cursor-pointer bg-white/10 hover:bg-pink-500/20 transition-all duration-300 border border-white/10 rounded-2xl p-5 flex items-center justify-between">

              <span className="text-white font-semibold text-lg">
                Course Applications
              </span>

              <span className="text-pink-400 group-hover:translate-x-2 transition">
                →
              </span>

            </div>
          </Link>

        </div>

      </div>

    </main>
  );
}