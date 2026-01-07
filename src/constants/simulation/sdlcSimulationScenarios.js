/**
 * Traditional SDLC Simulation Scenarios Configuration
 * 
 * Interactive simulation scenarios that allow students to experience realistic
 * software development projects using traditional SDLC methodologies. These
 * simulations provide hands-on learning through decision-making and consequences.
 * 
 * Simulation Features:
 * - Realistic business scenarios with authentic project constraints
 * - Phase-by-phase decision points following traditional SDLC flow
 * - Resource management including budget, timeline, and team dynamics
 * - Performance metrics tracking (quality, security, user satisfaction)
 * - Consequence-based learning where decisions affect project outcomes
 * - Multiple project types representing different industry domains
 * 
 * Educational Objectives:
 * - Experience real-world project management challenges
 * - Practice systematic decision-making within SDLC framework
 * - Understand trade-offs between time, cost, quality, and scope
 * - Learn from consequences of different development approaches
 * - Build practical experience in project leadership and planning
 * 
 * Scenario Categories:
 * - Financial applications with security and compliance focus
 * - Healthcare systems with reliability and regulatory requirements
 * - E-commerce platforms with scalability and performance needs
 * - Educational tools with accessibility and usability priorities
 * - Enterprise systems with integration and maintenance considerations
 * 
 * Each simulation provides a safe environment for students to experiment
 * with different approaches and learn from both successes and failures.
 */

/**
 * Traditional SDLC Simulation Scenario Data
 * 
 * Comprehensive collection of interactive scenarios demonstrating
 * classical software development methodologies and project management.
 */
// SDLC Simulation Scenarios
// Traditional software development process simulations

