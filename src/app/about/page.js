import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const team = [
  { name: "Abdullah AL Mahmud", role: "CEO & Founder", bio: "Visionary leader driving innovation and growth at UserByte Solution with a passion for impactful technology.", avatar: "AM" },
  { name: "Tohidur Rahman", role: "Senior Developer", bio: "Experienced full-stack engineer building robust, scalable systems with precision and expertise.", avatar: "TR" },
  { name: "Maruf Hossain", role: "Developer", bio: "Dedicated developer crafting clean, efficient code and delivering high-quality software solutions.", avatar: "MH" },
  { name: "Sabbir Rahman", role: "Developer", bio: "Creative problem-solver focused on building responsive, user-friendly web and mobile applications.", avatar: "SR" },
  { name: "Shamiul Islam", role: "Project Manager", bio: "Organized and detail-oriented PM ensuring projects are delivered on time and exceed client expectations.", avatar: "SI" },
  { name: "Rashidul Islam", role: "Technical Adviser", bio: "Strategic technology advisor guiding architectural decisions and best practices across all projects.", avatar: "RI" },
];

export const metadata = {
  title: "About Us | UserByte Solution",
  description: "Learn about UserByte Solution — our story, mission, vision, and team.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      {/* Page Hero */}
      <section className="relative pt-32 pb-16 bg-[#060d1f] text-white text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6">
          <span className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
            ✦ Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4">About UserByte Solution</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            We are a passionate team of technologists building software that empowers businesses
            to grow and innovate.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-[#080f22]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-4">Who We Are</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              UserByte Solution was founded with a simple belief: technology should work for people,
              not the other way around. Since our founding, we have helped businesses across industries
              harness the power of software to solve real problems and unlock new opportunities.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We combine technical expertise with a deep understanding of business to deliver solutions
              that are not just functional, but transformative. Every project we take on is a partnership,
              and your success is our success.
            </p>
          </div>
          <div className="flex-1 bg-[#0d1630] border border-cyan-500/10 rounded-2xl p-10 text-center">
            <p className="text-slate-400 leading-relaxed">
              UserByte Solution is a growing technology company committed to delivering high-quality software solutions. We are just getting started — and the best is yet to come.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0d1630] border border-slate-700/50 rounded-2xl p-10 hover:border-cyan-500/30 transition-colors">
            <span className="text-3xl">🎯</span>
            <h3 className="text-2xl font-bold text-white mt-4 mb-3">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To empower businesses of all sizes with innovative, reliable, and scalable software
              solutions that drive growth, efficiency, and competitive advantage in an ever-evolving
              digital world.
            </p>
          </div>
          <div className="bg-[#0d1630] border border-slate-700/50 rounded-2xl p-10 hover:border-indigo-500/30 transition-colors">
            <span className="text-3xl">🔭</span>
            <h3 className="text-2xl font-bold text-white mt-4 mb-3">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              To be the most trusted technology partner for businesses globally — known for our
              craftsmanship, integrity, and the lasting impact we create through every solution
              we build.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#080f22]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">The People</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Meet Our Team</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              A diverse group of thinkers, builders, and problem-solvers united by a passion for great software.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-[#0d1630] border border-slate-700/50 rounded-2xl p-7 text-center hover:border-cyan-500/30 hover:-translate-y-1 transition-all group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg shadow-cyan-500/20">
                  {member.avatar}
                </div>
                <h4 className="text-white font-semibold text-base group-hover:text-cyan-400 transition-colors">{member.name}</h4>
                <p className="text-cyan-400 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#060d1f] relative overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-indigo-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
          <p className="text-slate-400 mb-8">
            Ready to start your next project? Reach out and let&apos;s build something great.
          </p>
          <a href="/#contact" className="inline-block px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
