const skillsList = [
  "TikTok Ads",
  "Shopify",
  "WordPress & Elementor",
  "Canva & CapCut",
  "Meta Ads (Facebook & IG)",
  "Instagram Growth",
  "Google Ads (Search & PMax)",
  "B2B & High-Ticket Lead Generation",
  "Local SEO (Maps 3-Pack)",
  "Online Reputation (ORM)",
  "GA4 & Server-Side GTM",
  "Meta CAPI Attribution",
  "Conversion Rate Optimization (CRO)",
];

function SkillsTicker() {
  return (
    <div className="skills-ticker-wrapper" aria-label="Core Skills & Technologies">
      {/* Group 1 */}
      <div className="skills-ticker-content">
        {skillsList.map((skill, index) => (
          <span key={`g1-${index}`} className="ticker-item">
            <span className="ticker-diamond">◆</span>
            <span className="ticker-text">{skill}</span>
          </span>
        ))}
      </div>

      {/* Group 2 (Identical for seamless gapless infinite marquee) */}
      <div className="skills-ticker-content" aria-hidden="true">
        {skillsList.map((skill, index) => (
          <span key={`g2-${index}`} className="ticker-item">
            <span className="ticker-diamond">◆</span>
            <span className="ticker-text">{skill}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsTicker;
