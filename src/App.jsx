import React from "react";
import { Routes, Route, NavLink, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import JobDetails from "./pages/JobDetails.jsx";
import Profile from "./pages/Profile.jsx";

const Header = () => {
  const loc = useLocation();
  const nav = useNavigate();

  const isHome = loc.pathname === "/";
  const isProfile = loc.pathname === "/profile"; 
  const title = isHome ? "" : (isProfile ? "Profile" : "Job Description");

  return (
    <header className="app-header app-frame">
      <div className="head-left">
        {isHome ? (
          <button className="icon-flat" aria-label="Menu">≡</button>
        ) : (
          <button className="icon-flat" aria-label="Back" onClick={() => nav(-1)}>←</button>
        )}
      </div>

      <div className="head-title">{title}</div>

      <div className="head-right">
        {isHome && <div className="avatar-sm"><NavLink to="/profile">👤</NavLink></div>}
        {!isHome && !isProfile && (
          <button className="icon-flat" aria-label="Share">
            <span className="i" style={{display: 'inline-block', verticalAlign: 'middle'}}>
          
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 13.5C14.67 13.5 13.92 13.84 13.38 14.38L7.91 11.36C7.97 11.24 8 11.12 8 11C8 10.88 7.97 10.76 7.91 10.64L13.29 7.67C13.84 8.21 14.62 8.5 15.5 8.5C16.88 8.5 18 7.38 18 6C18 4.62 16.88 3.5 15.5 3.5C14.12 3.5 13 4.62 13 6C13 6.12 13.03 6.24 13.09 6.36L7.71 9.33C7.16 8.79 6.38 8.5 5.5 8.5C4.12 8.5 3 9.62 3 11C3 12.38 4.12 13.5 5.5 13.5C6.38 13.5 7.16 13.21 7.71 12.67L13.18 15.69C13.12 15.81 13.09 15.93 13.09 16.05C13.09 17.43 14.21 18.55 15.59 18.55C16.97 18.55 18.09 17.43 18.09 16.05C18.09 14.67 16.97 13.55 15.59 13.55H15.5Z" fill="currentColor"/>
              </svg>
            </span>
          </button>
        )}
        {isProfile && <button className="icon-flat" aria-label="Settings">⚙️</button>}
      </div>
    </header>
  );
};

const BottomDock = () => {
  return (
    <div className="bottom-wrap app-frame">
      <nav className="bottom-dock">
        <NavLink to="/" className={({isActive}) => "dock-btn" + (isActive ? " active" : "")}>
          <span className="i">🏠</span>
        </NavLink>
        <button type="button" className="dock-btn"><span className="i">👜</span></button>
        <button type="button" className="dock-btn"><span className="i">💬</span></button>
        <NavLink to="/profile" className={({isActive}) => "dock-btn" + (isActive ? " active" : "")}>
          <span className="i">👤</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default function App() {
    const loc = useLocation();
  const hideBottomDock = loc.pathname.startsWith("/job/");
  return (
    <div className="app">
      <Header />
      <main className="app-main app-frame">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

          {!hideBottomDock && <BottomDock />}
    </div>
  );
}
