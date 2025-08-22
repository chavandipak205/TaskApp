import React from "react";
import { Link } from "react-router-dom";
import bookmark from "../assets/bookmark.png";
 
export default function JobCard({ job, bookmarked, onToggleBookmark, showDots, variant }) {   
  const age = (() => {
    const ms = Date.now() - job.postedAt;
    const hrs = Math.floor(ms / (1000 * 60 * 60));
    if (hrs < 24) return `${hrs} hours ago`;
    const days = Math.floor(hrs / 24);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  })();

  return (
    <div className="job-card">
      <div className="job-card-row">
        <div className="job-logo">{job.logo}</div>
        <div className="job-meta">
            {variant === "recommended" && (
            <span>
              <img style={{ float: "right", color: "white" }} src={bookmark} height={20} width={20} alt="Bookmarked" className="bookmark-icon" />
            </span>
          )}
          <Link to={`/job/${job.id}`} className="job-title">{job.title}</Link>
        
          <div className="job-sub">
            {job.company} <span className="dot">/</span> {job.location}
          </div>

          {/* Chips */}
          <div className="chip-row">
            <span className="chip">{job.level}</span>
            <span className="chip">{job.type}</span>
            {variant === "recommended" && job.work && (
              <span className="chip">{job.work}</span>
            )}
            {variant === "suggested" && job.salary && (
              <span className="chip ghost">{job.salary}</span>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
       <div className="job-footer">
  {variant === "recommended" ? (
    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
      <span className="fonts">{job.salary}</span>
      <span className="fonts">{age}</span>
    </div>
  ) : (
    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
      <span className="muted">{age}</span>
      <button
        className={"bookmark" + (bookmarked ? " active" : "")}
        onClick={() => onToggleBookmark(job.id)}
        title={bookmarked ? "Remove bookmark" : "Save job"}
      >
        {bookmarked ? "★" : "☆"}
      </button>
    </div>
  )}
</div>


      {showDots && (
        <div className="dots">
          <span className="dot filled" />
          <span className="dot" />
          <span className="dot" />
        </div>
      )}
    </div>
  );
}
