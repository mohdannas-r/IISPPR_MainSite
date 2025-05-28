import React from "react";

const SDGItem = ({ number, title }) => (
  <div style={{
    backgroundColor: '#d1fae5',
    color: '#065f46',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontWeight: '600',
    fontSize: '0.875rem',
    marginRight: '0.5rem',
    marginBottom: '0.5rem',
    display: 'inline-block',
  }}>
    SDG {number}: {title}
  </div>
);

const PhaseItem = ({ children }) => (
  <li style={{ marginBottom: '0.5rem', lineHeight: 1.5, color: '#374151' }}>{children}</li>
);

const PhaseSection = ({ title, yearRange, points }) => (
  <section style={{ marginBottom: '2rem' }}>
    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827', display: 'flex', alignItems: 'center' }}>
      <span role="img" aria-label="calendar" style={{ marginRight: '0.5rem' }}>📅</span> 
      {title} <span style={{ fontWeight: '400', fontSize: '0.875rem', color: '#6b7280', marginLeft: '0.5rem' }}>({yearRange})</span>
    </h3>
    <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
      {points.map((point, i) => (
        <PhaseItem key={i}>{point}</PhaseItem>
      ))}
    </ul>
  </section>
);

export default function ProjectPage1() {
  const projectTitle = "Democratising Public Policy Education";
  const vision =
    "To make public policy education easy to understand and available to everyone, especially students, young professionals, and grassroots communities, by 2030.";

  const sdgs = [
    { number: 4, title: "Quality Education" },
    { number: 10, title: "Reduced Inequalities" },
    { number: 16, title: "Peace, Justice, and Strong Institutions" },
    { number: 17, title: "Partnerships for the Goals" },
  ];

  const phase1Points = [
    "Reach 10,000+ learners via open-access content: videos, infographics, webinars",
    "Launch 3 certificate courses (2 in English, 1 in a regional language)",
    "Build an active online learning community of 1,000+ members",
    "Translate key content into 3 Indian languages",
    'Run "Policy for All" Literacy Campaigns in 5 rural or semi-urban districts',
    "Partner with 25+ colleges and local NGOs for offline sessions and outreach",
    "Train 1,500+ students and professionals in short-term programs",
  ];

  const phase2Points = [
    "Develop a mobile-first platform for low-bandwidth, rural learners",
    "Translate content into 5 more languages, expanding regional access",
    "Establish Policy Clubs in 100+ schools and colleges",
    "Publish 1 open-source guidebook on public policy and Indian laws",
    "Launch a Public Policy Fellowship for 100 underrepresented youth",
    "Create interactive tools and simulations for learning policy (youth-focused)",
    "Reach 1 lakh (100,000) learners cumulatively by 2028",
    "Build a National Coalition for policy education and organize India’s 1st People's Policy Hackathon",
    "Support community-led policy research in 20+ districts",
    "Reach a total of 500,000 learners by 2030",
    "Expand globally by partnering with 3 Global South countries",
    "Publish a People’s Public Policy Charter co-created with citizens",
    "Make all content freely available under a Creative Commons license",
  ];

  return (
    <main style={{
      maxWidth: '640px',
      margin: '3rem auto',
      padding: '1.5rem',
      backgroundColor: '#fff',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      fontFamily: 'system-ui, sans-serif',
      color: '#111827',
    }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>{projectTitle}</h1>
        <p style={{ fontSize: '1.125rem', color: '#4b5563' }}>{vision}</p>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>🎯 SDG Alignment:</h2>
        <div>
          {sdgs.map((sdg, i) => (
            <SDGItem key={i} number={sdg.number} title={sdg.title} />
          ))}
        </div>
      </section>

      <PhaseSection title="Phase 1: Foundation & Access" yearRange="2025–2026" points={phase1Points} />
      <PhaseSection title="Phase 2: Scale, Innovation & Systemic Impact" yearRange="2027–2030" points={phase2Points} />
    </main>
  );
}
