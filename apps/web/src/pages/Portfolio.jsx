
import React, { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1, title: "LifeSaver — AI Healthcare Forecasting", category: "hackathon",
      image: "/placeholder.svg",
      desc: "AI healthcare forecasting with ~95% accuracy. Built for Mumbai Hacks 2025.",
      links: [
        { title: "GitHub", url: "https://github.com/ashvin2005" }
      ]
    },
    {
      id: 2, title: "Talkify — Video Chat App", category: "project",
      image: "/placeholder.svg",
      desc: "Real-time video conferencing application with WebRTC, React, and Node.js.",
      links: [
        { title: "GitHub", url: "https://github.com/ashvin2005" }
      ]
    },
    {
      id: 3, title: "Shopify Custom Theme", category: "project",
      image: "/placeholder.svg",
      desc: "Custom Shopify theme with dynamic sections, SEO optimization, and payment integration.",
      links: []
    },
    {
      id: 4, title: "Mumbai Hacks 2025", category: "achievement",
      image: "/placeholder.svg",
      desc: "Round 2 Shortlisted — Top among 3,500 teams / 20,000+ participants.",
      links: []
    },
    {
      id: 5, title: "Ctrl+Space Hackathon", category: "hackathon",
      image: "/placeholder.svg",
      desc: "Top 10 / 400 teams — Led the team to build a competitive solution.",
      links: []
    },
    {
      id: 6, title: "Hacktoberfest 2024 & 2025", category: "achievement",
      image: "/placeholder.svg",
      desc: "64 total merged PRs across open-source projects worldwide.",
      links: [
        { title: "GitHub", url: "https://github.com/ashvin2005" }
      ]
    }
  ];

  const filteredItems = filter === "all" ? portfolioItems : portfolioItems.filter(item => item.category === filter);
  const categories = [
    { key: "all", label: "all" }, { key: "project", label: "project" },
    { key: "hackathon", label: "hackathon" }, { key: "achievement", label: "achievement" },
  ];

  return (
    <div className="profile-card">
      <h2 className="section-title">portfolio</h2>

      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {categories.map((cat, i) => (
          <React.Fragment key={cat.key}>
            {i > 0 && <span style={{ color: 'hsl(120, 5%, 25%)' }}>·</span>}
            <button
              className={`text-[11px] font-medium transition-all duration-200 uppercase tracking-wider ${filter === cat.key ? '' : ''
                }`}
              style={filter === cat.key
                ? { color: 'hsl(180, 100%, 50%)', textShadow: '0 0 8px hsl(180, 100%, 45%, 0.3)' }
                : { color: 'hsl(120, 5%, 40%)' }
              }
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          </React.Fragment>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="portfolio-item group">
            <div className="relative overflow-hidden">
              <img src={item.image} alt={item.title} className={`portfolio-item-image transition-all duration-500 group-hover:scale-105 ${item.imageClass || ''}`} />
              <span className="portfolio-item-tag">{item.category}</span>
            </div>
            <div className="p-3 pb-4">
              <h3 className="text-[11px] font-bold" style={{ color: 'hsl(180, 100%, 50%)' }}>{item.title}</h3>
              {item.desc && (
                <p className="text-[10px] mt-1 leading-relaxed" style={{ color: 'hsl(120, 5%, 45%)' }}>{item.desc}</p>
              )}
              {item.links.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {item.links.map((link, index) => (
                    <a key={index} href={link.url} className="portfolio-link">{link.title}</a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
