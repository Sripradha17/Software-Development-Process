// SDLC Case Studies Data
export const sdlcCaseStudies = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform Development',
    description: 'A startup wants to build a comprehensive e-commerce platform to compete with established players in the market.',
    scenario: 'TechStart Inc. has secured funding to develop a modern e-commerce platform that will serve both B2B and B2C customers. They need to handle high traffic, secure payments, inventory management, and provide excellent user experience.',
    stages: [
      {
        id: 'planning',
        title: 'Planning & Requirements Gathering',
        context: 'The team needs to understand the business requirements and plan the development approach.',
        situation: 'Stakeholders have provided initial requirements: user authentication, product catalog, shopping cart, payment processing, order management, and admin dashboard. The platform needs to support 10,000+ concurrent users.',
        question: 'What should be the PRIMARY focus during the planning phase?',
        options: [
          { id: 'a', text: 'Start coding immediately to save time', isCorrect: false },
          { id: 'b', text: 'Gather detailed requirements and create technical specifications', isCorrect: true },
          { id: 'c', text: 'Focus only on UI/UX design', isCorrect: false },
          { id: 'd', text: 'Set up development servers first', isCorrect: false }
        ],
        explanation: 'Proper requirements gathering and technical specifications are crucial in the planning phase. This prevents scope creep, ensures all stakeholders are aligned, and provides a clear roadmap for development.',
        bestPractices: [
          'Conduct stakeholder interviews and workshops',
          'Define functional and non-functional requirements',
          'Create user stories and acceptance criteria',
          'Identify technology stack and architecture decisions',
          'Estimate timeline and resource requirements'
        ]
      },
      {
        id: 'analysis',
        title: 'System Analysis & Design',
        context: 'With requirements gathered, the team needs to analyze and design the system architecture.',
        situation: 'Requirements analysis reveals the need for microservices architecture, database design for products/users/orders, API specifications, and security considerations for payment processing.',
        question: 'Which analysis technique would be MOST valuable for this e-commerce platform?',
        options: [
          { id: 'a', text: 'Create detailed database schema and API documentation', isCorrect: true },
          { id: 'b', text: 'Focus only on frontend wireframes', isCorrect: false },
          { id: 'c', text: 'Skip analysis and start with prototypes', isCorrect: false },
          { id: 'd', text: 'Only analyze competitor platforms', isCorrect: false }
        ],
        explanation: 'Database schema and API documentation are critical for an e-commerce platform as they define how data flows between services and ensure scalability, security, and maintainability.',
        bestPractices: [
          'Design normalized database schema',
          'Create comprehensive API specifications',
          'Plan for scalability and performance',
          'Define data flow diagrams',
          'Establish security and compliance requirements'
        ]
      },
      {
        id: 'design',
        title: 'System Design & Architecture',
        context: 'The system architecture needs to be designed to handle high traffic and ensure security.',
        situation: 'The platform needs to support microservices for user management, product catalog, order processing, payment gateway integration, and inventory management. Load balancing and caching strategies are essential.',
        question: 'What architectural pattern would be BEST for this e-commerce platform?',
        options: [
          { id: 'a', text: 'Monolithic architecture for simplicity', isCorrect: false },
          { id: 'b', text: 'Microservices with API Gateway pattern', isCorrect: true },
          { id: 'c', text: 'Client-server architecture only', isCorrect: false },
          { id: 'd', text: 'Peer-to-peer architecture', isCorrect: false }
        ],
        explanation: 'Microservices with API Gateway pattern provides scalability, fault isolation, technology diversity, and easier maintenance - crucial for a high-traffic e-commerce platform.',
        bestPractices: [
          'Design loosely coupled microservices',
          'Implement API Gateway for routing and authentication',
          'Plan for horizontal scaling',
          'Design fault-tolerant systems',
          'Implement caching strategies (Redis, CDN)'
        ]
      },
      {
        id: 'implementation',
        title: 'Development & Implementation',
        context: 'Development teams are ready to start building the platform with proper coding standards.',
        situation: 'Multiple development teams will work on different microservices simultaneously. Code quality, consistency, and integration need to be maintained across teams.',
        question: 'What should be the PRIMARY implementation strategy?',
        options: [
          { id: 'a', text: 'Each team works independently without coordination', isCorrect: false },
          { id: 'b', text: 'Establish coding standards, CI/CD pipeline, and regular integration', isCorrect: true },
          { id: 'c', text: 'Build everything as one large application', isCorrect: false },
          { id: 'd', text: 'Focus on speed over code quality', isCorrect: false }
        ],
        explanation: 'Establishing coding standards, CI/CD pipeline, and regular integration ensures consistency, quality, and smooth collaboration between multiple teams working on different services.',
        bestPractices: [
          'Implement automated CI/CD pipelines',
          'Use containerization (Docker) for consistency',
          'Establish code review processes',
          'Implement automated testing at all levels',
          'Use version control and branching strategies'
        ]
      },
      {
        id: 'testing',
        title: 'Testing & Quality Assurance',
        context: 'Comprehensive testing is crucial for an e-commerce platform handling financial transactions.',
        situation: 'The platform needs testing for functionality, security, performance under high load, payment processing, and cross-browser compatibility. User acceptance testing is also required.',
        question: 'Which testing approach is MOST critical for this e-commerce platform?',
        options: [
          { id: 'a', text: 'Only manual testing by developers', isCorrect: false },
          { id: 'b', text: 'Comprehensive automated testing including security and performance tests', isCorrect: true },
          { id: 'c', text: 'Only user acceptance testing', isCorrect: false },
          { id: 'd', text: 'Skip testing to meet deadlines', isCorrect: false }
        ],
        explanation: 'Comprehensive automated testing including security and performance tests is essential for e-commerce platforms to ensure reliability, security of financial data, and ability to handle high traffic loads.',
        bestPractices: [
          'Implement unit, integration, and end-to-end tests',
          'Conduct security testing and penetration testing',
          'Perform load and stress testing',
          'Test payment gateway integrations thoroughly',
          'Conduct cross-browser and mobile testing'
        ]
      },
      {
        id: 'deployment',
        title: 'Deployment & Release',
        context: 'The platform is ready for production deployment with high availability requirements.',
        situation: 'The platform needs to be deployed with zero-downtime deployment strategy, monitoring, and rollback capabilities. Production environment must handle expected traffic from day one.',
        question: 'What deployment strategy would be BEST for this critical e-commerce platform?',
        options: [
          { id: 'a', text: 'Deploy everything at once during maintenance window', isCorrect: false },
          { id: 'b', text: 'Use blue-green or rolling deployment with monitoring and rollback plans', isCorrect: true },
          { id: 'c', text: 'Deploy only during low-traffic hours', isCorrect: false },
          { id: 'd', text: 'Deploy without monitoring systems', isCorrect: false }
        ],
        explanation: 'Blue-green or rolling deployment strategies minimize downtime and risk, while monitoring and rollback plans ensure quick recovery if issues arise in production.',
        bestPractices: [
          'Implement blue-green or rolling deployment',
          'Set up comprehensive monitoring and alerting',
          'Prepare rollback and disaster recovery plans',
          'Use infrastructure as code (IaC)',
          'Implement gradual traffic routing'
        ]
      },
      {
        id: 'maintenance',
        title: 'Maintenance & Support',
        context: 'Post-launch maintenance and continuous improvement are essential for business success.',
        situation: 'The platform is live and serving customers. Ongoing maintenance includes bug fixes, security updates, performance optimization, new feature development, and 24/7 customer support.',
        question: 'What should be the PRIMARY focus during the maintenance phase?',
        options: [
          { id: 'a', text: 'Only fix critical bugs when reported', isCorrect: false },
          { id: 'b', text: 'Proactive monitoring, regular updates, and continuous improvement', isCorrect: true },
          { id: 'c', text: 'Focus only on new feature development', isCorrect: false },
          { id: 'd', text: 'Reduce monitoring to save costs', isCorrect: false }
        ],
        explanation: 'Proactive monitoring, regular updates, and continuous improvement ensure platform reliability, security, and competitiveness while providing excellent user experience.',
        bestPractices: [
          'Implement proactive monitoring and alerting',
          'Regular security updates and patches',
          'Performance monitoring and optimization',
          'Gather user feedback for improvements',
          'Plan for scalability and technology updates'
        ]
      }
    ]
  },
  {
    id: 'mobile-banking-app',
    title: 'Mobile Banking Application',
    description: 'A regional bank wants to develop a secure mobile banking application to serve their customers better.',
    scenario: 'CityBank wants to modernize their services by launching a mobile banking app. The app must provide account management, fund transfers, bill payments, and investment tracking while ensuring top-level security and regulatory compliance.',
    stages: [
      {
        id: 'planning',
        title: 'Planning & Requirements Gathering',
        context: 'Planning a mobile banking app requires careful consideration of security, compliance, and user needs.',
        situation: 'The bank needs to comply with financial regulations (PCI DSS, SOX), support multiple platforms (iOS/Android), integrate with existing banking systems, and provide features like account viewing, transfers, bill pay, and check deposits.',
        question: 'What should be the HIGHEST priority during planning for a banking app?',
        options: [
          { id: 'a', text: 'Attractive user interface design', isCorrect: false },
          { id: 'b', text: 'Security requirements and regulatory compliance', isCorrect: true },
          { id: 'c', text: 'Fast development timeline', isCorrect: false },
          { id: 'd', text: 'Marketing and promotional features', isCorrect: false }
        ],
        explanation: 'Security requirements and regulatory compliance are paramount for banking applications as they handle sensitive financial data and must meet strict industry standards.',
        bestPractices: [
          'Define comprehensive security requirements',
          'Ensure regulatory compliance (PCI DSS, SOX, etc.)',
          'Plan for multi-platform deployment',
          'Design integration with existing banking systems',
          'Establish user authentication and authorization flows'
        ]
      },
      {
        id: 'analysis',
        title: 'System Analysis & Design',
        context: 'Analyzing requirements for a banking app involves complex integration and security considerations.',
        situation: 'The app needs to securely integrate with core banking systems, handle real-time transactions, support biometric authentication, and maintain transaction logs for audit purposes.',
        question: 'Which analysis aspect is MOST crucial for a banking application?',
        options: [
          { id: 'a', text: 'Social media integration capabilities', isCorrect: false },
          { id: 'b', text: 'Security threat modeling and data flow analysis', isCorrect: true },
          { id: 'c', text: 'Gaming features for user engagement', isCorrect: false },
          { id: 'd', text: 'Advanced graphics and animations', isCorrect: false }
        ],
        explanation: 'Security threat modeling and data flow analysis are essential to identify potential vulnerabilities and ensure secure handling of financial data throughout the system.',
        bestPractices: [
          'Conduct thorough security threat modeling',
          'Analyze data flows and encryption requirements',
          'Design secure API integration patterns',
          'Plan for fraud detection and prevention',
          'Define audit trail and logging requirements'
        ]
      },
      {
        id: 'design',
        title: 'System Design & Architecture',
        context: 'Designing a secure, scalable architecture for handling financial transactions.',
        situation: 'The architecture must support end-to-end encryption, secure API communications, offline capabilities for basic features, and seamless integration with existing banking infrastructure.',
        question: 'What architectural principle is MOST important for a banking app?',
        options: [
          { id: 'a', text: 'Prioritize speed over security', isCorrect: false },
          { id: 'b', text: 'Defense in depth security with multiple layers', isCorrect: true },
          { id: 'c', text: 'Simple single-layer architecture', isCorrect: false },
          { id: 'd', text: 'Focus only on user interface design', isCorrect: false }
        ],
        explanation: 'Defense in depth security provides multiple security layers, ensuring that if one layer is compromised, others continue to protect the system and user data.',
        bestPractices: [
          'Implement multi-layered security architecture',
          'Design secure communication protocols',
          'Plan for offline/online synchronization',
          'Implement robust session management',
          'Design for regulatory compliance'
        ]
      },
      {
        id: 'implementation',
        title: 'Development & Implementation',
        context: 'Implementing secure coding practices for financial application development.',
        situation: 'Development involves implementing encryption, secure authentication, biometric integration, transaction processing, and ensuring code meets banking security standards.',
        question: 'What implementation practice is ESSENTIAL for banking app development?',
        options: [
          { id: 'a', text: 'Rapid prototyping without security reviews', isCorrect: false },
          { id: 'b', text: 'Secure coding practices with mandatory security code reviews', isCorrect: true },
          { id: 'c', text: 'Using only open-source libraries', isCorrect: false },
          { id: 'd', text: 'Minimizing testing to speed up development', isCorrect: false }
        ],
        explanation: 'Secure coding practices and mandatory security code reviews are essential to prevent vulnerabilities and ensure the application meets banking security standards.',
        bestPractices: [
          'Follow secure coding standards (OWASP)',
          'Implement mandatory security code reviews',
          'Use established security libraries and frameworks',
          'Implement proper input validation and sanitization',
          'Ensure secure data storage and transmission'
        ]
      },
      {
        id: 'testing',
        title: 'Testing & Quality Assurance',
        context: 'Comprehensive testing is critical for banking applications to ensure security and reliability.',
        situation: 'Testing must cover functional testing, security penetration testing, performance under load, compliance validation, and user acceptance testing with real banking scenarios.',
        question: 'Which testing approach is MOST critical for a banking application?',
        options: [
          { id: 'a', text: 'Only basic functionality testing', isCorrect: false },
          { id: 'b', text: 'Comprehensive security testing including penetration testing', isCorrect: true },
          { id: 'c', text: 'Only automated unit tests', isCorrect: false },
          { id: 'd', text: 'Skip security testing for faster release', isCorrect: false }
        ],
        explanation: 'Comprehensive security testing including penetration testing is crucial to identify vulnerabilities and ensure the application can withstand real-world security threats.',
        bestPractices: [
          'Conduct thorough security and penetration testing',
          'Test compliance with financial regulations',
          'Perform load testing for transaction processing',
          'Test biometric authentication and fallback mechanisms',
          'Validate encryption and data protection'
        ]
      },
      {
        id: 'deployment',
        title: 'Deployment & Release',
        context: 'Deploying a banking app requires careful coordination and security measures.',
        situation: 'Deployment involves app store submissions, backend infrastructure deployment, security monitoring setup, and coordinated launch across multiple channels.',
        question: 'What is the MOST important consideration during banking app deployment?',
        options: [
          { id: 'a', text: 'Deploy quickly to beat competitors', isCorrect: false },
          { id: 'b', text: 'Gradual rollout with comprehensive monitoring and security controls', isCorrect: true },
          { id: 'c', text: 'Deploy all features at once', isCorrect: false },
          { id: 'd', text: 'Skip monitoring to reduce complexity', isCorrect: false }
        ],
        explanation: 'Gradual rollout with comprehensive monitoring and security controls allows for early detection of issues and ensures system stability under real-world conditions.',
        bestPractices: [
          'Implement gradual rollout strategy',
          'Set up comprehensive security monitoring',
          'Prepare incident response procedures',
          'Coordinate with app store review processes',
          'Ensure compliance validation in production'
        ]
      },
      {
        id: 'maintenance',
        title: 'Maintenance & Support',
        context: 'Ongoing maintenance of banking applications requires continuous security monitoring and updates.',
        situation: 'Post-launch activities include 24/7 security monitoring, regular security updates, compliance audits, customer support, and adding new banking features based on user feedback.',
        question: 'What should be the TOP priority during banking app maintenance?',
        options: [
          { id: 'a', text: 'Adding new features as quickly as possible', isCorrect: false },
          { id: 'b', text: 'Continuous security monitoring and prompt security updates', isCorrect: true },
          { id: 'c', text: 'Reducing operational costs', isCorrect: false },
          { id: 'd', text: 'Focus only on user interface improvements', isCorrect: false }
        ],
        explanation: 'Continuous security monitoring and prompt security updates are essential to protect against evolving threats and maintain customer trust in the banking application.',
        bestPractices: [
          'Implement 24/7 security monitoring',
          'Regular security patches and updates',
          'Continuous compliance monitoring',
          'Proactive fraud detection and prevention',
          'Regular security audits and assessments'
        ]
      }
    ]
  },
  {
    id: 'social-media-platform',
    title: 'Social Media Platform Development',
    description: 'A tech startup wants to build a next-generation social media platform with real-time features and content moderation.',
    scenario: 'ConnectSphere aims to create a social media platform that supports real-time messaging, content sharing, live streaming, and AI-powered content moderation while handling millions of users globally.',
    stages: [
      {
        id: 'planning',
        title: 'Planning & Requirements Gathering',
        context: 'Planning a social media platform requires understanding user engagement, scalability, and content management needs.',
        situation: 'Requirements include user profiles, friend connections, news feed, real-time messaging, photo/video sharing, live streaming, content moderation, and advertising system. The platform must support global scale.',
        question: 'What should be the PRIMARY focus during planning for a social media platform?',
        options: [
          { id: 'a', text: 'Focus only on attractive user interface', isCorrect: false },
          { id: 'b', text: 'Scalability requirements and user engagement features', isCorrect: true },
          { id: 'c', text: 'Monetization strategies only', isCorrect: false },
          { id: 'd', text: 'Copy existing platforms exactly', isCorrect: false }
        ],
        explanation: 'Scalability requirements and user engagement features are crucial as social media platforms need to handle massive user bases and keep users actively engaged.',
        bestPractices: [
          'Define scalability requirements for millions of users',
          'Plan real-time features and engagement mechanics',
          'Consider content moderation and safety policies',
          'Design for mobile-first experience',
          'Plan data privacy and security measures'
        ]
      },
      {
        id: 'analysis',
        title: 'System Analysis & Design',
        context: 'Analyzing a social media platform involves complex data relationships and real-time processing requirements.',
        situation: 'The system needs to handle user connections, content feeds, real-time notifications, media storage, and recommendation algorithms while maintaining fast response times.',
        question: 'Which analysis technique is MOST important for social media platforms?',
        options: [
          { id: 'a', text: 'Only focus on database design', isCorrect: false },
          { id: 'b', text: 'Real-time data flow analysis and recommendation system design', isCorrect: true },
          { id: 'c', text: 'Static content analysis only', isCorrect: false },
          { id: 'd', text: 'Ignore scalability considerations', isCorrect: false }
        ],
        explanation: 'Real-time data flow analysis and recommendation system design are critical for delivering personalized, engaging content that keeps users active on the platform.',
        bestPractices: [
          'Design efficient data models for social graphs',
          'Plan real-time notification and messaging systems',
          'Analyze recommendation algorithm requirements',
          'Design content delivery and caching strategies',
          'Plan for content moderation workflows'
        ]
      },
      {
        id: 'design',
        title: 'System Design & Architecture',
        context: 'Social media platforms require distributed architecture to handle global scale and real-time interactions.',
        situation: 'The platform needs distributed databases, content delivery networks, real-time messaging infrastructure, media processing pipelines, and recommendation engines.',
        question: 'What architectural approach is BEST for a global social media platform?',
        options: [
          { id: 'a', text: 'Single server architecture', isCorrect: false },
          { id: 'b', text: 'Distributed microservices with event-driven architecture', isCorrect: true },
          { id: 'c', text: 'Simple client-server model', isCorrect: false },
          { id: 'd', text: 'Monolithic application', isCorrect: false }
        ],
        explanation: 'Distributed microservices with event-driven architecture provides the scalability, real-time capabilities, and fault tolerance needed for global social media platforms.',
        bestPractices: [
          'Design event-driven architecture for real-time updates',
          'Implement distributed caching and CDN strategy',
          'Plan for horizontal scaling and load distribution',
          'Design fault-tolerant messaging systems',
          'Implement efficient media storage and processing'
        ]
      },
      {
        id: 'implementation',
        title: 'Development & Implementation',
        context: 'Implementing social media features requires focus on performance, real-time capabilities, and user experience.',
        situation: 'Development includes real-time messaging, news feed algorithms, media upload/processing, notification systems, and content moderation tools.',
        question: 'What implementation strategy is MOST crucial for social media development?',
        options: [
          { id: 'a', text: 'Build all features before any testing', isCorrect: false },
          { id: 'b', text: 'Iterative development with real-time performance optimization', isCorrect: true },
          { id: 'c', text: 'Focus only on backend without frontend', isCorrect: false },
          { id: 'd', text: 'Implement features without user feedback', isCorrect: false }
        ],
        explanation: 'Iterative development with real-time performance optimization allows for continuous improvement and ensures the platform can handle user growth and engagement.',
        bestPractices: [
          'Implement real-time features with WebSocket connections',
          'Optimize database queries for social graph operations',
          'Build efficient content recommendation algorithms',
          'Implement progressive media loading and caching',
          'Create robust content moderation systems'
        ]
      },
      {
        id: 'testing',
        title: 'Testing & Quality Assurance',
        context: 'Testing social media platforms requires focus on performance, scalability, and user experience under load.',
        situation: 'Testing includes load testing for millions of users, real-time feature testing, content moderation accuracy, and cross-platform compatibility.',
        question: 'Which testing approach is MOST important for social media platforms?',
        options: [
          { id: 'a', text: 'Only basic functionality testing', isCorrect: false },
          { id: 'b', text: 'Load testing and real-time performance testing at scale', isCorrect: true },
          { id: 'c', text: 'Testing only on one platform', isCorrect: false },
          { id: 'd', text: 'Skip performance testing', isCorrect: false }
        ],
        explanation: 'Load testing and real-time performance testing at scale are essential to ensure the platform can handle viral content, peak usage, and maintain good user experience.',
        bestPractices: [
          'Conduct load testing for millions of concurrent users',
          'Test real-time features under high load',
          'Validate content moderation accuracy and speed',
          'Test across multiple devices and platforms',
          'Perform security testing for user data protection'
        ]
      },
      {
        id: 'deployment',
        title: 'Deployment & Release',
        context: 'Deploying social media platforms requires global infrastructure and gradual rollout strategies.',
        situation: 'The platform needs global deployment with regional data centers, gradual user onboarding, A/B testing capabilities, and monitoring for viral content scenarios.',
        question: 'What deployment strategy is BEST for a social media platform launch?',
        options: [
          { id: 'a', text: 'Launch to all users globally at once', isCorrect: false },
          { id: 'b', text: 'Gradual rollout with regional deployment and capacity scaling', isCorrect: true },
          { id: 'c', text: 'Deploy without monitoring systems', isCorrect: false },
          { id: 'd', text: 'Single region deployment only', isCorrect: false }
        ],
        explanation: 'Gradual rollout with regional deployment allows for controlled user growth, performance monitoring, and capacity scaling as the platform gains popularity.',
        bestPractices: [
          'Implement gradual rollout and invitation-based onboarding',
          'Deploy across multiple geographic regions',
          'Set up comprehensive monitoring and alerting',
          'Plan for rapid capacity scaling during viral events',
          'Implement feature flags for controlled feature releases'
        ]
      },
      {
        id: 'maintenance',
        title: 'Maintenance & Support',
        context: 'Maintaining social media platforms requires continuous feature updates, content moderation, and performance optimization.',
        situation: 'Post-launch maintenance includes algorithm improvements, new feature development, content policy enforcement, user support, and platform scaling.',
        question: 'What is the PRIMARY focus during social media platform maintenance?',
        options: [
          { id: 'a', text: 'Only fix bugs when users complain', isCorrect: false },
          { id: 'b', text: 'Continuous engagement optimization and community management', isCorrect: true },
          { id: 'c', text: 'Stop adding new features', isCorrect: false },
          { id: 'd', text: 'Ignore user feedback', isCorrect: false }
        ],
        explanation: 'Continuous engagement optimization and community management are essential to keep users active, attract new users, and maintain a healthy platform ecosystem.',
        bestPractices: [
          'Monitor user engagement metrics and optimize algorithms',
          'Continuously improve content moderation systems',
          'Develop new features based on user feedback',
          'Maintain active community management and support',
          'Scale infrastructure based on usage patterns'
        ]
      }
    ]
  },
  {
    id: 'enterprise-erp-system',
    title: 'Enterprise Resource Planning (ERP) System',
    description: 'A manufacturing company needs a comprehensive ERP system to manage all business operations from procurement to sales.',
    scenario: 'ManufactureMax Inc. wants to replace their legacy systems with a modern ERP solution that integrates inventory management, production planning, financial accounting, human resources, and customer relationship management.',
    stages: [
      {
        id: 'planning',
        title: 'Planning & Requirements Gathering',
        context: 'Planning an ERP system requires understanding complex business processes and integration requirements.',
        situation: 'The company has multiple departments with different legacy systems: inventory management, production scheduling, accounting software, HR system, and CRM. All need to be integrated into one cohesive system.',
        question: 'What should be the TOP priority when planning an ERP system?',
        options: [
          { id: 'a', text: 'Choose the cheapest technology stack', isCorrect: false },
          { id: 'b', text: 'Comprehensive business process analysis and stakeholder alignment', isCorrect: true },
          { id: 'c', text: 'Start development immediately', isCorrect: false },
          { id: 'd', text: 'Focus only on technical requirements', isCorrect: false }
        ],
        explanation: 'Comprehensive business process analysis and stakeholder alignment are crucial because ERP systems affect all departments and must align with existing business workflows.',
        bestPractices: [
          'Map all existing business processes across departments',
          'Identify integration points between different systems',
          'Gather requirements from all stakeholder departments',
          'Define data migration and system integration strategy',
          'Plan for change management and user training'
        ]
      },
      {
        id: 'analysis',
        title: 'System Analysis & Design',
        context: 'ERP system analysis involves complex data relationships and business workflow optimization.',
        situation: 'Analysis reveals need for integrated modules: procurement, inventory, production, sales, accounting, HR, and reporting. Data consistency and real-time updates across modules are critical.',
        question: 'Which analysis aspect is MOST crucial for ERP system development?',
        options: [
          { id: 'a', text: 'Only focus on user interface design', isCorrect: false },
          { id: 'b', text: 'Data model integration and business process workflow analysis', isCorrect: true },
          { id: 'c', text: 'Individual module analysis in isolation', isCorrect: false },
          { id: 'd', text: 'Ignore existing business processes', isCorrect: false }
        ],
        explanation: 'Data model integration and business process workflow analysis ensure that all modules work together seamlessly and support efficient business operations.',
        bestPractices: [
          'Design integrated data models across all modules',
          'Map business process workflows and dependencies',
          'Define master data management strategy',
          'Plan for real-time data synchronization',
          'Analyze reporting and analytics requirements'
        ]
      },
      {
        id: 'design',
        title: 'System Design & Architecture',
        context: 'ERP architecture must support complex business operations, data integrity, and scalability.',
        situation: 'The system needs modular architecture, integrated database design, role-based access control, audit trails, and support for multiple locations and currencies.',
        question: 'What architectural pattern is MOST suitable for enterprise ERP systems?',
        options: [
          { id: 'a', text: 'Simple standalone application', isCorrect: false },
          { id: 'b', text: 'Modular architecture with integrated database and service layer', isCorrect: true },
          { id: 'c', text: 'Separate disconnected applications', isCorrect: false },
          { id: 'd', text: 'Client-only architecture', isCorrect: false }
        ],
        explanation: 'Modular architecture with integrated database and service layer provides flexibility for different business modules while maintaining data consistency and integration.',
        bestPractices: [
          'Design modular architecture for different business functions',
          'Implement integrated database with referential integrity',
          'Plan for role-based access control and security',
          'Design audit trails and compliance features',
          'Support multi-location and multi-currency operations'
        ]
      },
      {
        id: 'implementation',
        title: 'Development & Implementation',
        context: 'ERP implementation requires careful module development, data migration, and user training.',
        situation: 'Development involves building interconnected modules, migrating data from legacy systems, creating user interfaces for different roles, and ensuring system reliability.',
        question: 'What implementation approach is BEST for complex ERP systems?',
        options: [
          { id: 'a', text: 'Build all modules simultaneously without integration testing', isCorrect: false },
          { id: 'b', text: 'Phased implementation with core modules first and gradual rollout', isCorrect: true },
          { id: 'c', text: 'Implement randomly without considering dependencies', isCorrect: false },
          { id: 'd', text: 'Build everything before any testing', isCorrect: false }
        ],
        explanation: 'Phased implementation with core modules first allows for early testing, user feedback, and reduces risk by gradually building system complexity.',
        bestPractices: [
          'Implement core modules first (master data, basic transactions)',
          'Ensure proper data validation and business rule enforcement',
          'Build comprehensive user interfaces for different roles',
          'Implement robust data migration and validation processes',
          'Create extensive integration testing between modules'
        ]
      },
      {
        id: 'testing',
        title: 'Testing & Quality Assurance',
        context: 'ERP testing requires comprehensive validation of business processes, data integrity, and system integration.',
        situation: 'Testing must cover individual module functionality, inter-module integration, business process workflows, data migration accuracy, and user acceptance across departments.',
        question: 'Which testing approach is MOST critical for ERP systems?',
        options: [
          { id: 'a', text: 'Only unit testing of individual functions', isCorrect: false },
          { id: 'b', text: 'End-to-end business process testing and integration testing', isCorrect: true },
          { id: 'c', text: 'Testing only user interfaces', isCorrect: false },
          { id: 'd', text: 'Skip testing to save time', isCorrect: false }
        ],
        explanation: 'End-to-end business process testing and integration testing ensure that complete business workflows function correctly across all modules and departments.',
        bestPractices: [
          'Conduct comprehensive end-to-end business process testing',
          'Test data integrity and consistency across modules',
          'Validate business rules and approval workflows',
          'Test system performance under realistic loads',
          'Conduct user acceptance testing with actual business users'
        ]
      },
      {
        id: 'deployment',
        title: 'Deployment & Release',
        context: 'ERP deployment requires careful planning to minimize business disruption during transition.',
        situation: 'Deployment involves data migration from multiple legacy systems, user training across departments, parallel operations during transition, and system performance monitoring.',
        question: 'What deployment strategy minimizes business risk for ERP systems?',
        options: [
          { id: 'a', text: 'Big bang deployment replacing all systems at once', isCorrect: false },
          { id: 'b', text: 'Phased deployment with parallel operations and gradual migration', isCorrect: true },
          { id: 'c', text: 'Deploy without user training', isCorrect: false },
          { id: 'd', text: 'Deploy without data migration planning', isCorrect: false }
        ],
        explanation: 'Phased deployment with parallel operations allows for gradual transition, reduces business risk, and provides fallback options if issues arise.',
        bestPractices: [
          'Plan phased deployment starting with less critical modules',
          'Run parallel operations during transition period',
          'Conduct comprehensive user training before go-live',
          'Implement robust data migration and validation processes',
          'Establish 24/7 support during initial deployment phases'
        ]
      },
      {
        id: 'maintenance',
        title: 'Maintenance & Support',
        context: 'ERP maintenance involves ongoing system optimization, business process improvements, and user support.',
        situation: 'Post-deployment activities include system performance optimization, user support and training, business process refinements, regulatory updates, and system enhancements.',
        question: 'What is the PRIMARY focus during ERP system maintenance?',
        options: [
          { id: 'a', text: 'Only fix critical system failures', isCorrect: false },
          { id: 'b', text: 'Continuous process optimization and user support', isCorrect: true },
          { id: 'c', text: 'Avoid any system changes', isCorrect: false },
          { id: 'd', text: 'Reduce support to minimize costs', isCorrect: false }
        ],
        explanation: 'Continuous process optimization and user support ensure the ERP system evolves with business needs and users can maximize their productivity and efficiency.',
        bestPractices: [
          'Monitor system performance and optimize bottlenecks',
          'Provide ongoing user training and support',
          'Continuously improve business processes based on data insights',
          'Keep system updated with regulatory and compliance changes',
          'Plan for system scalability as business grows'
        ]
      }
    ]
  }
];

export const caseStudyConfig = {
  passingScore: 0.7, // 70% to pass
  showExplanations: true,
  allowRetry: true,
  trackProgress: true
};