// "use client";

// import Link from 'next/link';
// import { useRef, useState } from 'react';

// // Glass Card Component
// const GlassCard = ({ children, className = '' }) => (
//   <div className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:border-purple-500/50 ${className}`}>
//     {children}
//   </div>
// );

// // Contact Info Card
// const ContactInfo = ({ icon, title, info, link }) => (
//   <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
//     <div className="text-3xl">{icon}</div>
//     <div>
//       <h3 className="text-white font-semibold mb-1">{title}</h3>
//       {link ? (
//         <a href={link} className="text-gray-300 text-sm hover:text-purple-400 transition-colors">
//           {info}
//         </a>
//       ) : (
//         <p className="text-gray-300 text-sm">{info}</p>
//       )}
//     </div>
//   </div>
// );

// export default function ContactPage() {
//   const form = useRef();
//   const [loading, setLoading] = useState(false);

//   // ✅ ONLY API ADDED (EmailJS removed)
//   const sendMessage = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = {
//       name: form.current.name.value,
//       email: form.current.email.value,
//       subject: form.current.subject.value,
//       message: form.current.message.value,
//     };

//     try {
//       const res = await fetch('http://localhost:5000/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (data.success) {
//         alert("Message sent successfully!");
//         form.current.reset();
//       } else {
//         alert("Failed to send message");
//       }

//     } catch (err) {
//       alert("Server error");
//     }

//     setLoading(false);
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 pt-20">

//       {/* Hero Section */}
//       <section className="py-12">
//         <div className="container mx-auto px-4 text-center max-w-2xl">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Contact <span className="text-purple-400">Us</span>
//           </h1>
//           <p className="text-gray-300">
//             Have questions? We're here to help you anytime.
//           </p>
//         </div>
//       </section>

//       {/* Content */}
//       <section className="pb-20">
//         <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">

//           {/* LEFT FORM */}
//           <GlassCard className="p-6">
//             <h2 className="text-2xl font-bold text-white mb-4">Send Message</h2>

//             <form ref={form} onSubmit={sendMessage} className="space-y-4">

//               <input
//                 name="name"
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
//                 required
//               />

//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
//                 required
//               />

//               <input
//                 name="subject"
//                 type="text"
//                 placeholder="Subject"
//                 className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
//                 required
//               />

//               <textarea
//                 name="message"
//                 rows="4"
//                 placeholder="Your Message"
//                 className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
//                 required
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold"
//               >
//                 {loading ? "Sending..." : "Send Message →"}
//               </button>

//             </form>
//           </GlassCard>

//           {/* RIGHT INFO */}
//           <div className="space-y-6">

//             <GlassCard className="p-6">
//               <h2 className="text-2xl font-bold text-white mb-4">Contact Info</h2>

//               <ContactInfo icon="📍" title="Address" info="123 Education Street, Pakistan" />
//               <ContactInfo icon="📞" title="Phone" info="+92 300 1234567" link="tel:+923001234567" />
//               <ContactInfo icon="✉️" title="Email" info="info@eduvision.com" link="mailto:info@eduvision.com" />
//             </GlassCard>

//           </div>

//         </div>
//       </section>
//     </main>
//   );
// }




























"use client";

import Link from 'next/link';
import { useRef, useState } from 'react';

// Glass Card Component
const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:border-purple-500/50 ${className}`}>
    {children}
  </div>
);

// Contact Info Card
const ContactInfo = ({ icon, title, info, link }) => (
  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
    <div className="text-3xl">{icon}</div>
    <div>
      <h3 className="text-white font-semibold mb-1">{title}</h3>
      {link ? (
        <a href={link} className="text-gray-300 text-sm hover:text-purple-400 transition-colors">
          {info}
        </a>
      ) : (
        <p className="text-gray-300 text-sm">{info}</p>
      )}
    </div>
  </div>
);

export default function ContactPage() {

  const API = process.env.NEXT_PUBLIC_API_URL;

  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
    };

    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        form.current.reset();
      } else {
        alert("Failed to send message");
      }

    } catch (err) {
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 pt-20">

      <section className="py-12">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-purple-400">Us</span>
          </h1>
          <p className="text-gray-300">
            Have questions? We're here to help you anytime.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">

          <GlassCard className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Send Message</h2>

            <form ref={form} onSubmit={sendMessage} className="space-y-4">

              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
                required
              />

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
                required
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

            </form>
          </GlassCard>

          <div className="space-y-6">

            <GlassCard className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Info</h2>

              <ContactInfo icon="📍" title="Address" info="123 Education Street, Pakistan" />
              <ContactInfo icon="📞" title="Phone" info="+92 300 1234567" link="tel:+923001234567" />
              <ContactInfo icon="✉️" title="Email" info="info@eduvision.com" link="mailto:info@eduvision.com" />
            </GlassCard>

          </div>

        </div>
      </section>
    </main>
  );
}