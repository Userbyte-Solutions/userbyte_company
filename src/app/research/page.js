import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Research & Development | UserByte Solution",
  description: "Curated research papers in AI/ML, Cybersecurity, Networking, and Software Development tools.",
};

const categories = [
  {
    id: "aiml",
    icon: "🤖",
    color: "cyan",
    title: "Artificial Intelligence & Machine Learning",
    papers: [
      {
        title: "Attention Is All You Need",
        authors: "Vaswani et al.",
        year: "2017",
        desc: "The foundational Transformer architecture paper that revolutionized NLP and modern AI systems.",
        url: "https://arxiv.org/abs/1706.03762",
      },
      {
        title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
        authors: "Devlin et al., Google AI",
        year: "2018",
        desc: "Introduces BERT, a pre-trained language model that set new benchmarks across NLP tasks.",
        url: "https://arxiv.org/abs/1810.04805",
      },
      {
        title: "A Survey on Large Language Models",
        authors: "Zhao et al.",
        year: "2023",
        desc: "Comprehensive survey covering the development, capabilities, and challenges of LLMs.",
        url: "https://arxiv.org/abs/2303.18223",
      },
      {
        title: "Deep Residual Learning for Image Recognition",
        authors: "He et al., Microsoft Research",
        year: "2015",
        desc: "Introduces ResNet — deep residual networks that enabled training of very deep neural networks.",
        url: "https://arxiv.org/abs/1512.03385",
      },
      {
        title: "Generative Adversarial Networks",
        authors: "Goodfellow et al.",
        year: "2014",
        desc: "The original GAN paper introducing the adversarial training framework for generative models.",
        url: "https://arxiv.org/abs/1406.2661",
      },
    ],
  },
  {
    id: "cybersecurity",
    icon: "🔒",
    color: "indigo",
    title: "Cybersecurity Tools & Research",
    papers: [
      {
        title: "SoK: Eternal War in Memory",
        authors: "Szekeres et al.",
        year: "2013",
        desc: "Systematizes knowledge on memory safety vulnerabilities and defenses in modern software.",
        url: "https://ieeexplore.ieee.org/document/6547101",
      },
      {
        title: "Zero Trust Architecture (NIST SP 800-207)",
        authors: "NIST",
        year: "2020",
        desc: "Official NIST guidelines for implementing Zero Trust security models in enterprise environments.",
        url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf",
      },
      {
        title: "Towards Evaluating the Robustness of Neural Networks",
        authors: "Carlini & Wagner",
        year: "2017",
        desc: "Introduces C&W attacks — a benchmark for evaluating adversarial robustness of ML models.",
        url: "https://arxiv.org/abs/1608.04644",
      },
      {
        title: "OWASP Top 10 Web Application Security Risks",
        authors: "OWASP Foundation",
        year: "2021",
        desc: "The industry-standard awareness document for the most critical web application security risks.",
        url: "https://owasp.org/www-project-top-ten/",
      },
    ],
  },
  {
    id: "networking",
    icon: "🌐",
    color: "violet",
    title: "Networking Tools & Protocols",
    papers: [
      {
        title: "QUIC: A UDP-Based Multiplexed and Secure Transport",
        authors: "Iyengar & Thomson, IETF",
        year: "2021",
        desc: "The RFC defining QUIC — the transport protocol powering HTTP/3 for faster, more reliable connections.",
        url: "https://datatracker.ietf.org/doc/html/rfc9000",
      },
      {
        title: "Software-Defined Networking: A Comprehensive Survey",
        authors: "Kreutz et al.",
        year: "2015",
        desc: "A thorough survey of SDN architecture, use cases, and research challenges.",
        url: "https://arxiv.org/abs/1406.0440",
      },
      {
        title: "The Design Philosophy of the DARPA Internet Protocols",
        authors: "Clark, D.",
        year: "1988",
        desc: "Classic paper explaining the fundamental design decisions behind the Internet protocol suite.",
        url: "https://dl.acm.org/doi/10.1145/52324.52336",
      },
      {
        title: "A Survey of IoT Protocols and Their Security Issues",
        authors: "Frustaci et al.",
        year: "2018",
        desc: "Reviews IoT communication protocols (MQTT, CoAP, AMQP) and their associated security vulnerabilities.",
        url: "https://ieeexplore.ieee.org/document/8088251",
      },
    ],
  },
  {
    id: "software",
    icon: "💻",
    color: "cyan",
    title: "Software Development Tools & Practices",
    papers: [
      {
        title: "No Silver Bullet — Essence and Accidents of Software Engineering",
        authors: "Brooks, F.",
        year: "1987",
        desc: "A landmark essay arguing there is no single technique that will yield order-of-magnitude improvements in software productivity.",
        url: "http://worrydream.com/refs/Brooks-NoSilverBullet.pdf",
      },
      {
        title: "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation",
        authors: "Humble & Farley",
        year: "2010",
        desc: "Foundational work on CI/CD pipelines and automated software delivery practices.",
        url: "https://dl.acm.org/doi/book/10.5555/1869904",
      },
      {
        title: "Docker: Lightweight Linux Containers for Consistent Development and Deployment",
        authors: "Merkel, D.",
        year: "2014",
        desc: "Introduces Docker containerization and its impact on consistent software deployment across environments.",
        url: "https://dl.acm.org/doi/10.5555/2600239.2600241",
      },
      {
        title: "An Empirical Study of the Impact of Modern Code Review on Software Quality",
        authors: "McIntosh et al.",
        year: "2016",
        desc: "Studies how code review practices affect software quality, defect density, and maintainability.",
        url: "https://dl.acm.org/doi/10.1145/2901739.2901754",
      },
    ],
  },
];

