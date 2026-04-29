// "use client";

// import { useEffect, useState } from "react";

// // Glass Card
// const GlassCard = ({ children }) => (
//   <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6">
//     {children}
//   </div>
// );

// export default function ContactGetPage() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ GET API
//   const fetchData = async () => {
//     try {
//       setLoading(true);

//       const res = await fetch("http://localhost:5000/api/contact");
//       const result = await res.json();

//       setData(result || []);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/30 to-black p-6 text-white">

//       {/* Title */}
//       <h1 className="text-3xl font-bold text-center mb-6">
//         Contact Messages
//       </h1>

//       {/* Glass Container */}
//       <GlassCard>

//         {loading ? (
//           <p className="text-center text-gray-400">Loading...</p>
//         ) : data.length === 0 ? (
//           <p className="text-center text-gray-400">No messages found</p>
//         ) : (
//           <div className="space-y-4">

//             {data.map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-white/10 border border-white/10 rounded-xl p-4 hover:bg-white/15 transition"
//               >

//                 <p>
//                   <span className="text-purple-300">Name:</span> {item.name}
//                 </p>

//                 <p>
//                   <span className="text-purple-300">Email:</span> {item.email}
//                 </p>

//                 <p>
//                   <span className="text-purple-300">Subject:</span> {item.subject}
//                 </p>

//                 <p>
//                   <span className="text-purple-300">Message:</span> {item.message}
//                 </p>

//               </div>
//             ))}

//           </div>
//         )}

//       </GlassCard>

//     </main>
//   );
// }






















"use client";

import { useEffect, useState } from "react";

// Glass Card
const GlassCard = ({ children }) => (
  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6">
    {children}
  </div>
);

export default function ContactGetPage() {

  const API = process.env.NEXT_PUBLIC_API_URL;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${API}/api/contact`);
      const result = await res.json();

      setData(result || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/30 to-black p-6 text-white">

      <h1 className="text-3xl font-bold text-center mb-6">
        Contact Messages
      </h1>

      <GlassCard>

        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : data.length === 0 ? (
          <p className="text-center text-gray-400">No messages found</p>
        ) : (
          <div className="space-y-4">

            {data.map((item, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/10 rounded-xl p-4 hover:bg-white/15 transition"
              >

                <p>
                  <span className="text-purple-300">Name:</span> {item.name}
                </p>

                <p>
                  <span className="text-purple-300">Email:</span> {item.email}
                </p>

                <p>
                  <span className="text-purple-300">Subject:</span> {item.subject}
                </p>

                <p>
                  <span className="text-purple-300">Message:</span> {item.message}
                </p>

              </div>
            ))}

          </div>
        )}

      </GlassCard>

    </main>
  );
}