export const sdlcSimulationScenarios = [
  {
    id: "mobile-banking-app",
    title: "Mobile Banking Application",
    description: "You're leading the development of a secure mobile banking application for a major financial institution using traditional SDLC approaches.",
    icon: "🏦",
    color: "#1ABC9C",
    type: "sdlc",
    initialContext: {
      budget: 100000,
      timeline: 12, // months
      teamSize: 8,
      userSatisfaction: 50,
      security: 50,
      performance: 50,
      reputation: 50
    },
    phases: [
      {
        id: "planning",
        title: "Project Planning",
        scenario: "You need to plan the mobile banking application using traditional project management approaches. The stakeholders have high expectations for security, user experience, and regulatory compliance.",
        currentStatus: {
          description: "Your team is assembled and ready to start planning the mobile banking application using established SDLC methodologies.",
          image: "👥💼"
        },
        decisions: [
          {
            id: "planning-waterfall",
            title: "Comprehensive Waterfall Planning",
            description: "Spend 3 months creating detailed specifications, security protocols, and complete architecture documentation before any coding begins.",
            consequences: {
              budget: -15000,
              timeline: -3,
              security: +20,
              userSatisfaction: -5,
              performance: +10,
              reputation: +5,
              nextPhase: "analysis",
              outcome: "Your thorough planning catches many security requirements early, but delays market entry. Stakeholders are concerned about the timeline."
            }
          },
          {
            id: "planning-agile",
            title: "Agile Sprint Planning",
            description: "Start with high-level planning and detailed sprint planning for the first features. Plan incrementally as you learn more about user needs.",
            consequences: {
              budget: -5000,
              timeline: -1,
              security: +5,
              userSatisfaction: +10,
              performance: +5,
              reputation: +10,
              nextPhase: "analysis",
              outcome: "Quick start impresses stakeholders, but some security considerations are discovered later in development."
            }
          },
          {
            id: "planning-hybrid",
            title: "Hybrid Approach",
            description: "Define core security and compliance architecture upfront, but use agile methods for feature development and user experience.",
            consequences: {
              budget: -10000,
              timeline: -2,
              security: +15,
              userSatisfaction: +8,
              performance: +8,
              reputation: +12,
              nextPhase: "analysis",
              outcome: "Balanced approach provides security foundation while maintaining flexibility. Team morale is high."
            }
          },
          {
            id: "planning-rush",
            title: "Rush to Market",
            description: "Skip detailed planning to beat competitors to market. Start coding immediately with minimal documentation.",
            consequences: {
              budget: -2000,
              timeline: +2,
              security: -15,
              userSatisfaction: -20,
              performance: -10,
              reputation: -25,
              nextPhase: "analysis",
              outcome: "FAILURE: Technical debt accumulates quickly. Major security vulnerabilities discovered late. Team confusion leads to rework and delays."
            }
          },
          {
            id: "planning-over-engineered",
            title: "Over-Engineered Planning",
            description: "Create exhaustive documentation for every possible scenario, including features not needed for years.",
            consequences: {
              budget: -30000,
              timeline: -6,
              security: +10,
              userSatisfaction: -15,
              performance: -5,
              reputation: -20,
              nextPhase: "analysis",
              outcome: "FAILURE: Analysis paralysis sets in. Competitors launch while you're still planning. Stakeholders lose confidence in delivery timeline."
            }
          }
        ]
      },
      {
        id: "analysis",
        title: "Requirements Analysis",
        scenario: "Time to analyze user requirements and regulatory compliance needs using traditional analysis methods. You need to understand what features are most critical for launch.",
        decisions: [
          {
            id: "analysis-comprehensive",
            title: "Comprehensive User Research",
            description: "Conduct extensive user interviews, surveys, and competitor analysis. Engage regulatory experts for compliance requirements.",
            consequences: {
              budget: -12000,
              timeline: -2,
              security: +15,
              userSatisfaction: +20,
              performance: +5,
              reputation: +10,
              nextPhase: "design",
              outcome: "Deep user insights reveal surprising usage patterns. Regulatory review identifies critical security requirements."
            }
          },
          {
            id: "analysis-assumptions",
            title: "Assume Standard Banking Features",
            description: "Based on existing banking apps, implement standard features: account balance, transfers, bill pay, and deposit checks.",
            consequences: {
              budget: -3000,
              timeline: +1,
              security: 0,
              userSatisfaction: -10,
              performance: 0,
              reputation: -5,
              nextPhase: "design",
              outcome: "Fast assumptions save time but miss unique user needs. Some features don't match user expectations."
            }
          },
          {
            id: "analysis-stakeholder-interviews",
            title: "Stakeholder-Driven Analysis",
            description: "Focus primarily on executive and regulatory stakeholder requirements with minimal end-user input.",
            consequences: {
              budget: -8000,
              timeline: -1,
              security: +20,
              userSatisfaction: -25,
              performance: +5,
              reputation: -15,
              nextPhase: "design",
              outcome: "FAILURE: App meets regulatory requirements but users hate the interface. Poor usability leads to low adoption rates."
            }
          },
          {
            id: "analysis-competitor-copying",
            title: "Clone Competitor Analysis",
            description: "Analyze successful competitor apps and copy their features exactly without understanding user context.",
            consequences: {
              budget: -5000,
              timeline: +0.5,
              security: -5,
              userSatisfaction: -30,
              performance: -10,
              reputation: -35,
              nextPhase: "design",
              outcome: "FAILURE: App lacks differentiation and violates some banking regulations. Legal issues arise from copying patented features."
            }
          }
        ]
      },
      {
        id: "design",
        title: "System Design",
        scenario: "Design the architecture and user interface using traditional design methodologies. Security and scalability are critical concerns.",
        decisions: [
          {
            id: "design-security-first",
            title: "Security-First Architecture",
            description: "Design with security as the top priority. Implement multiple layers of encryption, secure authentication, and compliance controls.",
            consequences: {
              budget: -18000,
              timeline: -2,
              security: +25,
              userSatisfaction: -5,
              performance: -5,
              reputation: +15,
              nextPhase: "implementation",
              outcome: "Rock-solid security impresses auditors but adds complexity. Some user experience concerns about login friction."
            }
          },
          {
            id: "design-user-centric",
            title: "User-Centric Design",
            description: "Prioritize intuitive user experience with streamlined flows, minimal friction, and elegant interface design.",
            consequences: {
              budget: -15000,
              timeline: -1,
              security: +10,
              userSatisfaction: +25,
              performance: +10,
              reputation: +20,
              nextPhase: "implementation",
              outcome: "Users love the interface design and find banking tasks effortless. Strong market differentiation through superior UX."
            }
          },
          {
            id: "design-performance-optimized",
            title: "Performance-Optimized Architecture",
            description: "Design for maximum speed and scalability with advanced caching, CDN integration, and optimized database queries.",
            consequences: {
              budget: -20000,
              timeline: -2.5,
              security: +15,
              userSatisfaction: +15,
              performance: +30,
              reputation: +25,
              nextPhase: "implementation",
              outcome: "App performs exceptionally fast, handling peak loads seamlessly. Users appreciate instant response times."
            }
          },
          {
            id: "design-feature-bloat",
            title: "Feature-Rich Everything",
            description: "Try to include every possible banking feature and integration to differentiate from competitors.",
            consequences: {
              budget: -35000,
              timeline: -4,
              security: -10,
              userSatisfaction: -20,
              performance: -25,
              reputation: -15,
              nextPhase: "implementation",
              outcome: "FAILURE: Complex architecture becomes unmaintainable. Too many features confuse users and create security vulnerabilities."
            }
          }
        ]
      },
      {
        id: "implementation",
        title: "Development Implementation",
        scenario: "Time to code the banking application using traditional development practices. Code quality and testing are essential.",
        decisions: [
          {
            id: "implementation-traditional",
            title: "Traditional Development",
            description: "Follow established coding standards, conduct regular code reviews, and implement comprehensive testing suites.",
            consequences: {
              budget: -25000,
              timeline: -3,
              security: +10,
              userSatisfaction: +5,
              performance: +15,
              reputation: +10,
              nextPhase: "testing",
              outcome: "Solid development practices create maintainable code. Quality is high but development takes longer than expected."
            }
          },
          {
            id: "implementation-agile-tdd",
            title: "Agile with Test-Driven Development",
            description: "Implement using TDD methodology with continuous integration, pair programming, and frequent deployments.",
            consequences: {
              budget: -20000,
              timeline: -1,
              security: +15,
              userSatisfaction: +15,
              performance: +20,
              reputation: +20,
              nextPhase: "testing",
              outcome: "High-quality code with excellent test coverage. Team velocity increases over time, bugs caught early."
            }
          },
          {
            id: "implementation-outsourced",
            title: "Outsourced Development",
            description: "Outsource implementation to reduce costs, maintaining minimal oversight and communication.",
            consequences: {
              budget: -15000,
              timeline: +1,
              security: -20,
              userSatisfaction: -25,
              performance: -15,
              reputation: -30,
              nextPhase: "testing",
              outcome: "FAILURE: Poor communication leads to misunderstanding requirements. Code quality is low, security vulnerabilities introduced."
            }
          },
          {
            id: "implementation-cowboy-coding",
            title: "Rapid Cowboy Coding",
            description: "Skip code reviews and testing to meet aggressive deadlines. Each developer works independently without coordination.",
            consequences: {
              budget: -10000,
              timeline: +2,
              security: -30,
              userSatisfaction: -35,
              performance: -20,
              reputation: -40,
              nextPhase: "testing",
              outcome: "FAILURE: Inconsistent code, major bugs, security holes. Integration nightmares and system crashes in production."
            }
          }
        ]
      }
    ]
  },
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "Build a scalable e-commerce platform using traditional SDLC methodologies for a growing retail business.",
    icon: "🛒",
    color: "#16A085",
    type: "sdlc",
    initialContext: {
      budget: 80000,
      timeline: 10,
      teamSize: 6,
      userSatisfaction: 50,
      security: 50,
      performance: 50,
      reputation: 50
    },
    phases: [
      {
        id: "planning",
        title: "Project Planning",
        scenario: "Plan the e-commerce platform development using traditional project management approaches. The business needs to compete with major online retailers.",
        decisions: [
          {
            id: "planning-detailed",
            title: "Detailed Upfront Planning",
            description: "Create comprehensive project plans, detailed requirements documents, and complete technical specifications before starting development.",
            consequences: {
              budget: -12000,
              timeline: -2,
              security: +15,
              userSatisfaction: +5,
              performance: +10,
              reputation: +8,
              nextPhase: "analysis",
              outcome: "Thorough planning reduces risks and provides clear roadmap. Stakeholders appreciate the detailed approach."
            }
          },
          {
            id: "planning-lean-startup",
            title: "Lean Startup Methodology",
            description: "Plan for MVP with core e-commerce features, then iterate based on customer feedback and market validation.",
            consequences: {
              budget: -6000,
              timeline: +1,
              security: +8,
              userSatisfaction: +18,
              performance: +12,
              reputation: +15,
              nextPhase: "analysis",
              outcome: "Fast market entry allows customer feedback early. Iterative approach builds exactly what customers want."
            }
          },
          {
            id: "planning-copy-amazon",
            title: "Copy Market Leader Strategy",
            description: "Plan to replicate Amazon's features and functionality without considering your unique market position.",
            consequences: {
              budget: -20000,
              timeline: -3,
              security: +5,
              userSatisfaction: -15,
              performance: -5,
              reputation: -20,
              nextPhase: "analysis",
              outcome: "FAILURE: Overcomplex platform doesn't fit your business model. Expensive features that don't add value for your customers."
            }
          },
          {
            id: "planning-no-budget-limits",
            title: "Sky's the Limit Planning",
            description: "Plan without budget constraints, assuming unlimited resources and timeline flexibility.",
            consequences: {
              budget: -40000,
              timeline: -5,
              security: +10,
              userSatisfaction: +10,
              performance: +5,
              reputation: -25,
              nextPhase: "analysis",
              outcome: "FAILURE: Unrealistic planning leads to budget overruns. Project scope creep causes delays and stakeholder frustration."
            }
          }
        ]
      }
    ]
  },
  {
    id: "social-media-platform",
    title: "Social Media Platform",
    description: "Build a scalable social media platform with real-time features, content moderation, and user engagement systems using traditional SDLC methodologies.",
    icon: "📱💬",
    color: "#e74c3c",
    type: "sdlc",
    initialContext: {
      budget: 150000,
      timeline: 18,
      teamSize: 12,
      userSatisfaction: 50,
      security: 50,
      performance: 50,
      reputation: 50
    },
    phases: [
      {
        id: "planning",
        title: "Social Platform Planning",
        scenario: "You're tasked with planning a social media platform that needs to handle millions of users, real-time messaging, content sharing, and robust moderation systems.",
        currentStatus: {
          description: "Your team is ready to plan the next big social media platform. Focus on scalability, user engagement, and content safety.",
          image: "👥📊"
        },
        decisions: [
          {
            id: "planning-mvp-first",
            title: "MVP-First Approach",
            description: "Start with core features (profiles, posts, basic messaging) and iterate based on user feedback. Plan for rapid scaling.",
            consequences: {
              budget: -10000,
              timeline: +2,
              security: +5,
              userSatisfaction: +15,
              performance: +8,
              reputation: +12,
              outcome: "Quick market entry allows early user feedback, but some scalability challenges emerge as user base grows."
            }
          },
          {
            id: "planning-full-featured",
            title: "Full-Featured Launch",
            description: "Plan for comprehensive features including advanced content moderation, AI-powered recommendations, and enterprise-grade infrastructure from day one.",
            consequences: {
              budget: -25000,
              timeline: -4,
              security: +20,
              userSatisfaction: +8,
              performance: +18,
              reputation: +15,
              outcome: "Platform launches with robust features but higher costs and delayed market entry. Users appreciate the polish."
            }
          },
          {
            id: "planning-modular",
            title: "Modular Architecture Planning",
            description: "Design a microservices architecture with independent modules for different features. Plan for easy scaling and feature additions.",
            consequences: {
              budget: -15000,
              timeline: -1,
              security: +12,
              userSatisfaction: +10,
              performance: +15,
              reputation: +18,
              outcome: "Modular approach provides flexibility for future growth. Architecture complexity requires skilled developers."
            }
          }
        ]
      }
    ]
  },
  {
    id: "enterprise-crm-system",
    title: "Enterprise CRM System",
    description: "Develop a comprehensive Customer Relationship Management system for large enterprises with complex integration requirements and strict compliance needs.",
    icon: "🏢📊",
    color: "#9b59b6",
    type: "sdlc",
    initialContext: {
      budget: 200000,
      timeline: 24,
      teamSize: 15,
      userSatisfaction: 50,
      security: 50,
      performance: 50,
      reputation: 50
    },
    phases: [
      {
        id: "planning",
        title: "Enterprise CRM Planning",
        scenario: "You're leading the development of a CRM system that must integrate with existing enterprise systems, handle complex workflows, and meet strict compliance requirements.",
        currentStatus: {
          description: "Enterprise stakeholders expect a robust, scalable CRM that integrates seamlessly with their existing IT infrastructure.",
          image: "🏢🔗"
        },
        decisions: [
          {
            id: "planning-waterfall-enterprise",
            title: "Traditional Waterfall Approach",
            description: "Use proven waterfall methodology with extensive documentation, stakeholder approvals, and phase gates to ensure compliance and risk management.",
            consequences: {
              budget: -20000,
              timeline: -6,
              security: +25,
              userSatisfaction: +5,
              performance: +12,
              reputation: +20,
              outcome: "Comprehensive planning ensures compliance and stakeholder buy-in, but lengthy process delays delivery and increases costs."
            }
          },
          {
            id: "planning-enterprise-agile",
            title: "Scaled Agile Framework (SAFe)",
            description: "Implement SAFe methodology to coordinate multiple agile teams working on different CRM modules while maintaining enterprise governance.",
            consequences: {
              budget: -15000,
              timeline: -2,
              security: +15,
              userSatisfaction: +15,
              performance: +18,
              reputation: +15,
              outcome: "SAFe provides agility with enterprise oversight. Teams deliver incremental value while meeting governance requirements."
            }
          },
          {
            id: "planning-phased-delivery",
            title: "Phased Delivery Strategy",
            description: "Plan for modular delivery with core CRM first, then advanced features. Each phase delivers business value while building toward the complete system.",
            consequences: {
              budget: -12000,
              timeline: +1,
              security: +18,
              userSatisfaction: +20,
              performance: +15,
              reputation: +25,
              outcome: "Phased approach provides early wins and user feedback. Enterprise sees value quickly while building comprehensive solution."
            }
          }
        ]
      }
    ]
  },
  {
    id: "iot-healthcare-platform",
    title: "IoT Healthcare Monitoring Platform",
    description: "Develop a comprehensive healthcare IoT platform that monitors patient vitals, manages medical devices, and ensures HIPAA compliance using traditional SDLC approaches.",
    icon: "🏥🔗",
    color: "#2ecc71",
    type: "sdlc",
    initialContext: {
      budget: 300000,
      timeline: 30,
      teamSize: 18,
      userSatisfaction: 50,
      security: 50,
      performance: 50,
      reputation: 50
    },
    phases: [
      {
        id: "planning",
        title: "Healthcare IoT System Planning",
        scenario: "You're developing a critical healthcare platform that must integrate with medical devices, ensure patient data security, and comply with strict healthcare regulations like HIPAA and FDA requirements.",
        currentStatus: {
          description: "Your team must navigate complex healthcare regulations, device integration challenges, and life-critical system requirements in this highly regulated environment.",
          image: "🏥📋🔐"
        },
        decisions: [
          {
            id: "planning-regulatory-first",
            title: "Regulatory Compliance First",
            description: "Begin with comprehensive regulatory analysis, HIPAA compliance planning, and FDA approval processes before any technical planning begins.",
            consequences: {
              budget: -40000,
              timeline: -8,
              security: +35,
              userSatisfaction: +10,
              performance: +15,
              reputation: +30,
              outcome: "Thorough regulatory planning ensures compliance but extends timeline significantly. Stakeholders appreciate the risk-averse approach."
            }
          },
          {
            id: "planning-parallel-compliance",
            title: "Parallel Compliance & Development",
            description: "Plan technical architecture while simultaneously working on regulatory requirements. Use iterative compliance reviews throughout development.",
            consequences: {
              budget: -25000,
              timeline: -3,
              security: +25,
              userSatisfaction: +15,
              performance: +20,
              reputation: +20,
              outcome: "Balanced approach reduces time to market while maintaining compliance. Requires careful coordination between teams."
            }
          },
          {
            id: "planning-mvp-compliance",
            title: "MVP with Core Compliance",
            description: "Focus on minimum viable product with essential HIPAA compliance, then expand features in subsequent regulated releases.",
            consequences: {
              budget: -15000,
              timeline: +2,
              security: +20,
              userSatisfaction: +20,
              performance: +25,
              reputation: +15,
              outcome: "Faster initial deployment allows early user feedback, but limited initial functionality may disappoint some stakeholders."
            }
          }
        ]
      }
    ]
  },
  {
    id: "gaming-platform",
    title: "Multiplayer Gaming Platform",
    description: "Build a high-performance multiplayer gaming platform with real-time gameplay, matchmaking, and social features using traditional game development methodologies.",
    icon: "🎮🕹️",
    color: "#ff6b6b",
    type: "sdlc",
    initialContext: {
      budget: 220000,
      timeline: 20,
      teamSize: 14,
      userSatisfaction: 50,
      security: 50,
      performance: 50,
      reputation: 50
    },
    phases: [
      {
        id: "planning",
        title: "Gaming Platform Development Planning",
        scenario: "You're creating a competitive multiplayer gaming platform that requires ultra-low latency, robust anti-cheat systems, and seamless cross-platform compatibility.",
        currentStatus: {
          description: "Your team faces the challenge of building a platform that can handle millions of concurrent players while maintaining fair gameplay and excellent user experience.",
          image: "🎮⚡🌐"
        },
        decisions: [
          {
            id: "planning-performance-first",
            title: "Performance-Optimized Architecture",
            description: "Design the entire system around ultra-low latency and high-performance requirements. Invest heavily in server infrastructure and optimization from the start.",
            consequences: {
              budget: -35000,
              timeline: -4,
              security: +15,
              userSatisfaction: +25,
              performance: +35,
              reputation: +20,
              outcome: "Platform delivers exceptional gaming performance but requires significant upfront investment. Players love the responsive gameplay."
            }
          },
          {
            id: "planning-feature-rich",
            title: "Feature-Rich Gaming Ecosystem",
            description: "Focus on comprehensive features including social systems, tournaments, streaming integration, and extensive customization options.",
            consequences: {
              budget: -25000,
              timeline: -2,
              security: +20,
              userSatisfaction: +30,
              performance: +15,
              reputation: +25,
              outcome: "Rich feature set attracts diverse player base and creates strong community engagement. Balanced approach to performance and features."
            }
          },
          {
            id: "planning-scalable-mvp",
            title: "Scalable MVP Gaming Core",
            description: "Start with core multiplayer functionality and robust scalability framework, then rapidly iterate based on player feedback.",
            consequences: {
              budget: -15000,
              timeline: +1,
              security: +18,
              userSatisfaction: +20,
              performance: +25,
              reputation: +15,
              nextPhase: "analysis",
              outcome: "Quick market entry allows early community building. Strong technical foundation enables rapid feature expansion based on player needs."
            }
          },
          {
            id: "planning-monetization-focus",
            title: "Monetization-First Planning",
            description: "Plan entire platform around maximizing revenue through microtransactions, loot boxes, and pay-to-win mechanics.",
            consequences: {
              budget: -20000,
              timeline: -1,
              security: +10,
              userSatisfaction: -35,
              performance: +10,
              reputation: -40,
              nextPhase: "analysis",
              outcome: "FAILURE: Aggressive monetization alienates players. Community backlash and poor reviews damage long-term viability."
            }
          }
        ]
      },
      {
        id: "analysis",
        title: "Gaming Platform Analysis",
        scenario: "Analyze player behavior patterns, competitive gaming requirements, anti-cheat needs, and community management systems for your multiplayer platform.",
        decisions: [
          {
            id: "analysis-player-psychology",
            title: "Player Psychology Analysis",
            description: "Study gaming psychology, player motivation, retention patterns, and competitive dynamics to create engaging experiences.",
            consequences: {
              budget: -15000,
              timeline: -2,
              security: +12,
              userSatisfaction: +35,
              performance: +15,
              reputation: +25,
              nextPhase: "design",
              outcome: "Deep understanding of player psychology creates highly engaging platform. Players form strong emotional connections to the game."
            }
          },
          {
            id: "analysis-competitive-esports",
            title: "Competitive Esports Analysis",
            description: "Focus on professional esports requirements, tournament systems, spectator features, and competitive balance mechanics.",
            consequences: {
              budget: -18000,
              timeline: -2.5,
              security: +20,
              userSatisfaction: +25,
              performance: +30,
              reputation: +30,
              nextPhase: "design",
              outcome: "Platform becomes viable esports venue. Professional tournaments and competitive play drive mainstream adoption."
            }
          },
          {
            id: "analysis-casual-gaming",
            title: "Casual Gaming Focus",
            description: "Analyze casual gaming patterns, accessibility needs, and social features that appeal to broader, non-hardcore gaming audience.",
            consequences: {
              budget: -12000,
              timeline: -1,
              security: +15,
              userSatisfaction: +30,
              performance: +20,
              reputation: +20,
              nextPhase: "design",
              outcome: "Platform attracts large casual gaming audience. Broad appeal creates sustainable player base beyond hardcore gamers."
            }
          },
          {
            id: "analysis-copy-competitors",
            title: "Competitor Feature Analysis",
            description: "Analyze successful gaming platforms and plan to copy their most popular features without understanding underlying player needs.",
            consequences: {
              budget: -8000,
              timeline: +0.5,
              security: +10,
              userSatisfaction: -20,
              performance: +10,
              reputation: -15,
              nextPhase: "design",
              outcome: "FAILURE: Copied features don't create cohesive gaming experience. Players see no unique value proposition."
            }
          }
        ]
      },
      {
        id: "design",
        title: "Gaming Platform Design",
        scenario: "Design game mechanics, matchmaking systems, anti-cheat architecture, and social features that create engaging multiplayer experiences.",
        decisions: [
          {
            id: "design-balanced-gameplay",
            title: "Balanced Gameplay Design",
            description: "Focus on creating fair, skill-based gameplay with sophisticated matchmaking and anti-cheat systems to ensure competitive integrity.",
            consequences: {
              budget: -25000,
              timeline: -3,
              security: +25,
              userSatisfaction: +35,
              performance: +25,
              reputation: +35,
              nextPhase: "implementation",
              outcome: "Players trust the fairness of competitions. Strong reputation for balanced gameplay attracts competitive community."
            }
          },
          {
            id: "design-social-engagement",
            title: "Social Engagement Design",
            description: "Design rich social features including guilds, chat systems, friend networks, and collaborative gameplay elements.",
            consequences: {
              budget: -20000,
              timeline: -2,
              security: +20,
              userSatisfaction: +30,
              performance: +20,
              reputation: +25,
              nextPhase: "implementation",
              outcome: "Strong social connections keep players engaged long-term. Community-driven content extends platform longevity."
            }
          },
          {
            id: "design-cross-platform",
            title: "Cross-Platform Universal Design",
            description: "Design for seamless play across PC, console, and mobile platforms with unified progression and cross-platform competition.",
            consequences: {
              budget: -30000,
              timeline: -3.5,
              security: +18,
              userSatisfaction: +25,
              performance: +30,
              reputation: +30,
              nextPhase: "implementation",
              outcome: "Universal platform access maximizes player base. Cross-platform play creates larger, more active gaming communities."
            }
          },
          {
            id: "design-pay-to-win",
            title: "Pay-to-Win Mechanics Design",
            description: "Design gameplay where paying players have significant advantages, focusing on revenue extraction over fair competition.",
            consequences: {
              budget: -15000,
              timeline: -1,
              security: +15,
              userSatisfaction: -40,
              performance: +15,
              reputation: -45,
              nextPhase: "implementation",
              outcome: "FAILURE: Pay-to-win mechanics destroy competitive integrity. Community backlash leads to player exodus and negative reviews."
            }
          }
        ]
      },
      {
        id: "implementation",
        title: "Gaming Platform Development",
        scenario: "Implement high-performance multiplayer systems with real-time gameplay, anti-cheat protection, and scalable server architecture for millions of concurrent players.",
        decisions: [
          {
            id: "implementation-optimized-servers",
            title: "Ultra-Optimized Server Architecture",
            description: "Build custom game servers optimized for ultra-low latency with advanced networking protocols and regional server clusters.",
            consequences: {
              budget: -45000,
              timeline: -3,
              security: +25,
              userSatisfaction: +30,
              performance: +40,
              reputation: +35,
              nextPhase: "testing",
              outcome: "Industry-leading performance sets new standards. Professional gamers praise the responsive, lag-free gameplay."
            }
          },
          {
            id: "implementation-anti-cheat-focus",
            title: "Advanced Anti-Cheat Implementation",
            description: "Prioritize sophisticated anti-cheat systems with machine learning detection, behavioral analysis, and real-time monitoring.",
            consequences: {
              budget: -35000,
              timeline: -2.5,
              security: +35,
              userSatisfaction: +35,
              performance: +20,
              reputation: +40,
              nextPhase: "testing",
              outcome: "Cheating becomes virtually impossible. Platform gains reputation as the most fair and competitive gaming environment."
            }
          },
          {
            id: "implementation-rapid-iteration",
            title: "Rapid Iteration Framework",
            description: "Build flexible system allowing rapid gameplay updates, balance changes, and new feature rollouts based on player feedback.",
            consequences: {
              budget: -25000,
              timeline: +1,
              security: +20,
              userSatisfaction: +30,
              performance: +25,
              reputation: +25,
              nextPhase: "testing",
              outcome: "Continuous evolution keeps gameplay fresh. Players appreciate responsive development that addresses their feedback quickly."
            }
          },
          {
            id: "implementation-rushed-launch",
            title: "Rush to Launch Implementation",
            description: "Cut corners on server optimization and anti-cheat systems to meet aggressive launch deadlines and beat competitors.",
            consequences: {
              budget: -20000,
              timeline: +2,
              security: -20,
              userSatisfaction: -35,
              performance: -30,
              reputation: -40,
              nextPhase: "testing",
              outcome: "FAILURE: Launch plagued with server crashes and cheating problems. Poor first impression damages long-term adoption."
            }
          }
        ]
      }
    ]
  }
];

