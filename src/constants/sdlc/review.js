/**
 * Traditional SDLC Review Phase Configuration
 * 
 * Educational content for teaching classical project review and retrospective
 * methodologies in software development. This configuration provides systematic
 * approaches to evaluating project outcomes and continuous improvement.
 * 
 * Review Phase Components:
 * - Performance analysis with metrics and KPI evaluation
 * - Stakeholder feedback collection and analysis
 * - Team retrospectives for process improvement
 * - Documentation review and knowledge capture
 * - Lessons learned compilation and sharing
 * - Process optimization recommendations
 * 
 * Educational Objectives:
 * - Teach systematic approach to project evaluation
 * - Emphasize importance of continuous improvement
 * - Show value of stakeholder feedback in development process
 * - Build skills in retrospective facilitation and analysis
 * - Prepare foundation for modern agile retrospective practices
 * 
 * Learning Outcomes:
 * Students understand how systematic review and reflection improve
 * future project outcomes and team performance, forming the basis
 * for modern continuous improvement practices.
 */

/**
 * Traditional Review Process Steps
 * 
 * Sequential activities for conducting comprehensive project reviews
 * and capturing lessons learned for future improvement.
 */
const reviewSteps = [
	{
		id: 1,
		title: "Performance Analysis",
		icon: "📊",
		description: "Evaluate project outcomes against initial goals and KPIs",
		color: "#FF6B6B",
	},
	{
		id: 2,
		title: "Stakeholder Feedback",
		icon: "💬",
		description: "Gather feedback from users, clients, and team members",
		color: "#4ECDC4",
	},
	{
		id: 3,
		title: "Retrospective Meeting",
		icon: "🔄",
		description: "Team discusses what went well, what didn't, and improvements",
		color: "#45B7D1",
	},
	{
		id: 4,
		title: "Lessons Learned",
		icon: "📝",
		description: "Document insights, best practices, and mistakes to avoid",
		color: "#96CEB4",
	},
	{
		id: 5,
		title: "Process Improvement",
		icon: "⚡",
		description: "Identify and implement improvements to development process",
		color: "#FFEAA7",
	},
	{
		id: 6,
		title: "Knowledge Transfer",
		icon: "🎓",
		description: "Share learnings with broader organization and future teams",
		color: "#DDA0DD",
	},
];
const reviewTypes = [
	{
		id: "retrospective",
		name: "Effective Retrospectives",
		emoji: "🔄",
		color: "#667eea",
		story: {
			title: "The Agile Team",
			scenario:
				"TeamFast held sprint retrospectives religiously every 2 weeks. They followed the template: 'What went well? What didn't? Action items.' But meetings felt repetitive and boring. Same people spoke, same issues raised, action items forgotten.",
			failure:
				"❌ Retrospectives became checkbox exercises. Team members checked email during meetings. Real issues weren't discussed - people feared blame. Action items from previous retros were never implemented. After 6 months, they were making the same mistakes. Team morale declined. Developers said 'retrospectives are a waste of time.'",
			fix:
				"✅ Revamped Retrospective Format: Rotated facilitators and formats (sailboat, 4Ls, start-stop-continue), created psychological safety - 'no blame, focus on systems', limited to top 3 action items with clear owners and deadlines, followed up on previous action items first, brought data (metrics, not opinions), tried new formats like silent brainstorming. Result: Engagement improved, real issues surfaced, continuous improvement visible, team velocity increased 40% over 6 months.",
		},
	},
	{
		id: "metrics",
		name: "Data-Driven Review",
		emoji: "📈",
		color: "#4ECDC4",
		story: {
			title: "The Product Launch",
			scenario:
				"InnovateCorp launched their new product. Post-launch review was based on feelings: 'I think it went well,' 'Users seem happy,' 'We could have done better.' No data, just opinions. Everyone had different perspectives on success.",
			failure:
				"❌ Without data, they couldn't identify real problems. Marketing claimed 'great adoption,' Engineering said 'too many bugs,' Product felt 'features were wrong.' Arguments erupted. No agreement on what to improve. Next project repeated same mistakes. CEO frustrated: 'Why aren't we learning?'",
			fix:
				"✅ Implemented Data-Driven Reviews: Defined success metrics upfront (user adoption, engagement, revenue, bug rate, performance), collected data throughout project, presented objective metrics in review. Discovered: 40% feature adoption (target: 60%), 15 critical bugs (target: <5), page load 4s (target: 2s), but revenue exceeded target by 20%. Used data to prioritize improvements: performance optimization and bug fixes over new features. Next project used learnings - hit all targets.",
		},
	},
	{
		id: "blameless",
		name: "Blameless Post-Mortems",
		emoji: "🛡",
		color: "#F8B500",
		story: {
			title: "The Production Outage",
			scenario:
				"CriticalApp had a 6-hour production outage affecting 1 million users. Post-mortem meeting focused on finding who caused it. 'Who deployed the bad code? Who approved the merge? Why didn't QA catch it?' Finger-pointing session ensued.",
			failure:
				"❌ Junior developer who deployed was blamed and shamed publicly. She became afraid to deploy anything. Other developers started hiding mistakes. Real systemic issues never addressed: no automated tests, no staging environment, no rollback plan, manual deployment process. 3 months later, same type of outage occurred. Developer who was blamed quit. Team trust destroyed.",
			fix:
				"✅ Adopted Blameless Post-Mortem Culture: Focus on systems, not people ('how did our process allow this?'). Created timeline of events without blame, identified root causes (lack of automated testing, no rollback procedure), documented action items to prevent recurrence, celebrated learning. Implemented: automated testing, staging environment, one-click rollback, deployment checklist. Shared post-mortem publicly. Culture shift: people now report issues early, outages decreased 90%, psychological safety improved, innovation increased.",
		},
	},
];
const drawbacks = [
	{
		id: 1,
		icon: "⏭",
		title: "Skipping Reviews",
		problem:
			"Rushing to the next project without reviewing the previous one means repeating the same mistakes and never improving as a team.",
		resolution:
			"Make reviews mandatory: Schedule review meetings before project closure, require lessons-learned documentation, tie project closure to review completion, allocate time in project timeline for review, celebrate what was learned.",
	},
	{
		id: 2,
		icon: "🎯",
		title: "No Actionable Outcomes",
		problem:
			"Reviews that end with vague statements like 'we should communicate better' without specific actions lead to no real improvement.",
		resolution:
			"Make action items SMART: Specific (clear what to do), Measurable (can verify completion), Assigned (clear owner), Realistic (achievable), Time-bound (clear deadline). Limit to top 3-5 items. Track completion. Review action items in next retrospective.",
	},
	{
		id: 3,
		icon: "👥",
		title: "Limited Participation",
		problem:
			"Reviews dominated by senior members or management don't surface real issues that junior team members experience daily.",
		resolution:
			"Encourage diverse participation: Use silent brainstorming, rotate facilitators, gather anonymous feedback, create psychological safety, specifically ask quieter members for input, use techniques like round-robin sharing, make it clear all perspectives are valued.",
	},
	{
		id: 4,
		icon: "📚",
		title: "Not Sharing Learnings",
		problem:
			"Keeping lessons learned within one team means other teams repeat the same mistakes, and organizational learning is lost.",
		resolution:
			"Share knowledge broadly: Create a lessons-learned repository, present key learnings in all-hands meetings, write blog posts or internal wikis, create templates based on learnings, conduct lunchand-learn sessions, include learnings in onboarding materials.",
	},
];
export { reviewSteps, reviewTypes, drawbacks };