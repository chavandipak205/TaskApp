import React, { useMemo, useState, useEffect } from "react";
import SearchBar from "../components/SearchBar.jsx";
import Section from "../components/Section.jsx";
import JobCard from "../components/JobCard.jsx";
import { jobs as allJobs } from "../data/jobs.js";

const loadBookmarks = () =>
  new Set(JSON.parse(localStorage.getItem("bookmarks") || "[]"));
const saveBookmarks = (set) =>
  localStorage.setItem("bookmarks", JSON.stringify([...set]));

export default function Home() {
  const [query, setQuery] = useState("");
  const [filterRemote, setFilterRemote] = useState(false);
  const [bookmarks, setBookmarks] = useState(loadBookmarks());
  const [showAllSuggested, setShowAllSuggested] = useState(false);
  const [showAllRecommended, setShowAllRecommended] = useState(false);


  useEffect(() => saveBookmarks(bookmarks), [bookmarks]);

  const toggleBookmark = (id) =>
    setBookmarks((b) => {
      const s = new Set(b);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allJobs.filter((j) => {
      const matchesQ =
        !q ||
        [j.title, j.company, j.location, ...(j.tags || [])]
          .join(" ")
          .toLowerCase()
          .includes(q);
      const matchesRemote = !filterRemote || j.tags?.includes("remote");
      return matchesQ && matchesRemote;
    });
  }, [query, filterRemote]);

  const suggested = filtered.filter((j) => j.isSuggested);
  const recommended = filtered.filter((j) => j.isRecommended);

  return (
    <div className="screen">
      <h3 className="page-title">Let’s Find Job</h3>

      <SearchBar
        value={query}
        onChange={setQuery}
        onToggleFilters={() => setFilterRemote((x) => !x)}
      />
      {filterRemote && (
        <div className="filter-pill">Remote only: ON</div>
      )}

     <Section title="Suggested for you" action={<a className="link"   onClick={() => setShowAllSuggested((prev) => !prev)}>{showAllSuggested ? "View Less" : "View All"}</a>}>
  {suggested.length ? (showAllSuggested ? suggested : suggested.slice(0, 1)).map((j) => (
    <JobCard
      key={j.id}
      job={j}
      bookmarked={bookmarks.has(j.id)}
      onToggleBookmark={toggleBookmark}
      showDots={true}
      variant="suggested"   // 👈 important
    />
  )) : <div className="empty">No matches</div>}
</Section>

<Section title="Recommended for you" action={<a className="link" onClick={()=>setShowAllRecommended((prev)=>!prev)}>{showAllRecommended ? "View Less" : "View All"}</a>}>
  {recommended.length ? (showAllRecommended ? recommended : recommended.slice(0, 2)).map((j) => (
    <JobCard
      key={j.id}
      job={j}
      bookmarked={bookmarks.has(j.id)}
      onToggleBookmark={toggleBookmark}
      showDots={false}
      variant="recommended"  // 👈 important
    />
  )) : <div className="empty">No matches</div>}
</Section>

    </div>
  );
}
