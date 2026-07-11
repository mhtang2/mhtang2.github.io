/** Homepage content and section config (single source for nav + sections). */

export const profile = {
  name: 'Matthew Tang',
  header: {
    role: 'Agent SWE @ Decagon',
    details: ["UIUC CS '24", 'Interested in deep learning theory and applications'],
  },
  about: [
    "Hi! I'm Matthew. I graduated from the University of Illinois at Urbana-Champaign in 2024 with my Bachelors and Masters in Computer Science.",
    "I'm currently an Agent SWE at Decagon, where I build CX agents. Before that, I founded Sublingual AI, which was backed by Y Combinator. We pivoted a bunch and built some really cool stuff along the way.",
    'Earlier, I was a Machine Learning Engineer at TikTok on the social recommendation team, working on friend recommendation and social content recommendation.',
  ],
  resumeHref: '/resources/Matthew Tang Resume.pdf',
  profileImage: '/images/profile2.jpg',
}

export const homeSections = [
  {
    id: 'intro',
    navLabel: 'About',
    navLabelFull: 'About Me',
    heading: 'About Me',
  },
  {
    id: 'projects',
    navLabel: 'Projects',
    navLabelFull: 'Projects',
    heading: 'Some Cool Projects',
    centered: true,
  },
  {
    id: 'experience',
    navLabel: 'Experience',
    navLabelFull: 'Professional Experience',
    heading: 'Professional Experience',
    centered: true,
  },
]
