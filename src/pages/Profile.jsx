import React, { useEffect, useMemo, useState } from "react";
import { defaultProfile } from "../data/profile.js";
import file from '../assets/file.png'
import profileicon from '../assets/profileicon1.png';
import experiance from '../assets/experiance.png';
const STORAGE_KEY = "profile_v1";

const loadProfile = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : defaultProfile;
};
const saveProfile = (p) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));

 
const Progress = ({ percent }) => {
  const value = Math.round(percent / 10); 
  return (
    <div className="progress" style={{ "--percent": `${percent}%` }}>
      <div className="bar" />
      <span className="progress-label">{value}/10</span>
    </div>
  );
};



export default function Profile() {
  const [profile, setProfile] = useState(loadProfile());
  const [editingContact, setEditingContact] = useState(false);
  const [editingAbout, setEditingAbout] = useState(false);
  const [experiences, setExperiences] = useState(profile.experience);

const percent = useMemo(() => {
  let score = 0;

  if (profile.location) score += 20;
  if (profile.phone) score += 20;
  if (profile.email) score += 20;
  if (profile.about && profile.about.length > 40) score += 20;
  if (profile.experience && profile.experience.length > 0) score += 20;

  return score;
}, [profile]);


  useEffect(() => {
    const p = { ...profile, experience: experiences };
    setProfile(p);
    saveProfile(p);
  }, [experiences]);

  const saveContact = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const next = {
      ...profile,
      location: form.get("location"),
      phone: form.get("phone"),
      email: form.get("email")
    };
    setProfile(next);
    saveProfile(next);
    setEditingContact(false);
  };

  const saveAbout = (e) => {
    e.preventDefault();
    const next = { ...profile, about: new FormData(e.target).get("about") };
    setProfile(next);
    saveProfile(next);
    setEditingAbout(false);
  };

  const addExp = () => {
    setExperiences((exps) => [
      ...exps,
      {
        id: crypto.randomUUID(),
        title: "",
        company: "",
        location: "",
        start: "",
        end: "",
        desc: ""
      }
    ]);
  };

  const updateExp = (id, patch) => {
    setExperiences((exps) => exps.map((e) => (e.id === id ? { ...e, ...patch } : e)));
  };

  const removeExp = (id) =>
    setExperiences((exps) => exps.filter((e) => e.id !== id));

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="screen">
      <div className="card">        
        <Progress percent={percent} />
      </div>

      <div className="card">
        <div className="row between">
          <h3 className="profile-name">
            <img 
        src={profileicon} 
        alt="Profile Icon" 
        style={{ width: "20px", height: "20px", marginRight: "8px", verticalAlign: "middle" }} 
      />
             Contact Info</h3>
          <button className="icon-btn" onClick={() => setEditingContact((v) => !v)}>{editingContact ? "✖" : "✎"}</button>
        </div>
   <hr className="linecss" />

     
        {editingContact ? (
          <form className="form" onSubmit={saveContact}>
            <label>Location<input name="location" defaultValue={profile.location} /></label>
            <label>Phone<input name="phone" defaultValue={profile.phone} /></label>
            <label>Email<input name="email" defaultValue={profile.email} /></label>
            <button className="btn primary" type="submit">Save</button>
          </form>
        ) : (
          <ul className="list">
            <li>📍 {profile.location}</li>
            <li>📞 {profile.phone}</li>
            <li>✉️ {profile.email}</li>
          </ul>
        )}
      </div>

      <div className="card">
        <div className="row between">
          <h3 className="profile-name">
              <img 
        src={file} 
        alt="About Icon" 
        style={{ width: "20px", height: "20px", marginRight: "8px", verticalAlign: "middle" }} 
      />
            About Me</h3>
          <button className="icon-btn" onClick={() => setEditingAbout((v) => !v)}>{editingAbout ? "✖" : "✎"}</button>
        </div>
  <hr className="linecss" />
        {editingAbout ? (
          <form onSubmit={saveAbout} className="form">
            <textarea name="about" defaultValue={profile.about} rows={5} />
            <button className="btn primary" type="submit">Save</button>
          </form>
        ) : (
          <p className="muted">{profile.about}</p>
        )}
      </div>

      <div className="card">
        <div className="row between">
          <h3  className="profile-name">
              <img 
        src={experiance} 
        alt="experiance Icon" 
        style={{ width: "20px", height: "20px", marginRight: "8px", verticalAlign: "middle" }} 
      />
            Experience</h3>
          <button className="icon-btn" onClick={addExp}>＋</button>
        </div>
  <hr className="linecss"  />
        <div className="exp-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="exp-item">
              <div className="row between">
                <strong>{exp.title || "Job Title"}</strong>
                <button className="icon-btn" onClick={() => removeExp(exp.id)}>🗑️</button>
              </div>
              <div className="grid2">
                <input
                  placeholder="Title"
                  value={exp.title}
                  onChange={(e) => updateExp(exp.id, { title: e.target.value })}
                />
                <input
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => updateExp(exp.id, { company: e.target.value })}
                />
                <input
                  placeholder="Location"
                  value={exp.location}
                  onChange={(e) => updateExp(exp.id, { location: e.target.value })}
                />
                <input
                  placeholder="Start (e.g., Dec 2020)"
                  value={exp.start}
                  onChange={(e) => updateExp(exp.id, { start: e.target.value })}
                />
                <input
                  placeholder="End (e.g., Present)"
                  value={exp.end}
                  onChange={(e) => updateExp(exp.id, { end: e.target.value })}
                />
              </div>
              <textarea
                placeholder="Short description"
                value={exp.desc}
                onChange={(e) => updateExp(exp.id, { desc: e.target.value })}
                rows={3}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