const colorMap = {
  cyan: {
    icon: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    border: "hover:border-cyan-500/30",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    link: "text-cyan-400 hover:text-cyan-300",
  },
  indigo: {
    icon: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
    border: "hover:border-indigo-500/30",
    badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    link: "text-indigo-400 hover:text-indigo-300",
  },
  violet: {
    icon: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    border: "hover:border-violet-500/30",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    link: "text-violet-400 hover:text-violet-300",
  },
};

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#060d1f] text-white text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6">
          <span className="px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-medium">
            ✦ Research & Development
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4">Research Papers</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            A curated collection of influential research papers across AI/ML, Cybersecurity,
            Networking, and Software Development — the fields we work in every day.
          </p>
        </div>
      </section>

      {/* Papers by Category */}
      {categories.map((cat) => {
        const c = colorMap[cat.color];
        return (
          <section key={cat.id} className="py-16 bg-[#060d1f] border-t border-slate-800/60">
            <div className="max-w-6xl mx-auto px-6">
              {/* Category header */}
              <div className="flex items-center gap-4 mb-10">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-2xl shrink-0 ${c.icon}`}>
                  {cat.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">{cat.title}</h2>
              </div>

              {/* Papers */}
              <div className="flex flex-col gap-4">
                {cat.papers.map((paper) => (
                  <a
                    key={paper.title}
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-[#0d1630] border border-slate-700/50 ${c.border} rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:-translate-y-0.5 group`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xl mt-0.5 shrink-0">📄</span>
                      <div>
                        <p className={`font-semibold text-white group-hover:${c.link.split(" ")[0].replace("text-", "text-")} transition-colors`}>
                          {paper.title}
                        </p>
                        <p className="text-slate-500 text-xs mt-0.5 mb-1">{paper.authors} · {paper.year}</p>
                        <p className="text-slate-400 text-sm leading-relaxed">{paper.desc}</p>
                      </div>
                    </div>
                    <span className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border rounded-lg transition-colors ${c.badge}`}>
                      Read Paper
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <Footer />
    </>
  );
}
