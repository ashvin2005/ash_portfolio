
import React from 'react';

const About = () => {
  return (
    <div className="profile-card">
      <h2 className="section-title">about_me</h2>

      <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'hsl(120, 5%, 50%)' }}>
        <p>
          Hi, I'm <span style={{ color: 'hsl(180, 100%, 50%)' }} className="font-medium">Ashvin Tiwari</span> —
          a Full-Stack Developer and AI/ML undergraduate with hands-on experience building production-ready web applications.
          Currently studying B.Tech in AI & ML at <span style={{ color: 'hsl(180, 100%, 50%)' }} className="font-medium">Newton School of Technology</span>,
          with a strong focus on scalable systems and real-time applications.
        </p>

        <p>
          I specialize in <span className="font-semibold" style={{ color: 'hsl(180, 100%, 45%)' }}>React, Node.js, Express, and MySQL</span>,
          with a growing interest in AI/ML and open-source contributions.
          I enjoy the entire journey: from writing backend APIs to designing pixel-perfect frontends
          and deploying end-to-end solutions.
        </p>

        <p>
          Shortlisted at national hackathons, active open-source contributor with 60+ merged PRs,
          and experienced in delivering production solutions from design to deployment.
          Whether it's building real-time systems or optimizing developer workflows,
          I'm always looking for impactful problems to solve.
        </p>
      </div>

      <h2 className="section-title mt-10">what_im_doing</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {[
          {
            icon: <><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></>,
            title: "full-stack-dev",
            desc: "Building scalable web apps with React, Next.js, Node.js, Express, MySQL, and modern tooling"
          },
          {
            icon: <><path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"></path><circle cx="12" cy="15" r="2"></circle></>,
            title: "ai-ml",
            desc: "Machine Learning, LLMs, Hugging Face, OpenAI API — exploring AI to build intelligent applications"
          },
          {
            icon: <><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></>,
            title: "open-source",
            desc: "Active contributor — Hacktoberfest 2025 (56 merged PRs) + Hacktoberfest 2024 (8 merged PRs)"
          },
          {
            icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>,
            title: "competitive-coding",
            desc: "ICPC AIR 2142, Codeforces & LeetCode — building strong problem-solving and DSA fundamentals"
          }
        ].map((item, i) => (
          <div key={i} className="feature-card !text-left">
            <div className="flex items-start gap-3">
              <div
                className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                style={{ background: 'hsl(180, 100%, 45%, 0.08)', border: '1px solid hsl(180, 100%, 45%, 0.15)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(180, 100%, 50%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-bold mb-1" style={{ color: 'hsl(180, 100%, 50%)' }}>{item.title}</h3>
                <p className="text-[11px] leading-relaxed" style={{ color: 'hsl(120, 5%, 45%)' }}>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title mt-10">achievements</h2>

      <div className="space-y-3 mt-4">
        {[
          {
            title: "Mumbai Hacks 2025 — Round 2 Shortlisted",
            desc: "Top among 3,500 teams / 20,000+ participants — Built LifeSaver (AI healthcare forecasting ~95% accuracy)",
            color: 'hsl(50, 100%, 55%)'
          },
          {
            title: "Ctrl+Space Hackathon — Top 10 / 400 teams",
            desc: "Team Leader — built competitive solution under time pressure",
            color: 'hsl(180, 100%, 50%)'
          },
          {
            title: "ICPC — AIR 2142",
            desc: "First attempt at ICPC — demonstrating strong competitive programming fundamentals",
            color: 'hsl(280, 80%, 65%)'
          },
          {
            title: "Hacktoberfest 2024 & 2025",
            desc: "64 total merged PRs across open-source projects",
            color: 'hsl(120, 60%, 50%)'
          }
        ].map((achievement, i) => (
          <div key={i} className="feature-card mt-0 !text-left">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                style={{ background: `${achievement.color}15`, border: `1px solid ${achievement.color}30` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={achievement.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-bold" style={{ color: achievement.color }}>{achievement.title}</h3>
                <p className="text-[11px] mt-0.5" style={{ color: 'hsl(120, 5%, 45%)' }}>
                  {achievement.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
