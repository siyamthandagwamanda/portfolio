export interface Skill {
  name: string;
  icon: string;
  note: string;
}

export const skills: Skill[] = [
  { name: "HTML5", icon: "🌐", note: "Semantic structure" },
  { name: "CSS3", icon: "🎨", note: "Layout & styling" },
  { name: "JavaScript", icon: "⚡", note: "Interactivity" },
  { name: "Git", icon: "🐙", note: "Version control" },
  { name: "GitHub", icon: "🚀", note: "Collaboration" },
  { name: "Responsive Design", icon: "📱", note: "Every screen size" },
];

export interface Mission {
  title: string;
  description: string;
  tags: string[];
}

export const missions: Mission[] = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio featuring dark mode, animations, and JavaScript interactions.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Landing Page",
    description:
      "Modern responsive webpage built using Flexbox and CSS Grid.",
    tags: ["Flexbox", "CSS Grid"],
  },
  {
    title: "Form Validator",
    description:
      "JavaScript application that validates user input and improves user experience.",
    tags: ["JavaScript", "UX"],
  },
];

export interface JourneyLevel {
  level: number;
  title: string;
  status: "cleared" | "current" | "locked";
  summary: string;
  skills: string[];
  achievement?: string;
  nextMission?: string;
}

export const journey: JourneyLevel[] = [
  {
    level: 1,
    title: "Front-End Explorer",
    status: "current",
    summary:
      "Every expert developer started as a beginner. First quests complete: the foundations of web development and a run of hands-on interactive projects.",
    skills: ["HTML", "CSS", "JavaScript"],
    achievement: "Completed the beginner developer journey.",
    nextMission: "Become a Full Stack Developer and ship complete apps, front to back.",
  },
  {
    level: 2,
    title: "Back-End Apprentice",
    status: "locked",
    summary: "Servers, databases, and APIs — the next quest line, not yet started.",
    skills: ["Node.js", "Databases", "APIs"],
  },
  {
    level: 3,
    title: "Full Stack Developer",
    status: "locked",
    summary: "End-to-end ownership, from interface to infrastructure.",
    skills: ["React", "Systems Design", "Deployment"],
  },
];

export const wisdom: string[] = [
  "Every bug you squash today is a boss you won't fight tomorrow.",
  "console.log() is not a debugging strategy, it is a survival instinct.",
  "Your first commit is the worst code you'll ever write. Ship it anyway.",
  "The best developers aren't the ones who never break things — they're the ones who read the error message.",
  "Git blame is not for blaming. It's for learning who to ask for help.",
  "A README is a love letter to your future self at 2am.",
  "Curiosity compiles. Fear doesn't.",
  "You don't need to know everything. You need to know how to find out.",
  "Refactoring is just admitting your past self was still learning — and that's fine.",
  "Ship small. Ship often. Ship scared if you have to.",
  "The console is quiet not because nothing is happening, but because everything is working.",
  "Ctrl+Z is proof that in code, unlike life, most mistakes are reversible.",
];
