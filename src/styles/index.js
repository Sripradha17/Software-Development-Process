

/**
* ============================================
* CONSOLIDATED STYLES FOR SOFTWARE DEVELOPMENT PROCESS APP
* ============================================
*
* This file contains all styling for the application pages including:
* - IntroPage (Homepage)
* - Learn Software Development Page
* - Story Page
* - Planning Page
* - Analysis Page
* - Design Page
*
* RESPONSIVE DESIGN APPROACH:
* - Uses CSS clamp() for fluid, responsive typography and spacing
* - Flexbox and Grid layouts with auto-fit/auto-fill for responsive
containers
* - Viewport units (vw, vh) and percentages for flexible sizing
* - Global font-size adjustments in index.css for different
breakpoints
*
* SCREEN SIZE BREAKPOINTS:
* - Small (Mobile): < 480px
* - Medium (Tablet Portrait): 480px - 768px
* - Large (Tablet Landscape/Small Laptop): 768px - 1024px
* - Extra Large (Desktop): > 1024px
*
* USAGE:
* import styles from './styles';
* <div style={styles.pageContainer}>...</div>
*
* Last Updated: December 2025
* ============================================
*/
const style = {
    // =============================
  // MENU COMPONENT STYLES
  // =============================
  // =============================
  // QUIZ COMPONENT STYLES
  // =============================
  quizContainer: {
    margin: '2rem 0',
    padding: '1.5rem',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    boxShadow: '0 8px 32px rgba(26, 188, 156, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(26, 188, 156, 0.2)',
  },
  quizQuestionBlock: {
    marginBottom: '2rem',
  },
  quizQuestion: {
    fontWeight: '600',
    fontSize: '1.15rem',
    marginBottom: '0.75rem',
    color: '#1ABC9C',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  },
  quizOptions: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '0.5rem',
  },
  quizOptionBtn: {
    display: 'block',
    width: '100%',
    padding: '0.5rem 1rem',
    marginBottom: '0.5rem',
    background: 'rgba(26, 188, 156, 0.1)',
    border: '1px solid rgba(26, 188, 156, 0.3)',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    color: '#16A085',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(5px)',
  },
  quizOptionBtnSelected: {
    background: 'rgba(26, 188, 156, 0.3)',
    borderColor: '#1ABC9C',
    color: '#fff',
    boxShadow: '0 4px 15px rgba(26, 188, 156, 0.2)',
  },
  quizFeedback: {
    marginTop: '0.5rem',
    fontWeight: '500',
    fontSize: '1rem',
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    backdropFilter: 'blur(10px)',
  },
  quizFeedbackCorrect: {
    background: 'rgba(40, 167, 69, 0.2)',
    color: '#28a745',
    border: '1px solid rgba(40, 167, 69, 0.4)',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
  },
  quizFeedbackIncorrect: {
    background: 'rgba(220, 53, 69, 0.2)',
    color: '#dc3545',
    border: '1px solid rgba(220, 53, 69, 0.4)',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
  },
  quizExplanation: {
    marginTop: '0.5rem',
    fontSize: '0.95rem',
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '400',
    lineHeight: 1.4,
  },
  menuContainer: {
    position: "relative",
    display: "inline-block",
    margin: "1.5rem 0 1.5rem 0",
    zIndex: 1200,
  },
  menuButton: {
    background: "linear-gradient(90deg, #1ABC9C 0%, #16A085 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    padding: "0.8rem 2.2rem",
    fontSize: "1.1rem",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 4px 16px rgba(26, 188, 156, 0.15)",
    transition: "background 0.3s, box-shadow 0.3s",
    outline: "none",
    marginBottom: "0.5rem",
    letterSpacing: "0.5px",
  },
  menuDropdown: {
    position: "absolute",
    top: "110%",
    left: 0,
    minWidth: "220px",
    background: "rgba(255,255,255,0.98)",
    borderRadius: "18px",
    boxShadow: "0 8px 32px rgba(26, 188, 156, 0.18)",
    padding: "0.5rem 0",
    border: "1.5px solid #1ABC9C",
    zIndex: 1201,
    animation: "fadeInMenu 0.25s",
  },
  menuItem: {
    color: "#16A085",
    fontWeight: 600,
    fontSize: "1.05rem",
    padding: "0.85rem 1.5rem",
    border: "none",
    borderRadius: "12px",
    background: "none",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
    margin: 0,
  },
  menuItemHover: {
    background: "linear-gradient(90deg, #1ABC9C 0%, #16A085 100%)",
    color: "#fff",
    textDecoration: "none",
  },
  // ============================================
  // GLOBAL & SHARED STYLES
  // ============================================
  // Common page container for all pages
  pageContainer: {
    minHeight: "100vh",
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(135deg, #0c131b, #1f2a38, #3c4f5e)",
    position: "relative",
    overflow: "hidden",
  },
  // Software development intro page
  softwareDevIntro: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  responsiveContainer: {
    maxWidth: "100%",
  },
  // Back link styling - consistent across all pages
  backLink: {
    position: "absolute",
    top: "20px",
    left: "20px",
    padding: "8px 24px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "#0E7B71",
    textDecoration: "none",
    borderRadius: "30px",
    fontSize: "1rem",
    fontWeight: "600",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255, 255, 255, 0.5)",
    transition: "all 0.3s ease",
    zIndex: 1000,
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  },
  // ============================================
  // INTRO PAGE (HOMEPAGE) STYLES
  // ============================================
  introContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    fontFamily: "'Segoe UI', sans-serif",
    background: "linear-gradient(135deg, #0c131b, #1f2a38, #3c4f5e)",
  },
  introTitle: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: "700",
    color: "#1ABC9C",
    marginBottom: "2rem",
    textAlign: "center",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  },
  mainImage: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginBottom: "2rem",
  },
  introButton: {
    height: "fit-content",
    padding: "1rem 2rem",
    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
    fontWeight: "600",
    borderRadius: "30px",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    backgroundColor: "rgba(26, 188, 156, 0.2)",
    color: "#1ABC9C",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
  },
  buttonSection: {
    marginTop: "2rem",
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    paddingBottom: "2rem",
    flexWrap: "wrap",
  },
  // ============================================
  // LEARN SOFTWARE DEVELOPMENT PAGE STYLES
  // ============================================
  contentWrapper: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    padding: "2rem",
    top: 30,
  },
  mainTitle: {
    fontSize: "clamp(2rem, 5vw, 2.5rem)",
    fontWeight: 700,
    color: "#1ABC9C",
    marginBottom: "2rem",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    background:
      "linear-gradient(45deg, rgba(255, 255, 255, 0.9),rgba(26, 188, 156, 0.9))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  descriptionSection: {
    marginBottom: "4rem",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "0 1rem",
  },
  mainDescription: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    lineHeight: 1.8,
    color: "#16A085",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
    background: "rgba(255, 255, 255, 0.1)",
    padding: "2rem",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  stagesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
    minHeight: "200px",
    padding: "1rem",
  },
  stageWrapper: {
    position: "relative",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    width: "100%",
    maxWidth: "420px",
  },
  stageCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    width: "100%",
    height: "100%",
    minHeight: "260px",
    minWidth: "320px",
    borderRadius: "15px",
  },
  cardContent: {
    padding: "1.5rem",
    textAlign: "center",
    width: "100%",
  },
  cardTitle: {
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    fontWeight: "700",
    color: "rgb(2 253 255)",
    marginBottom: "20px",
  },
  cardDescription: {
    fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
    lineHeight: 1.5,
    opacity: 0.95,
    textShadow: "rgb(60 171 0) 3px 4px 2px",
    color: "rgb(2 253 255)",
  },
  stageCircle: {
    width: "100%",
    minHeight: "120px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: 600,
    fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
    textAlign: "center",
    boxShadow: "0 8px 32px rgba(170, 188, 209, 0.3)",
    border: "2px solid rgba(23, 7, 68, 0.3)",
    backdropFilter: "blur(5px)",
    transition: "all 0.3s ease",
    overflow: "hidden",
    padding: "1rem",
  },
  circleTitle: {
    padding: "10px",
    textShadow: "rgb(60 171 0) 3px 4px 2px",
    zIndex: 2,
    position: "relative",
    color: "rgb(2 253 255)",
  },
  storyButton: {
    background:
      "linear-gradient(45deg, #A7FFF0, #0b3833ff, #1e7a74ff, #05463eff)",
    backgroundSize: "300% 300%",
    border: "none",
    color: "#004F4F",
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    fontWeight: 600,
    padding: "1rem 2.5rem",
    borderRadius: "50px",
    cursor: "pointer",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    border: "2px solid rgba(0, 79, 79, 0.25)",
    backdropFilter: "blur(10px)",
    position: "relative",
    overflow: "hidden",
    marginTop: "3rem",
    marginBottom: "5rem",
    transition: "all 0.3s ease",
  },
  storyButtonSpan: {
    background:
      "linear-gradient(45deg, #6ada4eff, #37b92cff,#338f21ff, #29610fff)",
    backgroundSize: "200% 200%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    position: "relative",
    zIndex: 2,
  },
  backgroundParticle: {
    position: "absolute",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "rgba(26, 188, 156, 0.5)",
    pointerEvents: "none",
  },
  // ============================================
  // STORY PAGE STYLES
  // ============================================
  storyContainer: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    transition: "background 0.5s ease",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  introWrapper: {
    position: "relative",
    zIndex: 10,
    width: "100%",
    maxWidth: "900px",
    textAlign: "center",
    marginTop: "5rem",
    gap: "20px",
    padding: "1rem",
  },
  introContent: {
    backgroundColor: "rgb(49, 68, 89)",
    borderRadius: "30px",
    padding: "clamp(2rem, 5vw, 5rem)",
    boxShadow: "50px 30px 20px rgba(43, 139, 151, 0.3)",
    backdropFilter: "blur(20px)",
    border: "3px solid rgba(255, 255, 255, 0.5)",
    position: "relative",
    zIndex: 2,
  },
  introIcon: {
    fontSize: "clamp(60px, 10vw, 100px)",
    marginBottom: "30px",
    filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1))",
  },
  contentIntroTitle: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: "900",
    background: "linear-gradient(135deg, #4bb1b4ff 0%, #325fa1ff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "15px",
    lineHeight: 1.2,
  },
  introSubtitle: {
    fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
    color: "#4aa07cff",
    fontWeight: "600",
    marginBottom: "30px",
    fontStyle: "italic",
  },
  introDescription: {
    fontSize: "clamp(1rem, 2vw, 1.3rem)",
    color: "#bde4ceff",
    lineHeight: 1.8,
    marginBottom: "50px",
    maxWidth: "600px",
    margin: "0 auto 50px",
    padding: "0 1rem",
  },
  startButton: {
    padding: "clamp(12px, 2vw, 18px) clamp(30px, 5vw, 50px)",
    fontSize: "clamp(1rem, 2vw, 1.3rem)",
    fontWeight: "700",
    border: "none",
    borderRadius: "50px",
    background: "linear-gradient(135deg, #4496a5ff 0%, #2dac6cff 100%)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(151, 198, 206, 0.4)",
  },
  floatingBean: {
    position: "absolute",
    fontSize: "clamp(20px, 3vw, 30px)",
    zIndex: 1,
    pointerEvents: "none",
  },
  progressContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    zIndex: 999,
  },
  progressBar: {
    height: "100%",
    transition: "background 0.5s ease",
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
  },
  dotsContainer: {
    position: "absolute",
    top: "120px",
    left: "50%",
    transform: "translate(-50%, 0)",
    display: "flex",
    gap: "12px",
    zIndex: 1001,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    padding: "8px 16px",
    borderRadius: "30px",
    backdropFilter: "blur(8px)",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "90%",
  },
  dot: {
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    padding: "10px",
  },
  chapterContainer: {
    maxWidth: "1000px",
    width: "100%",
    padding: "clamp(1rem, 5vw, 5rem)",
    position: "relative",
    justifyContent: "center",
    zIndex: 10,
  },
  chapterContent: {
    backgroundColor: "rgb(49, 68, 89)",
    borderRadius: "30px",
    padding: "clamp(2rem, 5vw, 6rem) clamp(1.5rem, 4vw, 5rem)",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(20px)",
    border: "2px solid rgba(255, 255, 255, 0.5)",
  },
  chapterIcon: {
    fontSize: "clamp(50px, 8vw, 80px)",
    textAlign: "center",
    marginBottom: "20px",
    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))",
  },
  chapterTitle: {
    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "10px",
    background: "linear-gradient(135deg, #4bb1b4ff 0%, #325fa1ff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    lineHeight: 1.2,
  },
  chapterSubtitle: {
    fontSize: "clamp(1rem, 2vw, 1.4rem)",
    fontWeight: "600",
    textAlign: "center",
    color: "#ffeb3b", // Bright yellow for subtitle
    marginBottom: "40px",
    fontStyle: "italic",
    textShadow: "0 2px 8px rgba(0,0,0,0.7)", // Add shadow for readability
  },
  storyContent: {
    marginBottom: "40px",
    padding: "0 1rem",
  },
  storyLine: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    lineHeight: 1.8,
    color: "#fff", // Bright white for high contrast
    marginBottom: "20px",
    textAlign: "left",
    textShadow: "0 2px 8px rgba(0,0,0,0.7)", // Add shadow for readability
  },
  bulletPoint: {
    paddingLeft: "20px",
    fontWeight: "700",
    color: "#ffeb3b", // Bright yellow for bullets
    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
  },
  quoteLine: {
    fontStyle: "italic",
    color: "#00eaff", // Bright cyan for quotes
    borderLeft: "4px solid #ffeb3b", // Bright yellow border
    paddingLeft: "20px",
    fontWeight: "700",
    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
  },
  illustration: {
    fontSize: "clamp(40px, 6vw, 60px)",
    textAlign: "center",
    marginTop: "30px",
    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))",
  },
  planButtonContainer: {
    marginTop: "40px",
    textAlign: "center",
  },
  planButton: {
    padding: "clamp(12px, 2vw, 18px) clamp(30px, 4vw, 45px)",
    fontSize: "clamp(1rem, 2vw, 1.3rem)",
    fontWeight: "700",
    border: "none",
    borderRadius: "50px",
    background: "linear-gradient(135deg, #4496a5ff 0%, #2dac6cff 100%)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
  },
  controls: {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "clamp(10px, 2vw, 20px)",
    zIndex: 999,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "15px 25px",
    borderRadius: "50px",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "90%",
  },
  chapterControls: {
    position: "absolute",
    top: "10px",
    bottom: "auto",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "clamp(10px, 2vw, 20px)",
    zIndex: 999,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "15px 25px",
    borderRadius: "50px",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "90%",
    marginBottom: "20px",
  },
  navButton: {
    padding: "clamp(8px, 1.5vw, 12px) clamp(20px, 3vw, 30px)",
    fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
    fontWeight: "600",
    border: "none",
    borderRadius: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "#333",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    whiteSpace: "nowrap",
  },
  playButton: {
    padding: "clamp(8px, 1.5vw, 12px) clamp(20px, 3vw, 30px)",
    fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
    fontWeight: "600",
    border: "none",
    borderRadius: "30px",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    whiteSpace: "nowrap",
  },
  particle: {
    position: "absolute",
    pointerEvents: "none",
    zIndex: 1,
    opacity: 0,
  },
  // ============================================
  // PLANNING, ANALYSIS & DESIGN PAGES STYLES
  // ============================================
  // Floating navigation
  floatingNav: {
    position: "fixed",
    top: "50%",
    left: "clamp(10px, 2vw, 20px)",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "clamp(10px, 1.5vw, 15px)",
    zIndex: 1000,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "clamp(10px, 1.5vw, 15px) clamp(8px, 1.2vw, 10px)",
    borderRadius: "50px",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255, 255, 255, 0.2)",
  },
  navItem: {
    background: "rgba(255, 255, 255, 0.8)",
    border: "none",
    borderRadius: "50%",
    width: "clamp(35px, 4vw, 50px)",
    height: "clamp(35px, 4vw, 50px)",
    fontSize: "clamp(1rem, 1.8vw, 1.5rem)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  },
  navItemActive: {
    background: "linear-gradient(135deg, #4496a5ff 0%, #2dac6cff 100%)",
    color: "white",
    transform: "scale(1.1)",
    boxShadow: "0 6px 20px rgba(68, 150, 165, 0.4)",
  },
  // Content container
  contentContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "clamp(2rem, 4vw, 4rem) clamp(1rem, 2vw, 2rem)",
    paddingTop: "80px",
  },
  // Section styles
  section: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "clamp(1rem, 3vw, 2rem)",
  },
  heroIcon: {
    fontSize: "clamp(60px, 10vw, 100px)",
    marginBottom: "2rem",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "clamp(1rem, 2vw, 1.3rem)",
    color: "#bde4ceff",
    textAlign: "center",
    marginBottom: "3rem",
    fontStyle: "italic",
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "3rem",
    background: "linear-gradient(135deg, #4bb1b4ff 0%, #325fa1ff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  // Intro card
  introCard: {
    backgroundColor: "rgb(49, 68, 89)",
    borderRadius: "20px",
    padding: "clamp(1.5rem, 3vw, 3rem)",
    marginBottom: "2rem",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    width: "100%",
  },
  cardText: {
    fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
    lineHeight: 1.8,
    color: "#bde4ceff",
    marginBottom: "2rem",
  },
  keyPoints: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    marginTop: "2rem",
    background:
      "linear-gradient(135deg, #0c131b 0%, #1f2a38 60%, #3c4f5e 100%)",
    borderRadius: "20px",
    border: "2px solid rgba(255,255,255,0.15)",
    boxShadow: "0 6px 20px rgba(68, 150, 165, 0.2)",
    padding: "clamp(1rem, 2vw, 2rem)",
  },
  keyPoint: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
    color: "#bde4ceff",
    fontWeight: "600",
    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
  },
  keyPointIcon: {
    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
    flexShrink: 0,
  },
  // Steps section
  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "clamp(1.5rem, 3vw, 2rem)",
    width: "100%",
    maxWidth: "1200px",
    marginBottom: "3rem",
  },
  stepCard: {
    backgroundColor: "rgb(49, 68, 89)",
    borderRadius: "15px",
    padding: "clamp(1.5rem, 3vw, 2rem)",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  stepNumber: {
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    fontWeight: "800",
    color: "#4aa07cff",
    marginBottom: "1rem",
  },
  stepIcon: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    marginBottom: "1rem",
  },
  stepTitle: {
    fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
    fontWeight: "700",
    color: "#bde4ceff",
    marginBottom: "0.8rem",
  },
  stepDescription: {
    fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
    lineHeight: 1.6,
    color: "#4aa07cff",
  },
  stepFlow: {
    backgroundColor: "rgba(75, 177, 180, 0.1)",
    borderRadius: "15px",
    padding: "clamp(1rem, 2vw, 1.5rem)",
    marginBottom: "2rem",
    maxWidth: "800px",
    width: "100%",
  },
  flowText: {
    fontSize: "clamp(0.95rem, 1.7vw, 1.1rem)",
    lineHeight: 1.7,
    color: "#bde4ceff",
    textAlign: "center",
  },
  // Types section
  typesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "clamp(1.5rem, 3vw, 2.5rem)",
    width: "100%",
    maxWidth: "1200px",
    marginBottom: "3rem",
    alignItems: "stretch",
  },
  typeCard: {
    backgroundColor: "rgb(49, 68, 89)",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
    border: "2px solid rgba(255,255,255,0.05)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  typeHeader: {
    padding: "clamp(1.5rem, 3vw, 2rem)",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    color: "white",
  },
  typeEmoji: {
    fontSize: "clamp(2rem, 4vw, 2.5rem)",
  },
  typeName: {
    fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
    fontWeight: "700",
    margin: 0,
  },
  typeContent: {
    padding: "clamp(1.5rem, 3vw, 2rem)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flexGrow: 1,
  },
  storyTitle: {
    fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
    fontWeight: "700",
    color: "#bde4ceff",
    marginBottom: "1rem",
  },
  storyScenario: {
    fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)",
    lineHeight: 1.7,
    color: "#4aa07cff",
    marginBottom: "1.5rem",
  },
  revealButton: {
    width: "100%",
    padding: "clamp(10px, 2vw, 12px) clamp(20px, 3vw, 24px)",
    fontSize: "clamp(0.95rem, 1.6vw, 1rem)",
    fontWeight: "600",
    border: "none",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginBottom: "1rem",
    marginTop: "auto",
  },
  failureBox: {
    backgroundColor: "#2c3e50",
    border: "2px solid #e74c3c",
    borderRadius: "10px",
    padding: "clamp(1rem, 2vw, 1.5rem)",
    marginTop: "1rem",
  },
  failureTitle: {
    fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
    fontWeight: "700",
    color: "#f1959b",
    marginBottom: "0.5rem",
  },
  failureText: {
    fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
    lineHeight: 1.6,
    color: "#f8d7da",
  },
  fixBox: {
    backgroundColor: "#1e3a32",
    border: "2px solid #2ecc71",
    borderRadius: "10px",
    padding: "clamp(1rem, 2vw, 1.5rem)",
    marginTop: "1rem",
  },
  fixTitle: {
    fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
    fontWeight: "700",
    color: "#a3e9a4",
    marginBottom: "0.5rem",
  },
  fixText: {
    fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
    lineHeight: 1.6,
    color: "#d4edda",
  },
  // Drawbacks section
  drawbackIntro: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    lineHeight: 1.8,
    color: "#1ABC9C",
    textAlign: "center",
    marginBottom: "3rem",
    maxWidth: "800px",
    padding: "0 1rem",
    background: "linear-gradient(90deg, #e0f7fa 0%, #b2ebf2 100%)",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(26, 188, 156, 0.08)",
  },
  drawbacksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "clamp(1.5rem, 3vw, 2rem)",
    width: "100%",
    maxWidth: "1200px",
    marginBottom: "3rem",
  },
  drawbackCard: {
    background: "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)",
    borderRadius: "15px",
    padding: "clamp(1.5rem, 3vw, 2rem)",
    boxShadow: "0 8px 30px rgba(26, 188, 156, 0.12)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    position: "relative",
    borderTop: "4px solid #1ABC9C",
  },
  drawbackIcon: {
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#16A085",
    textShadow: "0 2px 8px rgba(26, 188, 156, 0.15)",
  },
  drawbackTitle: {
    fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
    fontWeight: "700",
    color: "#16A085",
    marginBottom: "1rem",
    textAlign: "center",
    textShadow: "0 2px 8px rgba(26, 188, 156, 0.15)",
  },
  drawbackProblem: {
    fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)",
    lineHeight: 1.7,
    color: "#1f2a38",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  resolutionBox: {
    background: "linear-gradient(90deg, #1e3a32 0%, #2c3e50 100%)",
    border: "2px solid #1ABC9C",
    borderRadius: "10px",
    padding: "clamp(1rem, 2vw, 1.5rem)",
    marginTop: "1rem",
  },
  resolutionTitle: {
    fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
    fontWeight: "700",
    color: "#1ABC9C",
    marginBottom: "0.5rem",
  },
  resolutionText: {
    fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
    lineHeight: 1.6,
    color: "#22543d",
  },
  tapHint: {
    fontSize: "clamp(0.8rem, 1.4vw, 0.9rem)",
    color: "#999",
    textAlign: "center",
    marginTop: "1rem",
    fontStyle: "italic",
  },
  // Joke section
  jokeContainer: {
    maxWidth: "800px",
    width: "100%",
    background:
      "linear-gradient(135deg, #0c131b 0%, #1f2a38 60%, #3c4f5e 100%)",
    borderRadius: "20px",
    padding: "clamp(2rem, 4vw, 3rem)",
    boxShadow: "0 10px 40px rgba(68, 150, 165, 0.2)",
    border: "2px solid rgba(255,255,255,0.15)",
  },
  jokeIcon: {
    fontSize: "clamp(60px, 10vw, 80px)",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  jokeTitle: {
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "2rem",
    background: "linear-gradient(135deg, #4bb1b4ff 0%, #325fa1ff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  jokeBox: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: "15px",
    padding: "clamp(1.5rem, 3vw, 2rem)",
    marginBottom: "1.5rem",
    border: "2px solid #4bb1b4ff",
  },
  jokeSetup: {
    fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
    fontWeight: "600",
    color: "#bde4ceff",
    marginBottom: "1rem",
    lineHeight: 1.6,
  },
  jokePunchline: {
    fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
    fontStyle: "italic",
    color: "#4aa07cff",
    fontWeight: "600",
    lineHeight: 1.6,
    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
  },
  wisdomBox: {
    backgroundColor: "#1e3a32",
    borderRadius: "15px",
    padding: "clamp(1.5rem, 3vw, 2rem)",
    marginTop: "2rem",
    marginBottom: "2rem",
    border: "2px solid #2ecc71",
  },
  wisdomText: {
    fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
    fontWeight: "700",
    color: "#a3e9a4",
    marginBottom: "1rem",
    textAlign: "center",
  },
  wisdomExplanation: {
    fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)",
    lineHeight: 1.7,
    color: "#d4edda",
    textAlign: "center",
  },
  // Button styles
  nextButton: {
    padding: "clamp(12px, 2vw, 15px) clamp(30px, 4vw, 40px)",
    fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
    fontWeight: "600",
    border: "none",
    borderRadius: "30px",
    background: "linear-gradient(135deg, #4496a5ff 0%, #2dac6cff 100%)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 25px rgba(68, 150, 165, 0.3)",
    marginTop: "2rem",
  },
  buttonGroup: {
    display: "flex",
    gap: "clamp(1rem, 2vw, 1.5rem)",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "2rem",
  },
  homeButton: {
    padding: "clamp(12px, 2vw, 15px) clamp(30px, 4vw, 40px)",
    fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
    fontWeight: "600",
    border: "2px solid #4bb1b4ff",
    borderRadius: "30px",
    background: "linear-gradient(135deg, #ecf0f1 0%, #bdc3c7 100%)",
    color: "#4bb1b4ff",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  },
  nextPhaseButton: {
    padding: "clamp(12px, 2vw, 15px) clamp(30px, 4vw, 40px)",
    fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
    fontWeight: "600",
    border: "none",
    borderRadius: "30px",
    background: "linear-gradient(135deg, #4496a5ff 0%, #2dac6cff 100%)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 25px rgba(68, 150, 165, 0.3)",
  },
  simulationButton: {
    padding: "clamp(12px, 2vw, 15px) clamp(30px, 4vw, 40px)",
    fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
    fontWeight: "600",
    border: "none",
    borderRadius: "30px",
    background: "linear-gradient(135deg, #1ABC9C 0%, #16A085 100%)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 25px rgba(26, 188, 156, 0.3)",
  },
  completionSection: {
    textAlign: "center",
    marginTop: "2rem",
  },
  congratsMessage: {
    background: "rgb(49, 68, 89)",
    borderRadius: "15px",
    padding: "1.5rem",
    marginBottom: "1.5rem",
    boxShadow: "0 8px 32px rgba(26, 188, 156, 0.1)",
    border: "1px solid rgba(26, 188, 156, 0.2)",
  },
  congratsTitle: {
    color: "#1ABC9C",
    fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
    fontWeight: "700",
    marginBottom: "1rem",
    textShadow: "0 2px 4px rgba(26, 188, 156, 0.2)",
  },
  congratsText: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
    lineHeight: "1.6",
    margin: 0,
  },
  
  // =============================
  // SIMULATION COMPONENT STYLES
  // =============================
  
  // SimulationHub styles
  simulationHubContainer: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0c131b, #1f2a38, #3c4f5e)",
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: "relative",
    overflow: "hidden"
  },
  simulationHubTitle: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: "800",
    color: "#1ABC9C",
    textAlign: "center",
    marginBottom: "1rem",
    textShadow: "0 4px 20px rgba(26, 188, 156, 0.3)"
  },
  simulationHubSubtitle: {
    fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
    color: "rgba(255,255,255,0.9)",
    textAlign: "center",
    marginBottom: "3rem",
    maxWidth: "800px",
    margin: "0 auto 3rem auto",
    lineHeight: "1.6"
  },
  simulationTypeSelector: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    marginBottom: "3rem",
    flexWrap: "wrap"
  },
  simulationTypeButton: {
    padding: "1rem 2rem",
    fontSize: "1.1rem",
    fontWeight: "600",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "rgba(26, 188, 156, 0.3)",
    borderRadius: "25px",
    background: "rgba(26, 188, 156, 0.1)",
    color: "#1ABC9C",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)"
  },
  simulationTypeButtonActive: {
    background: "rgba(26, 188, 156, 0.25)",
    borderColor: "#1ABC9C",
    color: "white",
    transform: "scale(1.05)"
  },
  simulationGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2rem",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 1rem"
  },
  simulationCard: {
    background: "rgb(49, 68, 89)",
    borderRadius: "15px",
    padding: "1.5rem",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
    border: "2px solid rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "320px"
  },
  simulationCardIcon: {
    fontSize: "3rem",
    marginBottom: "1rem",
    textAlign: "center",
    display: "block",
    lineHeight: "1"
  },
  simulationCardTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "white",
    marginBottom: "0.8rem",
    textAlign: "center"
  },
  simulationCardDescription: {
    fontSize: "0.95rem",
    color: "rgba(255, 255, 255, 0.8)",
    lineHeight: "1.5",
    textAlign: "center",
    marginBottom: "1.5rem"
  },
  simulationStartButton: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #1ABC9C 0%, #16A085 100%)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(26, 188, 156, 0.3)",
    marginTop: "auto"
  },
  
  // SimulationEngine styles
  simulationEngineContainer: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0c131b, #1f2a38, #3c4f5e)",
    padding: "1.5rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  simulationEngineHeader: {
    textAlign: "center",
    marginBottom: "2rem"
  },
  simulationEngineTitle: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: "800",
    color: "#1ABC9C",
    marginBottom: "0.5rem",
    textShadow: "0 4px 20px rgba(26, 188, 156, 0.3)"
  },
  simulationEnginePhase: {
    fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
    color: "#16A085",
    fontWeight: "600"
  },
  simulationEngineContent: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "2rem",
    maxWidth: "1400px",
    margin: "0 auto"
  },
  
  // DecisionChoice styles
  decisionChoiceContainer: {
    background: "rgb(49, 68, 89)",
    borderRadius: "15px",
    padding: "1.5rem",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(10px)"
  },
  decisionChoiceScenario: {
    fontSize: "1.1rem",
    color: "#2c3e50",
    lineHeight: "1.6",
    marginBottom: "2rem",
    padding: "1rem",
    background: "rgba(26, 188, 156, 0.1)",
    borderRadius: "10px",
    borderLeft: "4px solid #1ABC9C"
  },
  decisionChoiceGrid: {
    display: "grid",
    gap: "1rem"
  },
  decisionChoiceCard: {
    border: "2px solid rgba(26, 188, 156, 0.2)",
    borderRadius: "12px",
    padding: "1.5rem",
    background: "rgb(49, 68, 89)",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  decisionChoiceCardSelected: {
    borderColor: "#1ABC9C",
    background: "rgba(26, 188, 156, 0.15)",
    transform: "scale(1.02)",
    boxShadow: "0 4px 15px rgba(26, 188, 156, 0.2)"
  },
  decisionChoiceTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "white",
    marginBottom: "0.8rem"
  },
  decisionChoiceDescription: {
    fontSize: "0.95rem",
    color: "rgba(255, 255, 255, 0.8)",
    lineHeight: "1.5",
    marginBottom: "1rem"
  },
  decisionChoiceImpact: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem"
  },
  decisionChoiceImpactTag: {
    padding: "0.25rem 0.5rem",
    fontSize: "0.8rem",
    borderRadius: "15px",
    fontWeight: "600"
  },
  
  // Additional DecisionChoice component styles
  decisionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    marginTop: '1.5rem'
  },
  decisionCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '1.5rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '2px solid rgba(26, 188, 156, 0.3)',
    position: 'relative',
    backdropFilter: 'blur(10px)'
  },
  decisionHeader: {
    marginBottom: '1rem'
  },
  decisionTitle: {
    color: '#1ABC9C',
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
    fontWeight: '600'
  },
  decisionDescription: {
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 1.6,
    marginBottom: '1rem'
  },
  impactPreview: {
    background: 'rgba(26, 188, 156, 0.1)',
    borderRadius: '8px',
    padding: '1rem',
    marginTop: '1rem',
    border: '1px solid rgba(26, 188, 156, 0.2)'
  },
  impactTitle: {
    fontSize: '0.9rem',
    color: '#16A085',
    marginBottom: '0.5rem',
    fontWeight: '600'
  },
  impactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  impactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.85rem'
  },
  impactIcon: {
    fontSize: '1rem'
  },
  impactText: {
    flex: 1,
    color: 'rgba(255, 255, 255, 0.8)'
  },
  impactChange: {
    fontWeight: '600',
    fontSize: '0.9rem'
  },
  consequencesContainer: {
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '2rem',
    margin: '1rem 0',
    border: '1px solid rgba(26, 188, 156, 0.2)',
    backdropFilter: 'blur(15px)'
  },
  selectedDecision: {
    marginBottom: '2rem'
  },
  selectedTitle: {
    color: '#1ABC9C',
    marginBottom: '1rem',
    textAlign: 'center',
    fontWeight: '600'
  },
  selectedCard: {
    background: 'linear-gradient(135deg, #1ABC9C 0%, #16A085 100%)',
    color: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(26, 188, 156, 0.3)'
  },
  outcomeSection: {
    marginBottom: '2rem'
  },
  outcomeTitle: {
    color: '#1ABC9C',
    marginBottom: '1rem',
    fontWeight: '600'
  },
  outcomeText: {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '1.5rem',
    borderRadius: '8px',
    color: '#e9ecef',
    lineHeight: 1.6,
    border: '1px solid rgba(26, 188, 156, 0.2)'
  },
  metricsChanges: {
    marginBottom: '2rem'
  },
  metricsTitle: {
    color: '#1ABC9C',
    marginBottom: '1rem',
    fontWeight: '600'
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem'
  },
  metricChange: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(26, 188, 156, 0.1)',
    padding: '1rem',
    borderRadius: '8px',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(26, 188, 156, 0.2)'
  },
  metricIcon: {
    fontSize: '1.5rem',
    marginRight: '1rem'
  },
  metricDetails: {
    flex: 1
  },
  metricName: {
    display: 'block',
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  metricValue: {
    display: 'block',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#e9ecef'
  },
  metricBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '4px',
    borderRadius: '0 4px 4px 0'
  },
  actionButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '2rem'
  },
  backButton: {
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  confirmButton: {
    background: 'linear-gradient(135deg, #1ABC9C 0%, #16A085 100%)',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '600',
    boxShadow: '0 4px 15px rgba(26, 188, 156, 0.3)'
  },
  
  // OutcomeTracker styles  
  outcomeTrackerContainer: {
    background: "rgb(49, 68, 89)",
    borderRadius: "15px",
    padding: "1.5rem",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(10px)"
  },
  outcomeTrackerTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: "1.5rem",
    textAlign: "center"
  },
  outcomeTrackerMetrics: {
    display: "grid",
    gap: "1rem"
  },
  outcomeTrackerMetric: {
    background: "rgba(255,255,255,0.8)",
    borderRadius: "8px",
    padding: "1rem",
    border: "1px solid rgba(26, 188, 156, 0.2)"
  },
  outcomeTrackerMetricLabel: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: "0.5rem"
  },
  outcomeTrackerMetricBar: {
    width: "100%",
    height: "8px",
    background: "rgba(0,0,0,0.1)",
    borderRadius: "4px",
    overflow: "hidden"
  },
  outcomeTrackerMetricFill: {
    height: "100%",
    background: "linear-gradient(90deg, #1ABC9C 0%, #16A085 100%)",
    borderRadius: "4px",
    transition: "width 0.5s ease",
    boxShadow: "0 2px 8px rgba(26, 188, 156, 0.3)"
  },
  outcomeTrackerMetricValue: {
    fontSize: "0.8rem",
    color: "#5a6c7d",
    marginTop: "0.25rem"
  },
  
  // SimulationResults styles
  simulationResultsContainer: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0c131b, #1f2a38, #3c4f5e)",
    padding: "2rem",
    fontFamily: "'Segoe UI', Tasha, Geneva, Verdana, sans-serif"
  },
  simulationResultsHeader: {
    textAlign: "center",
    marginBottom: "2rem"
  },
  simulationResultsTitle: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: "800",
    color: "#1ABC9C",
    marginBottom: "1rem",
    textShadow: "0 4px 20px rgba(26, 188, 156, 0.3)"
  },
  simulationResultsScore: {
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    color: "#16A085",
    fontWeight: "600"
  },
  simulationResultsContent: {
    maxWidth: "1200px",
    margin: "0 auto"
  },
  simulationResultsSummary: {
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "15px",
    padding: "1.5rem",
    marginBottom: "2rem",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
    backdropFilter: "blur(10px)"
  },
  simulationResultsSummaryTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: "1rem",
    textAlign: "center"
  },
  simulationResultsMetricsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
    marginBottom: "2rem"
  },
  simulationResultsMetricCard: {
    background: "rgb(49, 68, 89)",
    borderRadius: "10px",
    padding: "1rem",
    textAlign: "center",
    border: "2px solid rgba(255,255,255,0.05)"
  },
  simulationResultsMetricTitle: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "0.5rem"
  },
  simulationResultsMetricValue: {
    fontSize: "1.3rem",
    fontWeight: "700",
    marginBottom: "0.25rem"
  },
  simulationResultsActions: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  
  // Phase intro styles for simulation engine
  phaseIntroContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "400px",
    padding: "2rem"
  },
  phaseIntroContent: {
    background: "rgb(49, 68, 89)",
    borderRadius: "12px",
    padding: "2rem",
    maxWidth: "500px",
    textAlign: "center",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    border: "2px solid rgba(255,255,255,0.05)",
    backdropFilter: "blur(15px)"
  },
  phaseTitle: {
    color: "#1ABC9C",
    marginBottom: "1rem",
    fontSize: "1.5rem",
    fontWeight: "600"
  },
  phaseScenario: {
    fontSize: "1.1rem",
    lineHeight: 1.6,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "2rem"
  },
  currentStatus: {
    background: "rgba(26, 188, 156, 0.1)",
    padding: "1.5rem",
    borderRadius: "8px",
    marginBottom: "2rem",
    border: "1px solid rgba(26, 188, 156, 0.2)"
  },
  statusImage: {
    fontSize: "3rem",
    marginBottom: "1rem"
  },
  proceedButton: {
    background: "linear-gradient(135deg, #1ABC9C 0%, #16A085 100%)",
    color: "white",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(26, 188, 156, 0.3)"
  },
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "400px",
    color: "#1ABC9C"
  },
  
  // AI-specific simulation styles
  aiIndicator: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.25rem",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "0.2rem 0.5rem",
    borderRadius: "12px",
    fontSize: "0.7rem",
    fontWeight: "600",
    marginLeft: "0.5rem",
    boxShadow: "0 2px 8px rgba(102, 126, 234, 0.3)",
    verticalAlign: "middle"
  },
  aiEnhancedCard: {
    position: "relative"
  },
  aiEnhancedBadge: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "0.3rem 0.6rem",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "600",
    zIndex: 2,
    boxShadow: "0 2px 8px rgba(102, 126, 234, 0.3)"
  },
  
  //modal section
  // Modal styles for Planning Types
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000,
    padding: "2vw",
  },
  modalContainer: {
    borderRadius: "24px",
    boxShadow: "0 16px 48px rgba(10, 1, 1, 0.35)",
    padding: "2.5rem 2.5rem 2rem 2.5rem",
    minWidth: "340px",
    maxWidth: "420px",
    width: "100%",
    maxHeight: "80vh",
    overflowY: "auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(135deg, #1f2a38 0%, #3c4f5e 100%)",
  },
  modalCloseBtn: {
    position: "absolute",
    top: 18,
    right: 22,
    background: "#ecf0f1",
    border: "none",
    borderRadius: "50%",
    width: 10,
    height: 10,
    fontSize: 15,
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#333",
  },
  modalTitle: {
    marginBottom: "1.5rem",
    fontWeight: 800,
    fontSize: "1.35rem",
    textAlign: "center",
    letterSpacing: "0.5px",
  },
  modalFailure: {
    marginBottom: "1.5rem",
    width: "100%",
    textAlign: "left",
    background: "#2c3e50",
    borderRadius: "12px",
    padding: "1.1rem 1rem 0.7rem 1rem",
    color: "#f1959b",
    boxShadow: "0 2px 8px rgba(255, 192, 203, 0.08)",
  },
  modalFailureTitle: {
    color: "#c53030",
    marginBottom: "0.5rem",
    fontWeight: 700,
    fontSize: "1.05rem",
  },
  modalFailureText: {
    color: "#742a2a",
    fontSize: "1rem",
    lineHeight: 1.7,
    margin: 0,
  },
  modalFix: {
    width: "100%",
    textAlign: "left",
    background: "#1e3a32",
    borderRadius: "12px",
    padding: "1.1rem 1rem 0.7rem 1rem",
    color: "#a3e9a4",
    boxShadow: "0 2px 8px rgba(173, 255, 47, 0.08)",
  },
  modalFixTitle: {
    color: "#22543d",
    marginBottom: "0.5rem",
    fontWeight: 700,
    fontSize: "1.05rem",
  },
  modalFixText: {
    color: "#22543d",
    fontSize: "1rem",
    lineHeight: 1.7,
    margin: 0,
  },
  drawbackTypeCard: {
    backgroundColor: "rgb(49, 68, 89)",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
    border: "2px solid rgba(255,255,255,0.05)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  drawbackTypeHeader: {
    padding: "clamp(1.5rem, 3vw, 2rem)",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    color: "white",
  },
  drawbackTypeEmoji: {
    fontSize: "clamp(2rem, 4vw, 2.5rem)",
  },
  drawbackTypeName: {
    fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
    fontWeight: "700",
    margin: 0,
  },
  drawbackTypeContent: {
    padding: "clamp(1.5rem, 3vw, 2rem)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flexGrow: 1,
  },
  drawbackTypeTitle: {
    fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
    fontWeight: "700",
    color: "#bde4ceff",
    marginBottom: "1rem",
  },
  drawbackTypeScenario: {
    fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)",
    lineHeight: 1.7,
    color: "#4aa07cff",
    marginBottom: "1.5rem",
  },
  drawbackRevealButton: {
    width: "100%",
    padding: "clamp(10px, 2vw, 12px) clamp(20px, 3vw, 24px)",
    fontSize: "clamp(0.95rem, 1.6vw, 1rem)",
    fontWeight: "600",
    border: "none",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginBottom: "1rem",
    marginTop: "auto",
    background: "#4bb1b4ff",
  },
  drawbackFailureBox: {
    backgroundColor: "#2c3e50",
    border: "2px solid #e74c3c",
    borderRadius: "10px",
    padding: "clamp(1rem, 2vw, 1.5rem)",
    marginTop: "1rem",
  },
  drawbackFailureTitle: {
    fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
    fontWeight: "700",
    color: "#f1959b",
    marginBottom: "0.5rem",
  },
  drawbackFailureText: {
    fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
    lineHeight: 1.6,
    color: "#f8d7da",
  },
  drawbackFixBox: {
    backgroundColor: "#1e3a32",
    border: "2px solid #2ecc71",
    borderRadius: "10px",
    padding: "clamp(1rem, 2vw, 1.5rem)",
    marginTop: "1rem",
  },
  drawbackFixTitle: {
    fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
    fontWeight: "700",
    color: "#a3e9a4",
    marginBottom: "0.5rem",
  },
  drawbackFixText: {
    fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
    lineHeight: 1.6,
    color: "#d4edda",
  },
  // Modal below stage circles
  modalBelowContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    margin: "32px 0 0 0",
    position: "relative",
    zIndex: 100,
    minHeight: "120px",
  },
  // Media query helpers for responsive design
  // Note: Responsive design is achieved using:
  // 1. clamp() for fluid typography and spacing
  // 2. flexbox and grid with auto-fit/auto-fill for layouts
  // 3. percentage and viewport units for sizing
  // 4. Global CSS media queries in index.css for font-size
  //
  // Screen size breakpoints:
  // - Small: < 480px (mobile phones)
  // - Medium: 480px - 768px (tablets portrait)
  // - Large: 768px - 1024px (tablets landscape, small laptops)
  // - Extra Large: > 1024px (desktops)

  // ============================================
  // ACTIVITIES PAGE STYLES
  // ============================================
  
  // Page container
  activitiesPage: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0c131b, #1f2a38, #3c4f5e)',
    position: 'relative'
  },

  // Back link
  activitiesBackLink: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    padding: '8px 24px',
    background: 'rgba(255, 255, 255, 0.9)',
    color: '#16A085',
    textDecoration: 'none',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: '600',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    transition: 'all 0.3s ease',
    zIndex: 1000,
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
  },

  // Header section
  activitiesHeader: {
    background: 'linear-gradient(135deg, #0c131b, #1f2a38, #3c4f5e)',
    color: 'white',
    padding: '60px 20px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  },

  activitiesHeaderContent: {
    position: 'relative',
    zIndex: 2
  },

  activitiesHeaderTitle: {
    fontSize: '2.5em',
    marginBottom: '15px',
    fontWeight: '300',
    color: '#1ABC9C'
  },

  activitiesHeaderDescription: {
    fontSize: '1.2em',
    marginBottom: '30px',
    opacity: 0.9,
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  // Activity info section
  activityInfo: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    margin: '20px 0'
  },

  activityInfoItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  activityInfoLabel: {
    fontSize: '0.9em',
    opacity: 0.8,
    marginBottom: '5px'
  },

  activityInfoValue: {
    fontSize: '1.3em',
    fontWeight: 'bold',
    color: '#1ABC9C'
  },

  // AI features section
  aiFeatures: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap',
    marginTop: '25px'
  },

  aiFeatureBadge: {
    background: 'rgba(255, 255, 255, 0.2)',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '0.9em',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)'
  },

  // Activities content
  activitiesContent: {
    padding: '0 20px 40px',
    background: 'linear-gradient(135deg, #0c131b, #1f2a38, #3c4f5e)'
  },

  // Completion screen styles
  activitiesCompletion: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0c131b, #1f2a38, #3c4f5e)',
    padding: '20px'
  },

  activitiesCompletionContent: {
    background: 'white',
    borderRadius: '20px',
    padding: '40px',
    textAlign: 'center',
    boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
    maxWidth: '600px',
    width: '100%'
  },

  activitiesCompletionTitle: {
    color: '#1ABC9C',
    marginBottom: '10px',
    fontSize: '2.5em'
  },

  activitiesCompletionSubtitle: {
    color: '#333',
    marginBottom: '30px',
    fontWeight: '300'
  },

  // Score section
  activitiesFinalScore: {
    margin: '30px 0'
  },

  activitiesScoreCircle: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #1ABC9C, #16A085)',
    color: 'white',
    margin: '0 auto'
  },

  activitiesScoreNumber: {
    fontSize: '2em',
    fontWeight: 'bold'
  },

  activitiesScorePercentage: {
    fontSize: '1.2em',
    opacity: 0.9
  },

  // Performance feedback
  activitiesPerformanceFeedback: {
    margin: '30px 0'
  },

  activitiesFeedback: {
    padding: '20px',
    borderRadius: '10px',
    margin: '20px 0'
  },

  activitiesFeedbackExcellent: {
    background: '#d4edda',
    border: '1px solid #c3e6cb',
    color: '#155724'
  },

  activitiesFeedbackGood: {
    background: '#fff3cd',
    border: '1px solid #ffeaa7',
    color: '#856404'
  },

  activitiesFeedbackNeedsImprovement: {
    background: '#f8d7da',
    border: '1px solid #f5c6cb',
    color: '#721c24'
  },

  activitiesFeedbackTitle: {
    margin: '0 0 10px 0',
    fontSize: '1.2em'
  },

  activitiesFeedbackMessage: {
    margin: 0,
    lineHeight: 1.5
  },

  // Action buttons
  activitiesActionButtons: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    marginTop: '30px'
  },

  activitiesBtnPrimary: {
    padding: '12px 30px',
    border: 'none',
    borderRadius: '25px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    textDecoration: 'none',
    display: 'inline-block',
    fontWeight: '600',
    background: 'linear-gradient(90deg, #1ABC9C 0%, #16A085 100%)',
    color: 'white'
  },

  activitiesBtnSecondary: {
    padding: '12px 30px',
    border: 'none',
    borderRadius: '25px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    textDecoration: 'none',
    display: 'inline-block',
    fontWeight: '600',
    background: '#6c757d',
    color: 'white'
  },

  // ============================================
  // COMMON INLINE STYLES (PREVIOUSLY SCATTERED)
  // ============================================
  
  // Menu positioning
  menuPosition: {
    position: 'absolute',
    top: 20,
    right: 30,
    zIndex: 100
  },

  menuPositionHigh: {
    position: 'absolute',
    top: 20,
    right: 30,
    zIndex: 1200
  },



  // Progress fill inline style
  progressFillDynamic: (percentage) => ({
    width: `${percentage}%`
  }),

  // Drag item inline style
  dragItemDynamic: (transform, transition, isDragging) => ({
    transform: CSS?.Transform?.toString(transform) || 'none',
    transition,
    opacity: isDragging ? 0.5 : 1
  }),

  // Modal styles
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },

  modalContent: {
    background: 'white',
    padding: '30px',
    borderRadius: '15px',
    maxWidth: '500px',
    width: '90%',
    textAlign: 'center',
    position: 'relative'
  },

  modalCloseBtn: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#999'
  },

  // Dynamic background styles
  headerWithBackground: (background) => ({
    ...typeHeader,
    background
  }),

  // Story container styles
  storyContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '15px',
    borderRadius: '8px',
    marginTop: '15px'
  },

  // Testing types grid styles
  testingTypesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '25px',
    marginBottom: '30px'
  },

  // Response modal styles
  responseModal: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '15px',
    border: '2px solid #1ABC9C',
    animation: 'fadeIn 0.3s ease-in'
  },

  // ============================================
  // FLOATING NAVIGATION STYLES
  // ============================================
  
  floatingNav: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1000
  },

  floatingNavToggle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    color: 'white',
    fontSize: '18px',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  floatingNavMenu: {
    position: 'absolute',
    top: '60px',
    right: 0,
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
    minWidth: '200px',
    overflow: 'hidden',
    border: '1px solid rgba(0, 0, 0, 0.1)'
  },

  floatingNavItem: {
    width: '100%',
    padding: '12px 16px',
    border: 'none',
    background: 'white',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },

  floatingNavIcon: {
    fontSize: '16px',
    width: '20px',
    textAlign: 'center'
  },

  floatingNavLabel: {
    fontSize: '14px',
    color: '#333',
    fontWeight: '500'
  },

  // ============================================
  // MENU COMPONENT STYLES
  // ============================================

  menuDropdownClean: {
    position: 'absolute',
    top: '100%',
    right: 0,
    background: 'white',
    border: '1px solid #ddd',
    borderRadius: '4px',
    minWidth: '200px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    zIndex: 1000,
    listStyle: 'none',
    margin: 0,
    padding: 0
  },

  menuListItem: {
    margin: 0,
    padding: 0
  },

  menuItemLink: {
    display: 'block',
    width: '100%',
    textDecoration: 'none'
  },

  // ============================================
  // DRAG DROP ACTIVITY STYLES (FROM CSS FILE)
  // ============================================
  
  dragDropActivity: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    color: 'white'
  },

  activityHeader: {
    marginBottom: '30px'
  },

  progressInfo: {
    textAlign: 'center'
  },

  activityCounter: {
    display: 'block',
    fontSize: '1.1rem',
    color: '#1ABC9C',
    marginBottom: '10px',
    fontWeight: '600'
  },

  progressBar: {
    width: '100%',
    height: '12px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '6px',
    overflow: 'hidden',
    border: '1px solid rgba(26, 188, 156, 0.3)',
    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2)'
  },

  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #1ABC9C 0%, #16A085 100%)',
    transition: 'width 0.5s ease',
    borderRadius: '6px',
    position: 'relative',
    overflow: 'hidden'
  },

  activityContentTitle: {
    color: '#1ABC9C',
    textAlign: 'center',
    marginBottom: '15px',
    fontSize: '1.8rem',
    fontWeight: '600'
  },

  instructions: {
    textAlign: 'center',
    fontSize: '1.3rem',
    marginBottom: '40px',
    color: 'white',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.7',
    padding: '24px 32px',
    background: 'linear-gradient(135deg, rgba(26, 188, 156, 0.15), rgba(22, 160, 133, 0.1))',
    borderRadius: '16px',
    border: '2px solid rgba(26, 188, 156, 0.3)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    fontWeight: '500'
  },

  orderingActivity: {
    margin: '30px 0'
  },

  sortableList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '600px',
    margin: '0 auto'
  },

  draggableItem: {
    background: 'linear-gradient(135deg, rgba(26, 188, 156, 0.9), rgba(22, 160, 133, 0.8))',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    padding: '16px 20px',
    cursor: 'grab',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(20px)',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    WebkitTouchCallout: 'none',
    fontWeight: '500',
    fontSize: '15px',
    color: 'white',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(26, 188, 156, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '80px',
    marginBottom: '8px',
    touchAction: 'manipulation'
  },

  draggableItemHover: {
    background: 'linear-gradient(135deg, rgba(26, 188, 156, 1), rgba(22, 160, 133, 0.95))',
    borderColor: 'rgba(255, 255, 255, 0.4)',
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(26, 188, 156, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
  },

  draggableItemActive: {
    cursor: 'grabbing',
    transform: 'rotate(8deg) scale(1.05)',
    opacity: 0.9,
    zIndex: 1000,
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 32px rgba(26, 188, 156, 0.6)'
  },

  matchingActivity: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    margin: '30px 0'
  },

  itemsSection: {
    color: '#1ABC9C',
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '1.3rem'
  },

  draggableItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    overflowY: 'auto',
    maxHeight: '60vh',
    scrollBehavior: 'smooth',
    paddingRight: '4px'
  },

  dropTargets: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    overflowY: 'auto',
    maxHeight: '60vh',
    scrollBehavior: 'smooth',
    paddingRight: '4px'
  },

  dropTarget: {
    border: '2px dashed rgba(26, 188, 156, 0.5)',
    borderRadius: '12px',
    padding: '16px',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(26, 188, 156, 0.03))',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    minHeight: '120px',
    position: 'relative',
    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 2px 8px rgba(0, 0, 0, 0.08)',
    marginBottom: '8px'
  },

  dropTargetActive: {
    borderColor: '#1ABC9C',
    borderStyle: 'solid',
    background: 'linear-gradient(135deg, rgba(26, 188, 156, 0.2), rgba(22, 160, 133, 0.15))',
    transform: 'scale(1.03)',
    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 8px 32px rgba(26, 188, 156, 0.3), 0 0 0 2px rgba(26, 188, 156, 0.3)'
  },

  targetHeader: {
    color: '#1ABC9C',
    margin: '0 0 8px 0',
    fontSize: '1.1rem'
  },

  targetDescription: {
    margin: '0 0 15px 0',
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.8)'
  },

  dropZone: {
    minHeight: '70px',
    border: '2px solid rgba(26, 188, 156, 0.4)',
    borderRadius: '12px',
    padding: '16px',
    background: 'linear-gradient(135deg, rgba(26, 188, 156, 0.12), rgba(22, 160, 133, 0.08))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease'
  },

  dropPlaceholder: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.7)',
    fontStyle: 'normal',
    fontWeight: '500',
    padding: '16px',
    fontSize: '14px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    transition: 'all 0.3s ease'
  },

  // Scrollable container styles
  scrollableContainer: {
    overflowY: 'auto',
    overflowX: 'hidden',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch'
  },

  // Mobile responsive styles
  mobileContainer: {
    '@media (max-width: 768px)': {
      padding: '1rem',
      gap: '1rem'
    }
  },

  // Global drag state styles
  bodyDragging: {
    cursor: 'grabbing !important',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    overflow: 'hidden'
  },

  // Improved drag icon
  dragIcon: {
    fontSize: '16px',
    color: '#1ABC9C',
    marginRight: '8px',
    opacity: 0.8,
    fontWeight: 'bold'
  },

  // Enhanced help text
  dragDropHelpText: {
    fontSize: '11px',
    opacity: 0.7,
    marginTop: '4px',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '400'
  },

  droppedItem: {
    background: 'linear-gradient(135deg, rgba(26, 188, 156, 0.9), rgba(22, 160, 133, 0.8))',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '12px',
    padding: '16px 20px',
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    fontSize: '16px',
    boxShadow: '0 4px 16px rgba(26, 188, 156, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    animation: 'dropSuccess 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  },

  feedbackSection: {
    margin: '30px 0',
    padding: '20px',
    background: 'rgba(26, 188, 156, 0.1)',
    border: '1px solid rgba(26, 188, 156, 0.3)',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)'
  },

  explanationTitle: {
    color: '#1ABC9C',
    marginBottom: '10px'
  },

  explanationText: {
    lineHeight: '1.6',
    color: 'rgba(255, 255, 255, 0.9)'
  },

  activityActions: {
    textAlign: 'center',
    marginTop: '30px'
  },

  btn: {
    padding: '12px 30px',
    border: 'none',
    borderRadius: '25px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    textDecoration: 'none',
    display: 'inline-block',
    fontWeight: '600'
  },

  btnPrimary: {
    background: 'linear-gradient(90deg, #1ABC9C 0%, #16A085 100%)',
    color: 'white'
  },

  loading: {
    textAlign: 'center',
    padding: '50px',
    color: '#1ABC9C',
    fontSize: '1.2rem'
  },

  // ============================================
  // SECTION NAVIGATION BUTTON STYLES
  // ============================================
  
  sectionNavButton: {
    position: 'relative',
    width: '60px',
    height: '60px',
    margin: '10px 0',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(26, 188, 156, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(26, 188, 156, 0.3)',
    borderRadius: '50%',
    color: '#1ABC9C',
    fontSize: '1.5rem',
    transition: 'all 0.3s ease'
  },

  sectionNavButtonActive: {
    background: 'rgba(26, 188, 156, 0.2)',
    borderColor: '#1ABC9C',
    color: 'white',
    boxShadow: '0 0 20px rgba(26, 188, 156, 0.4)'
  },

  // ============================================
  // DRAG DROP VISUAL ENHANCEMENTS
  // ============================================

  dragDropHelpText: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.7)',
    fontStyle: 'italic',
    marginTop: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  },

  dragIcon: {
    fontSize: '20px',
    opacity: 0.7
  },

  dropTargetTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1ABC9C',
    marginBottom: '12px',
    textAlign: 'center',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
  },

  sortableContainer: {
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    padding: '24px',
    border: '2px solid rgba(26, 188, 156, 0.2)',
    backdropFilter: 'blur(10px)',
    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
  },

  matchingContainer: {
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '20px',
    padding: '32px',
    border: '2px solid rgba(26, 188, 156, 0.15)',
    backdropFilter: 'blur(15px)'
  },

  sectionHeader: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1ABC9C',
    marginBottom: '16px',
    textAlign: 'center',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    position: 'sticky',
    top: '0',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '8px',
    zIndex: 10,
    padding: '0.75rem'
  },

  activityCard: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(26, 188, 156, 0.05))',
    borderRadius: '24px',
    padding: '32px',
    border: '2px solid rgba(26, 188, 156, 0.2)',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 16px 64px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    marginBottom: '32px'
  },

  // =============================
  // DRAG DROP ACTIVITY STYLES
  // =============================
  activityContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    background: 'linear-gradient(135deg, rgba(26, 188, 156, 0.1), rgba(52, 152, 219, 0.1))',
    borderRadius: '20px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  },

  activityHeader: {
    textAlign: 'center',
    marginBottom: '3rem'
  },

  activityTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #1ABC9C, #3498DB)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1rem'
  },

  activityDescription: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: 'rgba(255, 255, 255, 0.8)',
    maxWidth: '600px',
    margin: '0 auto'
  },

  quizSection: {
    marginBottom: '3rem'
  },

  questionCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '15px',
    padding: '2rem',
    marginBottom: '2rem',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
  },

  questionNumber: {
    fontSize: '1rem',
    color: '#1ABC9C',
    fontWeight: '600',
    marginBottom: '0.5rem'
  },

  questionText: {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
    color: 'white',
    fontWeight: '500',
    marginBottom: '1.5rem',
    lineHeight: '1.5'
  },

  optionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem'
  },

  draggableItem: {
    background: 'linear-gradient(135deg, rgba(26, 188, 156, 0.9), rgba(22, 160, 133, 0.8))',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '12px',
    padding: '1rem 1.5rem',
    color: 'white',
    cursor: 'grab',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)'
  },

  dropTarget: {
    border: '2px dashed rgba(255, 255, 255, 0.3)',
    borderRadius: '12px',
    padding: '1rem',
    minHeight: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.03)',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
  },

  dropTargetActive: {
    borderColor: '#1ABC9C',
    background: 'rgba(26, 188, 156, 0.1)',
    boxShadow: '0 0 20px rgba(26, 188, 156, 0.3)'
  },

  submitButton: {
    background: 'linear-gradient(135deg, #1ABC9C, #16A085)',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 25px rgba(26, 188, 156, 0.3)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '2rem auto',
    display: 'block'
  },

  resultsContainer: {
    textAlign: 'center',
    padding: '3rem 2rem',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  },

  scoreDisplay: {
    fontSize: 'clamp(2rem, 5vw, 4rem)',
    fontWeight: '700',
    color: '#1ABC9C',
    marginBottom: '1rem'
  },

  performanceMessage: {
    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
    fontWeight: '600',
    marginBottom: '1rem'
  },

  performanceDescription: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '2rem',
    lineHeight: '1.6'
  },

  actionButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },

  actionButton: {
    padding: '0.8rem 1.5rem',
    borderRadius: '25px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block'
  },

  retryButton: {
    background: 'linear-gradient(135deg, #E74C3C, #C0392B)',
    color: 'white',
    boxShadow: '0 6px 20px rgba(231, 76, 60, 0.3)'
  },

  backButton: {
    background: 'linear-gradient(135deg, #95A5A6, #7F8C8D)',
    color: 'white',
    boxShadow: '0 6px 20px rgba(149, 165, 166, 0.3)'
  },
  
  // =============================
  // ADDITIONAL INLINE STYLES (CONSOLIDATED)
  // =============================
  
  // Common absolute positioning styles
  absoluteTopRight: {
    position: "absolute",
    top: 20,
    right: 30,
    zIndex: 100,
  },
  
  absoluteTopRightHighZ: {
    position: "absolute", 
    top: 20,
    right: 30,
    zIndex: 1200,
  },

  // Step card styles
  stepCardStyle: {
    background: 'rgba(26, 188, 156, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(26, 188, 156, 0.2)',
    borderRadius: '15px',
    padding: '1.5rem',
    margin: '1rem 0',
    boxShadow: '0 8px 32px rgba(26, 188, 156, 0.1)',
  },

  // Type header with dynamic background
  typeHeaderDynamic: {
    padding: '1rem',
    borderRadius: '10px 10px 0 0',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },

  // Plan button container with margin
  planButtonContainerWithMargin: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: 48,
  },

  // Buttons with gradient backgrounds
  buttonPrimary: {
    background: 'linear-gradient(135deg, #1ABC9C, #16A085)',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(26, 188, 156, 0.3)',
  },

  buttonSecondary: {
    background: 'linear-gradient(135deg, #3498DB, #2980B9)',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)',
  },

  buttonWarning: {
    background: 'linear-gradient(135deg, #F39C12, #E67E22)',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(243, 156, 18, 0.3)',
  },

  buttonDanger: {
    background: 'linear-gradient(135deg, #E74C3C, #C0392B)',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)',
  },

  buttonSuccess: {
    background: 'linear-gradient(135deg, #27AE60, #229954)',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(39, 174, 96, 0.3)',
  },

  buttonPurple: {
    background: 'linear-gradient(135deg, #9B59B6, #8E44AD)',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(155, 89, 182, 0.3)',
  },

  buttonOrange: {
    background: 'linear-gradient(135deg, #FF6B35, #F39019)',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
  },

  buttonTeal: {
    background: 'linear-gradient(135deg, #1ABC9C, #16A085)',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(26, 188, 156, 0.3)',
  },

  // Text styles
  storySubtitle: {
    color: "#bde4ce",
    fontSize: "1.1rem",
    marginTop: 8,
  },

  // Center content styles
  centerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50vh',
  },

  // Quiz specific inline style overrides
  quizOptionBtnInline: {
    display: 'block',
    width: '100%',
    padding: '0.5rem 1rem',
    marginBottom: '0.5rem',
    background: 'rgba(26, 188, 156, 0.1)',
    border: '1px solid rgba(26, 188, 156, 0.3)',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    color: '#16A085',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(5px)',
  },

  quizFeedbackInline: {
    marginTop: '0.5rem',
    fontWeight: '500',
    fontSize: '1rem',
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    backdropFilter: 'blur(10px)',
  },

  // Container with dynamic background
  containerDynamicBg: {
    minHeight: '100vh',
    padding: '2rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: 'relative',
    overflow: 'hidden',
  },

  // Progress bar styles
  progressBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 6,
    borderRadius: '0 0 15px 15px',
    overflow: 'hidden',
  },

  progressBarFill: {
    height: '100%',
    borderRadius: '0 0 15px 15px',
    transition: 'width 0.3s ease',
  },

  // Floating elements
  floatingElement: {
    position: 'fixed',
    zIndex: 1000,
  },

  // Modal overlay
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  },

  // Section spacing
  sectionSpacing: {
    marginTop: '4rem',
    marginBottom: '4rem',
  },

  // Responsive text
  responsiveText: {
    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
    lineHeight: 1.6,
  },

  // Glass morphism effect
  glassMorphism: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '15px',
  },

  // =============================
  // DRAG & DROP QUIZ STYLES
  // =============================
  
  // Quiz Results Container
  quizResultsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    padding: '2rem',
  },

  resultsCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(26, 188, 156, 0.3)',
    borderRadius: '20px',
    padding: 'clamp(2rem, 5vw, 4rem)',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
  },

  resultIcon: {
    fontSize: 'clamp(3rem, 8vw, 5rem)',
    marginBottom: '1.5rem',
  },

  resultTitle: {
    fontSize: 'clamp(2rem, 6vw, 3rem)',
    fontWeight: 'bold',
    color: '#1ABC9C',
    marginBottom: '2rem',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  },

  scoreDisplay: {
    marginBottom: '2rem',
  },

  scoreNumber: {
    fontSize: 'clamp(3rem, 10vw, 4rem)',
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  },

  scoreText: {
    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
    color: '#bde4ce',
    marginTop: '0.5rem',
  },

  resultsSummary: {
    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
    color: '#fff',
    lineHeight: 1.6,
    marginBottom: '2rem',
  },

  passText: {
    color: '#27AE60',
    fontWeight: '600',
  },

  failText: {
    color: '#E74C3C',
    fontWeight: '600',
  },

  resultActions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  retryButton: {
    background: 'linear-gradient(135deg, #3498DB, #2980B9)',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)',
  },

  continueButton: {
    background: 'linear-gradient(135deg, #1ABC9C, #16A085)',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(26, 188, 156, 0.3)',
  },

  // Quiz Header
  quizHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    flexWrap: 'wrap',
    gap: '1rem',
  },

  quizProgress: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    minWidth: '200px',
  },

  progressText: {
    color: '#1ABC9C',
    fontWeight: 'bold',
    fontSize: '1rem',
  },

  progressBar: {
    width: '100%',
    height: '8px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '4px',
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #1ABC9C, #16A085)',
    borderRadius: '4px',
    transition: 'width 0.5s ease',
  },

  quizTimer: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },

  timerNormal: {
    color: '#fff',
  },

  timerWarning: {
    color: '#E74C3C',
    animation: 'pulse 1s infinite',
  },

  // Question Container
  questionContainer: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: 'clamp(1.5rem, 4vw, 3rem)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
  },

  questionTitle: {
    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
    fontWeight: 'bold',
    color: '#1ABC9C',
    marginBottom: '2rem',
    textAlign: 'center',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  },

  sectionTitle: {
    fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
    fontWeight: '600',
    color: '#fff',
    marginBottom: '1rem',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
  },

  // Matching Questions
  matchingContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  },

  draggableItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },

  draggableItem: {
    background: 'rgba(26, 188, 156, 0.2)',
    border: '2px solid rgba(26, 188, 156, 0.4)',
    borderRadius: '12px',
    padding: '1rem',
    color: '#fff',
    fontWeight: '500',
    cursor: 'grab',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    userSelect: 'none',
  },

  draggableItemDragging: {
    opacity: 0.6,
    transform: 'rotate(5deg)',
    cursor: 'grabbing',
    boxShadow: '0 10px 30px rgba(26, 188, 156, 0.3)',
  },

  dropTargets: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },

  dropTarget: {
    background: 'rgba(255, 255, 255, 0.1)',
    border: '2px dashed rgba(255, 255, 255, 0.3)',
    borderRadius: '12px',
    padding: '1rem',
    minHeight: '80px',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  },

  dropTargetActive: {
    borderColor: '#1ABC9C',
    backgroundColor: 'rgba(26, 188, 156, 0.1)',
    borderStyle: 'solid',
  },

  dropTargetCorrect: {
    borderColor: '#27AE60',
    backgroundColor: 'rgba(39, 174, 96, 0.1)',
  },

  targetText: {
    color: '#fff',
    fontSize: '0.95rem',
    lineHeight: 1.4,
    marginBottom: '0.5rem',
  },

  matchedItem: {
    background: 'rgba(26, 188, 156, 0.3)',
    color: '#fff',
    padding: '0.5rem',
    borderRadius: '8px',
    fontWeight: '600',
    textAlign: 'center',
    border: '1px solid rgba(26, 188, 156, 0.5)',
  },

  // Ordering Questions
  orderingContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    marginBottom: '2rem',
  },

  orderItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    padding: '1rem',
    marginBottom: '0.5rem',
    cursor: 'grab',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  },

  orderNumber: {
    background: 'rgba(26, 188, 156, 0.3)',
    color: '#fff',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    flexShrink: 0,
  },

  orderText: {
    color: '#fff',
    fontWeight: '500',
    flex: 1,
  },

  dragHandle: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '1.2rem',
    cursor: 'grab',
    flexShrink: 0,
  },

  // Drag Overlay
  dragOverlay: {
    background: 'rgba(26, 188, 156, 0.9)',
    color: '#fff',
    padding: '1rem',
    borderRadius: '12px',
    fontWeight: '600',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
  },

  // Quiz Navigation
  quizNavigation: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },

  nextButton: {
    background: 'linear-gradient(135deg, #1ABC9C, #16A085)',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    padding: '12px 32px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 4px 20px rgba(26, 188, 156, 0.3)',
    disabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },

  // Navigation item combinations for inline styles
  navItemIntro: {
    background: '#1ABC9C',
    borderColor: '#16A085',
    transform: 'scale(1.1)',
  },

  navItemSteps: {
    background: '#3498DB', 
    borderColor: '#2980B9',
    transform: 'scale(1.1)',
  },

  navItemTypes: {
    background: '#9B59B6',
    borderColor: '#8E44AD', 
    transform: 'scale(1.1)',
  },

  navItemDrawbacks: {
    background: '#E74C3C',
    borderColor: '#C0392B',
    transform: 'scale(1.1)',
  },

  navItemJoke: {
    background: '#F39C12',
    borderColor: '#E67E22',
    transform: 'scale(1.1)',
  },

  navItemQuiz: {
    background: '#27AE60',
    borderColor: '#229954',
    transform: 'scale(1.1)',
  },

  navItemSimulation: {
    background: '#FF6B35',
    borderColor: '#E55A2B',
    transform: 'scale(1.1)',
  },

  // Function to create step card with dynamic border - use by calling styles.stepCardWithBorder(color)
  stepCardWithBorder: (borderColor) => ({
    padding: '1.5rem',
    borderRadius: '15px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    borderLeft: `5px solid ${borderColor}`,
  }),

  // Function to create type header with dynamic background
  typeHeaderWithBg: (bgColor) => ({
    padding: '1rem',
    borderRadius: '10px 10px 0 0',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    background: bgColor,
  }),

  // Function to create reveal button with dynamic background
  revealButtonWithBg: (bgColor) => ({
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
    background: bgColor,
  }),

  // Story container with dynamic background
  storyContainerWithBg: (bgGradient) => ({
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    transition: 'background 0.5s ease',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: bgGradient,
  }),

  // Progress bar with dynamic background  
  progressBarWithBg: (bgColor) => ({
    height: '100%',
    borderRadius: '0 0 15px 15px',
    transition: 'width 0.3s ease',
    background: bgColor,
  }),

  // Flex container for buttons
  buttonFlexContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },

  // Plan button with teal gradient
  planButtonTeal: {
    padding: '12px 32px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 4px 20px rgba(26, 188, 156, 0.3)',
    background: "linear-gradient(135deg, #1abc9c 0%, #16a085 100%)",
  },

  // Plan button with blue gradient
  planButtonBlue: {
    padding: '12px 32px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 4px 20px rgba(41, 128, 185, 0.3)',
    background: "linear-gradient(135deg, #2980b9 0%, #6dd5fa 100%)",
  },

  // Plan button with purple gradient
  planButtonPurple: {
    padding: '12px 32px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 4px 20px rgba(142, 68, 173, 0.3)',
    background: "linear-gradient(135deg, #8e44ad 0%, #6c3483 100%)",
  },

  // Plan button with green gradient
  planButtonGreen: {
    padding: '12px 32px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 4px 20px rgba(39, 174, 96, 0.3)',
    background: "linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)",
  },

  // Plan button with red gradient
  planButtonRed: {
    padding: '12px 32px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 4px 20px rgba(231, 76, 60, 0.3)',
    background: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
  },

  // Plan button with dark gradient
  planButtonDark: {
    padding: '12px 32px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 4px 20px rgba(52, 73, 94, 0.3)',
    background: "linear-gradient(135deg, #34495e 0%, #2c3e50 100%)",
  },

  // Combined style functions for story lines
  storyLineBullet: {
    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
    lineHeight: 1.8,
    marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
    color: '#fff',
    textAlign: 'left',
    fontWeight: '500',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    paddingLeft: '1rem',
    borderLeft: '3px solid rgba(255, 255, 255, 0.3)',
  },

  storyLineQuote: {
    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
    lineHeight: 1.8,
    marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
    color: '#fff',
    textAlign: 'left',
    fontWeight: '500',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    fontStyle: 'italic',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    borderLeft: '4px solid rgba(255, 255, 255, 0.5)',
  },

};

// Add CSS keyframes as a string to be used in components
export const cssAnimations = `
@keyframes dropSuccess {
  0% {
    transform: scale(0.8) rotateZ(-5deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.1) rotateZ(2deg);
    opacity: 0.8;
  }
  100% {
    transform: scale(1) rotateZ(0deg);
    opacity: 1;
  }
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(26, 188, 156, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(26, 188, 156, 0);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
`;

export default style;
