
import React from 'react';

const Resume = () => {
  return (
    <div className="profile-card">
      <h2 className="section-title">resume</h2>


      <div className="mt-6">
        <div className="flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(180, 100%, 45%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          <h3 className="text-xs font-bold" style={{ color: 'hsl(180, 100%, 45%)' }}>experience</h3>
        </div>

        <div className="space-y-5 ml-1">
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'hsl(180, 100%, 45%)', boxShadow: '0 0 6px hsl(180, 100%, 45%, 0.4)' }}></div>
            <div className="flex-1">
              <h4 className="text-[11px] font-semibold" style={{ color: 'hsl(180, 100%, 50%)' }}>
                Web Developer <span style={{ color: 'hsl(120, 5%, 45%)' }} className="font-normal">— Sole Developer (Remote)</span>
              </h4>
              <p className="text-[10px]" style={{ color: 'hsl(120, 5%, 40%)' }}>Jan 2026 - Present</p>
              <div className="mt-1.5 space-y-0.5 text-[10px]" style={{ color: 'hsl(120, 5%, 50%)' }}>
                <p>→ Shopify theme development & customization</p>
                <p>→ Payment integration & checkout optimization</p>
                <p>→ SEO optimization & performance improvements</p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'hsl(180, 100%, 45%)', boxShadow: '0 0 6px hsl(180, 100%, 45%, 0.4)' }}></div>
            <div className="flex-1">
              <h4 className="text-[11px] font-semibold" style={{ color: 'hsl(180, 100%, 50%)' }}>
                Software Engineer Intern <span style={{ color: 'hsl(120, 5%, 45%)' }} className="font-normal">— Kiran Foundation</span>
              </h4>
              <p className="text-[10px]" style={{ color: 'hsl(120, 5%, 40%)' }}>Jun 2025 - Sep 2025</p>
              <div className="mt-1.5 space-y-0.5 text-[10px]" style={{ color: 'hsl(120, 5%, 50%)' }}>
                <p>→ React Native feature development for production app</p>
                <p>→ Fixed critical UI & functional bugs</p>
                <p>→ Collaborated with real users & domain experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-10">
        <div className="flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(180, 100%, 45%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
          <h3 className="text-xs font-bold" style={{ color: 'hsl(180, 100%, 45%)' }}>education</h3>
        </div>

        <div className="space-y-4 ml-1">
          {[
            { name: "Newton School of Technology", date: "2024 - 2028", detail: "B.Tech (AI & ML) · Grade: 8.45 / 10.0" },
            { name: "Eklavya International Academy", date: "2022 - 2023", detail: "Class XII (Intermediate) — 82%" },
            { name: "Maheshwari Public School", date: "2019 - 2020", detail: "Class X (Matriculation) — 92%" },
          ].map((edu, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'hsl(180, 100%, 45%)', boxShadow: '0 0 6px hsl(180, 100%, 45%, 0.4)' }}></div>
              <div>
                <h4 className="text-[11px] font-semibold" style={{ color: 'hsl(180, 100%, 50%)' }}>{edu.name}</h4>
                <p className="text-[10px]" style={{ color: 'hsl(120, 5%, 40%)' }}>{edu.date}</p>
                <p className="text-[10px]" style={{ color: 'hsl(120, 5%, 50%)' }}>{edu.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="mt-10">
        <h2 className="section-title">skills</h2>

        <div className="mt-4 rounded-lg p-4" style={{ border: '1px solid hsl(220, 10%, 12%)' }}>
          <div className="space-y-2">
            {[
              { name: "Python", level: "proficient" },
              { name: "JavaScript / TypeScript", level: "proficient" },
              { name: "C / C++", level: "intermediate" },
              { name: "React / Next.js / Vue.js", level: "proficient" },
              { name: "Node.js / Express.js", level: "proficient" },
              { name: "MySQL / MongoDB", level: "intermediate" },
              { name: "Machine Learning / LLMs", level: "intermediate" },
              { name: "HTML / CSS / Tailwind CSS", level: "proficient" },
            ].map((skill, i) => (
              <div key={i} className="skill-bar">
                <span>{skill.name}</span>
                <span className="text-[9px] uppercase tracking-widest opacity-70">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="mt-8">
        <h2 className="section-title">tools</h2>

        <div className="mt-4 rounded-lg p-4" style={{ border: '1px solid hsl(220, 10%, 12%)' }}>
          <div className="space-y-2">
            {[
              { name: "Git & GitHub", level: "proficient" },
              { name: "Docker", level: "intermediate" },
              { name: "Firebase", level: "intermediate" },
              { name: "Prisma ORM", level: "intermediate" },
              { name: "Postman / API Testing", level: "proficient" },
              { name: "NumPy / Pandas / Matplotlib", level: "intermediate" },
              { name: "Power BI", level: "beginner" },
              { name: "OAuth 2.0", level: "intermediate" },
            ].map((skill, i) => (
              <div key={i} className="skill-bar">
                <span>{skill.name}</span>
                <span className="text-[9px] uppercase tracking-widest opacity-70">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="mt-8">
        <h2 className="section-title">languages</h2>

        <div className="mt-4 rounded-lg p-4" style={{ border: '1px solid hsl(220, 10%, 12%)' }}>
          <div className="space-y-2">
            {[
              { name: "English", level: "professional" },
              { name: "Hindi", level: "professional" },
              { name: "French", level: "professional" },
            ].map((lang, i) => (
              <div key={i} className="skill-bar">
                <span>{lang.name}</span>
                <span className="text-[9px] uppercase tracking-widest opacity-70">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="mt-8">
        <h2 className="section-title">certifications</h2>

        <div className="mt-4 space-y-2 ml-1">
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'hsl(180, 100%, 45%)', boxShadow: '0 0 6px hsl(180, 100%, 45%, 0.4)' }}></div>
            <div>
              <h4 className="text-[11px] font-semibold" style={{ color: 'hsl(180, 100%, 50%)' }}>AI For Everyone</h4>
              <p className="text-[10px]" style={{ color: 'hsl(120, 5%, 40%)' }}>DeepLearning.AI · Coursera</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'hsl(180, 100%, 45%)', boxShadow: '0 0 6px hsl(180, 100%, 45%, 0.4)' }}></div>
            <div>
              <h4 className="text-[11px] font-semibold" style={{ color: 'hsl(180, 100%, 50%)' }}>SIH 2024</h4>
              <p className="text-[10px]" style={{ color: 'hsl(120, 5%, 40%)' }}>College Team Representative</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
