/**
 * Traditional SDLC Story Content
 * 
 * Interactive narrative content for the Software Development Life Cycle story page.
 * Contains chapter-based content following Sarah and Alex as they develop a coffee
 * shop app using traditional SDLC methodology.
 * 
 * Story Structure:
 * - Chapter-based progression through all SDLC phases
 * - Character-driven narrative with business owner (Sarah) and developer (Alex)
 * - Real-world analogies to make technical concepts accessible
 * - Visual elements including icons, illustrations, and color themes
 * 
 * Educational Purpose:
 * - Makes abstract software development concepts concrete through storytelling
 * - Demonstrates stakeholder collaboration and communication patterns
 * - Shows practical application of each SDLC phase in business context
 * - Provides memorable learning experience through narrative engagement
 * 
 * Each chapter contains:
 * - id: Unique identifier for chapter navigation
 * - title: Chapter heading for display
 * - subtitle: Phase or theme description
 * - icon: Visual identifier for the chapter
 * - story: Array of narrative paragraphs with dialogue and explanation
 * - illustration: Visual elements for enhanced engagement
 * - color/gradient: Theme colors for visual consistency
 */

// Coffee shop app development story chapters
const chapters = [
  {
    id: 0,
    title: "Chapter 1: The Vision",
    subtitle: "Planning & Requirements",
    icon: "☕",
    story: [
      "Sarah, a passionate coffee shop owner, dreamed of creating an app that would revolutionize how customers ordered their morning brew.",
      "She sat down with Alex, a software developer, to share her vision.",
      '"I want customers to pre-order their coffee, customize their drinks, and pick them up without waiting in line," Sarah explained, her eyes lighting up.',
      'Alex took notes, asking questions: "How many drink options? Payment methods? Loyalty program?"',
      "Together, they created a detailed plan - like an architect's blueprint before building a house.",
    ],
    illustration: "💭 📋 ",
  },
  {
    id: 1,
    title: "Chapter 2: The Blueprint",
    subtitle: "Design & Architecture",
    icon: "📐 ",
    story: [
      "Alex sketched wireframes on napkins at Sarah's coffee shop.",
      '"The app needs three main screens: Menu, Customization, and Checkout," he explained, drawing boxes and arrows.',
      "Behind the scenes, Alex designed the technical foundation:",
      "• A database to store drinks, prices, and customer orders",
      "• A payment system integration",
      "• A notification service for order updates",
      "It was like planning a building - you need to know where the kitchen, dining area, and storage will go before laying the first brick.",
    ],
    illustration: "🏗 📱 ",
  },
  {
    id: 2,
    title: "Chapter 3: The Construction",
    subtitle: "Implementation/Coding",
    icon: "💻 ",
    story: [
      "For three months, Alex worked in his home office, typing code line by line.",
      "Each day was like a craftsman building furniture:",
      "• Monday: Created the menu display (like crafting the shop window)",
      "• Tuesday: Built the drink customization feature (like installing an espresso machine)",
      "• Wednesday: Integrated the payment system (like setting up the cash register)",
      "Sarah would visit weekly to see progress, watching her dream take digital form.",
    ],
    illustration: "⌨ 🔨 ",
  },
  {
    id: 3,
    title: "Chapter 4: The Quality Check",
    subtitle: "Testing",
    icon: "🔍 ",
    story: [
      "Before opening day, Alex became a detective, hunting for problems:",
      "• He tested ordering 100 lattes at once (stress testing)",
      "• He tried paying with expired credit cards (error handling)",
      "• He asked his friends to use the app and report any confusion (user testing)",
      "Just like Sarah taste-tested every coffee recipe before adding it to her menu, every feature needed thorough testing.",
    ],
    illustration: "🔬 ✅ ",
  },
  {
    id: 4,
    title: "Chapter 5: The Grand Opening",
    subtitle: "Deployment",
    icon: "🚀 ",
    story: [
      "Launch day arrived!",
      "Alex carefully moved the app from his development computer to the app stores, like moving from a prototype kitchen to a real restaurant.",
      "He set up monitoring systems - digital security cameras that would alert him if anything went wrong.",
      "The app went live at midnight, and by morning, Sarah's first digital orders were flowing in.",
    ],
    illustration: "🎉 📲 ",
  },
  {
    id: 5,
    title: "Chapter 6: The Journey Continues",
    subtitle: "Maintenance & Evolution",
    icon: "🔧 ",
    story: [
      "Success brought new challenges:",
      "• Week 2: A bug caused double-charging (emergency fix needed)",
      "• Month 3: Customers requested seasonal drinks (new feature)",
      "• Month 6: Holiday rush required server upgrades (scaling)",
      "Alex became like Sarah's maintenance crew, constantly improving and fixing the app, just as Sarah continuously refined her coffee recipes and shop atmosphere.",
    ],
    illustration: "⚙ 📈 ",
  },
  {
    id: 6,
    title: "The Moral of the Story",
    subtitle: "Understanding the Process",
    icon: "✨ ",
    story: [
      "The development process isn't just about coding - it's about transforming dreams into reality through careful planning, skilled craftsmanship, rigorous testing, and ongoing care.",
      "Just as Sarah's coffee shop needed planning (menu design), construction (building the space), quality control (recipe testing), opening day (grand opening), and ongoing maintenance (daily operations), software development follows the same human pattern.",
      "Every great app, like every great coffee shop, starts with someone's vision and succeeds through a disciplined process that turns ideas into experiences that delight users every day.",
      "And that's how Sarah's simple idea became the most popular coffee ordering app in her city - through the magic of a well-executed development process! ☕📱 ",
    ],
    illustration: "🌟 💡 ",
  },
];
export default chapters;
