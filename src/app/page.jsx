// app/page.jsx
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'EduVision | Modern Educational Institute',
  description: 'Empowering minds through innovative education. Join us for a transformative learning journey.',
};


// Glass Card Component
const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:border-purple-500/50 ${className}`}>
    {children}
  </div>
);

// Feature Card Component
const FeatureCard = ({ emoji, title, description }) => (
  <GlassCard className="p-6 text-center group">
    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform inline-block">
      {emoji}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </GlassCard>
);

// Course Card Component
const CourseCard = ({ title, duration, price, description }) => (
  <GlassCard className="p-6 group">
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <div className="flex items-center gap-4 mb-3">
      <span className="text-purple-400 text-sm">⏱️ {duration}</span>
      <span className="text-pink-400 text-sm">💰 {price}</span>
    </div>
    <p className="text-gray-300 text-sm mb-4">{description}</p>
    <Link 
      href="/courses" 
      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
    >
      Learn More
      <span>→</span>
    </Link>
  </GlassCard>
);

// Stat Card Component
const StatCard = ({ number, label }) => (
  <GlassCard className="p-6 text-center">
    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
      {number}
    </div>
    <p className="text-gray-300 text-sm">{label}</p>
  </GlassCard>
);

// Main Page Component
export default function HomePage() {
  const features = [
    { emoji: "🎓", title: "Expert Faculty", description: "Learn from industry experts with years of teaching experience." },
    { emoji: "💻", title: "Modern Labs", description: "State-of-the-art computer labs with latest technology." },
    { emoji: "📚", title: "Digital Library", description: "Access thousands of books and resources online." },
    { emoji: "🌍", title: "Global Exposure", description: "International collaborations and exchange programs." },
    { emoji: "🏆", title: "Placement Support", description: "100% placement assistance with top companies." },
    { emoji: "🎯", title: "Career Guidance", description: "Personalized career counseling and mentoring." }
  ];

  const courses = [
    { title: "Computer Science", duration: "4 Years", price: "2,50,000/yr", description: "Learn programming, AI, ML, and modern computing technologies." },
    { title: "Business Administration", duration: "3 Years", price: "2,00,000/yr", description: "Master business strategies, leadership, and management." },
    { title: "Data Science", duration: "2 Years", price: "3,00,000/yr", description: "Specialize in data analytics, visualization, and big data." },
    { title: "Digital Marketing", duration: "1 Year", price: "1,50,000/yr", description: "Learn SEO, social media, and digital strategies." }
  ];

  const stats = [
    { number: "5000+", label: "Students Enrolled" },
    { number: "200+", label: "Expert Faculty" },
    { number: "50+", label: "Courses Offered" },
    { number: "95%", label: "Placement Rate" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-purple-300 text-sm font-medium">✨ Welcome to EduVision</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Shape Your Future with{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Quality Education
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Join our premier educational institute and embark on a journey of excellence. 
                We provide world-class education, experienced faculty, and state-of-the-art facilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/registration" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105"
                >
                  Apply Now
                </Link>
                <Link 
                  href="/courses" 
                  className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all"
                >
                  Explore Courses
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <GlassCard className="p-2">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/student.jpeg"
                    alt="Students studying"
                    fill
                    className="object-cover"
                  />
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-2 mb-4">
              <span className="text-purple-300 text-sm font-medium">⭐ Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Key Features</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover what makes EduVision the perfect choice for your educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-2 mb-4">
              <span className="text-purple-300 text-sm font-medium">📖 Our Programs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Courses</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose from our wide range of specialized programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-2 mb-4">
              <span className="text-purple-300 text-sm font-medium">💬 Student Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Students Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-6">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4">
                "The faculty here is amazing! They really care about student success. 
                Best decision I ever made."
              </p>
              <div>
                <p className="text-white font-semibold">Priya Sharma</p>
                <p className="text-purple-400 text-sm">Computer Science, 2024</p>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4">
                "Excellent infrastructure and placement support. Got placed in a top company 
                right after graduation."
              </p>
              <div>
                <p className="text-white font-semibold">Rahul Verma</p>
                <p className="text-purple-400 text-sm">Business Admin, 2023</p>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4">
                "The practical learning approach and industry exposure is unmatched. 
                Highly recommended!"
              </p>
              <div>
                <p className="text-white font-semibold">Neha Gupta</p>
                <p className="text-purple-400 text-sm">Data Science, 2024</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <GlassCard className="max-w-4xl mx-auto text-center p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of successful students who chose EduVision for their education
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/registration" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105"
              >
                Apply Now
              </Link>
              <Link 
                href="/contact-us" 
                className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="text-white font-bold text-xl">EduVision</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering minds through innovative education since 2010.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-purple-400 text-sm">About Us</Link></li>
                <li><Link href="/courses" className="text-gray-400 hover:text-purple-400 text-sm">Courses</Link></li>
                <li><Link href="/admissions" className="text-gray-400 hover:text-purple-400 text-sm">Admissions</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-purple-400 text-sm">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm">📍 123 Education Street, City</li>
                <li className="text-gray-400 text-sm">📞 +91 12345 67890</li>
                <li className="text-gray-400 text-sm">✉️ info@eduvision.edu</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <Link href="#" className="text-gray-400 hover:text-purple-400">📘</Link>
                <Link href="#" className="text-gray-400 hover:text-purple-400">🐦</Link>
                <Link href="#" className="text-gray-400 hover:text-purple-400">📸</Link>
                <Link href="#" className="text-gray-400 hover:text-purple-400">💼</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2024 EduVision. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </main>
  );
}