import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ContactForm from "@/components/ContactForm";

const services = [
  { icon: "💻", title: "Web Development", desc: "Modern, responsive web applications built with the latest technologies tailored to your business needs." },
  { icon: "📱", title: "Mobile App Development", desc: "Cross-platform mobile apps for iOS and Android that deliver seamless user experiences." },
  { icon: "☁️", title: "Cloud Solutions", desc: "Scalable cloud infrastructure and migration services to keep your business agile and secure." },
  { icon: "🔒", title: "Cybersecurity", desc: "Comprehensive security audits and solutions to protect your digital assets from threats." },
  { icon: "📊", title: "Data Analytics", desc: "Turn raw data into actionable insights with our advanced analytics and reporting tools." },
  { icon: "🤖", title: "AI & Automation", desc: "Intelligent automation solutions that streamline operations and reduce manual overhead." },
];

const techStack = [
  {
    category: "AI & Machine Learning",
    icon: "🤖",
    color: "cyan",
    tools: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "Hugging Face", "LangChain", "NLTK", "Pandas", "NumPy", "Jupyter", "MLflow"],
  },
  {
    category: "Cybersecurity",
    icon: "�",
    color: "indigo",
    tools: ["Kali Linux", "Metasploit", "Wireshark", "Nmap", "Burp Suite", "OWASP ZAP", "Snort", "Nessus", "Hashcat", "John the Ripper", "Aircrack-ng", "OpenSSL"],
  },
  {
    category: "Networking",
    icon: "🌐",
    color: "violet",
    tools: ["Cisco IOS", "pfSense", "Wireshark", "GNS3", "Packet Tracer", "OpenVPN", "Nginx", "HAProxy", "Cloudflare", "MQTT", "TCP/IP", "DNS/DHCP"],
  },
  {
    category: "IoT",
    icon: "📡",
    color: "cyan",
    tools: ["Arduino", "Raspberry Pi", "ESP32", "MQTT", "Node-RED", "InfluxDB", "Grafana", "Zigbee", "LoRaWAN", "AWS IoT", "Home Assistant", "Micropython"],
  },
  {
    category: "Software Development",
    icon: "💻",
    color: "indigo",
    tools: ["React", "Next.js", "Node.js", "Python", "Flutter", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Git", "Figma","php","wordpress","laravel","django"],
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We learn your goals, challenges, and requirements through in-depth consultation." },
  { step: "02", title: "Planning", desc: "We define scope, architecture, timeline, and milestones for your project." },
  { step: "03", title: "Design", desc: "Our designers craft intuitive UI/UX prototypes aligned with your brand." },
  { step: "04", title: "Development", desc: "Engineers build your solution using best practices and modern tech stacks." },
  { step: "05", title: "Testing", desc: "Rigorous QA testing ensures your product is bug-free and performant." },
  { step: "06", title: "Launch & Support", desc: "We deploy, monitor, and provide ongoing support after go-live." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center bg-[#060d1f] text-white pt-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <span className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium tracking-wide">
              ✦ Innovative Software Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-2xl">
              Empowering Businesses with{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Smart Technology
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              UserByte Solution delivers cutting-edge software, web, and mobile solutions that help businesses grow, scale, and succeed in the digital era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href="#quote" className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25">
                Get a Free Quote
              </Link>
              <Link href="#contact" className="px-8 py-3.5 border border-slate-600 text-slate-300 font-semibold rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-cyan-500/10 rounded-3xl blur-3xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-3xl blur-xl" />
              <Image src="/hero-tech.svg" alt="UserByte Solution — Technology Illustration" width={580} height={400} priority className="relative w-full h-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}

      {/* ── Company Intro ── */}
      <section className="py-20 bg-[#080f22]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Your Trusted Technology Partner</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              UserByte Solution is a full-service software company dedicated to building digital products that make a real difference. From startups to enterprises, we partner with businesses to design, develop, and deploy technology that drives results.
            </p>
            <p className="text-slate-400 leading-relaxed">
              With a team of experienced engineers, designers, and strategists, we bring ideas to life with precision, creativity, and a deep commitment to quality.
            </p>
            <Link href="/about" className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-medium rounded-xl hover:opacity-90 transition-opacity">
              Learn More About Us
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            {[
              { icon: "🎯", title: "Client-First", desc: "Every decision we make is guided by your business goals." },
              { icon: "⚡", title: "Fast Delivery", desc: "Agile workflows that keep projects on time and on budget." },
              { icon: "🔐", title: "Secure by Design", desc: "Security is built into every layer of our solutions." },
              { icon: "📈", title: "Scalable", desc: "We build for today and architect for tomorrow's growth." },
            ].map((v) => (              <div key={v.title} className="bg-[#0d1630] border border-cyan-500/10 rounded-2xl p-5 hover:border-cyan-500/30 transition-colors">
                <span className="text-2xl">{v.icon}</span>
                <p className="text-white font-semibold text-sm mt-2">{v.title}</p>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20 bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Our Key Services</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              We offer a wide range of technology services to help your business thrive in a competitive landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-[#0d1630] border border-slate-700/50 rounded-2xl p-7 hover:border-cyan-500/40 hover:-translate-y-1 transition-all group">
                <span className="text-4xl">{s.icon}</span>
                <h3 className="text-lg font-semibold text-white mt-4 mb-2 group-hover:text-cyan-400 transition-colors">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="py-20 bg-[#080f22]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">How We Work</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">A proven 6-step process that ensures quality, transparency, and results.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-[#0d1630] border border-slate-700/50 rounded-2xl p-7 hover:border-cyan-500/30 transition-colors group">
                <span className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">{p.step}</span>
                <h3 className="text-white font-semibold text-lg mt-3 mb-2 group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-20 bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">Technologies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Our Tech Stack</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              The tools and technologies we use across AI/ML, Cybersecurity, Networking, IoT, and Software Development.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {techStack.map((cat) => {
              const colors = {
                cyan: { header: "text-cyan-400", border: "border-cyan-500/20", tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:border-cyan-400/50" },
                indigo: { header: "text-indigo-400", border: "border-indigo-500/20", tag: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:border-indigo-400/50" },
                violet: { header: "text-violet-400", border: "border-violet-500/20", tag: "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:border-violet-400/50" },
              }[cat.color];
              return (
                <div key={cat.category} className={`bg-[#0d1630] border ${colors.border} rounded-2xl p-7`}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className={`font-bold text-lg ${colors.header}`}>{cat.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((tool) => (
                      <span key={tool} className={`px-3 py-1.5 text-sm font-medium border rounded-lg transition-colors ${colors.tag}`}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section id="quote" className="py-20 bg-[#060d1f] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
            Let&apos;s Build Together
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">Ready to Build Something Great?</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s talk about your project. Get a free consultation and quote from our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20">
              Get a Free Quote
            </Link>
            <Link href="/about" className="px-8 py-3.5 border border-slate-600 text-slate-300 font-semibold rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-colors">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-20 bg-[#080f22]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Contact Us</h2>
            <p className="text-slate-400 leading-relaxed mb-8">Have a project in mind? We&apos;d love to hear from you. Fill out the form and we&apos;ll get back to you within 24 hours.</p>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li className="flex items-center gap-3"><span className="text-cyan-400 text-lg">📧</span> info.userbyte@gmail.com</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400 text-lg">📞</span>+8801848235924</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400 text-lg">📍</span> Rajshahi, Bangladesh</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400 text-lg">🕐</span> Mon–Fri, 9am–6pm BST</li>
            </ul>
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
