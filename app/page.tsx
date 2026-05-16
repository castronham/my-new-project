export default function Home() {
  return (
    <main>
      <p>I am a freelance Web Developer with 5 years of experience specializing in WordPress and modern web frameworks. I focus on building high performance, SEO optimized websites that help businesses grow their online presence and reach global audiences.</p>
      </main>
  );
      }export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      
      {/* Header / Navigation */}
      <header className="border-b border-slate-800 sticky top-0 bg-slate-900/90 backdrop-blur z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-teal-400">Castro.dev</span>
          <nav className="space-x-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition">About</a>
            <a href="#services" className="hover:text-teal-400 transition">Services</a>
            <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32 flex flex-col justify-center">
        <p className="text-teal-400 font-mono text-sm mb-3">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          Castro Ncham.
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
          I build high-performance digital experiences.
        </h2>
        <p className="max-w-xl text-slate-400 text-lg mb-8">
          I am a professional Web Developer with over 5 years of experience specializing in WordPress, 
          advanced SEO strategies, and modern full-stack web frameworks.
        </p>
        <div>
          <a 
            href="#projects" 
            className="inline-block bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3 rounded transition"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* Services / Expertise */}
      <section id="services" className="border-t border-slate-800 bg-slate-950 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-2">
            <span className="text-teal-400 font-mono text-lg">01.</span> Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-2">WordPress Architecture</h4>
              <p className="text-sm text-slate-400">
                Engineering custom commercial sites, e-commerce stores, and specialized niche business platforms from the ground up.
              </p>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-2">SEO Engineering</h4>
              <p className="text-sm text-slate-400">
                Data-driven search volume analysis, aggressive keyword research, and meta-content optimization built natively into layouts.
              </p>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-2">Full-Stack JavaScript</h4>
              <p className="text-sm text-slate-400">
                Developing fast, modern apps using Next.js, Node.js, and command-line tools to process secure, file-based data structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="border-t border-slate-800 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-2">
            <span className="text-teal-400 font-mono text-lg">02.</span> Selected Projects
          </h3>
          
          <div className="space-y-12">
            {/* Project 1 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 h-48 bg-slate-950 rounded border border-slate-800 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-teal-400 font-mono text-xs mb-2">COMMERCIAL PLATFORM</span>
                <span className="text-white font-bold">Specialized E-Commerce Engine</span>
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-xs text-teal-400 font-mono">Featured Case Study</span>
                <h4 className="text-2xl font-bold text-white mt-1 mb-3">Niche Business & Breeding Brand</h4>
                <p className="text-slate-400 text-sm mb-4">
                  Designed and deployed a highly customized web presence featuring targeted content strategies, automated client inquiry systems, and custom review blocks.
                </p>
                <div className="flex gap-3 text-xs font-mono text-slate-400">
                  <span>WordPress</span>
                  <span>Tailwind CSS</span>
                  <span>UI/UX Design</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 h-48 bg-slate-950 rounded border border-slate-800 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-teal-400 font-mono text-xs mb-2">SEO HUB</span>
                <span className="text-white font-bold">Search Optimization Engine</span>
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-xs text-teal-400 font-mono">Organic Traffic Case Study</span>
                <h4 className="text-2xl font-bold text-white mt-1 mb-3">High-Volume Content Platform</h4>
                <p className="text-slate-400 text-sm mb-4">
                  Built a targeted SEO structure deploying long-form content optimized for specific search terms. Managed competitive analysis, search volume targeting, and meta descriptions to scale search presence.
                </p>
                <div className="flex gap-3 text-xs font-mono text-slate-400">
                  <span>SEO Strategy</span>
                  <span>Content Engineering</span>
                  <span>Google Analytics</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-slate-800 bg-slate-950 py-20 text-center">
        <div className="max-w-md mx-auto px-6">
          <span className="text-teal-400 font-mono text-sm">03. What's Next?</span>
          <h3 className="text-4xl font-bold text-white mt-2 mb-4">Get In Touch</h3>
          <p className="text-slate-400 text-sm mb-8">
            Whether you have an enterprise project referral, want to collaborate on a full-stack platform, or need to maximize your search engine ranking, my inbox is always open.
          </p>
          <a 
            href="mailto:castrohakeem@gmail.com" 
            className="inline-block border border-teal-400 text-teal-400 hover:bg-teal-400/10 font-bold px-6 py-3 rounded transition"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-900 bg-slate-950 text-xs font-mono text-slate-500">
        <p>Designed & Built by Castro Ncham &copy; 2026</p>
      </footer>

    </div>
  );
}