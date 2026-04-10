import { useState } from "react";

const roadmap = [
  {
    month: "Month 1",
    theme: "DSA Foundation + CS Fundamentals",
    color: "#FF6B35",
    accent: "#FF8C5A",
    icon: "🧱",
    focus: "Build the base. No shortcuts here.",
    tracks: [
      {
        name: "DSA Core",
        items: [
          "Arrays, Strings, Hashing",
          "Two Pointers & Sliding Window",
          "Recursion & Backtracking basics",
          "Solve 3–5 LeetCode Easy/day",
        ],
      },
      {
        name: "CS Fundamentals",
        items: [
          "OS: Processes, Threads, Deadlock, Memory",
          "DBMS: SQL queries, Normalization, Joins",
          "CN: OSI Model, TCP/IP, HTTP/DNS basics",
          "OOPs: Concepts in Java/C++/Python",
        ],
      },
      {
        name: "Tools Setup",
        items: [
          "Git & GitHub — daily commits habit",
          "VS Code + extensions",
          "LeetCode + GeeksforGeeks accounts",
          "LinkedIn profile polish",
        ],
      },
    ],
    target: "50 LeetCode problems solved",
  },
  {
    month: "Month 2",
    theme: "DSA Intermediate + Dev Skill Starts",
    color: "#F7C59F",
    accent: "#E8A87C",
    icon: "⚡",
    focus: "Pick your tech stack. Backend or Frontend — commit now.",
    tracks: [
      {
        name: "DSA Intermediate",
        items: [
          "Linked Lists (single, double, circular)",
          "Stacks, Queues, Monotonic Stack",
          "Binary Search (all patterns)",
          "Trees: Traversals, BST, Height problems",
        ],
      },
      {
        name: "Dev Track (pick one)",
        items: [
          "🔵 Backend: Node.js + Express OR Django",
          "🟢 Full Stack: React + Node.js (MERN)",
          "🟡 Mobile: React Native basics",
          "Build a CRUD app as first project",
        ],
      },
      {
        name: "Aptitude & Reasoning",
        items: [
          "Quantitative: Time-Speed, Percentages",
          "Logical Reasoning: Syllogisms, Puzzles",
          "Verbal: Reading Comprehension",
          "Practice 30 min/day on IndiaBix",
        ],
      },
    ],
    target: "120 LeetCode problems + 1 project deployed",
  },
  {
    month: "Month 3",
    theme: "Advanced DSA + Core Project Build",
    color: "#4ECDC4",
    accent: "#38B2A9",
    icon: "🔥",
    focus: "This month separates the placed from the waiting.",
    tracks: [
      {
        name: "Advanced DSA",
        items: [
          "Graphs: BFS, DFS, Dijkstra, Topological Sort",
          "Dynamic Programming: Memoization, Tabulation",
          "Heaps & Priority Queues",
          "Tries & Advanced String problems",
        ],
      },
      {
        name: "Signature Project",
        items: [
          "Build 1 full project (real problem, real data)",
          "Ideas: Job Tracker, AI Chat App, E-commerce",
          "Add Auth, DB, REST API, Deployment",
          "Host on Vercel / Render / Railway",
        ],
      },
      {
        name: "System Design Intro",
        items: [
          "CAP Theorem, Load Balancing concepts",
          "Caching (Redis basics)",
          "Horizontal vs Vertical Scaling",
          "Monolith vs Microservices overview",
        ],
      },
    ],
    target: "200 LeetCode + 1 major project live on GitHub",
  },
  {
    month: "Month 4",
    theme: "Future-Demand Skills + Mock Interviews",
    color: "#A8E6CF",
    accent: "#6DD5A0",
    icon: "🚀",
    focus: "Add the skills that make your resume pop in 2025+.",
    tracks: [
      {
        name: "High-Demand Add-ons",
        items: [
          "🤖 AI/ML Basics: Python, NumPy, scikit-learn",
          "☁️ Cloud: AWS Free Tier (S3, EC2, Lambda)",
          "🐳 Docker basics — containerize your project",
          "Pick ONE and go deep enough to show it",
        ],
      },
      {
        name: "DSA: Hard Mode",
        items: [
          "Segment Trees, Fenwick Tree",
          "Greedy Algorithms with proof",
          "Bit Manipulation patterns",
          "LeetCode Medium contests weekly",
        ],
      },
      {
        name: "Interview Prep",
        items: [
          "Mock interviews on Pramp / Interviewing.io",
          "HR questions: Tell me about yourself",
          "STAR format stories (3 solid ones)",
          "Company research habit: Glassdoor + Blind",
        ],
      },
    ],
    target: "280 LeetCode + AWS/Docker cert or badge",
  },
  {
    month: "Month 5",
    theme: "Resume, Applications & OA Grind",
    color: "#C9B1FF",
    accent: "#A67FE8",
    icon: "📄",
    focus: "The grind becomes public. Apply aggressively.",
    tracks: [
      {
        name: "Resume & Profile",
        items: [
          "1-page ATS-friendly resume (Novoresume/Overleaf)",
          "Strong GitHub: pinned repos, good READMEs",
          "LinkedIn: headline, about, 500+ connections",
          "Portfolio website (optional but powerful)",
        ],
      },
      {
        name: "OA & Contests",
        items: [
          "Attempt every company OA you find",
          "Codeforces Div 3 / LeetCode weekly contest",
          "Platform: HackerEarth, HackerRank company tests",
          "Keep a OA tracker spreadsheet",
        ],
      },
      {
        name: "Apply Everywhere",
        items: [
          "LinkedIn Easy Apply — 10+ apps/day",
          "Naukri, Internshala, Unstop, Wellfound",
          "Cold email HR + engineers on LinkedIn",
          "College placement cell — register, attend PPTs",
        ],
      },
    ],
    target: "50+ applications sent + 5 OAs attempted",
  },
  {
    month: "Month 6",
    theme: "Full Interview Mode — Land the Offer",
    color: "#FFD93D",
    accent: "#F4C430",
    icon: "🎯",
    focus: "Convert every call. Stay consistent, don't panic.",
    tracks: [
      {
        name: "Technical Rounds",
        items: [
          "Revise Top 150 LeetCode patterns",
          "System Design: Design Twitter, URL Shortener",
          "Live coding practice: think aloud method",
          "Past company-specific questions (Leetcode tags)",
        ],
      },
      {
        name: "HR & Behavioral",
        items: [
          "Why this company? (custom per company)",
          "Strengths, Weaknesses, Failures (honest prep)",
          "Salary negotiation basics",
          "Thank-you email after every interview",
        ],
      },
      {
        name: "Mindset & Stamina",
        items: [
          "Track every rejection — learn from it",
          "Study group: 2–3 friends, daily accountability",
          "Sleep 7hrs, exercise — performance matters",
          "One offer isn't the end — keep going till signing",
        ],
      },
    ],
    target: "🏆 PLACEMENT SECURED",
  },
];

