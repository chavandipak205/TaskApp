import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jobs } from "../data/jobs.js";

export default function JobDetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const job = useMemo(() => jobs.find((j) => j.id === id), [id]);
  const [tab, setTab] = useState("details");
  const [applied, setApplied] = useState(
    JSON.parse(localStorage.getItem("applied") || "[]").includes(id)
  );

  useEffect(()=>{
     window.scrollTo(0, 0);
  },[])

  if (!job) {
    return (
      <div className="screen">
        <p>Job not found.</p>
        <button className="btn" onClick={() => nav("/")}>Back</button>
      </div>
    );
  }

  const onApply = () => {
    const arr = JSON.parse(localStorage.getItem("applied") || "[]");
    if (!arr.includes(id)) {
      arr.push(id);
      localStorage.setItem("applied", JSON.stringify(arr));
    }
    setApplied(true);
  };

  return (
    <div className="screen">
      <div className="job-hero">
        <div className="job-hero-icon">{job.logo}</div>
        <h2 className="job-hero-title">{job.title}</h2>
        <div className="job-hero-sub">{job.company} <span className="dot">/</span> {job.location}</div>
        <div>{job.salary}</div>
        <div className="chip-row chipdesc center">
          <span className="chip">{job.level}</span>
          <span className="chip">{job.type}</span>
          {job.tags?.includes("remote") && <span className="chip">Remote</span>}
        </div>

        <div className="tabs">
          <button className={tab === "details" ? "tab active" : "tab"} onClick={() => setTab("details")}>Job Details</button>
          <button className={tab === "company" ? "tab active" : "tab"} onClick={() => setTab("company")}>About Company</button>
        </div>
      </div>

      {tab === "details" ? (
        <div className="card">
          <h3>Job Description</h3>
          <p className="muted">{job.description}</p>
          <h3 style={{ marginTop: 16 }}>Key Responsibilities</h3>
          <ul className="bullets">
            {job.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="card">
          <h3>About Company</h3>
          <p className="muted">{job.about}</p>
        </div>
      )}

      <button className={"btn primary" + (applied ? " disabled" : "")} onClick={onApply} disabled={applied}>
        {applied ? "Applied" : "Apply Now"}
      </button>
    </div>
  );
}
