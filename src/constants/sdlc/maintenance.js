const maintenanceSteps = [
	{
		id: 1,
		title: "Monitoring & Logging",
		icon: "📊",
		description: "Continuously monitor system health, performance, and user behavior",
		color: "#FF6B6B",
	},
	{
		id: 2,
		title: "Bug Fixing",
		icon: "🐛",
		description: "Identify, prioritize, and fix bugs reported by users or monitoring",
		color: "#4ECDC4",
	},
	{
		id: 3,
		title: "Performance Optimization",
		icon: "⚡",
		description: "Improve system performance, reduce load times, optimize resources",
		color: "#45B7D1",
	},
	{
		id: 4,
		title: "Security Updates",
		icon: "🔒",
		description: "Apply security patches, update dependencies, address vulnerabilities",
		color: "#96CEB4",
	},
	{
		id: 5,
		title: "Feature Enhancements",
		icon: "✨",
		description: "Add small improvements and enhancements based on user feedback",
		color: "#FFEAA7",
	},
	{
		id: 6,
		title: "Technical Debt Management",
		icon: "🔧",
		description: "Refactor code, update dependencies, improve code quality",
		color: "#DDA0DD",
	},
];
const maintenanceTypes = [
	{
		id: "reactive",
		name: "Reactive vs Proactive Maintenance",
		emoji: "🔥",
		color: "#667eea",
		story: {
			title: "The SaaS Platform",
			scenario:
				"CloudServe operated purely reactively: 'If it ain't broke, don't fix it.' They only addressed issues when users complained. No monitoring, no preventive updates. Dev team focused only on new features.",
			failure:
				"❌ A database reached 95% capacity - no one noticed until it crashed at 100%, taking the entire platform offline for 6 hours. Security vulnerability in a dependency was exploited before they knew it existed - data breach affected 50,000 users. Performance degraded slowly over months; users left for competitors before they realized. Fire-fighting became the norm, team burned out.",
			fix:
				"✅ Shifted to Proactive Maintenance: Implemented monitoring with alerts (disk space, memory, error rates), automated dependency updates with security scanning, scheduled regular health checks and code reviews, set up capacity planning based on growth trends. 80% of issues now caught BEFORE impacting users. Created maintenance windows for updates. Team happiness improved, downtime reduced by 90%.",
		},
	},
	{
		id: "technical-debt",
		name: "Technical Debt Management",
		emoji: "💳",
		color: "#4ECDC4",
		story: {
			title: "The Legacy System",
			scenario:
				"TechCorp's 10-year-old system had accumulated massive technical debt. Every time they needed to add a feature: 'We'll do it the quick way now, refactor later.' Later never came. Codebase became a tangled mess.",
			failure:
				"❌ Adding a simple feature took 3 months instead of 1 week. Junior developers couldn't understand the code. Critical bugs took weeks to fix. System was so fragile that any change broke something else. They were paying compound interest on their technical debt - velocity decreased 80%. Finally, they had to do a complete rewrite costing $2M and 2 years.",
			fix:
				"✅ Implemented Technical Debt Strategy: Allocated 20% of each sprint to addressing technical debt, created a technical debt backlog with prioritization, used 'Boy Scout Rule' - leave code better than you found it, refactored modules before adding new features. Tracked debt metrics (code complexity, test coverage). After 1 year: Development velocity increased 3x, bug rate decreased 70%, developer satisfaction improved dramatically.",
		},
	},
	{
		id: "updates",
		name: "Dependency Management",
		emoji: "📦",
		color: "#F8B500",
		story: {
			title: "The E-Commerce Platform",
			scenario:
				"ShopFast never updated their dependencies: 'Our versions work fine, why update?' React version from 2018, outdated security libraries, Node.js 3 major versions behind. Dependencies hadn't been updated in 3 years.",
			failure:
				"❌ Critical security vulnerability discovered in their outdated authentication library - actively being exploited. Tried to update just that library - broke everything due to incompatible versions. To fix vulnerability, they had to update entire dependency tree - 150+ packages. Updates broke UI, backend APIs, payment processing. Spent 2 months fixing breaks. During this time, vulnerability exposed customer credit cards. Lawsuit and regulatory fines: $5M.",
			fix:
				"✅ Established Dependency Management Process: Automated dependency updates with Dependabot/Renovate, weekly security audits, staged rollout of updates (dev → staging → production), maintained compatibility matrix, kept dependencies no more than 6 months old. Set up automated testing to catch breaking changes. Now: Security vulnerabilities patched within 24 hours, updates take minutes not months, staying current with latest features.",
		},
	},
];
const drawbacks = [
	{
		id: 1,
		icon: "⏰",
		title: "Neglecting Maintenance",
		problem:
			"Focusing only on new features while ignoring maintenance leads to system degradation, security vulnerabilities, and eventual system failure.",
		resolution:
			"Treat maintenance as a first-class citizen: Allocate dedicated time (20-30% of capacity), create a maintenance backlog, celebrate maintenance wins like feature releases, include maintenance in sprint planning, track maintenance metrics.",
	},
	{
		id: 2,
		icon: "📉",
		title: "No Performance Monitoring",
		problem:
			"Without monitoring, performance degradation happens gradually until users complain or leave, and you don't know what's causing it.",
		resolution:
			"Implement comprehensive monitoring: Application Performance Monitoring (APM) tools like New Relic or DataDog, set up error tracking, monitor user experience metrics, create performance budgets, set up alerts for anomalies, regular performance audits.",
	},
	{
		id: 3,
		icon: "🔒",
		title: "Delaying Security Updates",
		problem:
			"Postponing security updates because 'they might break things' leaves your system vulnerable to known exploits.",
		resolution:
			"Prioritize security: Automated security scanning in CI/CD, immediate patching of critical vulnerabilities, regular dependency updates, security audit schedule, bug bounty program, security training for developers.",
	},
	{
		id: 4,
		icon: "📚",
		title: "Knowledge Loss",
		problem:
			"When original developers leave and knowledge isn't documented, maintaining the system becomes increasingly difficult and risky.",
		resolution:
			"Document institutional knowledge: Maintain architecture decision records (ADRs), create runbooks for common issues, document complex business logic, conduct knowledge-sharing sessions, pair programming to spread knowledge, code comments for 'why' not just 'what'.",
	},
];
export { maintenanceSteps, maintenanceTypes, drawbacks };