const resources = [
  { name: "Striver's A2Z DSA Sheet", type: "DSA", url: "#", emoji: "📋" },
  { name: "NeetCode 150", type: "DSA", url: "#", emoji: "🧩" },
  { name: "CS50 (Harvard Free)", type: "CS Basics", url: "#", emoji: "🎓" },
  { name: "The Odin Project", type: "Web Dev", url: "#", emoji: "🌐" },
  { name: "Fast.ai", type: "ML/AI", url: "#", emoji: "🤖" },
  { name: "AWS Cloud Practitioner (Free)", type: "Cloud", url: "#", emoji: "☁️" },
  { name: "Pramp", type: "Mock Interviews", url: "#", emoji: "🎤" },
  { name: "System Design Primer (GitHub)", type: "System Design", url: "#", emoji: "🏗️" },
];

export default function PlacementRoadmap() {
  const [activeMonth, setActiveMonth] = useState(0);
  const [activeTrack, setActiveTrack] = useState(0);

  const current = roadmap[activeMonth];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0A0F",
      fontFamily: "'Courier New', monospace",
      color: "#E8E8E8",
      padding: "0",
      overflowX: "hidden",
    }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, #0A0A0F 0%, #12121A 50%, #0A0A0F 100%)`,
        borderBottom: "1px solid #1E1E2E",
        padding: "32px 24px 24px",
        textAlign: "center",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: `linear-gradient(90deg, ${roadmap.map(r => r.color).join(", ")})`,
        }} />
        <div style={{ fontSize: "12px", color: "#666", letterSpacing: "4px", marginBottom: "8px", textTransform: "uppercase" }}>
          BTech 4th Year → Dream Job
        </div>
        <h1 style={{
          fontSize: "clamp(24px, 5vw, 42px)",
          fontWeight: "900",
          margin: "0 0 8px",
          background: `linear-gradient(90deg, #FF6B35, #4ECDC4, #C9B1FF)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-1px",
        }}>
          6-MONTH PLACEMENT ROADMAP
        </h1>
        <p style={{ color: "#666", fontSize: "13px", margin: 0 }}>
          DSA · Dev Skills · AI/Cloud · Resume · Interviews
        </p>
      </div>

      {/* Month Selector */}
      <div style={{
        display: "flex",
        gap: "8px",
        padding: "20px 16px",
        overflowX: "auto",
        scrollbarWidth: "none",
        background: "#0D0D14",
        borderBottom: "1px solid #1A1A26",
      }}>
        {roadmap.map((m, i) => (
          <button
            key={i}
            onClick={() => { setActiveMonth(i); setActiveTrack(0); }}
            style={{
              flex: "0 0 auto",
              padding: "10px 16px",
              borderRadius: "8px",
              border: `1.5px solid ${activeMonth === i ? m.color : "#1E1E2E"}`,
              background: activeMonth === i ? `${m.color}18` : "transparent",
              color: activeMonth === i ? m.color : "#555",
              cursor: "pointer",
              fontSize: "12px",
              fontFamily: "inherit",
              fontWeight: "700",
              letterSpacing: "1px",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            {m.icon} {m.month.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ padding: "20px 16px", maxWidth: "720px", margin: "0 auto" }}>

        {/* Month Header */}
        <div style={{
          background: `linear-gradient(135deg, ${current.color}15 0%, ${current.color}08 100%)`,
          border: `1px solid ${current.color}30`,
          borderLeft: `4px solid ${current.color}`,
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "20px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <span style={{ fontSize: "28px" }}>{current.icon}</span>
            <div>
              <div style={{ fontSize: "11px", color: current.color, letterSpacing: "3px", fontWeight: "700" }}>
                {current.month.toUpperCase()}
              </div>
              <div style={{ fontSize: "18px", fontWeight: "900", color: "#F0F0F0", letterSpacing: "-0.5px" }}>
                {current.theme}
              </div>
            </div>
          </div>
          <div style={{ fontSize: "13px", color: "#AAA", fontStyle: "italic", borderTop: `1px solid ${current.color}20`, paddingTop: "10px" }}>
            💡 {current.focus}
          </div>
        </div>

        {/* Track Tabs */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
          {current.tracks.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveTrack(i)}
              style={{
                padding: "8px 14px",
                borderRadius: "20px",
                border: `1.5px solid ${activeTrack === i ? current.color : "#222"}`,
                background: activeTrack === i ? `${current.color}22` : "#111",
                color: activeTrack === i ? current.color : "#555",
                cursor: "pointer",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: "700",
                transition: "all 0.2s",
              }}
            >
              {t.name}
            </button>
          ))}
        </div>

        {/* Track Items */}
        <div style={{
          background: "#0E0E18",
          border: "1px solid #1A1A2A",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "16px",
        }}>
          <div style={{ fontSize: "14px", fontWeight: "800", color: current.color, marginBottom: "14px", letterSpacing: "1px" }}>
            ▸ {current.tracks[activeTrack].name.toUpperCase()}
          </div>
          {current.tracks[activeTrack].items.map((item, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              padding: "10px 0",
              borderBottom: i < current.tracks[activeTrack].items.length - 1 ? "1px solid #1A1A2A" : "none",
            }}>
              <span style={{
                width: "6px", height: "6px", borderRadius: "50%",
                background: current.color, marginTop: "5px", flexShrink: 0,
              }} />
              <span style={{ fontSize: "13px", color: "#CCC", lineHeight: "1.5" }}>{item}</span>
            </div>
          ))}
        </div>

        {/* Target Badge */}
        <div style={{
          background: `${current.color}12`,
          border: `1px dashed ${current.color}50`,
          borderRadius: "10px",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "24px",
        }}>
          <span style={{ fontSize: "18px" }}>🎯</span>
          <div>
            <div style={{ fontSize: "10px", color: current.color, letterSpacing: "2px", marginBottom: "2px" }}>MONTH TARGET</div>
            <div style={{ fontSize: "13px", fontWeight: "700", color: "#DDD" }}>{current.target}</div>
          </div>
        </div>

        {/* All 6 Months Overview */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ fontSize: "11px", color: "#444", letterSpacing: "3px", marginBottom: "14px" }}>
            FULL TIMELINE OVERVIEW
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {roadmap.map((m, i) => (
              <div
                key={i}
                onClick={() => { setActiveMonth(i); setActiveTrack(0); }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 14px",
                  cursor: "pointer",
                  background: activeMonth === i ? `${m.color}12` : "transparent",
                  borderLeft: `3px solid ${activeMonth === i ? m.color : "#1A1A2A"}`,
                  transition: "all 0.2s",
                  borderBottom: "1px solid #111",
                }}
              >
                <span style={{ fontSize: "16px" }}>{m.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "11px", color: activeMonth === i ? m.color : "#444", fontWeight: "700" }}>
                    {m.month}
                  </div>
                  <div style={{ fontSize: "12px", color: activeMonth === i ? "#CCC" : "#555" }}>
                    {m.theme}
                  </div>
                </div>
                <div style={{
                  fontSize: "10px",
                  background: `${m.color}20`,
                  color: m.color,
                  padding: "3px 8px",
                  borderRadius: "10px",
                  letterSpacing: "0.5px",
                }}>
                  {["Base", "Build", "Level Up", "Skills+", "Apply", "Offer"][i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ fontSize: "11px", color: "#444", letterSpacing: "3px", marginBottom: "14px" }}>
            TOP FREE RESOURCES
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            {resources.map((r, i) => (
              <div key={i} style={{
                background: "#0E0E18",
                border: "1px solid #1A1A2A",
                borderRadius: "8px",
                padding: "12px",
              }}>
                <div style={{ fontSize: "18px", marginBottom: "4px" }}>{r.emoji}</div>
                <div style={{ fontSize: "12px", color: "#DDD", fontWeight: "700", marginBottom: "2px" }}>{r.name}</div>
                <div style={{ fontSize: "10px", color: "#555", letterSpacing: "1px" }}>{r.type.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tips */}
        <div style={{
          background: "linear-gradient(135deg, #0E0E18, #12121F)",
          border: "1px solid #1E1E30",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "24px",
        }}>
          <div style={{ fontSize: "11px", color: "#444", letterSpacing: "3px", marginBottom: "14px" }}>
            ⚡ PRO TIPS FOR 2025 PLACEMENTS
          </div>
          {[
            { tip: "Pick ONE dev stack and master it", detail: "MERN or Django+React. Depth > breadth for placements." },
            { tip: "Add AI to your project", detail: "Even basic OpenAI API integration makes your resume stand out." },
            { tip: "Apply before campus season", detail: "Startups on Wellfound/AngelList hire year-round. Don't wait for PPTs." },
            { tip: "Document everything on GitHub", detail: "Recruiters check commit history. 1 commit/day minimum." },
            { tip: "Network > Applications", detail: "LinkedIn DMs to engineers at target companies genuinely work." },
          ].map((t, i) => (
            <div key={i} style={{
              padding: "10px 0",
              borderBottom: i < 4 ? "1px solid #141420" : "none",
            }}>
              <div style={{ fontSize: "13px", color: "#F0F0F0", fontWeight: "700", marginBottom: "3px" }}>
                → {t.tip}
              </div>
              <div style={{ fontSize: "12px", color: "#555" }}>{t.detail}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          textAlign: "center",
          padding: "16px",
          borderTop: "1px solid #111",
          fontSize: "11px",
          color: "#333",
          letterSpacing: "1px",
        }}>
          CONSISTENCY BEATS INTENSITY • 6 MONTHS • 1 GOAL
        </div>
      </div>
    </div>
  );
}
