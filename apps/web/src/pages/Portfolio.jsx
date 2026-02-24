
import React, { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "ByteLearn — AI Learning Platform",
      category: "project",
      image: "/Images/bytelearn.png",
      desc: "An AI-powered learning platform to help students learn and practice coding interactively.",
      links: [
        { title: "GitHub", url: "https://github.com/ashvin2005/byteLearn" },
        { title: "Live", url: "https://byte-learn-five.vercel.app/" },
      ],
    },
    {
      id: 2,
      title: "Talkify — Video Chat App",
      category: "project",
      image: "/Images/talkify.png",
      desc: "Real-time video conferencing application built with WebRTC, React, and Node.js.",
      links: [
        { title: "GitHub", url: "https://github.com/ashvin2005/talkify" },
        { title: "Live", url: "https://talkify-beryl.vercel.app/" },
      ],
    },
    {
      id: 3,
      title: "Nutrition & Obesity Tracker",
      category: "project",
      image: "/Images/nutrition.png",
      desc: "A full-stack app to track nutrition intake and obesity risk with data visualizations.",
      links: [
        { title: "GitHub", url: "https://github.com/ashvin2005/nutrition-obesity-app" },
        { title: "Live", url: "https://nutrition-obesity-app-frontend.vercel.app/" },
      ],
    },
    {
      id: 4,
      title: "SkipSmart — Smart Attendance",
      category: "project",
      image: "/Images/skipattend.png",
      desc: "Smart attendance management system that calculates safe skips and attendance percentage.",
      links: [
        { title: "GitHub", url: "https://github.com/ashvin2005/skip-smart-attendance" },
        { title: "Live", url: "https://skip-smart-attendance.vercel.app/" },
      ],
    },
    {
      id: 5,
      title: "Resumate — AI Resume Builder",
      category: "project",
      image: "/Images/resumate.png",
      desc: "AI-powered resume builder that generates professional resumes from user input.",
      links: [
        { title: "GitHub", url: "https://github.com/ashvin2005/Resumate" },
        { title: "Live", url: "https://resumate-eight.vercel.app/" },
      ],
    },
  ];

  const filteredItems = filter === "all" ? portfolioItems : portfolioItems.filter(item => item.category === filter);
  const categories = [
    { key: "all", label: "all" },
    { key: "project", label: "project" },
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
