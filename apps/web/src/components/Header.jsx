import profilePic from '../assets/Screenshot 2025-12-06 at 10.14.32 PM.png';

<header className="header-card">
  <div className="flex flex-col items-center gap-4 md:flex-row">
    <img src={profilePic} />

    <div>
      <h1 className="glow-text cursor-blink">ashvin_tiwari</h1>
      <p>~ $ whoami → Full-Stack Developer | AI/ML Undergraduate</p>
    </div>

    <div className="grid grid-cols-2 gap-x-8">
      <div className="info-pair"><span className="info-label">email</span>...</div>
      <div className="info-pair"><span className="info-label">cv</span>...</div>
      <div className="info-pair"><span className="info-label">location</span>...</div>
      <div className="info-pair"><span className="info-label">status</span>...</div>
    </div>
  </div>
</header>