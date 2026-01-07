/**
 * Learn Software Development Hub Configuration
 * 
 * Educational content configuration for the main SDLC learning hub that provides
 * an overview of all software development phases. This serves as the entry point
 * for students beginning their journey through traditional SDLC methodology.
 * 
 * Content Structure:
 * - Development stage definitions with clear descriptions
 * - Progressive learning path from planning to maintenance
 * - Phase relationships and dependencies explanation
 * - Introduction to SDLC concepts and terminology
 * - Navigation guidance for the learning experience
 * 
 * Educational Purpose:
 * - Provides comprehensive overview before detailed phase exploration
 * - Establishes foundational understanding of SDLC methodology
 * - Shows logical flow and relationships between phases
 * - Prepares students for in-depth phase-specific learning
 * - Serves as reference point throughout the learning journey
 * 
 * Learning Objectives:
 * - Understand the purpose and scope of each SDLC phase
 * - Recognize the sequential and iterative nature of development
 * - Appreciate the importance of systematic development approaches
 * - Build vocabulary and conceptual foundation for advanced topics
 * 
 * This configuration creates the foundation for students to understand
 * traditional software development before exploring AI-augmented approaches.
 */

/**
 * SDLC Development Stages Overview
 * 
 * Comprehensive descriptions of each software development phase
 * used in the main learning hub interface.
 */
const developmentStages = [
  {
    id: "planning",
    title: "Planning",
    description:
      "Define the project scope, requirements, and create a roadmap. This phase involves stakeholder meetings, timeline estimation and resource allocation.",
  },
  {
    id: "analysis",
    title: "Analysis",
    description:
      "Gather detailed requirements and analyze the needs of the end-users. This phase includes feasibility studies and risk assessments.",
  },
  {
    id: "design",
    title: "Design",
    description:
      "Create system architecture, design user interfaces, and plan database structures. This phase focuses on creating prototypes and design documents.",
  },
  {
    id: "implementation",
    title: "Implementation",
    description:
      "Write code, develop features, and integrate systems. This phase involves coding, unit testing, and version control management.",
  },
  {
    id: "testing",
    title: "Testing",
    description:
      "Conduct various tests to ensure the software meets quality standards. This phase includes functional testing, performance testing, and bug fixing.",
  },
  {
    id: "deployment",
    title: "Deployment",
    description:
      "Release the software to production environments. This phase involves user training, documentation, and post-deployment support.",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description:
      "Ongoing support and updates to the software. This phase includes monitoring performance, fixing issues, and implementing new features as needed.",
  },
  {
    id: "review",
    title: "Review",
    description:
      "Evaluate the project outcomes against initial goals. This phase involves gathering feedback, conducting retrospectives, and documenting lessons learned.",
  },
];
export default developmentStages;
