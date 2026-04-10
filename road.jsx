import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "placement-roadmap-progress";

const roadmap = [
  {
    month: "Month 1",
    theme: "DSA Foundation + CS Fundamentals",
    color: "#FF6B35",
    accent: "#FF8C5A",
    icon: "\u{1F9F1}",
    focus: "Build the base. No shortcuts here.",
    tracks: [
      {
        name: "DSA Core",
        items: [
          "Arrays, Strings, Hashing",
          "Two Pointers & Sliding Window",
          "Recursion & Backtracking basics",
          "Solve 3-5 LeetCode Easy/day",
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
          "Git & GitHub - daily commits habit",
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
    icon: "\u26A1",
    focus: "Pick your tech stack. Backend or Frontend - commit now.",
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
          "Backend: Node.js + Express or Django",
          "Full Stack: React + Node.js (MERN)",
          "Mobile: React Native basics",
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
    icon: "\u{1F525}",
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
    icon: "\u{1F680}",
    focus: "Add the skills that make your resume pop in 2025+.",
    tracks: [
      {
        name: "High-Demand Add-ons",
        items: [
          "AI/ML basics: Python, NumPy, scikit-learn",
          "Cloud: AWS fundamentals and hands-on practice",
          "Docker basics - containerize your project",
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
          "Mock interviews on Pramp / Exponent Practice",
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
    icon: "\u{1F4C4}",
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
          "Keep an OA tracker spreadsheet",
        ],
      },
      {
        name: "Apply Everywhere",
        items: [
          "LinkedIn Easy Apply - 10+ apps/day",
          "Naukri, Internshala, Unstop, Wellfound",
          "Cold email HR + engineers on LinkedIn",
          "College placement cell - register, attend PPTs",
        ],
      },
    ],
    target: "50+ applications sent + 5 OAs attempted",
  },
  {
    month: "Month 6",
    theme: "Full Interview Mode - Land the Offer",
    color: "#FFD93D",
    accent: "#F4C430",
    icon: "\u{1F3AF}",
    focus: "Convert every call. Stay consistent, don't panic.",
    tracks: [
      {
        name: "Technical Rounds",
        items: [
          "Revise Top 150 LeetCode patterns",
          "System Design: Design Twitter, URL Shortener",
          "Live coding practice: think aloud method",
          "Past company-specific questions (LeetCode tags)",
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
          "Track every rejection - learn from it",
          "Study group: 2-3 friends, daily accountability",
          "Sleep 7 hours, exercise - performance matters",
          "One offer isn't the end - keep going till signing",
        ],
      },
    ],
    target: "Placement secured",
  },
];

const resources = [
  {
    name: "Striver's A2Z DSA Sheet",
    type: "DSA",
    url: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
    emoji: "\u{1F4CB}",
    source: "takeuforward.org",
  },
  {
    name: "NeetCode 150",
    type: "DSA",
    url: "https://neetcode.io/practice/practice/neetcode150",
    emoji: "\u{1F9E9}",
    source: "neetcode.io",
  },
  {
    name: "CS50x Introduction to Computer Science",
    type: "CS Basics",
    url: "https://cs50.harvard.edu/x",
    emoji: "\u{1F393}",
    source: "cs50.harvard.edu",
  },
  {
    name: "The Odin Project",
    type: "Web Dev",
    url: "https://www.theodinproject.com/",
    emoji: "\u{1F310}",
    source: "theodinproject.com",
  },
  {
    name: "Practical Deep Learning for Coders",
    type: "ML/AI",
    url: "https://course.fast.ai/",
    emoji: "\u{1F916}",
    source: "course.fast.ai",
  },
  {
    name: "AWS Skill Builder",
    type: "Cloud",
    url: "https://aws.amazon.com/training/digital/",
    emoji: "\u2601\uFE0F",
    source: "aws.amazon.com",
  },
  {
    name: "Pramp / Exponent Practice",
    type: "Mock Interviews",
    url: "https://www.pramp.com/",
    emoji: "\u{1F3A4}",
    source: "pramp.com",
  },
  {
    name: "System Design Primer",
    type: "System Design",
    url: "https://github.com/donnemartin/system-design-primer",
    emoji: "\u{1F3D7}\uFE0F",
    source: "github.com",
  },
];

const proTips = [
  {
    tip: "Pick ONE dev stack and master it",
    detail: "MERN or Django + React. Depth beats breadth for placements.",
  },
  {
    tip: "Add AI to your project",
    detail: "Even basic API integration can make your resume stand out.",
  },
  {
    tip: "Apply before campus season",
    detail: "Startups on Wellfound hire year-round. Don't wait for PPTs.",
  },
  {
    tip: "Document everything on GitHub",
    detail: "Recruiters check project quality and consistency, not just ideas.",
  },
  {
    tip: "Network beats cold applying alone",
    detail: "A thoughtful LinkedIn message to the right engineer can help a lot.",
  },
];

function getTopicKey(monthIndex, trackIndex, itemIndex) {
  return `${monthIndex}-${trackIndex}-${itemIndex}`;
}

function getMonthStats(monthIndex, completedTopics) {
  const month = roadmap[monthIndex];
  const total = month.tracks.reduce((sum, track) => sum + track.items.length, 0);
  const completed = month.tracks.reduce((sum, track, trackIndex) => {
    return (
      sum +
      track.items.filter((_, itemIndex) => completedTopics[getTopicKey(monthIndex, trackIndex, itemIndex)]).length
    );
  }, 0);

  return { total, completed };
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 640;
  });

  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth <= 640);
    }

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile;
}

