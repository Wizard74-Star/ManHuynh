import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    name: 'Man Huynh',
    title: 'Full-Stack Developer | Blockchain Engineer',
    location: 'Duy Xuyen, Vietnam',
    description: "Need an expert to elevate your digital projects with cutting-edge full-stack AI solutions? I'm a seasoned developer specializing in building robust, scalable applications using React, Next.js, FastAPI, and Web3 technologies to drive innovation in SaaS, blockchain, and automation.",
  },
  experience: [
    {
      id: 1,
      title: 'Senior AI Full-Stack Developer',
      company: 'Goal AI',
      period: 'February 2023 – June 2025',
      location: 'Remote, USA',
      description: 'Led development of cutting-edge AI-powered applications and scalable full-stack solutions, driving innovation in SaaS platforms and automation systems.',
      achievements: [
        'Architected and developed full-stack AI solutions using React, Next.js, Python, and FastAPI, delivering high-performance applications that serve enterprise clients',
        'Designed and implemented robust backend APIs and microservices with Python (FastAPI) and Node.js, ensuring scalability and reliability for data-intensive applications',
        'Deployed and optimized cloud infrastructure on AWS, implementing containerization and CI/CD pipelines for efficient deployment workflows',
        'Collaborated with cross-functional teams to integrate AI capabilities into existing platforms, enhancing automation and driving business value',
      ],
    },
    {
      id: 2,
      title: 'Senior Full-Stack Developer',
      company: 'Transformr',
      period: 'May 2021 – December 2022',
      location: 'Remote, Australia',
      description: 'Developed scalable full-stack applications and SaaS platforms, focusing on frontend excellence and backend performance optimization.',
      achievements: [
        'Built responsive and engaging user interfaces using React, Next.js, and TypeScript, enhancing user engagement and application performance',
        'Developed high-performance backend services using Node.js, Python, and FastAPI, creating reliable APIs for seamless integration with third-party services',
        'Implemented cloud solutions on AWS with containerization strategies, optimizing deployments and ensuring scalable infrastructure',
        'Delivered end-to-end SaaS solutions from concept to launch, focusing on security, scalability, and maintainability',
      ],
    },
    {
      id: 3,
      title: 'Senior Full-Stack Developer | Web3 Engineer',
      company: 'SphinxJSC',
      period: 'April 2020 – April 2021',
      location: 'Remote, Ho Chi Minh City, Vietnam',
      description: 'Specialized in developing decentralized applications (dApps) and Web3 solutions, combining full-stack expertise with blockchain technologies.',
      achievements: [
        'Designed and developed decentralized applications (dApps) using React, Next.js, and Web3 technologies, enabling secure blockchain transactions',
        'Implemented smart contracts using Solidity and Rust, ensuring secure and efficient blockchain integrations for client projects',
        'Built full-stack applications with React and Node.js, integrating Web3 libraries for seamless blockchain connectivity',
        'Collaborated with blockchain development teams to create innovative solutions for decentralized finance and NFT platforms',
      ],
    },
    {
      id: 4,
      title: 'Full-Stack & Blockchain Developer',
      company: 'Smartlife',
      period: 'August 2018 – February 2020',
      location: 'Ho Chi Minh City, Vietnam',
      description: 'Developed full-stack applications with blockchain integration, delivering secure and scalable solutions for innovative projects.',
      achievements: [
        'Built comprehensive full-stack applications using React, JavaScript, Python, and Django, delivering robust web solutions',
        'Integrated blockchain technologies and smart contracts using Solidity, enabling secure decentralized features in applications',
        'Developed RESTful APIs and backend services using Node.js and Python (Django, FastAPI), ensuring high performance and reliability',
        'Implemented cloud deployment strategies on AWS, optimizing application performance and ensuring scalable infrastructure',
      ],
    },
    {
      id: 5,
      title: 'Full-Stack Developer',
      company: 'FPT Software',
      period: 'January 2015 – June 2018',
      location: 'Ho Chi Minh City, Vietnam',
      description: 'Developed full-stack web applications and enterprise solutions, building expertise in modern frontend and backend technologies.',
      achievements: [
        'Built responsive web applications using React, JavaScript, and TypeScript, creating engaging user interfaces for enterprise clients',
        'Developed backend services and APIs using Node.js and Python, ensuring reliable data handling and application logic',
        'Collaborated with development teams to deliver end-to-end solutions, focusing on code quality and best practices',
        'Gained extensive experience in full-stack development, setting the foundation for advanced skills in AI, blockchain, and cloud technologies',
      ],
    },
  ],
  education: {
    degree: 'Bachelor of Science in Information Technology',
    university: 'FPT University',
    period: '2010 – 2014',
    location: 'Vietnam',
    description: 'Focused on software engineering, information systems, and web technologies. Completed comprehensive coursework in full-stack development, database systems, and software architecture. Gained foundational knowledge that has been enhanced through years of professional experience in building scalable applications, AI solutions, and blockchain technologies.',
  },
  skills: {
    frontend: [
      'React – component-based UIs and interactive user experiences',
      'Next.js – SEO-optimized SSR and performance optimization',
      'Svelte – modern JavaScript framework for building user interfaces',
      'JavaScript – core programming language for web development',
      'TypeScript – type-safe JavaScript for scalable applications',
    ],
    backend: [
      'Node.js – server-side JavaScript development',
      'Python – backend development and data processing',
      'FastAPI – modern, fast Python web framework for APIs',
      'Django – high-level Python web framework',
      'RESTful APIs and API Integration',
    ],
    blockchain: [
      'Web3 – blockchain integration and decentralized applications',
      'Smart Contract – blockchain-based contract development',
      'Rust – systems programming for blockchain and performance-critical applications',
      'Solidity – programming language for Ethereum smart contracts',
      'Decentralized Apps (dApps) Development',
    ],
    cloud: [
      'Amazon Web Services (AWS) – cloud deployment and infrastructure',
      'Cloud Computing and Infrastructure Management',
      'Containerization and CI/CD Pipelines',
    ],
    tools: [
      'Git – version control and collaboration',
      'Docker – containerization for application deployment',
      'Kubernetes – container orchestration and management',
      'CI/CD tools – continuous integration and deployment pipelines',
      'SaaS Development – end-to-end platform development',
      'API Integration and Development',
      'Secure Coding and Scalable Systems',
    ],
  },
  projects: [
    {
      id: 1,
      title: 'SprintIQ',
      description: 'AI-powered sprint planning platform that helps startups turn chaos into clarity. Developed with React.js and Next.js for the frontend, providing SEO-optimized server-side rendering and state management with Redux. Built scalable backend services using Python (FastAPI) and Node.js (Express.js) with microservices architecture. Integrated AI algorithms for automated product roadmap generation and sprint planning. Features include automated prioritization based on market impact data, real-time progress tracking via WebSockets, and patent-pending algorithms to prevent planning debt. Deployed on AWS with Docker and Kubernetes for high availability.',
      url: 'https://sprintiq.ai',
      image: '',
      imageName: 'sprintiq.png',
      role: 'Developed the frontend using React.js and Next.js with Redux for state management, ensuring optimal SEO and performance. Built RESTful and GraphQL APIs using Python FastAPI and Node.js Express.js. Integrated AI services for automated sprint planning and roadmap generation. Implemented real-time analytics dashboards using WebSockets and Redis caching. Deployed on AWS (EC2, S3, Lambda) with Docker containerization and Kubernetes orchestration.',
      technologies: ['React.js', 'Next.js', 'Redux', 'Python', 'FastAPI', 'Node.js', 'Express.js', 'GraphQL', 'WebSockets', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Kubernetes', 'TypeScript'],
    },
    {
      id: 2,
      title: 'LoyalAI',
      description: 'Mobile and web application for relationship tracking and emotional connection. Built with React.js and Vue.js for the web platform, providing responsive user interfaces with Tailwind CSS. Developed scalable backend services using Python (Django, FastAPI) and Golang for high-performance real-time relationship scoring. Features include daily love tracker slider, smart relationship score visualization with real-time updates via WebSockets, AI-powered relationship companion, and home screen widgets for iOS and Android. Uses MongoDB for flexible data storage and Redis for real-time caching.',
      url: 'https://www.loyal-app.com/',
      image: '',
      imageName: 'loyalai.png',
      role: 'Developed responsive web application using React.js and Vue.js with Tailwind CSS and Material UI for modern UI/UX. Built RESTful and GraphQL APIs using Python (Django, FastAPI) and Golang for backend services. Implemented real-time features using WebSockets for live relationship scoring updates. Integrated AI services for personalized relationship insights and analytics. Used MongoDB for flexible schema design and Redis for caching and session management. Deployed on AWS with Docker containers.',
      technologies: ['React.js', 'Vue.js', 'Tailwind CSS', 'Material UI', 'Python', 'Django', 'FastAPI', 'Golang', 'GraphQL', 'WebSockets', 'MongoDB', 'Redis', 'AWS', 'Docker', 'TypeScript'],
    },
    {
      id: 3,
      title: 'iTechDev',
      description: 'Enterprise software factory website showcasing custom development services. Built with Next.js and React.js for modern frontend experiences with server-side rendering and SEO optimization. Developed backend services using Python (FastAPI) and Node.js (Nest.js) with microservices architecture. Integrated multilingual support for Spanish and English with internationalization. Features include responsive design with Tailwind CSS, service portfolio displays, client testimonials, real-time contact forms, and comprehensive technology stack presentations. Uses PostgreSQL for data storage and Redis for caching.',
      url: 'https://itechdev.com.mx/',
      image: '',
      imageName: 'ITechdev.png',
      role: 'Developed the enterprise website using Next.js and React.js with Redux for state management, ensuring optimal SEO and performance. Built RESTful APIs using Python FastAPI and Node.js Nest.js following microservices architecture. Created responsive layouts with Tailwind CSS optimized for enterprise clients with multilingual support. Implemented PostgreSQL database design and Redis caching for improved performance. Deployed on AWS with CI/CD pipelines using GitHub Actions.',
      technologies: ['Next.js', 'React.js', 'Redux', 'Tailwind CSS', 'Python', 'FastAPI', 'Node.js', 'Nest.js', 'PostgreSQL', 'Redis', 'AWS', 'GitHub Actions', 'TypeScript'],
    },
    {
      id: 4,
      title: 'SotaTek',
      description: 'Enterprise software solutions platform delivering innovative digital transformation services. Built with React and Next.js for the frontend, providing responsive and modern user interfaces with server-side rendering for optimal performance and SEO. Developed scalable backend APIs using Python (FastAPI, Django) and Node.js to support enterprise-level applications. Features include comprehensive service portfolios, client case studies, multilingual support, and seamless integration capabilities. Deployed on AWS with containerization and CI/CD pipelines for reliable, scalable infrastructure.',
      url: 'https://www.sotatek.com/',
      image: '',
      imageName: 'sotatek.png',
      role: 'Developed the enterprise platform frontend using React and Next.js, ensuring optimal performance and SEO. Built robust backend services and RESTful APIs using Python (FastAPI, Django) and Node.js. Created responsive, modern UI components with TypeScript. Implemented scalable architecture and cloud deployment on AWS. Delivered end-to-end SaaS solutions focusing on security, scalability, and maintainability.',
      technologies: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Python', 'FastAPI', 'Django', 'Node.js', 'AWS', 'API Integration'],
    },
    {
      id: 5,
      title: 'MrMint NFT Marketplace',
      description: 'Decentralized NFT marketplace and Web3 platform featuring virtual crypto mining in the metaverse. Built with React and Next.js for the frontend, providing seamless blockchain integration. Developed Web3-enabled backend services using Node.js and Python (FastAPI) with smart contract integration. Features include NFT marketplace, mystery box sales, token swapping, virtual mining experiences, and comprehensive blockchain wallet connectivity. Integrated smart contracts using Solidity for secure NFT transactions and token operations.',
      url: 'https://nft.mrmint.io/',
      image: '',
      imageName: 'mrmint.png',
      role: 'Developed the Web3 NFT marketplace frontend using React and Next.js with Web3 library integration. Built backend services using Node.js and Python (FastAPI) for blockchain API integration. Implemented smart contract interactions using Solidity. Created decentralized application (dApp) features for NFT trading, virtual mining, and token swapping. Integrated Web3 wallet connectivity for seamless blockchain transactions.',
      technologies: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Web3', 'Solidity', 'Smart Contract', 'Node.js', 'Python', 'FastAPI', 'Blockchain', 'dApps'],
    },
    {
      id: 6,
      title: 'Coin98 Super Wallet',
      description: 'Comprehensive Web3 wallet platform providing secure access to the open internet and blockchain ecosystem. Built with React, Next.js, and TypeScript for the frontend, delivering responsive user interfaces and cross-platform compatibility. Developed scalable backend services using Node.js and Python to support multi-chain operations across 140+ blockchains. Features include universal wallet for all crypto assets, integrated dApp browser, secure transaction management, hardware wallet support, and AI-powered security protection. Supports 20K+ compatible dApps with seamless blockchain connectivity.',
      url: 'https://coin98.com/',
      image: '',
      imageName: 'coin98.png',
      role: 'Developed the Web3 wallet platform frontend using React, Next.js, and TypeScript for cross-platform compatibility. Built backend APIs and services using Node.js and Python (FastAPI) for multi-chain blockchain integration. Implemented Web3 functionality for wallet connectivity and transaction management. Created secure infrastructure for managing crypto assets across 140+ blockchains. Integrated dApp browser and API services for seamless blockchain interactions.',
      technologies: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Web3', 'Node.js', 'Python', 'FastAPI', 'Blockchain', 'Smart Contract', 'dApps', 'API Integration'],
    }
  ],
  theme: {
    darkMode: false,
  },
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.theme.darkMode = !state.theme.darkMode;
    },
  },
});

export const { toggleDarkMode } = portfolioSlice.actions;
export default portfolioSlice.reducer;

