export const projects = [
  {
    slug: 'doubledescent',
    title: 'Overparameterization',
    pageTitle: 'Double Descent Research',
    subtitle: 'Final research project for my deep learning theory class',
    image: '/images/double_descent.jpeg',
    blurb: 'Research on the theoretical backing of the double descent phenomenon',
  },
  {
    slug: 'dlt',
    title: 'Deep Learning Theory',
    subtitle: 'Intereseting problems from my homework',
    image: '/images/dlt.jpeg',
    blurb: 'Various interesting proofs that I spent many hours on for my graudate course in DL theory',
  },
  {
    slug: 'neat',
    title: 'NEAT Implementation',
    cardTitle: 'Neuroevolution of Augmenting Topologies',
    subtitle: 'An implementation of Neuroevolution of Augmenting Topologies',
    image: '/images/neat.gif',
    imageLayout: 'full',
    blurb: 'My implementation of the Neuroevolution of Augmenting Topologies paper',
  },
  {
    slug: 'transferlearning',
    title: 'Effects of Distribution Shift in Data Augmentation',
    cardTitle: 'Data Augmentation Research',
    subtitle: 'Final research project for Transfer Learning course',
    image: '/images/augmentation.png',
    blurb: 'Research on the effects of data augmentation on distribution shift and model performance',
  },
  {
    slug: 'halhack',
    title: 'NCSA Hackathon',
    cardTitle: 'Spacial-Temporal Prediction',
    subtitle: 'Spacial-Temporal Prediction',
    image: '/images/hal_hack.gif',
    imageLayout: 'framed',
    blurb: 'Combining 3D U-Nets and RNN to predict on spacial temporal data',
  },
  {
    slug: 'r3',
    title: 'Selective Image Content Filtering',
    subtitle: 'My submission for Nextdoor\'s internal hackathon',
    image: '/images/r3.gif',
    imageLayout: 'full',
    blurb: 'Combining discriminative and generative image methods to filter out offensive content',
  },
  {
    slug: 'ainimator',
    title: 'AI-nimator',
    subtitle: 'AI powered mouth animation',
    image: '/images/hack_illinois.gif',
    imageLayout: 'full',
    blurb: 'Using AI to generate animations matching your mouth movement',
  },
  {
    slug: 'proxy',
    title: 'C Proxy Server',
    subtitle: 'Multiclient SSL Proxy Server in C',
    image: '/images/proxy.jpeg',
    blurb: 'SSL Proxy server impelmented in C',
  },
  {
    slug: 'tangstats',
    title: 'Tang Stats',
    subtitle: 'A Quiz Bowl tournament moderation assistant',
    image: '/images/tang_stats.gif',
    blurb: 'A Quiz Bowl tournmanent moderation assistant',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}

export function projectCardTitle(project) {
  return project.cardTitle ?? project.title
}

export function projectPageTitle(project) {
  return project.pageTitle ?? project.title
}
