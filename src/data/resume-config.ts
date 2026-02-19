import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Yann Duzelier',
    photoBackEmoji: '💻',
    title: {
      fr: 'Développeur Web Full-Stack',
      en: 'Full-Stack Web Developer',
    },
    subtitle: {
      fr: 'Recherche stage ou alternance — à partir d\'avril 2026',
      en: 'Looking for internship or apprenticeship — from April 2026',
    },
    location: 'Rennes, France',
  },
  seo: {
    title: 'Yann Duzelier — Développeur Web Full-Stack',
    description: 'CV interactif de Yann Duzelier, développeur Web Full-Stack junior en formation à Holberton School Rennes.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'linkedin', label: 'Yann Duzelier', href: 'https://linkedin.com/in/yann-duzelier' },
    { type: 'github', label: 'Yugz29', href: 'https://github.com/Yugz29' },
    { type: 'email', label: 'yannduzelier@gmail.com' },
    { type: 'phone', label: '+33(0)6 47 67 67 75' },
    { type: 'location', label: 'Rennes, France (Permis B)' },
  ],
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Courant', en: 'Fluent' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Intermédiaire', en: 'Intermediate' }, details: 'B1' },
      ],
    },
    {
      title: { fr: 'Langages', en: 'Languages' },
      type: 'badges',
      items: [
        { name: 'C' },
        { name: 'Python' },
        { name: 'SQL' },
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'JavaScript' },
      ],
    },
    {
      title: { fr: 'Frameworks & Base de données', en: 'Frameworks & Databases' },
      type: 'badges',
      items: [
        { name: 'Flask' },
        { name: 'Django' },
        { name: 'SQLAlchemy' },
        { name: 'MySQL' },
        { name: 'PostgreSQL' },
        { name: 'SQLite' },
      ],
    },
    {
      title: { fr: 'Outils', en: 'Tools' },
      type: 'badges',
      items: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'VS Code' },
        { name: 'Arduino IDE', color: '#00979D' },
        { name: 'Xcode', color: '#147EFB' },
        { name: 'Postman' },
      ],
    },
    {
      title: { fr: 'Méthodologies', en: 'Methodologies' },
      type: 'text',
      items: [
        { name: { fr: 'Agile, Peer-learning, Code reviews, API REST', en: 'Agile, Peer-learning, Code reviews, REST API' } },
      ],
    },
    {
      title: { fr: 'Compétences transverses', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'Communication claire, Adaptabilité, Rigueur, Travail en équipe', en: 'Clear communication, Adaptability, Attention to detail, Teamwork' } },
      ],
    },
  ],
  projects: [
    {
      id: 'devnote',
      title: { fr: 'DevNote', en: 'DevNote' },
      description: {
        fr: 'Application de gestion de connaissances pour développeurs. Architecture REST documentée (user stories, UML, 15+ endpoints), auth JWT, recherche multi-entités. MVP en cours.',
        en: 'Knowledge management app for developers. Documented REST architecture (user stories, UML, 15+ endpoints), JWT auth, multi-entity search. MVP in progress.',
      },
      techs: ['Django', 'JavaScript', 'SQLite', 'PostgreSQL'],
      github: 'https://github.com/Yugz29',
    },
    {
      id: 'hbnb',
      title: { fr: 'HBnB — Clone AirBnB', en: 'HBnB — AirBnB Clone' },
      description: {
        fr: 'Clone simplifié d\'AirBnB réalisé en 9 semaines en équipe. Back-end complet (utilisateurs, objets, stockage persistant), API RESTful et moteur de templates.',
        en: 'Simplified AirBnB clone built over 9 weeks in a team. Full back-end (users, objects, persistent storage), RESTful API and template engine.',
      },
      techs: ['Python', 'Flask', 'MySQL', 'HTML5', 'CSS3'],
      github: 'https://github.com/Yugz29',
    },
    {
      id: 'low-level',
      title: { fr: 'Projets bas niveau en C', en: 'Low-level C Projects' },
      description: {
        fr: 'Fonction printf et Shell simple : projets illustrant la logique système et la gestion mémoire.',
        en: 'Printf function and simple Shell: projects illustrating system logic and memory management.',
      },
      techs: ['C'],
      github: 'https://github.com/Yugz29',
    },
  ],

  experiences: [
    {
      id: 'chez-tonton',
      company: { fr: 'Chez Tonton', en: 'Chez Tonton' },
      role: { fr: 'Responsable bar-restaurant', en: 'Bar & Restaurant Manager' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: 'Janvier 2020 - Septembre 2023', en: 'January 2020 - September 2023' },
      description: {
        fr: 'Gestion opérationnelle d\'un bar-restaurant à Tinténiac.',
        en: 'Operational management of a bar-restaurant in Tinténiac.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Tinténiac, France — établissement indépendant.',
          en: 'Tinténiac, France — independent establishment.',
        },
        tasks: {
          fr: [
            'Accueil et satisfaction des clients',
            'Gestion des stocks et des réservations',
          ],
          en: [
            'Customer welcome and satisfaction',
            'Stock and reservation management',
          ],
        },
        env: {
          fr: 'Gestion opérationnelle, relation client',
          en: 'Operational management, customer relations',
        },
      },
    },
    {
      id: 'del-arte',
      company: { fr: 'Del Arte', en: 'Del Arte' },
      role: { fr: 'Chef de rang', en: 'Head Waiter' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: 'Août 2018 - Janvier 2020', en: 'August 2018 - January 2020' },
      description: {
        fr: 'Service en salle dans un restaurant de chaîne à Saint-Grégoire.',
        en: 'Table service in a chain restaurant in Saint-Grégoire.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Saint-Grégoire, France.',
          en: 'Saint-Grégoire, France.',
        },
        tasks: {
          fr: [
            'Coordination avec l\'équipe et conseil client',
          ],
          en: [
            'Team coordination and customer advisory',
          ],
        },
        env: {
          fr: 'Service en restauration, travail en équipe',
          en: 'Restaurant service, teamwork',
        },
      },
    },
  ],
  education: [
    {
      school: { fr: 'Holberton School — Rennes', en: 'Holberton School — Rennes' },
      degree: { fr: 'Développeur web - web mobile', en: 'Web & Mobile Web Developer' },
      specialty: { fr: 'Fondamentaux du développement — RNCP 5 (Bac +2)', en: 'Development Fundamentals — RNCP 5 (Bac +2)' },
      period: '2025 - 2026',
    },
    {
      school: { fr: 'Lycée des métiers Fénelon — Brest', en: 'Fénelon Vocational High School — Brest' },
      degree: { fr: 'Baccalauréat professionnel', en: 'Vocational Baccalaureate' },
      specialty: { fr: 'Hôtellerie - Restauration', en: 'Hospitality & Catering' },
      period: '2011 - 2014',
    },
  ],
  hobbies: [],
  theme: { preset: 'minimal' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'WORK EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