// Calculate final outcome based on all decisions made
export const calculateFinalOutcome = (initialContext, decisions) => {
  let finalContext = { ...initialContext };
  
  decisions.forEach(decision => {
    const consequences = decision.consequences;
    Object.keys(consequences).forEach(key => {
      if (key !== 'nextPhase' && key !== 'outcome' && finalContext.hasOwnProperty(key)) {
        finalContext[key] += consequences[key];
      }
    });
  });

  // Normalize values to reasonable ranges
  Object.keys(finalContext).forEach(key => {
    if (key === 'budget') {
      finalContext[key] = Math.max(0, finalContext[key]);
    } else if (key === 'timeline') {
      finalContext[key] = Math.max(1, finalContext[key]);
    } else {
      finalContext[key] = Math.max(0, Math.min(100, finalContext[key]));
    }
  });

  // Calculate overall success score
  const successMetrics = ['userSatisfaction', 'security', 'performance', 'reputation'];
  const successScore = successMetrics.reduce((sum, metric) => {
    return sum + (finalContext[metric] || 0);
  }, 0) / successMetrics.length;

  // Generate lessons based on decisions and outcomes
  const lessons = [];
  const failureDecisions = decisions.filter(d => d.consequences && d.consequences.outcome && d.consequences.outcome.includes('FAILURE'));
  const successDecisions = decisions.filter(d => d.consequences && d.consequences.outcome && !d.consequences.outcome.includes('FAILURE'));

  if (failureDecisions.length > 0) {
    lessons.push(`Avoided ${failureDecisions.length} critical failure point(s) that could have derailed the project.`);
  }

  if (successScore >= 80) {
    lessons.push('Excellent project management led to outstanding results across all metrics.');
    lessons.push('Strong stakeholder communication and technical execution created a successful outcome.');
  } else if (successScore >= 60) {
    lessons.push('Good project management with room for improvement in some areas.');
    lessons.push('Balanced approach achieved solid results while managing trade-offs effectively.');
  } else {
    lessons.push('Project faced significant challenges that impacted overall success.');
    lessons.push('Future projects should focus on better risk management and stakeholder alignment.');
  }

  if (finalContext.budget < initialContext.budget * 0.8) {
    lessons.push('Excellent budget management kept project costs well under control.');
  } else if (finalContext.budget < initialContext.budget * 0.5) {
    lessons.push('Significant budget overruns indicate need for better cost estimation and control.');
  }

  if (finalContext.security >= 80) {
    lessons.push('Strong security practices protected the project from vulnerabilities.');
  }

  // Determine outcome title and description
  let title, description;
  if (successScore >= 85) {
    title = '🎉 Outstanding Success!';
    description = 'Your project exceeded expectations and delivered exceptional results. Stakeholders are thrilled with the outcome.';
  } else if (successScore >= 70) {
    title = '✅ Project Success';
    description = 'Your project was successful with good results across most metrics. Some areas could be improved for future projects.';
  } else if (successScore >= 50) {
    title = '⚠️ Mixed Results';
    description = 'Your project had mixed outcomes. While some aspects were successful, significant challenges impacted overall results.';
  } else {
    title = '❌ Project Challenges';
    description = 'Your project faced major difficulties and did not meet success criteria. Important lessons learned for future projects.';
  }

  return {
    ...finalContext,
    success: successScore,
    title,
    description,
    lessons,
    budgetVariance: ((finalContext.budget - initialContext.budget) / initialContext.budget) * 100,
    timelineVariance: ((finalContext.timeline - initialContext.timeline) / initialContext.timeline) * 100
  };
};