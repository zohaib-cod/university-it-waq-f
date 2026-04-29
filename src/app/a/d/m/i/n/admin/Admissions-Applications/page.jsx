'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ApplicationsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      // ✅ FIXED API HERE
      const res = await fetch('http://localhost:5000/api/registrations/registration');

      const result = await res.json();
      setData(result || []);

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/30 to-black p-6 text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Admissions Applications
        </h1>
      </div>

      {/* TABLE */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-white/10">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">CNIC</th>
              <th className="p-4 text-left">Program</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>

            {loading ? (
              <tr>
                <td className="p-6 text-center" colSpan="5">Loading...</td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td className="p-6 text-center" colSpan="5">No data found</td>
              </tr>
            ) : (
              data.map((item, i) => (
                <tr key={i} className="border-t border-white/10 hover:bg-white/5">

                  <td className="p-4">{item.fullName}</td>
                  <td className="p-4">{item.phoneNumber}</td>
                  <td className="p-4">{item.cnic}</td>
                  <td className="p-4">{item.program}</td>

                  <td className="p-4 text-center">
                    <button className="bg-purple-500/20 px-3 py-1 rounded-lg">
                      View
                    </button>
                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

    </main>
  );
}









// 'use client';

// import { useEffect, useState } from 'react';

// export default function ApplicationsPage() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       setLoading(true);

//       const res = await fetch('http://localhost:5000/api/registrations/registration');
//       const result = await res.json();

//       setData(result || []);
//       setLoading(false);

//     } catch (err) {
//       console.log(err);
//       setLoading(false);
//     }
//   };

//   // ✅ DELETE API
//   const handleDelete = async (id) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/registrations/registration/${id}`, {
//         method: 'DELETE'
//       });

//       if (res.ok) {
//         alert('Deleted successfully');
//         fetchData(); // refresh list
//       } else {
//         alert('Delete failed');
//       }

//     } catch (err) {
//       alert('Server error');
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/30 to-black p-6 text-white">

//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Admissions Applications</h1>
//       </div>

//       <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">

//         <table className="w-full">

//           <thead className="bg-white/10">
//             <tr>
//               <th className="p-4 text-left">Name</th>
//               <th className="p-4 text-left">Phone</th>
//               <th className="p-4 text-left">CNIC</th>
//               <th className="p-4 text-left">Program</th>
//               <th className="p-4 text-center">Action</th>
//             </tr>
//           </thead>

//           <tbody>

//             {loading ? (
//               <tr>
//                 <td className="p-6 text-center" colSpan="5">Loading...</td>
//               </tr>
//             ) : data.length === 0 ? (
//               <tr>
//                 <td className="p-6 text-center" colSpan="5">No data found</td>
//               </tr>
//             ) : (
//               data.map((item, i) => (
//                 <tr key={i} className="border-t border-white/10 hover:bg-white/5">

//                   <td className="p-4">{item.fullName}</td>
//                   <td className="p-4">{item.phoneNumber}</td>
//                   <td className="p-4">{item.cnic}</td>
//                   <td className="p-4">{item.program}</td>

//                   <td className="p-4 text-center flex gap-2 justify-center">

//                     <button className="bg-purple-500/20 px-3 py-1 rounded-lg">
//                       View
//                     </button>

//                     {/* ✅ DELETE BUTTON */}
//                     <button
//                       onClick={() => handleDelete(item._id)}
//                       className="bg-red-500/20 px-3 py-1 rounded-lg"
//                     >
//                       Delete
//                     </button>

//                   </td>

//                 </tr>
//               ))
//             )}

//           </tbody>

//         </table>

//       </div>

//     </main>
//   );
// }




















// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// export default function ApplicationsPage() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       setLoading(true);

//       const res = await fetch('http://localhost:5000/api/registrations/registration');
//       const result = await res.json();

//       setData(result || []);
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // DELETE SINGLE
//   const deleteItem = async (id) => {
//     await fetch(`http://localhost:5000/api/registrations/registration/${id}`, {
//       method: 'DELETE',
//     });

//     fetchData();
//   };

//   // DELETE ALL
//   const deleteAll = async () => {
//     await fetch(`http://localhost:5000/api/registrations/registration`, {
//       method: 'DELETE',
//     });

//     fetchData();
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/30 to-black p-6 text-white">

//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-6">

//         <h1 className="text-3xl font-bold">
//           Admissions Applications
//         </h1>

//         {/* DELETE ALL BUTTON */}
//         <button
//           onClick={deleteAll}
//           className="bg-red-500/20 hover:bg-red-500/40 text-red-300 px-4 py-2 rounded-xl transition"
//         >
//           Delete All
//         </button>

//       </div>

//       {/* TABLE */}
//       <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">

//         <table className="w-full">

//           <thead className="bg-white/10">
//             <tr>
//               <th className="p-4 text-left">Name</th>
//               <th className="p-4 text-left">Phone</th>
//               <th className="p-4 text-left">CNIC</th>
//               <th className="p-4 text-left">Program</th>
//               <th className="p-4 text-center">Action</th>
//             </tr>
//           </thead>

//           <tbody>

//             {loading ? (
//               <tr>
//                 <td className="p-6 text-center" colSpan="5">Loading...</td>
//               </tr>
//             ) : data.length === 0 ? (
//               <tr>
//                 <td className="p-6 text-center" colSpan="5">No data found</td>
//               </tr>
//             ) : (
//               data.map((item, i) => (
//                 <tr key={i} className="border-t border-white/10 hover:bg-white/5">

//                   <td className="p-4">{item.fullName}</td>
//                   <td className="p-4">{item.phoneNumber}</td>
//                   <td className="p-4">{item.cnic}</td>
//                   <td className="p-4">{item.program}</td>

//                   <td className="p-4 text-center flex gap-2 justify-center">

//                     {/* VIEW */}
//                     <button className="bg-purple-500/20 px-3 py-1 rounded-lg">
//                       View
//                     </button>

//                     {/* DELETE SINGLE */}
//                     <button
//                       onClick={() => deleteItem(item._id)}
//                       className="bg-red-500/20 px-3 py-1 rounded-lg text-red-300"
//                     >
//                       Delete
//                     </button>

//                   </td>

//                 </tr>
//               ))
//             )}

//           </tbody>

//         </table>

//       </div>

//     </main>
//   );
// }