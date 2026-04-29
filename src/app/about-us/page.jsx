// app/about-us/page.jsx
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Your Company',
  description: 'Learn about our mission, values, and the talented team of 5 behind our success.',
};

// Team Member Component
const TeamMemberCard = ({ member }) => {
  return (
    <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:border-purple-500/50 hover:shadow-[0_20px_40px_-15px_rgba(108,99,255,0.3)]">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <Image 
          src={member.image} 
          alt={member.name} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
        <p className="text-purple-400 text-sm font-medium mb-3">{member.role}</p>
        <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
};

// Glass Card Component
const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:border-purple-500/50 ${className}`}>
    {children}
  </div>
);

// Main Page Component
export default function AboutPage() {
  const teamMembers = [
    // {
    //   id: 1,
    //   name: 'Muhammad Waqar',
    //   role: 'Founder & CEO',
    //   bio: 'Visionary leader with 15+ years in tech, passionate about building products that matter.',
    //   image: '/waqar.jpeg',
    // },
    {
      id: 2,
      name: 'Muhammad Waqar',
      role: 'Lead Developer',
      bio: 'Full-stack wizard who turns complex problems into elegant, scalable solutions.',
      image: '/waqar.jpeg',
    },
    {
      id: 3,
      name: 'Muhammad Umair',
      role: 'Creative Director',
      bio: 'Design thinker crafting immersive user experiences that blend form with function.',
      image: '/umer.jpeg',
    },
    {
      id: 4,
      name: 'from waqar team',
      role: 'Product Manager',
      bio: 'Bridge between vision and reality, ensuring every feature delivers real value.',
      image: '/waqar.jpeg',
    },
    // {
    //   id: 5,
    //   name: 'Vikram Singh',
    //   role: 'DevOps Engineer',
    //   bio: 'Infrastructure expert keeping our systems secure, fast, and always available.',
    //   image: '/waqar.jpeg',
    // }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <GlassCard className="max-w-3xl mx-auto text-center p-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-purple-300 text-sm font-medium">⭐ Team of 5</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're a team of 3 passionate creators, engineers, and dreamers on a mission to 
              build extraordinary digital experiences.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <GlassCard className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl">
                🎯
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses through cutting-edge web solutions that are fast, 
                accessible, and a joy to use.
              </p>
            </GlassCard>

            <GlassCard className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl">
                👁️
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                A world where technology bridges gaps and creates meaningful connections 
                between people and ideas.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Team Section - 5 Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-2 mb-4">
              <span className="text-purple-300 text-sm font-medium">👥 The Dream Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet the <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Team of 3</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The brilliant minds behind everything we do
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div> */}
<div className="max-w-6xl mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {teamMembers.map((member) => (
      <TeamMemberCard key={member.id} member={member} />
    ))}
  </div>
</div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <GlassCard className="p-6 text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                ✨
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
              <p className="text-gray-400 text-sm">We never settle. Quality is our signature.</p>
            </GlassCard>

            <GlassCard className="p-6 text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                🤝
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Integrity</h3>
              <p className="text-gray-400 text-sm">Transparency and honesty in every interaction.</p>
            </GlassCard>

            <GlassCard className="p-6 text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                🚀
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400 text-sm">Embracing new ideas and technologies.</p>
            </GlassCard>

            <GlassCard className="p-6 text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                ❤️
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Empathy</h3>
              <p className="text-gray-400 text-sm">Understanding users and each other deeply.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <GlassCard className="max-w-4xl mx-auto text-center p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to work with us?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              We're always excited to collaborate on new projects and ideas.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
              <span>→</span>
            </Link>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}