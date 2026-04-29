'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Glass Card Component
const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:border-purple-500/50 ${className}`}>
    {children}
  </div>
);

// Course Card Component with POST logic
const CourseCard = ({ course, onEnroll }) => {
  return (
    <GlassCard className="overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-purple-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-white text-sm font-medium">{course.duration}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{course.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-purple-400 font-bold">{course.price}</span>
          <button 
            onClick={() => onEnroll(course)}
            className="text-white bg-purple-500/20 hover:bg-purple-500/30 px-4 py-2 rounded-lg transition-all text-sm cursor-pointer"
          >
            Enroll Now →
          </button>
        </div>
      </div>
    </GlassCard>
  );
};

// Main Page Component
export default function CoursesPage() {
  const router = useRouter();

  const courses = [
    {
      id: 1,
      title: 'Web Development',
      slug: 'web-development',
      duration: '6 Months',
      price: '45,000',
      description: 'Master HTML, CSS, JavaScript, React, and Node.js to build modern web applications.',
      image: '/web-development.jpg',
      highlights: ['Full Stack Development', '100+ Coding Challenges', 'Real Projects', 'Job Preparation'],
      schedule: 'Monday - Friday (2 hours/day)'
    },
    {
      id: 2,
      title: 'Data Science',
      slug: 'data-science',
      duration: '8 Months',
      price: '65,000',
      description: 'Learn Python, Machine Learning, AI, and Data Visualization with real-world projects.',
      image: '/Data-science.jpg',
      highlights: ['Python Programming', 'Machine Learning', 'Deep Learning', 'Tableau'],
      schedule: 'Monday - Friday (2.5 hours/day)'
    },
    {
      id: 3,
      title: 'Digital Marketing',
      slug: 'digital-marketing',
      duration: '4 Months',
      price: '35,000',
      description: 'SEO, Social Media Marketing, Content Strategy, and Analytics fundamentals.',
      image: '/Digital-marketing.png',
      highlights: ['SEO', 'Social Media Ads', 'Google Analytics', 'Email Marketing'],
      schedule: 'Monday - Friday (2 hours/day)'
    },
    {
      id: 4,
      title: 'Mobile App Dev',
      slug: 'mobile-app-dev',
      duration: '6 Months',
      price: '55,000',
      description: 'Build iOS and Android apps using Flutter and React Native frameworks.',
      image: '/app-dev.jpg',
      highlights: ['Flutter', 'React Native', 'Firebase', 'App Store Deployment'],
      schedule: 'Monday - Friday (2 hours/day)'
    },
    {
      id: 5,
      title: 'Cloud Computing',
      slug: 'cloud-computing',
      duration: '5 Months',
      price: '60,000',
      description: 'AWS, Azure, Google Cloud, and DevOps practices for modern infrastructure.',
      image: '/cloud-computing.jpg',
      highlights: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines'],
      schedule: 'Monday - Friday (2 hours/day)'
    },
    {
      id: 6,
      title: 'UI/UX Design',
      slug: 'ui-ux-design',
      duration: '4 Months',
      price: '40,000',
      description: 'Figma, Adobe XD, User Research, and Prototyping for amazing experiences.',
      image: '/UX-UI.png',
      highlights: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      schedule: 'Monday - Friday (2 hours/day)'
    }
  ];

  // POST: Course data ko localStorage mein save karo
  const handleEnroll = (course) => {
    // Course data ko store karo
    localStorage.setItem('selectedCourse', JSON.stringify(course));
    
    // Apply page pe redirect karo
    router.push('/apply-enrollment');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-2 mb-4">
              <span className="text-purple-300 text-sm font-medium">📚 Our Programs</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Our{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Courses
              </span>
            </h1>
            <p className="text-gray-300 text-lg">
              Choose from our industry-relevant courses designed to boost your career
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} onEnroll={handleEnroll} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}