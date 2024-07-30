import React, { useState } from 'react';
import "./NavTabs.css";

const NavTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const handleTabClick = (key) => {
    setActiveTab(key);
  };

  return (
    <div>
      <div className="nav-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`nav-tab ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="nav-tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`tab-panel ${activeTab === tab.key ? 'active' : ''}`}
          >
            {activeTab === tab.key && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavTabs;
