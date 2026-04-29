'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Glass Card Component
const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export default function ApplyPage() {
  const router = useRouter();
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    email: '',
    phone: '',
    address: '',
    qualification: '',
    message: ''
  });

  // GET course from localStorage
  useEffect(() => {
    const savedCourse = localStorage.getItem('selectedCourse');
    if (savedCourse) {
      setSelectedCourse(JSON.parse(savedCourse));
    } else {
      router.push('/courses');
    }
  }, [router]);

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleNumberInput = (e, field) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setFormData({ ...formData, [field]: value });
  };

  // 🔥 POST API CONNECTED
  const handleSubmit = async (e) => {
    e.preventDefault();

    const applicationData = {
      fullName: formData.fullName,
      fatherName: formData.fatherName,
      email: formData.email,
      phoneNumber: formData.phone,
      address: formData.address,
      lastQualification: formData.qualification,
      additionalInfo: formData.message,
      program: selectedCourse?.title
    };

    try {
      const res = await fetch('http://localhost:5000/api/applications/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(applicationData)
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Application submitted successfully!");

        localStorage.removeItem('selectedCourse');
        router.push('/courses');
      } else {
        alert("❌ Error submitting application");
      }

    } catch (error) {
      console.error(error);
      alert("❌ Server error");
    }
  };

  if (!selectedCourse) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 pt-20 pb-20">

      <section className="py-12">
        <div className="container mx-auto px-4">

          <Link href="/courses" className="text-purple-400 mb-6 inline-block">
            ← Back to Courses
          </Link>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* LEFT SIDE */}
            <GlassCard className="p-6">
              <h2 className="text-white text-2xl font-bold mb-4">Selected Course</h2>

              <h3 className="text-white text-xl">{selectedCourse.title}</h3>
              <p className="text-gray-300 mt-2">{selectedCourse.description}</p>
            </GlassCard>

            {/* RIGHT SIDE FORM */}
            <GlassCard className="p-6">

              <h2 className="text-white text-2xl font-bold mb-4">
                Application Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full p-2 bg-white/10 text-white rounded"
                  value={formData.fullName}
                  onChange={(e) => handleChange(e, 'fullName')}
                />

                <input
                  type="text"
                  placeholder="Father Name"
                  required
                  className="w-full p-2 bg-white/10 text-white rounded"
                  value={formData.fatherName}
                  onChange={(e) => handleChange(e, 'fatherName')}
                />

                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full p-2 bg-white/10 text-white rounded"
                  value={formData.email}
                  onChange={(e) => handleChange(e, 'email')}
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  required
                  className="w-full p-2 bg-white/10 text-white rounded"
                  value={formData.phone}
                  onChange={(e) => handleNumberInput(e, 'phone')}
                />

                <textarea
                  placeholder="Address"
                  required
                  className="w-full p-2 bg-white/10 text-white rounded"
                  value={formData.address}
                  onChange={(e) => handleChange(e, 'address')}
                />

                <select
                  className="w-full p-2 bg-white/10 text-white rounded"
                  value={formData.qualification}
                  onChange={(e) => handleChange(e, 'qualification')}
                >
                  <option value="">Select Qualification</option>
                  <option>Matric</option>
                  <option>Intermediate</option>
                  <option>Bachelor</option>
                </select>

                <textarea
                  placeholder="Message"
                  className="w-full p-2 bg-white/10 text-white rounded"
                  value={formData.message}
                  onChange={(e) => handleChange(e, 'message')}
                />

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
                >
                  Submit Application
                </button>

              </form>

            </GlassCard>

          </div>
        </div>
      </section>

    </main>
  );
}