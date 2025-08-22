import React from "react";

export default function SearchBar({ value, onChange, onToggleFilters, simple }) {
  return (
    <div className={"searchbar" + (simple ? " simple" : "")}>
      <span>🔍</span>
      <input
        placeholder="Search job"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="icon-btn" onClick={onToggleFilters} title="Filters">≡</button>
       
    </div>
  );
}
