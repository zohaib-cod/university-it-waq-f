'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CoursesPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:5000/api/applications');
      const result = await res.json();
      setData(result.data || []);
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
          Course Applications
        </h1>

        {/* BACK BUTTON */}
        {/* <Link href="/admin">
          <button className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl hover:bg-white/20 transition">
            ← Back to Admin
          </button> */}
        {/* </Link> */}

      </div>

      {/* GLASS TABLE CONTAINER */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">

        {/* TABLE */}
        <table className="w-full">

          {/* HEADER */}
          <thead className="bg-white/10">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Program</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>

            {loading ? (
              <tr>
                <td colSpan="4" className="p-6 text-center text-gray-400">
                  Loading...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-6 text-center text-gray-400">
                  No applications found
                </td>
              </tr>
            ) : (
              data.map((item, i) => (
                <tr key={i} className="border-t border-white/10 hover:bg-white/5 transition">

                  <td className="p-4">
                    {item.fullName}
                  </td>

                  <td className="p-4">
                    {item.phoneNumber}
                  </td>

                  <td className="p-4">
                    {item.program}
                  </td>

                  {/* ACTION BUTTON */}
                  <td className="p-4 text-center">

                    <Link href={`/admin/application/${item._id}`}>
                      <button className="bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 px-4 py-1 rounded-lg transition">
                        View Details
                      </button>
                    </Link>

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