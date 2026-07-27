export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  featured?: boolean;
  tags: string[];
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      bullets?: string[];
      code?: {
        language: string;
        code: string;
      };
    }[];
    conclusion: string;
  };
}

export const CATEGORIES = [
  "All",
  "Cloud Solutions",
  "AI & ML",
  "Web Development",
  "Mobile Apps",
  "Cybersecurity",
  "Company News",
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-scalable-microservices-nextjs-kubernetes",
    title: "Architecting Scalable Microservices with Next.js 16 & Kubernetes",
    excerpt:
      "Discover how we leverage Next.js 16 server actions, modern container orchestration, and Kubernetes to build high-availability enterprise applications.",
    category: "Cloud Solutions",
    date: "July 24, 2026",
    readTime: "6 min read",
    author: {
      name: "Avishek Rimal",
      role: "Lead Software Architect",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format",
    },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format",
    featured: true,
    tags: ["Next.js", "Kubernetes", "Microservices", "Cloud", "DevOps"],
    content: {
      intro:
        "As enterprise web applications scale to handle millions of requests per minute, traditional monolithic architectures often hit bottlenecks in elasticity and maintainability. At Orson InfoTech, we've transitioned to a decoupled microservices paradigm leveraging Next.js 16 as our unified full-stack frontend layer backed by Kubernetes clusters.",
      sections: [
        {
          heading: "Why Next.js 16 for Enterprise Frontend Routing",
          body: "Next.js 16 introduces enhanced React Server Components (RSC) streaming, parallel routes, and built-in edge caching. By decoupling UI rendering from heavy business microservices, application boot times and initial Time To First Byte (TTFB) decrease by over 60%.",
          bullets: [
            "Edge side caching for instant payload delivery.",
            "Independent service deployments without frontend downtime.",
            "Seamless fallback routes and partial page hydration.",
          ],
        },
        {
          heading: "Container Orchestration with Kubernetes",
          body: "Deploying services into isolated Docker containers is only half the battle. Kubernetes automates container scheduling, auto-scaling based on CPU/Memory thresholds, and self-healing when health checks fail.",
          code: {
            language: "yaml",
            code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: orson-api-service
spec:
  replicas: 5
  selector:
    matchLabels:
      app: api-service
  template:
    metadata:
      labels:
        app: api-service
    spec:
      containers:
      - name: api
        image: orson/api-service:v2.4.0
        ports:
        - containerPort: 8080`,
          },
        },
        {
          heading: "Key Performance Metrics Realized",
          body: "Through our benchmarks across client projects, migrating to this hybrid microservice cloud architecture yielded impressive outcomes:",
          bullets: [
            "99.99% uptime during surge traffic events.",
            "Sub-50ms server responses globally via Edge CDNs.",
            "40% reduction in cloud infrastructure costs through dynamic pod auto-scaling.",
          ],
        },
      ],
      conclusion:
        "Building modern cloud-native systems requires careful balancing of developer experience and operational reliability. By pairing Next.js 16 with Kubernetes, engineering teams gain both agility and robust scale.",
    },
  },
  {
    slug: "future-of-ai-in-enterprise-software-2026",
    title: "The Future of AI Integration in Modern Enterprise Software",
    excerpt:
      "How generative AI, agentic workflows, and local LLMs are transforming enterprise automation, decision making, and user experiences.",
    category: "AI & ML",
    date: "July 18, 2026",
    readTime: "5 min read",
    author: {
      name: "Suman Shrestha",
      role: "Head of AI Engineering",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format",
    },
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format",
    featured: false,
    tags: ["Artificial Intelligence", "LLMs", "Automation", "Enterprise Tech"],
    content: {
      intro:
        "AI is no longer just a feature—it is becoming the foundational core of enterprise software systems. From autonomous task agents to contextual data retrieval, modern businesses rely on AI solutions to drive unprecedented efficiency.",
      sections: [
        {
          heading: "Agentic Workflows vs traditional Chatbots",
          body: "Traditional chatbots simply responded to prompts. Agentic systems actively execute multi-step workflows: querying databases, generating code, invoking APIs, and verifying results autonomously.",
          bullets: [
            "Autonomous multi-step reasoning capabilities.",
            "Real-time API tool invocation and error handling.",
            "Human-in-the-loop validation for critical actions.",
          ],
        },
        {
          heading: "Privacy-First On-Premise LLMs",
          body: "For financial and healthcare institutions, data privacy is paramount. Orson InfoTech deploys quantized open-weights models locally inside secure client VPCs, ensuring zero data leakage to external providers.",
        },
      ],
      conclusion:
        "Embracing AI-driven agentic architectures equips enterprises with agile decision-making engines capable of operating 24/7 without friction.",
    },
  },
  {
    slug: "mastering-tailwind-v4-and-design-systems",
    title: "Mastering Modern CSS & Design Systems in Large-Scale Web Apps",
    excerpt:
      "A deep dive into Tailwind CSS v4, custom utility layers, fluid typography, and glassmorphism design tokens for high-performance applications.",
    category: "Web Development",
    date: "July 12, 2026",
    readTime: "4 min read",
    author: {
      name: "Pooja Gurung",
      role: "UI/UX & Frontend Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format",
    },
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format",
    featured: false,
    tags: ["CSS", "Tailwind CSS", "UI/UX", "Design Systems"],
    content: {
      intro:
        "Design systems bring alignment between product designers and frontend developers. With Tailwind CSS v4's unified `@theme` directive, creating consistent, accessible, and ultra-sleek web applications has never been simpler.",
      sections: [
        {
          heading: "Leveraging Native CSS Variables & HSL Color Tokens",
          body: "Defining color palettes as HSL variables allows seamless theme switching between light and dark modes while maintaining rich contrast ratios.",
          code: {
            language: "css",
            code: `@theme {
  --color-primary: hsl(var(--primary));
  --color-secondary: hsl(var(--secondary));
  --shadow-elevated: 0 20px 50px -12px hsl(207 50% 19% / 0.2);
}`,
          },
        },
        {
          heading: "Micro-Animations & Visual Hierarchy",
          body: "Subtle hover transitions, glassmorphic backdrop filters, and sleek entry animations increase user engagement and provide immediate feedback for interactive elements.",
        },
      ],
      conclusion:
        "Investing in a disciplined design system yields exponential benefits in feature speed, visual consistency, and overall code maintainability.",
    },
  },
  {
    slug: "mobile-app-performance-optimization-react-native",
    title: "10 Proven Strategies to Optimize React Native App Performance",
    excerpt:
      "Learn how to achieve smooth 60 FPS animations, minimize bundle size, and reduce cold startup times in cross-platform mobile apps.",
    category: "Mobile Apps",
    date: "June 28, 2026",
    readTime: "7 min read",
    author: {
      name: "Rohan Adhikari",
      role: "Senior Mobile Developer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format",
    },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format",
    featured: false,
    tags: ["React Native", "Mobile Development", "Performance", "iOS", "Android"],
    content: {
      intro:
        "Delivering a native-feeling experience in React Native applications requires strict attention to memory management, JS thread utilization, and rendering efficiency.",
      sections: [
        {
          heading: "1. Upgrade to the New Architecture (Fabric & TurboModules)",
          body: "The New Architecture replaces the asynchronous JSON bridge with C++ JSI (JavaScript Interface), enabling direct synchronous calls between JS and Native threads.",
        },
        {
          heading: "2. Optimize List Rendering with FlashList",
          body: "Recycling cell components during fast scrolling prevents frame drops and reduces memory usage significantly over standard FlatList implementation.",
        },
      ],
      conclusion:
        "By enforcing performance profiling throughout the development lifecycle, React Native apps can easily match native Swift and Kotlin applications in fluid responsiveness.",
    },
  },
  {
    slug: "zero-trust-cybersecurity-architecture",
    title: "Implementing Zero-Trust Security Architecture in Enterprise Apps",
    excerpt:
      "Protect your cloud data and user endpoints with identity-centric security models, automated audit trails, and end-to-end encryption.",
    category: "Cybersecurity",
    date: "June 15, 2026",
    readTime: "5 min read",
    author: {
      name: "Avishek Rimal",
      role: "Lead Software Architect",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format",
    },
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format",
    featured: false,
    tags: ["Security", "Zero Trust", "Encryption", "Cybersecurity"],
    content: {
      intro:
        "The traditional security perimeter is obsolete in today's remote and cloud-first workforce. Zero-Trust operates on a strict principle: 'Never Trust, Always Verify'.",
      sections: [
        {
          heading: "Core Pillars of Zero-Trust Architecture",
          body: "Zero-Trust enforces continuous authentication, least-privilege access control, and comprehensive payload inspection across every internal and external request.",
          bullets: [
            "Micro-segmentation of application servers and networks.",
            "Short-lived OAuth tokens backed by Hardware Security Modules (HSM).",
            "Real-time behavioral threat analysis and automated revocation.",
          ],
        },
      ],
      conclusion:
        "Adopting Zero-Trust safeguards critical business assets while enabling secure remote access for distributed teams worldwide.",
    },
  },
  {
    slug: "orson-infotech-expansion-and-tech-trends",
    title: "Orson InfoTech 2026 Tech Roadmap & Software Innovations",
    excerpt:
      "An insider look into Orson InfoTech's growth, expanded service offerings in custom AI software, and vision for empowering global businesses.",
    category: "Company News",
    date: "June 02, 2026",
    readTime: "3 min read",
    author: {
      name: "Orson Team",
      role: "Executive Team",
      avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&auto=format",
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format",
    featured: false,
    tags: ["Company News", "Innovation", "Tech Roadmap", "Expansion"],
    content: {
      intro:
        "As we step further into 2026, Orson InfoTech continues to expand its technology footprint across custom software engineering, AI deployment, and scalable cloud solutions.",
      sections: [
        {
          heading: "Expanding Our AI & Cloud Engineering Capabilities",
          body: "We are thrilled to announce new dedicated practice groups focusing on Agentic AI Systems, DevSecOps automation, and enterprise cloud migrations.",
        },
      ],
      conclusion:
        "We thank our clients, partners, and engineering team for driving our shared success into 2026 and beyond!",
    },
  },
];
