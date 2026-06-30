export type Locale = 'pt' | 'en';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  client?: string;
  bullets: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  badge?: string;
}

export interface EducationItem {
  title: string;
  detail: string;
}

export interface Translation {
  meta: { langName: string };
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
  };
  actions: {
    toggleTheme: string;
    toggleLang: string;
    downloadCv: string;
    viewGithub: string;
    contactMe: string;
    sendEmail: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    location: string;
    available: string;
    stats: { value: string; label: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: string[];
  };
  experience: {
    eyebrow: string;
    title: string;
    lead: string;
    clientLabel: string;
    items: ExperienceItem[];
  };
  skills: {
    eyebrow: string;
    title: string;
    lead: string;
    groups: SkillGroup[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
    educationTitle: string;
    education: EducationItem[];
  };
  projects: {
    eyebrow: string;
    title: string;
    lead: string;
    items: ProjectItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationValue: string;
  };
  footer: {
    builtWith: string;
    rights: string;
  };
}

const SKILL_FRONT = [
  'Angular (v13–v17+)',
  'Micro Front-Ends (MFE)',
  'Single Page Applications',
  'TypeScript',
  'JavaScript',
  'Bootstrap',
  'Angular Material',
  'Flame',
];

const SKILL_BACK = [
  'Java (Spring Boot)',
  'Node.js (Express)',
  'REST APIs',
  'Microservices',
  'BFF',
  'API Gateways / Security Middlewares',
  'JUnit',
  'Mockito',
];

const SKILL_DEVOPS = [
  'Docker',
  'Docker Compose',
  'Kubernetes',
  'AWS',
  'Azure',
  'Ansible',
  'CI/CD (Jenkins, GitLab CI)',
  'SonarQube',
  'Git / GitHub / GitLab',
];

const SKILL_QA = ['Jasmine', 'Karma', 'Cypress', 'E2E', 'Unit Testing'];
const SKILL_DB = ['PostgreSQL', 'Oracle', 'SQL Server', 'MongoDB', 'MariaDB'];
const SKILL_MON = ['Zabbix', 'Grafana', 'GLPI', 'OTRS', 'Nextcloud'];

export const TRANSLATIONS: Record<Locale, Translation> = {
  pt: {
    meta: { langName: 'Português' },
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      skills: 'Habilidades',
      projects: 'Projetos',
      contact: 'Contato',
    },
    actions: {
      toggleTheme: 'Alternar tema',
      toggleLang: 'Mudar para inglês',
      downloadCv: 'Baixar CV',
      viewGithub: 'Ver GitHub',
      contactMe: 'Entrar em contato',
      sendEmail: 'Enviar e-mail',
    },
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Edson Hirano',
      role: 'Engenheiro de Software Sênior · Full-Stack',
      tagline:
        'Especialista no ecossistema Front-End (Angular) com forte atuação em Back-End moderno (Java/Spring Boot, Node.js). Projeto e implemento arquiteturas de alta escalabilidade — Micro Front-Ends, Microserviços e BFF.',
      location: 'São Paulo · SP',
      available: 'Disponível para remoto',
      stats: [
        { value: '7+', label: 'anos de experiência' },
        { value: '13→17+', label: 'versões de Angular' },
        { value: 'MFE · BFF', label: 'arquiteturas modernas' },
      ],
    },
    about: {
      eyebrow: 'Sobre mim',
      title: 'Soluções robustas que impactam o negócio',
      paragraphs: [
        'Engenheiro de Software Sênior com mais de 7 anos de sólida experiência em TI, especializado no ecossistema Front-End com profunda expertise em Angular e forte atuação em arquiteturas modernas de Back-End (Java/Spring Boot, Node.js).',
        'Histórico comprovado no desenho e implementação de estruturas de alta escalabilidade — Micro Front-Ends, Microserviços, padrões BFF e malhas de segurança — atuando ativamente em transformação digital, migração de sistemas legados e automação de infraestrutura em nuvem.',
      ],
      highlights: [
        'Liderança técnica em migrações de sistemas legados',
        'Cultura de testes automatizados e qualidade (E2E)',
        'DevOps, CI/CD e automação de infraestrutura',
        'Metodologias ágeis (Scrum, Kanban)',
      ],
    },
    experience: {
      eyebrow: 'Trajetória',
      title: 'Experiência profissional',
      lead: 'Mais de 7 anos construindo produtos digitais críticos para grandes empresas.',
      clientLabel: 'Cliente',
      items: [
        {
          company: 'Capgemini',
          role: 'Especialista em Desenvolvimento de Software (Full-Stack)',
          period: 'Mai 2026 — Atual',
          bullets: [
            'Liderança técnica na migração estratégica de sistemas corporativos legados para as versões mais atuais de Angular e Java.',
            'Desenho e implementação de arquiteturas modernas e seguras com Microserviços, Micro Front-Ends e padrões BFF.',
            'Desenvolvimento e integração de APIs e middlewares de segurança para proteção de dados críticos.',
          ],
        },
        {
          company: 'CWI Software',
          role: 'Desenvolvedor Full-Stack Sênior',
          period: 'Ago 2025 — Abr 2026',
          client: 'Banco Votorantim',
          bullets: [
            'Concepção e criação de um Design System robusto, unificando a experiência de UI/UX e a escalabilidade dos produtos digitais.',
            'Versionamento avançado de aplicações Angular complexas e arquitetura de integração ponta a ponta.',
            'Acoplamento de Front-Ends modernos a camadas de BFF para otimização de performance e consumo de dados.',
          ],
        },
        {
          company: 'Nexmuv Tecnologia',
          role: 'Desenvolvedor Front-End Principal / Sênior',
          period: 'Jan 2023 — Ago 2025',
          client: 'Valid',
          bullets: [
            'Principal desenvolvedor Front-End de um ecossistema central com impacto financeiro e operacional direto.',
            'Coordenou e executou a migração de uma aplicação enterprise complexa do Angular 13 para o Angular 16.',
            'Elevou a cobertura de testes com Jasmine, Karma e Cypress e estruturou pipelines de CI/CD via Jenkins com análise no SonarQube.',
          ],
        },
        {
          company: 'SCOND',
          role: 'Engenheiro de Software Sênior',
          period: 'Ago 2022 — Jan 2023',
          bullets: [
            'Desenvolvimento de ecossistemas Front-End escaláveis com MFE, SPA, SOLID e Clean Code usando Angular e Angular Material.',
            'Criação de APIs resilientes e microsserviços de alta performance em Java com Spring Boot.',
            'Testes unitários ponta a ponta para Front e Back-End com Karma, Jasmine, JUnit e Mockito sobre PostgreSQL.',
          ],
        },
        {
          company: 'Santander',
          role: 'Desenvolvedor de Software Pleno',
          period: 'Dez 2021 — Jul 2022',
          bullets: [
            'Soluções web críticas para o setor financeiro internacional com Angular, Bootstrap e componentes customizados.',
            'APIs corporativas estáveis e performáticas em Node.js (Express).',
            'Motores parametrizáveis e resilientes para automação de fluxos internos; manipulação de Oracle, SQL Server, PostgreSQL e MongoDB.',
          ],
        },
        {
          company: 'Santander Tecnologia',
          role: 'Desenvolvedor de Software Júnior',
          period: 'Dez 2020 — Dez 2021',
          bullets: [
            'Desenvolvimento de módulos e integrações via Micro Front-Ends e SPAs com práticas ágeis e Git.',
            'Lógica Back-End multiplataforma com Java (Spring Boot) e Node.js.',
            'Rotinas de testes unitários e automações com esteiras Jenkins e Kanban.',
          ],
        },
        {
          company: 'HS Prevent Ltda',
          role: 'Analista de Suporte Júnior & Trainee',
          period: 'Fev 2019 — Nov 2020',
          bullets: [
            'Suporte N1, N2 e N3 em infraestrutura física e nuvem (servidores Linux e Windows).',
            'Automação de processos internos de TI e integrações via REST API.',
            'Desenvolvimento inicial de testes, versionamento de código e manutenção do inventário tecnológico.',
          ],
        },
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Habilidades técnicas',
      lead: 'Ferramentas e tecnologias que uso para entregar do front ao deploy.',
      groups: [
        { title: 'Front-End', items: SKILL_FRONT },
        { title: 'Back-End & API', items: SKILL_BACK },
        { title: 'DevOps & Cloud', items: SKILL_DEVOPS },
        { title: 'Qualidade & Testes', items: SKILL_QA },
        { title: 'Bancos de Dados', items: SKILL_DB },
        { title: 'Monitoramento', items: SKILL_MON },
      ],
      languagesTitle: 'Idiomas',
      languages: [
        { name: 'Português', level: 'Nativo / Fluente' },
        { name: 'Inglês', level: 'Avançado (fluência técnica)' },
        { name: 'Espanhol', level: 'Básico' },
      ],
      educationTitle: 'Educação & Certificações',
      education: [
        {
          title: 'Especialização em andamento',
          detail: 'Desenvolvimento de Software focado em Front-End Avançado (Angular)',
        },
        {
          title: 'Cursos complementares',
          detail: 'Agile-Scrum · Cultura DevOps · Docker & Docker Compose · Ansible · Lógica Avançada',
        },
      ],
    },
    projects: {
      eyebrow: 'Cases',
      title: 'Projetos em destaque',
      lead: 'Alguns dos trabalhos que representam minha forma de construir software.',
      items: [
        {
          name: 'Core Design System',
          description:
            'Design System em Angular 22 com 18 componentes acessíveis, tokens de tema e documentação no Storybook. Este próprio portfólio foi construído consumindo esta biblioteca.',
          tags: ['Angular 22', 'Storybook', 'Design Tokens', 'A11y'],
          badge: 'Powering este site',
        },
        {
          name: 'Design System — Banco Votorantim',
          description:
            'Concepção de um Design System corporativo para unificar a experiência de UI/UX e a escalabilidade dos produtos digitais do banco, integrado a camadas de BFF.',
          tags: ['Angular', 'Design System', 'BFF', 'UI/UX'],
        },
        {
          name: 'Migração Enterprise — Valid',
          description:
            'Coordenação e execução da migração de uma aplicação enterprise altamente complexa do Angular 13 para o 16, com cultura de testes automatizados e CI/CD via Jenkins e SonarQube.',
          tags: ['Angular 13→16', 'Cypress', 'Jenkins', 'SonarQube'],
        },
        {
          name: 'GitHub',
          description:
            'Repositórios pessoais e experimentos — incluindo projetos em TypeScript. Confira o código e as contribuições.',
          tags: ['Open Source', 'TypeScript'],
          link: 'https://github.com/hirano28',
          linkLabel: 'Abrir GitHub',
        },
      ],
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos conversar',
      lead: 'Aberto a oportunidades remotas e novos desafios. Entre em contato pelo canal que preferir.',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefone',
      locationLabel: 'Localização',
      locationValue: 'São Paulo · SP (Remoto)',
    },
    footer: {
      builtWith: 'Construído com Angular e meu próprio Core Design System.',
      rights: 'Todos os direitos reservados.',
    },
  },

  en: {
    meta: { langName: 'English' },
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    actions: {
      toggleTheme: 'Toggle theme',
      toggleLang: 'Switch to Portuguese',
      downloadCv: 'Download CV',
      viewGithub: 'View GitHub',
      contactMe: 'Get in touch',
      sendEmail: 'Send email',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Edson Hirano',
      role: 'Senior Software Engineer · Full-Stack',
      tagline:
        'Front-End specialist (Angular) with strong modern Back-End experience (Java/Spring Boot, Node.js). I design and implement highly scalable architectures — Micro Front-Ends, Microservices and BFF.',
      location: 'São Paulo · Brazil',
      available: 'Available for remote',
      stats: [
        { value: '7+', label: 'years of experience' },
        { value: '13→17+', label: 'Angular versions' },
        { value: 'MFE · BFF', label: 'modern architectures' },
      ],
    },
    about: {
      eyebrow: 'About me',
      title: 'Robust solutions that drive business results',
      paragraphs: [
        'Senior Software Engineer with 7+ years of solid IT experience, specialized in the Front-End ecosystem with deep Angular expertise and strong work in modern Back-End architectures (Java/Spring Boot, Node.js).',
        'Proven track record designing and implementing highly scalable structures — Micro Front-Ends, Microservices, BFF patterns and security layers — while actively driving digital transformation, legacy migration and cloud infrastructure automation.',
      ],
      highlights: [
        'Technical leadership on legacy system migrations',
        'Automated testing and quality culture (E2E)',
        'DevOps, CI/CD and infrastructure automation',
        'Agile methodologies (Scrum, Kanban)',
      ],
    },
    experience: {
      eyebrow: 'Journey',
      title: 'Professional experience',
      lead: '7+ years building critical digital products for large companies.',
      clientLabel: 'Client',
      items: [
        {
          company: 'Capgemini',
          role: 'Software Development Specialist (Full-Stack)',
          period: 'May 2026 — Present',
          bullets: [
            'Technical leadership on the strategic migration of legacy corporate systems to the latest Angular and Java versions.',
            'Design and implementation of modern, secure architectures with Microservices, Micro Front-Ends and BFF patterns.',
            'Development and integration of APIs and security middlewares to protect critical data.',
          ],
        },
        {
          company: 'CWI Software',
          role: 'Senior Full-Stack Developer',
          period: 'Aug 2025 — Apr 2026',
          client: 'Banco Votorantim',
          bullets: [
            'Conception and creation of a robust Design System, unifying UI/UX experience and scalability across digital products.',
            'Advanced versioning of complex Angular applications and end-to-end integration architecture.',
            'Coupling modern Front-Ends to BFF layers to optimize performance and data consumption.',
          ],
        },
        {
          company: 'Nexmuv Tecnologia',
          role: 'Lead / Senior Front-End Developer',
          period: 'Jan 2023 — Aug 2025',
          client: 'Valid',
          bullets: [
            'Lead Front-End developer of a core ecosystem with direct financial and operational impact.',
            'Coordinated and executed the migration of a complex enterprise application from Angular 13 to Angular 16.',
            'Raised test coverage with Jasmine, Karma and Cypress and built CI/CD pipelines via Jenkins with SonarQube analysis.',
          ],
        },
        {
          company: 'SCOND',
          role: 'Senior Software Engineer',
          period: 'Aug 2022 — Jan 2023',
          bullets: [
            'Built scalable Front-End ecosystems with MFE, SPA, SOLID and Clean Code using Angular and Angular Material.',
            'Created resilient APIs and high-performance microservices in Java with Spring Boot.',
            'End-to-end unit testing for Front and Back-End with Karma, Jasmine, JUnit and Mockito on PostgreSQL.',
          ],
        },
        {
          company: 'Santander',
          role: 'Mid-level Software Developer',
          period: 'Dec 2021 — Jul 2022',
          bullets: [
            'Critical web solutions for the international financial sector with Angular, Bootstrap and custom components.',
            'Stable, performant corporate APIs on Node.js (Express).',
            'Parametrizable, resilient engines for internal workflow automation; worked with Oracle, SQL Server, PostgreSQL and MongoDB.',
          ],
        },
        {
          company: 'Santander Tecnologia',
          role: 'Junior Software Developer',
          period: 'Dec 2020 — Dec 2021',
          bullets: [
            'Developed modules and integrations via Micro Front-Ends and SPAs with agile practices and Git.',
            'Cross-platform Back-End logic with Java (Spring Boot) and Node.js.',
            'Unit testing routines and automation with Jenkins pipelines and Kanban.',
          ],
        },
        {
          company: 'HS Prevent Ltda',
          role: 'Junior Support Analyst & Trainee',
          period: 'Feb 2019 — Nov 2020',
          bullets: [
            'L1, L2 and L3 support for physical and cloud infrastructure (Linux and Windows servers).',
            'IT process automation and data flow integrations via REST API.',
            'Early test development, code versioning and technology asset inventory maintenance.',
          ],
        },
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Technical skills',
      lead: 'Tools and technologies I use to deliver from front-end to deploy.',
      groups: [
        { title: 'Front-End', items: SKILL_FRONT },
        { title: 'Back-End & API', items: SKILL_BACK },
        { title: 'DevOps & Cloud', items: SKILL_DEVOPS },
        { title: 'Quality & Testing', items: SKILL_QA },
        { title: 'Databases', items: SKILL_DB },
        { title: 'Monitoring', items: SKILL_MON },
      ],
      languagesTitle: 'Languages',
      languages: [
        { name: 'Portuguese', level: 'Native / Fluent' },
        { name: 'English', level: 'Advanced (technical fluency)' },
        { name: 'Spanish', level: 'Basic' },
      ],
      educationTitle: 'Education & Certifications',
      education: [
        {
          title: 'Specialization in progress',
          detail: 'Software Development focused on Advanced Front-End (Angular)',
        },
        {
          title: 'Complementary courses',
          detail: 'Agile-Scrum · DevOps Culture · Docker & Docker Compose · Ansible · Advanced Logic',
        },
      ],
    },
    projects: {
      eyebrow: 'Cases',
      title: 'Featured projects',
      lead: 'A few works that represent how I build software.',
      items: [
        {
          name: 'Core Design System',
          description:
            'An Angular 22 Design System with 18 accessible components, theme tokens and Storybook docs. This very portfolio is built consuming this library.',
          tags: ['Angular 22', 'Storybook', 'Design Tokens', 'A11y'],
          badge: 'Powering this site',
        },
        {
          name: 'Design System — Banco Votorantim',
          description:
            "Conceived a corporate Design System to unify UI/UX experience and scalability across the bank's digital products, integrated with BFF layers.",
          tags: ['Angular', 'Design System', 'BFF', 'UI/UX'],
        },
        {
          name: 'Enterprise Migration — Valid',
          description:
            'Coordinated and executed the migration of a highly complex enterprise application from Angular 13 to 16, with an automated testing culture and CI/CD via Jenkins and SonarQube.',
          tags: ['Angular 13→16', 'Cypress', 'Jenkins', 'SonarQube'],
        },
        {
          name: 'GitHub',
          description:
            'Personal repositories and experiments — including TypeScript projects. Check out the code and contributions.',
          tags: ['Open Source', 'TypeScript'],
          link: 'https://github.com/hirano28',
          linkLabel: 'Open GitHub',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      lead: 'Open to remote opportunities and new challenges. Reach out through your preferred channel.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      locationValue: 'São Paulo · Brazil (Remote)',
    },
    footer: {
      builtWith: 'Built with Angular and my own Core Design System.',
      rights: 'All rights reserved.',
    },
  },
};

export const CONTACT = {
  email: 'edson.hirano28@gmail.com',
  phone: '+55 (11) 97626-8626',
  phoneHref: '+5511976268626',
  github: 'https://github.com/hirano28',
  linkedin: 'https://www.linkedin.com/in/edson-hirano-653578167',
};
