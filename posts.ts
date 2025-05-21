export type Post = {
  label: string;
  headline: string;
  summary: string;
  tags: string[];
  logo?: string;
  thumbnail?: string;
  projectUrl?: string;
  year?: number;
  timeframe: string;
  articlePath: string;
  featured: boolean;
  type: 'experience' | 'service';
};

export const posts: Post[] = [
  {
    label: 'HireSkills',
    headline: 'Helping developers with less traditional experience get hired.',
    summary: 'I built HireSkills with Next js, Mantine UI, Chat GPT, Prisma and deployed the frontend on Vercel. And the database on Digital Ocean.',
    tags: ['React', 'Next js', 'Javascript', 'Clerk', 'Prisma', 'SQL', 'Digital Ocean'],
    timeframe: '1 month',
    year: 2024,
    logo: 'https://hireskills.vercel.app/favicon.svg',
    projectUrl: 'https://hireskills.vercel.app/',
    type: 'experience',
    articlePath: '/work/hireskills',
    featured: true,
    thumbnail: '/hireskillsthumbnail.png',
  },
  {
    label: 'Inkker',
    headline:
      'PeersPace for the tattoo industry. It allows artists to work from multiple places and helps tattoo shops bring new talent.',
    summary:
      'Inkker was built with Strapi, Next js, Auth0 and deployed on Digital Ocean for the first version, but I am building v2 with different technologies with the goal of reducing the cost of my servers using some free tiers.',
    articlePath: '/work/inkker',
    featured: true,
    tags: [
      'React',
      'Next js',
      'Prisma',
      'Mysql',
      'Strapi',
      'Node js',
      'Javascript',
      'Mantine UI',
      'Auth0',
    ],
    timeframe: '6 months',
    year: 2023,
    logo: '/inkkerlogo.svg',
    projectUrl: 'https://www.youtube.com/watch?v=5zgk2bBR858',
    type: 'experience',
    thumbnail: '/inkkerthumbnail.png',
  },
  {
    label: 'Devtalk AI',
    headline: 'Using AI to bridge the gap between non-technical individuals and developers',
    summary:
      'I used the Open AI api, Stripe, Next js, Prisma and Auth0 to create a subscription app with a per-seat model.',
    articlePath: '/work/devtalk-ai',
    featured: true,
    tags: ['AI', 'Open AI', 'Stripe', 'Next js', 'Prisma', 'Node'],
    timeframe: '2 weeks',
    year: 2023,
    logo: '/devtalklogo.svg',
    projectUrl: 'https://github.com/nicolascalev/devtalkai',
    type: 'experience',
  },
  {
    label: '09 Tattoo automations',
    headline:
      'Automation tools for tattoo businesses. Save time and offer an improved and personalized customer experience.',
    summary:
      'I used Next js, Brevo, Vercel and Zapier to offer automation as a service completely for free.',
    articlePath: '/work/09-tattoo-automations',
    featured: true,
    tags: ['React', 'Next js', 'Javascript', 'Auth0', 'Automation', 'Zapier'],
    timeframe: '1 month',
    year: 2023,
    logo: 'https://09tattooautomations.vercel.app/favicon.svg',
    projectUrl: 'https://09tattooautomations.vercel.app/',
    type: 'service',
    thumbnail: '/9ta-thumbnail.png',
  },
  {
    label: 'Toptierperk',
    headline:
      'I developed a B2B platform where employers can find discounts or benefits for their employees.',
    summary:
      'I developed a B2B platform where employers can find discounts or benefits for their employees.',
    articlePath: '/work/toptierperk',
    featured: false,
    tags: ['React', 'Next js', 'Javascript', 'Auth0', 'Prisma', 'SQL', 'B2B'],
    timeframe: '9 months',
    year: 2022,
    logo: '/ttplogo.png',
    type: 'experience',
    projectUrl: 'https://github.com/nicolascalev/toptierperk-next',
  },
];

export const featuredPosts = posts.filter((post) => post.featured === true);
