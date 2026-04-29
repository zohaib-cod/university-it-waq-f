// 'use client';
// import { useState } from 'react';

// // Glass Card Component
// const GlassCard = ({ children, className = '' }) => (
//   <div className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:border-purple-500/50 ${className}`}>
//     {children}
//   </div>
// );

// // Input Field
// const InputField = ({ label, type = "text", onChange }) => (
//   <div>
//     <label className="text-gray-300 text-sm block mb-2">
//       {label}
//     </label>

//     <input
//       type={type}
//       onChange={onChange}
//       className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
//     />
//   </div>
// );

// // Select Field
// const SelectField = ({ label, options, onChange }) => (
//   <div>
//     <label className="text-gray-300 text-sm block mb-2">{label}</label>

//     <select
//       onChange={onChange}
//       className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
//     >
//       <option value="">Select</option>
//       {options.map((opt, i) => (
//         <option key={i} value={opt}>{opt}</option>
//       ))}
//     </select>
//   </div>
// );

// // Textarea
// const TextAreaField = ({ label, onChange }) => (
//   <div>
//     <label className="text-gray-300 text-sm block mb-2">{label}</label>

//     <textarea
//       rows="4"
//       onChange={onChange}
//       className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
//     />
//   </div>
// );

// export default function ApplyPage() {

//   const [formData, setFormData] = useState({});

//   const handleChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   // ✅ FIXED API HERE
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('http://localhost:5000/api/registrations/registration', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert('Application submitted successfully ✔️');
//       } else {
//         alert(data.message || 'Failed');
//       }

//     } catch (err) {
//       alert('Server error');
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gray-900 p-6">

//       <GlassCard className="p-6 max-w-3xl mx-auto">

//         <form onSubmit={handleSubmit} className="space-y-4">

//           <InputField label="Full Name" onChange={(e) => handleChange('fullName', e.target.value)} />
//           <InputField label="Father Name" onChange={(e) => handleChange('fatherName', e.target.value)} />
//           <InputField label="CNIC" onChange={(e) => handleChange('cnic', e.target.value)} />
//           <InputField label="Phone" onChange={(e) => handleChange('phoneNumber', e.target.value)} />

//           <SelectField
//             label="Shift"
//             options={['Morning', 'Evening']}
//             onChange={(e) => handleChange('shift', e.target.value)}
//           />

//           <SelectField
//             label="Program"
//             options={['Matric', 'Intermediate']}
//             onChange={(e) => handleChange('program', e.target.value)}
//           />

//           <TextAreaField
//             label="Address"
//             onChange={(e) => handleChange('address', e.target.value)}
//           />

//           <button className="w-full bg-purple-600 py-3 rounded-lg text-white">
//             Submit Application
//           </button>

//         </form>

//       </GlassCard>

//     </main>
//   );
// }









'use client';
import { useState } from 'react';

// Glass Card Component
const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:border-purple-500/50 ${className}`}>
    {children}
  </div>
);

// Input Field
const InputField = ({ label, type = "text", onChange }) => (
  <div>
    <label className="text-gray-300 text-sm block mb-2">
      {label}
    </label>

    <input
      type={type}
      onChange={onChange}
      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
    />
  </div>
);

// Select Field
const SelectField = ({ label, options, onChange }) => (
  <div>
    <label className="text-gray-300 text-sm block mb-2">{label}</label>

    <select
      onChange={onChange}
      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
    >
      <option value="">Select</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

// Textarea
const TextAreaField = ({ label, onChange }) => (
  <div>
    <label className="text-gray-300 text-sm block mb-2">{label}</label>

    <textarea
      rows="4"
      onChange={onChange}
      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
    />
  </div>
);

export default function ApplyPage() {

  const API = process.env.NEXT_PUBLIC_API_URL;

  const [formData, setFormData] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API}/api/registrations/registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert('Application submitted successfully ✔️');
      } else {
        alert(data.message || 'Failed');
      }

    } catch (err) {
      alert('Server error');
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 p-6">

      <GlassCard className="p-6 max-w-3xl mx-auto">

        <form onSubmit={handleSubmit} className="space-y-4">

          <InputField label="Full Name" onChange={(e) => handleChange('fullName', e.target.value)} />
          <InputField label="Father Name" onChange={(e) => handleChange('fatherName', e.target.value)} />
          <InputField label="CNIC" onChange={(e) => handleChange('cnic', e.target.value)} />
          <InputField label="Phone" onChange={(e) => handleChange('phoneNumber', e.target.value)} />

          <SelectField
            label="Shift"
            options={['Morning', 'Evening']}
            onChange={(e) => handleChange('shift', e.target.value)}
          />

          <SelectField
            label="Program"
            options={['Matric', 'Intermediate']}
            onChange={(e) => handleChange('program', e.target.value)}
          />

          <TextAreaField
            label="Address"
            onChange={(e) => handleChange('address', e.target.value)}
          />

          <button className="w-full bg-purple-600 py-3 rounded-lg text-white cursor-pointer">
            Submit Application
          </button>

        </form>

      </GlassCard>

    </main>
  );
}