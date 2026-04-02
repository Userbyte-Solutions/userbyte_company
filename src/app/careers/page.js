import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ApplyForm from "@/components/ApplyForm";

export const metadata = {
  title: "Careers | UserByte Solution",
  description: "Join the UserByte Solution team. Explore open positions and build the future with us.",
};

const openings = [
  { title: "Senior Full-Stack Developer", type: "Full-time", location: "Dhaka / Remote", dept: "Engineering", skills: ["React", "Node.js", "PostgreSQL"] },
  { title: "Mobile App Developer", type: "Full-time", location: "Dhaka", dept: "Engineering", skills: ["Flutter", "React Native", "Firebase"] },
  { title: "UI/UX Designer", type: "Full-time", location: "Dhaka / Remote", dept: "Design", skills: ["Figma", "Prototyping", "User Research"] },
  { title: "DevOps Engineer", type: "Full-time", location: "Remote", dept: "Infrastructure", skills: ["AWS", "Docker", "CI/CD"] },
  { title: "Business Development Executive", type: "Full-time", location: "Dhaka", dept: "Sales", skills: ["B2B Sales", "CRM", "Proposal Writing"] },
  { title: "Junior Developer (Internship)", type: "Internship", location: "Dhaka", dept: "Engineering", skills: ["JavaScript", "React", "Git"] },
];

const perks = [
  { icon: "💰", title: "Competitive Salary", desc: "Market-leading compensation with performance bonuses." },
  { icon: "🏠", title: "Remote Friendly", desc: "Flexible work-from-home options for most roles." },
  { icon: "📚", title: "Learning Budget", desc: "Annual budget for courses, books, and conferences." },
  { icon: "🏥", title: "Health Coverage", desc: "Medical insurance for you and your family." },
  { icon: "🎯", title: "Career Growth", desc: "Clear growth paths and regular performance reviews." },
  { icon: "🎉", title: "Team Culture", desc: "Fun team events, hackathons, and a collaborative environment." },
];

const deptColors = {
  Engineering: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Design: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Infrastructure: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  Sales: "bg-green-500/10 text-green-400 border-green-500/20",
};

const typeColors = {
  "Full-time": "bg-green-500/10 text-green-400",
  "Internship": "bg-yellow-500/10 text-yellow-400",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#060d1f] text-white text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6">
          <span className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
            ✦ Join Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4">Build the Future With Us</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            We&apos;re always looking for talented, passionate people to join UserByte Solution. Come work on meaningful products with a team that cares.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-[#080f22]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">Why Join Us</span>
            <h2 className="text-3xl font-bold text-white mt-2">Perks & Benefits</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="bg-[#0d1630] border border-slate-700/50 hover:border-cyan-500/30 rounded-2xl p-6 transition-colors">
                <span className="text-3xl">{p.icon}</span>
                <h3 className="text-white font-semibold mt-3 mb-1">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">Opportunities</span>
            <h2 className="text-3xl font-bold text-white mt-2">Open Positions</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">Don&apos;t see a perfect fit? Send us your CV anyway — we&apos;re always open to great talent.</p>
          </div>
          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {openings.map((job) => (
              <div key={job.title} className="bg-[#0d1630] border border-slate-700/50 hover:border-cyan-500/30 rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:-translate-y-0.5 group">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${deptColors[job.dept]}`}>{job.dept}</span>
                    <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${typeColors[job.type]}`}>{job.type}</span>
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span>📍 {job.location}</span>
                    <span className="flex gap-1 flex-wrap">
                      {job.skills.map((s) => (
                        <span key={s} className="px-2 py-0.5 bg-slate-800 rounded text-slate-400 font-mono">{s}</span>
                      ))}
                    </span>
                  </div>
                </div>
                <ApplyForm position={job.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#080f22] text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-cyan-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t See Your Role?</h2>
          <p className="text-slate-400 mb-8">We&apos;re always interested in meeting talented people. Send us your CV and let&apos;s talk.</p>
          <ApplyForm position="General Application" />
        </div>
      </section>

      <Footer />
    </>
  );
}
