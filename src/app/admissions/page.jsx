
// app/admissions/page.jsx
import Link from 'next/link';
// import Image from 'next/image';

export const metadata = {
  title: 'Admissions | EduVision',
  description: 'Apply now for upcoming sessions. Check eligibility, important dates, and admission process.',
};

// Glass Card Component
const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:border-purple-500/50 ${className}`}>
    {children}
  </div>
);

// Timeline Item Component
const TimelineItem = ({ step, title, description, isLast }) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
        {step}
      </div>
      {!isLast && <div className="w-0.5 h-full bg-purple-500/30 mt-2"></div>}
    </div>
    <div className="flex-1 pb-8">
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </div>
);

// Main Page Component
export default function AdmissionsPage() {
  const eligibilityCriteria = [
    {
      program: "Undergraduate Programs",
      criteria: "10+2 (or equivalent) with minimum 50% marks from recognized board"
    },
    {
      program: "Postgraduate Programs",
      criteria: "Bachelor's degree with minimum 55% marks in relevant field"
    },
    {
      program: "Diploma Programs",
      criteria: "10th pass with minimum 45% marks"
    },
    {
      program: "Certificate Courses",
      criteria: "Open for all, no specific eligibility criteria"
    }
  ];

  const timeline = [
    { step: 1, title: "Application Start", description: "March 1, 2024 - Start filling online application form" },
    { step: 2, title: "Last Date to Apply", description: "June 30, 2024 - Submit application before deadline" },
    { step: 3, title: "Entrance Exam", description: "July 15-20, 2024 - Online proctored examination" },
    { step: 4, title: "Result Declaration", description: "August 5, 2024 - Check results on website" },
    { step: 5, title: "Counseling & Admission", description: "August 15-30, 2024 - Document verification and fee submission" },
    { step: 6, title: "Classes Commence", description: "September 5, 2024 - Start of academic session" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 pt-20">
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-2 mb-4">
              <span className="text-purple-300 text-sm font-medium">🎓 Join Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Admissions{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Open 2024-25
              </span>
            </h1>
            <p className="text-gray-300 text-lg">
              Take the first step towards a brilliant career. Limited seats available!
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left Column - Eligibility & Timeline */}
            <div className="space-y-8">
              
              {/* Who Can Apply */}
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl">✅</div>
                  <h2 className="text-2xl font-bold text-white">Who Can Apply?</h2>
                </div>
                <div className="space-y-4">
                  {eligibilityCriteria.map((item, index) => (
                    <div key={index} className="border-b border-white/10 pb-3 last:border-0">
                      <h3 className="text-purple-400 font-semibold mb-1">{item.program}</h3>
                      <p className="text-gray-300 text-sm">{item.criteria}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Admission Timeline */}
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl">📅</div>
                  <h2 className="text-2xl font-bold text-white">Admission Timeline</h2>
                </div>
                <div className="space-y-0">
                  {timeline.map((item, index) => (
                    <TimelineItem 
                      key={index}
                      step={item.step}
                      title={item.title}
                      description={item.description}
                      isLast={index === timeline.length - 1}
                    />
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Right Column - Apply & Contact */}
            <div className="space-y-8">
              
              {/* Apply Now Section */}
              <GlassCard className="p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-4xl">📝</div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Ready to Apply?</h2>
                <p className="text-gray-300 mb-6">
                  Start your application process today. Limited seats available for the upcoming session.
                </p>
                <Link 
                  href="/registration"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105 text-lg font-semibold"
                >
                  Apply Now
                  <span>→</span>
                </Link>
              </GlassCard>

              {/* Need to Clarify Section */}
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">📞</div>
                  <h2 className="text-2xl font-bold text-white">Need to Clarify?</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  Have questions about eligibility, courses, or admission process? Talk to our admission counselors.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-purple-500/10 rounded-lg">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="text-gray-400 text-sm">Admission Helpline</p>
                      <a href="tel:+911234567890" className="text-white font-semibold hover:text-purple-400">
                        +91 12345 67890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-500/10 rounded-lg">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="text-gray-400 text-sm">Email Support</p>
                      <a href="mailto:admissions@eduvision.edu" className="text-white font-semibold hover:text-purple-400">
                        admissions@eduvision.edu
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-500/10 rounded-lg">
                    <span className="text-2xl">⏰</span>
                    <div>
                      <p className="text-gray-400 text-sm">Working Hours</p>
                      <p className="text-white font-semibold">Mon-Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <p className="text-yellow-300 text-sm">
                    💡 <span className="font-semibold">Quick Tip:</span> Call between 10 AM - 4 PM for immediate response
                  </p>
                </div>
              </GlassCard>

              {/* Important Note */}
              <GlassCard className="p-4 bg-purple-500/10 border-purple-500/30">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Important Note</h3>
                    <p className="text-gray-300 text-sm">
                      Last date to apply is <span className="text-purple-400 font-bold">June 30, 2024</span>. 
                      Applications submitted after deadline will be considered for waiting list only.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <GlassCard className="max-w-4xl mx-auto text-center p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Visit Our Campus</h3>
                <p className="text-gray-300">Get a feel of our world-class facilities</p>
              </div>
              <div className="flex gap-4">
                <Link 
                  href="/contact"
                  className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-all"
                >
                  Schedule Visit
                </Link>
                <Link 
                  href="/downloads/brochure.pdf"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
                >
                  Download Brochure
                </Link>
              </div>
            </div>
          </GlassCard> */}
        {/* </div> */}
      {/* </section> */}
    </main>
  );
}