import React, { useState } from 'react';

const MumbaiHacksCard = () => {
  const [expanded, setExpanded] = useState(false);
  const gold = 'hsl(50, 100%, 55%)';

  const models = [
    "Random Forest (Baseline ML predictor)",
    "Amazon Chronos (Time-series foundation model)",
    "Google TimesFM (Temporal forecasting)",
    "Salesforce Moirai (Universal forecaster)",
    "IBM PatchTST (Patch-based transformers)",
    "Google TFT (Temporal Fusion Transformers)",
  ];

  const stats = [
    { value: "~95%", label: "forecast accuracy" },
    { value: "7 days", label: "surge prediction lead" },
    { value: "50+", label: "hospitals tracked" },
    { value: "50Cr", label: "potential savings/city" },
  ];

  return (
    <div className="feature-card !text-left" style={{ border: `1px solid ${gold}30`, background: `${gold}06` }}>
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${gold}15`, border: `1px solid ${gold}40` }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h3 className="text-xs font-bold" style={{ color: gold }}>Mumbai Hacks 2025 — Round 2 Shortlisted</h3>
            <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: `${gold}15`, color: gold, border: `1px solid ${gold}30` }}>20,000+ participants</span>
          </div>
          <p className="text-[11px] mt-1" style={{ color: 'hsl(120, 5%, 50%)' }}>
            Shortlisted from 20,000+ participants among 3,500 teams · Built <span style={{ color: gold }} className="font-semibold">Life_Saver</span> — an AI-driven predictive healthcare platform for city-level surge preparedness.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
            {stats.map((s, i) => (
              <div key={i} className="rounded p-2 text-center" style={{ background: `${gold}08`, border: `1px solid ${gold}20` }}>
                <p className="text-[13px] font-bold" style={{ color: gold }}>{s.value}</p>
                <p className="text-[9px] uppercase tracking-wide mt-0.5" style={{ color: 'hsl(120, 5%, 40%)' }}>{s.label}</p>
              </div>
            ))}
          </div>
          <button onClick={() => setExpanded(!expanded)} className="text-[10px] font-bold uppercase tracking-widest mt-3 flex items-center gap-1" style={{ color: 'hsl(180, 100%, 45%)' }}>
            {expanded ? '▲ hide details' : '▼ view full details'}
          </button>
          {expanded && (
            <div className="mt-3 space-y-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: 'hsl(180, 100%, 45%)' }}>ensemble of 6 AI models</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  {models.map((m, i) => (
                    <p key={i} className="text-[10px] flex items-start gap-1" style={{ color: 'hsl(120, 5%, 50%)' }}>
                      <span style={{ color: gold }}>→</span> {m}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: 'hsl(180, 100%, 45%)' }}>tailored dashboards</p>
                <div className="flex flex-wrap gap-2">
                  {['Hospitals', 'Pharmacies', 'Citizens'].map((d) => (
                    <span key={d} className="text-[10px] px-2 py-0.5 rounded" style={{ background: 'hsl(180, 100%, 45%, 0.08)', color: 'hsl(180, 100%, 50%)', border: '1px solid hsl(180, 100%, 45%, 0.2)' }}>{d}</span>
                  ))}
                </div>
                <p className="text-[10px] mt-1.5" style={{ color: 'hsl(120, 5%, 45%)' }}>
                  Citizens can check bed availability instantly — <span style={{ color: 'hsl(120, 60%, 50%)' }} className="font-semibold">no login required</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CtrlSpaceCard = () => {
  const [expanded, setExpanded] = useState(false);
  const cyan = 'hsl(180, 100%, 50%)';

  const team = ["Shekhar Narayan Mishra", "Vedansha Srivastava", "Aditya Sinha", "Devanshu Prakash"];
  const highlights = [
    { text: "Integrating astrophysical data from GWOSC, ZTF/TNS, NASA HEASARC & SIMBAD/VizieR" },
    { text: "Performing temporal & spatial correlation analysis of cosmic events" },
    { text: "Designing a confidence scoring system for cross-messenger event detection" },
    { text: "Building a visualization dashboard for astrophysical insights" },
  ];

  return (
    <div className="feature-card !text-left" style={{ border: `1px solid ${cyan}30`, background: `${cyan}06` }}>
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${cyan}15`, border: `1px solid ${cyan}40` }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={cyan} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h3 className="text-xs font-bold" style={{ color: cyan }}>Ctrl+Space Hackathon 2025 — Top 10 / 400 Teams</h3>
            <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: `${cyan}15`, color: cyan, border: `1px solid ${cyan}30` }}>Team Leader</span>
          </div>
          <p className="text-[11px] mt-1" style={{ color: 'hsl(120, 5%, 50%)' }}>
            National-level hackathon on space technology by <span style={{ color: cyan }} className="font-semibold">Quantique Metadata</span> &amp; Newton School of Technology. 5-week · 3 rounds · 400 teams from across India. Earned internship opportunities &amp; exclusive finalist benefits.
          </p>
          <button onClick={() => setExpanded(!expanded)} className="text-[10px] font-bold uppercase tracking-widest mt-3 flex items-center gap-1" style={{ color: 'hsl(180, 100%, 45%)' }}>
            {expanded ? '▲ hide details' : '▼ view full details'}
          </button>
          {expanded && (
            <div className="mt-3 space-y-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: 'hsl(180, 100%, 45%)' }}>problem statement — Multi-Messenger Event Correlator</p>
                <div className="space-y-1">
                  {highlights.map((h, i) => (
                    <p key={i} className="text-[10px] flex items-start gap-1.5" style={{ color: 'hsl(120, 5%, 50%)' }}>
                      <span style={{ color: 'hsl(180, 100%, 45%)' }}>→</span> {h.text}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: 'hsl(180, 100%, 45%)' }}>team members</p>
                <div className="flex flex-wrap gap-2">
                  {team.map((name) => (
                    <span key={name} className="text-[10px] px-2 py-0.5 rounded" style={{ background: `${cyan}08`, color: cyan, border: `1px solid ${cyan}20` }}>{name}</span>
                  ))}
                </div>
              </div>
              <div className="mt-2 rounded-lg overflow-hidden" style={{ border: `1px solid ${cyan}25` }}>
                <img src="/Images/ctrlspace.png" alt="Ctrl+Space Hackathon Certificate" className="w-full object-cover" style={{ maxHeight: '280px', objectPosition: 'top', filter: 'brightness(0.95)' }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SIHCard = () => {
  const orange = 'hsl(30, 100%, 55%)';
  return (
    <div className="feature-card !text-left" style={{ border: `1px solid ${orange}30`, background: `${orange}06` }}>
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${orange}15`, border: `1px solid ${orange}40` }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={orange} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h3 className="text-xs font-bold" style={{ color: orange }}>Smart India Hackathon 2024 — College Representative</h3>
            <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: `${orange}15`, color: orange, border: `1px solid ${orange}30` }}>Innov8 Crew</span>
          </div>
          <p className="text-[11px] mt-1" style={{ color: 'hsl(120, 5%, 50%)' }}>
            Selected by <span style={{ color: orange }} className="font-semibold">Newton School of Technology</span> to represent the college at SIH 2024 — one of India's most prestigious national hackathons organized by the Government of India.
          </p>
          <div className="mt-2.5 rounded p-2.5" style={{ background: `${orange}08`, border: `1px solid ${orange}15` }}>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: orange }}>our vision</p>
            <p className="text-[10px] leading-relaxed" style={{ color: 'hsl(120, 5%, 50%)' }}>
              Building a community platform to connect aspiring candidates with industry leaders — empowering them with <span style={{ color: orange }} className="font-semibold">personalized roadmaps</span> for better career growth and skill development.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-2.5">
            {['Career Tech', 'Community Platform', 'AI Roadmaps', 'Gov. of India'].map((tag) => (
              <span key={tag} className="text-[9px] px-2 py-0.5 rounded" style={{ background: `${orange}10`, color: orange, border: `1px solid ${orange}20` }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const KiranCard = () => {
  const purple = 'hsl(280, 80%, 65%)';
  return (
    <div className="feature-card !text-left" style={{ border: `1px solid ${purple}30`, background: `${purple}06` }}>
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${purple}15`, border: `1px solid ${purple}40` }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={purple} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h3 className="text-xs font-bold" style={{ color: purple }}>Software Engineer Intern — Kiran Foundation</h3>
            <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: `${purple}15`, color: purple, border: `1px solid ${purple}30` }}>3 months</span>
          </div>
          <p className="text-[11px] mt-1" style={{ color: 'hsl(120, 5%, 50%)' }}>
            Successfully completed a 3-month internship with <span style={{ color: purple }} className="font-semibold">Kiran Foundation</span>, contributing to React Native feature development for a production app, fixing critical bugs, and collaborating with domain experts and real users.
          </p>
          <div className="flex flex-wrap gap-2 mt-2.5">
            {['React Native', 'Production App', 'UI/UX Fixes', 'Teamwork'].map((tag) => (
              <span key={tag} className="text-[9px] px-2 py-0.5 rounded" style={{ background: `${purple}10`, color: purple, border: `1px solid ${purple}20` }}>{tag}</span>
            ))}
          </div>
          <a
            href="https://drive.google.com/file/d/1xl4kIkjB6osljqD5aZCnI2GC8nruEgX7/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest mt-3"
            style={{ color: 'hsl(180, 100%, 45%)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            view certificate
          </a>
        </div>
      </div>
    </div>
  );
};

const HacktoberfestCard = () => {
  const [expanded, setExpanded] = useState(false);
  const green = 'hsl(120, 60%, 50%)';

  const highlights = [
    { text: "Built multiple new features across various repositories" },
    { text: "Fixed numerous issues and improved existing codebases" },
    { text: "Collaborated closely with maintainers and contributors" },
    { text: "Received official Hacktoberfest T-shirt from DigitalOcean" },
  ];

  return (
    <div className="feature-card !text-left" style={{ border: `1px solid ${green}30`, background: `${green}06` }}>
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${green}15`, border: `1px solid ${green}40` }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h3 className="text-xs font-bold" style={{ color: green }}>Hacktoberfest 2025 — Super Contributor</h3>
            <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: `${green}15`, color: green, border: `1px solid ${green}30` }}>56 merged PRs</span>
          </div>
          <p className="text-[11px] mt-1" style={{ color: 'hsl(120, 5%, 50%)' }}>
            Completed Hacktoberfest 2025 with <span style={{ color: green }} className="font-semibold">56 pull requests</span> — all merged and marked as quality contributions. Earned <span style={{ color: green }} className="font-semibold">Super Contributor badge</span> + official DigitalOcean T-shirt.
          </p>
          <button onClick={() => setExpanded(!expanded)} className="text-[10px] font-bold uppercase tracking-widest mt-3 flex items-center gap-1" style={{ color: 'hsl(180, 100%, 45%)' }}>
            {expanded ? '▲ hide details' : '▼ view full details'}
          </button>
          {expanded && (
            <div className="mt-3 space-y-3">
              <div className="space-y-1.5">
                {highlights.map((h, i) => (
                  <p key={i} className="text-[10px] flex items-start gap-1.5" style={{ color: 'hsl(120, 5%, 50%)' }}>
                    <span style={{ color: 'hsl(120, 60%, 50%)' }}>→</span> {h.text}
                  </p>
                ))}
              </div>
              <div className="mt-3 rounded-lg overflow-hidden" style={{ border: `1px solid ${green}25` }}>
                <img src="/Images/hacktoberfest.png" alt="Hacktoberfest 2025 Certificate" className="w-full object-cover" style={{ maxHeight: '280px', objectPosition: 'top', filter: 'brightness(0.95)' }} />
              </div>
              <p className="text-[10px] italic" style={{ color: 'hsl(120, 5%, 40%)' }}>
                Received wonderful feedback from maintainers appreciating feature contributions — their kind words made the journey truly special.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className="profile-card">
      <h2 className="section-title">achievements</h2>

      <div className="space-y-3 mt-5">

        {/* Hackathons */}
        <p className="text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: 'hsl(180, 100%, 45%)' }}>hackathons</p>

        <MumbaiHacksCard />
        <CtrlSpaceCard />
        <SIHCard />

        {/* Open Source */}
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] pt-2" style={{ color: 'hsl(180, 100%, 45%)' }}>open source</p>

        <HacktoberfestCard />

        {/* Competitive Programming */}
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] pt-2" style={{ color: 'hsl(180, 100%, 45%)' }}>competitive programming</p>

        <div className="feature-card !text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(280, 80%, 65%, 0.15)', border: '1px solid hsl(280, 80%, 65%, 0.30)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(280, 80%, 65%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold" style={{ color: 'hsl(280, 80%, 65%)' }}>ICPC — AIR 2142</h3>
              <p className="text-[11px] mt-0.5" style={{ color: 'hsl(120, 5%, 45%)' }}>First attempt at ICPC — demonstrating strong competitive programming fundamentals</p>
            </div>
          </div>
        </div>

        {/* Internship */}
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] pt-2" style={{ color: 'hsl(180, 100%, 45%)' }}>internship</p>

        <KiranCard />

      </div>
    </div>
  );
};

export default Achievements;