export default function PlacementRoadmap() {
  const [activeMonth, setActiveMonth] = useState(0);
  const [activeTrack, setActiveTrack] = useState(0);
  const [completedTopics, setCompletedTopics] = useState({});
  const isMobile = useIsMobile();

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
      setCompletedTopics(JSON.parse(saved));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedTopics));
  }, [completedTopics]);

  const current = roadmap[activeMonth];
  const currentTrackItems = current.tracks[activeTrack].items;

  const currentTrackCompleted = useMemo(() => {
    return currentTrackItems.filter((_, itemIndex) => {
      return completedTopics[getTopicKey(activeMonth, activeTrack, itemIndex)];
    }).length;
  }, [activeMonth, activeTrack, completedTopics, currentTrackItems]);

  const monthStats = useMemo(() => getMonthStats(activeMonth, completedTopics), [activeMonth, completedTopics]);
  const monthProgress = monthStats.total ? Math.round((monthStats.completed / monthStats.total) * 100) : 0;

  function toggleTopic(monthIndex, trackIndex, itemIndex) {
    const key = getTopicKey(monthIndex, trackIndex, itemIndex);
    setCompletedTopics((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  function goToMonth(direction) {
    setActiveMonth((prev) => Math.min(Math.max(prev + direction, 0), roadmap.length - 1));
    setActiveTrack(0);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(78,205,196,0.12), transparent 32%), linear-gradient(180deg, #0A0A0F 0%, #101018 100%)",
        fontFamily: "'Courier New', monospace",
        color: "#E8E8E8",
        padding: "0",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #0A0A0F 0%, #12121A 50%, #0A0A0F 100%)",
          borderBottom: "1px solid #1E1E2E",
          padding: isMobile ? "20px 16px 18px" : "32px 24px 24px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: `linear-gradient(90deg, ${roadmap.map((r) => r.color).join(", ")})`,
          }}
        />
        <div
          style={{
            fontSize: isMobile ? "10px" : "12px",
            color: "#666",
            letterSpacing: isMobile ? "2px" : "4px",
            marginBottom: "8px",
            textTransform: "uppercase",
          }}
        >
          BTech 4th Year - Dream Job
        </div>
        <h1
          style={{
            fontSize: isMobile ? "28px" : "clamp(24px, 5vw, 42px)",
            lineHeight: 1.1,
            fontWeight: "900",
            margin: "0 0 8px",
            background: "linear-gradient(90deg, #FF6B35, #4ECDC4, #C9B1FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-1px",
          }}
        >
          6-MONTH PLACEMENT ROADMAP
        </h1>
        <p style={{ color: "#8B8B97", fontSize: isMobile ? "12px" : "13px", margin: 0 }}>
          DSA · Dev Skills · AI/Cloud · Resume · Interviews
        </p>
        <div
          style={{
            marginTop: "14px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "999px",
            padding: "8px 12px",
            fontSize: isMobile ? "11px" : "12px",
            color: "#B8B8C7",
          }}
        >
          <span>{"\u{1F4F1}"}</span>
          Add to home screen to use this like a mobile app
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "8px",
          padding: isMobile ? "14px 12px" : "20px 16px",
          overflowX: "auto",
          scrollbarWidth: "none",
          background: "rgba(13,13,20,0.92)",
          borderBottom: "1px solid #1A1A26",
          position: "sticky",
          top: 0,
          zIndex: 5,
          backdropFilter: "blur(10px)",
        }}
      >
        {roadmap.map((month, monthIndex) => {
          const stats = getMonthStats(monthIndex, completedTopics);
          return (
            <button
              key={month.month}
              onClick={() => {
                setActiveMonth(monthIndex);
                setActiveTrack(0);
              }}
              style={{
                flex: "0 0 auto",
                minWidth: isMobile ? "132px" : "unset",
                padding: isMobile ? "10px 12px" : "10px 16px",
                borderRadius: "12px",
                border: `1.5px solid ${activeMonth === monthIndex ? month.color : "#1E1E2E"}`,
                background: activeMonth === monthIndex ? `${month.color}18` : "transparent",
                color: activeMonth === monthIndex ? month.color : "#666",
                cursor: "pointer",
                fontSize: isMobile ? "11px" : "12px",
                fontFamily: "inherit",
                fontWeight: "700",
                letterSpacing: "0.6px",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {month.icon} {month.month.toUpperCase()}
              <div style={{ fontSize: "10px", marginTop: "4px", opacity: 0.9 }}>
                {stats.completed}/{stats.total} done
              </div>
            </button>
          );
        })}
      </div>

      <div style={{ padding: isMobile ? "14px 12px 28px" : "20px 16px 32px", maxWidth: "760px", margin: "0 auto" }}>
        <div
          style={{
            background: `linear-gradient(135deg, ${current.color}15 0%, ${current.color}08 100%)`,
            border: `1px solid ${current.color}30`,
            borderLeft: `4px solid ${current.color}`,
            borderRadius: "18px",
            padding: isMobile ? "16px" : "20px",
            marginBottom: "16px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.16)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: "12px",
              marginBottom: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", width: "100%" }}>
              <span style={{ fontSize: isMobile ? "24px" : "28px" }}>{current.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "11px", color: current.color, letterSpacing: "3px", fontWeight: "700" }}>
                  {current.month.toUpperCase()}
                </div>
                <div style={{ fontSize: isMobile ? "16px" : "18px", fontWeight: "900", color: "#F0F0F0", letterSpacing: "-0.5px" }}>
                  {current.theme}
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: isMobile ? "stretch" : "auto",
                minWidth: isMobile ? "unset" : "88px",
                textAlign: isMobile ? "left" : "right",
                fontSize: "11px",
                color: current.color,
                fontWeight: "700",
              }}
            >
              {monthStats.completed}/{monthStats.total} done
            </div>
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "#AAA",
              fontStyle: "italic",
              borderTop: `1px solid ${current.color}20`,
              paddingTop: "10px",
              marginBottom: "14px",
            }}
          >
            {"\u{1F4A1}"} {current.focus}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ flex: 1, height: "10px", background: "#151521", borderRadius: "999px", overflow: "hidden" }}>
              <div
                style={{
                  width: `${monthProgress}%`,
                  height: "100%",
                  background: `linear-gradient(90deg, ${current.color}, ${current.accent})`,
                  borderRadius: "999px",
                  transition: "width 0.2s ease",
                }}
              />
            </div>
            <div style={{ fontSize: "11px", color: "#DDD", minWidth: "44px", textAlign: "right" }}>{monthProgress}%</div>
          </div>
          {isMobile ? (
            <div style={{ display: "flex", gap: "10px", marginTop: "14px" }}>
              <button
                onClick={() => goToMonth(-1)}
                disabled={activeMonth === 0}
                style={{
                  flex: 1,
                  padding: "11px 12px",
                  borderRadius: "12px",
                  border: "1px solid #242436",
                  background: activeMonth === 0 ? "#111118" : "#141420",
                  color: activeMonth === 0 ? "#4D4D5D" : "#E8E8E8",
                  fontFamily: "inherit",
                  cursor: activeMonth === 0 ? "default" : "pointer",
                }}
              >
                Previous
              </button>
              <button
                onClick={() => goToMonth(1)}
                disabled={activeMonth === roadmap.length - 1}
                style={{
                  flex: 1,
                  padding: "11px 12px",
                  borderRadius: "12px",
                  border: "none",
                  background: activeMonth === roadmap.length - 1 ? "#25252B" : current.color,
                  color: "#0A0A0F",
                  fontWeight: "700",
                  fontFamily: "inherit",
                  cursor: activeMonth === roadmap.length - 1 ? "default" : "pointer",
                }}
              >
                Next Month
              </button>
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
          {current.tracks.map((track, trackIndex) => {
            const done = track.items.filter((_, itemIndex) => {
              return completedTopics[getTopicKey(activeMonth, trackIndex, itemIndex)];
            }).length;

            return (
              <button
                key={track.name}
                onClick={() => setActiveTrack(trackIndex)}
                style={{
                  flex: isMobile ? "1 1 calc(50% - 4px)" : "0 0 auto",
                  minWidth: isMobile ? "0" : "unset",
                  padding: isMobile ? "10px 12px" : "8px 14px",
                  borderRadius: "14px",
                  border: `1.5px solid ${activeTrack === trackIndex ? current.color : "#222"}`,
                  background: activeTrack === trackIndex ? `${current.color}22` : "#111",
                  color: activeTrack === trackIndex ? current.color : "#666",
                  cursor: "pointer",
                  fontSize: isMobile ? "11px" : "12px",
                  fontFamily: "inherit",
                  fontWeight: "700",
                  transition: "all 0.2s",
                }}
              >
                {track.name}
                <div style={{ fontSize: "10px", marginTop: "4px" }}>
                  {done}/{track.items.length}
                </div>
              </button>
            );
          })}
        </div>

        <div
          style={{
            background: "#0E0E18",
            border: "1px solid #1A1A2A",
            borderRadius: "18px",
            padding: isMobile ? "16px" : "20px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: isMobile ? "flex-start" : "center",
              gap: "8px",
              marginBottom: "14px",
            }}
          >
            <div style={{ fontSize: "14px", fontWeight: "800", color: current.color, letterSpacing: "1px" }}>
              Track: {current.tracks[activeTrack].name.toUpperCase()}
            </div>
            <div style={{ fontSize: "11px", color: "#888" }}>
              {currentTrackCompleted}/{currentTrackItems.length} checked
            </div>
          </div>

          {currentTrackItems.map((item, itemIndex) => {
            const isCompleted = !!completedTopics[getTopicKey(activeMonth, activeTrack, itemIndex)];

            return (
              <label
                key={`${activeMonth}-${activeTrack}-${itemIndex}`}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: isMobile ? "10px" : "12px",
                  padding: isMobile ? "14px 0" : "12px 0",
                  borderBottom: itemIndex < currentTrackItems.length - 1 ? "1px solid #1A1A2A" : "none",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={isCompleted}
                  onChange={() => toggleTopic(activeMonth, activeTrack, itemIndex)}
                  style={{
                    marginTop: "2px",
                    width: isMobile ? "18px" : "16px",
                    height: isMobile ? "18px" : "16px",
                    accentColor: current.color,
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: isMobile ? "14px" : "13px",
                    color: isCompleted ? current.accent : "#CCC",
                    lineHeight: "1.5",
                    textDecoration: isCompleted ? "line-through" : "none",
                    opacity: isCompleted ? 0.75 : 1,
                  }}
                >
                  {item}
                </span>
              </label>
            );
          })}
        </div>

        <div
          style={{
            background: `${current.color}12`,
            border: `1px dashed ${current.color}50`,
            borderRadius: "16px",
            padding: isMobile ? "14px 16px" : "14px 18px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <span style={{ fontSize: "18px" }}>{"\u{1F3AF}"}</span>
          <div>
            <div style={{ fontSize: "10px", color: current.color, letterSpacing: "2px", marginBottom: "2px" }}>
              MONTH TARGET
            </div>
            <div style={{ fontSize: isMobile ? "12px" : "13px", fontWeight: "700", color: "#DDD" }}>{current.target}</div>
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div style={{ fontSize: "11px", color: "#444", letterSpacing: "3px", marginBottom: "14px" }}>
            FULL TIMELINE OVERVIEW
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {roadmap.map((month, monthIndex) => {
              const stats = getMonthStats(monthIndex, completedTopics);
              return (
                <div
                  key={month.month}
                  onClick={() => {
                    setActiveMonth(monthIndex);
                    setActiveTrack(0);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: isMobile ? "14px 12px" : "12px 14px",
                    cursor: "pointer",
                    background: activeMonth === monthIndex ? `${month.color}12` : "transparent",
                    borderLeft: `3px solid ${activeMonth === monthIndex ? month.color : "#1A1A2A"}`,
                    transition: "all 0.2s",
                    borderBottom: "1px solid #111",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>{month.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "11px", color: activeMonth === monthIndex ? month.color : "#444", fontWeight: "700" }}>
                      {month.month}
                    </div>
                    <div style={{ fontSize: "12px", color: activeMonth === monthIndex ? "#CCC" : "#555" }}>
                      {month.theme}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      background: `${month.color}20`,
                      color: month.color,
                      padding: "4px 8px",
                      borderRadius: "999px",
                      letterSpacing: "0.5px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {stats.completed}/{stats.total}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div style={{ fontSize: "11px", color: "#444", letterSpacing: "3px", marginBottom: "14px" }}>
            TOP FREE RESOURCES
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px" }}>
            {resources.map((resource) => (
              <a
                key={resource.name}
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#0E0E18",
                  border: "1px solid #1A1A2A",
                  borderRadius: "16px",
                  padding: isMobile ? "14px" : "12px",
                  textDecoration: "none",
                  transition: "transform 0.2s ease, border-color 0.2s ease",
                  display: "block",
                  color: "inherit",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ fontSize: isMobile ? "20px" : "18px", marginBottom: "6px" }}>{resource.emoji}</div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "#777",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    Open link
                  </div>
                </div>
                <div style={{ fontSize: isMobile ? "13px" : "12px", color: "#DDD", fontWeight: "700", marginBottom: "4px" }}>
                  {resource.name}
                </div>
                <div style={{ fontSize: "10px", color: "#777", marginBottom: "6px", letterSpacing: "1px" }}>
                  {resource.type.toUpperCase()}
                </div>
                <div style={{ fontSize: "11px", color: "#5F5F73", wordBreak: "break-word" }}>{resource.source}</div>
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #0E0E18, #12121F)",
            border: "1px solid #1E1E30",
            borderRadius: "18px",
            padding: isMobile ? "16px" : "20px",
            marginBottom: "20px",
          }}
        >
          <div style={{ fontSize: "11px", color: "#444", letterSpacing: "3px", marginBottom: "14px" }}>
            PRO TIPS FOR PLACEMENTS
          </div>
          {proTips.map((tip, index) => (
            <div
              key={tip.tip}
              style={{
                padding: "10px 0",
                borderBottom: index < proTips.length - 1 ? "1px solid #141420" : "none",
              }}
            >
              <div style={{ fontSize: isMobile ? "14px" : "13px", color: "#F0F0F0", fontWeight: "700", marginBottom: "3px" }}>
                {">"} {tip.tip}
              </div>
              <div style={{ fontSize: "12px", color: "#555" }}>{tip.detail}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "16px 12px",
            borderTop: "1px solid #111",
            fontSize: "11px",
            color: "#444",
            letterSpacing: "1px",
          }}
        >
          CONSISTENCY BEATS INTENSITY · 6 MONTHS · 1 GOAL
        </div>
      </div>
    </div>
  );
}
