import profilePic from '../assets/profile.png';

const Header = () => (
  <header className="header-card">
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <img
        src={profilePic}
        alt="Ashvin Tiwari"
        className="w-20 h-20 rounded-full object-cover"
        style={{ border: '2px solid hsl(180, 100%, 45%, 0.4)', boxShadow: '0 0 20px hsl(180, 100%, 45%, 0.2)' }}
      />

      <div className="flex-1 text-center md:text-left">
        <h1 className="glow-text cursor-blink text-lg font-bold" style={{ color: 'hsl(180, 100%, 50%)' }}>
          ashvin_tiwari
        </h1>
        <p className="text-xs mt-1" style={{ color: 'hsl(120, 5%, 50%)' }}>
          ~ $ whoami → Full-Stack Developer | AI/ML Undergraduate
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-left">
        <div className="info-pair">
          <span className="info-label">email</span>
          <a href="mailto:ashvintiwari321@gmail.com" className="info-value text-xs hover:underline">
            ashvintiwari321@gmail.com
          </a>
        </div>
        <div className="info-pair">
          <span className="info-label">github</span>
          <a href="https://github.com/ashvin2005" target="_blank" rel="noreferrer" className="info-value text-xs hover:underline">
            github.com/ashvin2005
          </a>
        </div>
        <div className="info-pair">
          <span className="info-label">location</span>
          <span className="info-value text-xs">India</span>
        </div>
        <div className="info-pair">
          <span className="info-label">status</span>
          <span className="info-value text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-1 animate-pulse"></span>
            open to work
          </span>
        </div>
      </div>
    </div>
  </header>
);

export default Header;