const styles = {
  softwareDevIntro: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    "@media (maxWidth: 768px)": { padding: "10px" },
  },

  backgroundParticle: {
    position: "absolute",
    width: "4px",
    height: "4px",
    background: "rgba(255, 255, 255, 0.5)",
    borderRadius: "50%",
    pointerEvents: "none",
  },

  contentWrapper: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: "1200px",
    width: "100%",
  },

  

  descriptionSection: {
    marginBottom: "4rem",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  mainDescription: {
    fontSize: "1.2rem",
    lineHeight: 1.8,
    color: "#ffffff",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
    background: "rgba(255, 255, 255, 0.1)",
    padding: "2rem",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    "@media (maxWidth: 768px)": {
      fontSize: "1rem",
      padding: "1.5rem",
    },
  },

  stagesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2rem",
    margin: "4rem 0",
    padding: "2rem",
    minHeight: "300px",
    "@media (maxWidth: 768px)": { gap: "1.5rem", padding: "1rem" },
    "@media (maxWidth: 480px)": { gap: "1rem", flexDirection: "column" },
  },

  stageWrapper: {
    position: "relative",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
  },

  stageCircle: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "white",
    fontWeight: 600,
    fontSize: "0.9rem",
    textAlign: "center",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(5px)",
    transition: "all 0.3s ease",
    overflow: "hidden",
    ":hover": {
      transform: "scale(1.1)",
    },
    "@media (maxWidth: 768px)": { fontSize: "0.8rem" },
    "@media (maxWidth: 480px)": { fontSize: "0.7rem" },
  },

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

  backLink: {
    position: "fixed",
    top: "20px",
    left: "20px",
    padding: "12px 24px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "#333",
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
    position: "fixed",
    top: "80px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "12px",
    zIndex: 999,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "10px 20px",
    borderRadius: "30px",
    backdropFilter: "blur(10px)",
  },

  dot: {
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
  },

  chapterContainer: {
    maxWidth: "900px",
    width: "100%",
    padding: "40px",
    position: "relative",
    zIndex: 10,
  },

  chapterContent: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "30px",
    padding: "60px 50px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(20px)",
    border: "2px solid rgba(255, 255, 255, 0.5)",
  },

  chapterIcon: {
    fontSize: "80px",
    textAlign: "center",
    marginBottom: "20px",
    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))",
  },

  chapterTitle: {
    fontSize: "2.8rem",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "10px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    lineHeight: 1.2,
  },

  chapterSubtitle: {
    fontSize: "1.4rem",
    fontWeight: "600",
    textAlign: "center",
    color: "#666",
    marginBottom: "40px",
    fontStyle: "italic",
  },

  storyContent: { marginBottom: "40px" },

  storyLine: {
    fontSize: "1.2rem",
    lineHeight: 1.8,
    color: "#333",
    marginBottom: "20px",
    textAlign: "left",
  },

  bulletPoint: { paddingLeft: "20px", fontWeight: "500", color: "#555" },

  quoteLine: {
    fontStyle: "italic",
    color: "#4a5568",
    borderLeft: "4px solid #667eea",
    paddingLeft: "20px",
    fontWeight: "500",
  },

  illustration: {
    fontSize: "60px",
    textAlign: "center",

    marginTop: "30px",
    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))",
  },

  controls: {
    position: "fixed",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "20px",
    zIndex: 999,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "15px 25px",
    borderRadius: "50px",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255, 255, 255, 0.3)",
  },

  navButton: {
    padding: "12px 30px",
    fontSize: "1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "#333",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  },

  playButton: {
    padding: "12px 30px",
    fontSize: "1rem",
    fontWeight: "600",
    border: "none",

    borderRadius: "30px",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  },

  chapterCounter: {
    position: "fixed",
    bottom: "100px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "8px 20px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "#333",
    borderRadius: "20px",
    fontSize: "0.9rem",
    fontWeight: "600",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    zIndex: 999,
  },

  particle: {
    position: "absolute",
    pointerEvents: "none",
    zIndex: 1,
    opacity: 0,
  },

  // Intro styles
  introWrapper: {
    position: "relative",
    zIndex: 10,
    width: "100%",
    maxWidth: "800px",
    textAlign: "center",
  },

  introContent: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "30px",
    padding: "80px 60px",
    boxShadow: "0 30px 80px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(20px)",
    border: "3px solid rgba(255, 255, 255, 0.5)",
    position: "relative",
    zIndex: 2,
  },

  introIcon: {
    fontSize: "100px",
    marginBottom: "30px",
    filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1))",
  },

  introTitle: {
    fontSize: "3.5rem",
    fontWeight: "900",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "15px",
    lineHeight: 1.2,
  },

  introSubtitle: {
    fontSize: "1.8rem",
    color: "#666",
    fontWeight: "600",
    marginBottom: "30px",
    fontStyle: "italic",
  },

  introDescription: {
    fontSize: "1.3rem",
    color: "#555",
    lineHeight: 1.8,
    marginBottom: "50px",
    maxWidth: "600px",
    margin: "0 auto 50px",
  },

  startButton: {
    padding: "18px 50px",
    fontSize: "1.3rem",
    fontWeight: "700",
    border: "none",
    borderRadius: "50px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)",
  },

  floatingBean: {
    position: "absolute",
    fontSize: "30px",
    zIndex: 1,
    pointerEvents: "none",
  },

  planButtonContainer: { marginTop: "40px", textAlign: "center" },

  planButton: {
    padding: "18px 45px",

    fontSize: "1.3rem",
    fontWeight: "700",
    border: "none",
    borderRadius: "50px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
  },

  pageContainer: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    position: "relative",
    overflow: "hidden",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },

  backLink: {
    position: "fixed",
    top: "20px",
    left: "20px",
    padding: "12px 24px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",

    color: "#333",
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

  floatingNav: {
    position: "fixed",
    right: "30px",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    zIndex: 999,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "15px 10px",
    borderRadius: "30px",
    backdropFilter: "blur(10px)",
  },

  navItem: {
    width: "50px",
    height: "50px",
    border: "none",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    fontSize: "1.5rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
  },

  navItemActive: {
    backgroundColor: "white",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    transform: "scale(1.1)",
  },

  contentContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    paddingTop: "40px",
    paddingRight: "120px",
  },

  section: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  heroIcon: {
    fontSize: "120px",
    marginBottom: "30px",
    filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))",
  },

  mainTitle: {
    fontSize: "4rem",
    fontWeight: "900",
    color: "white",
    textAlign: "center",
    marginBottom: "10px",

    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },

  subtitle: {
    fontSize: "1.8rem",
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "center",
    marginBottom: "50px",
    fontStyle: "italic",
  },

  sectionTitle: {
    fontSize: "3rem",
    fontWeight: "800",
    color: "white",
    textAlign: "center",
    marginBottom: "40px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },

  introCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "30px",
    padding: "50px",
    maxWidth: "800px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    marginBottom: "30px",
  },

  cardTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#333",
    marginBottom: "20px",
  },

  cardText: {
    fontSize: "1.2rem",
    lineHeight: 1.8,
    color: "#555",
    marginBottom: "30px",
  },

  keyPoints: { display: "flex", flexDirection: "column", gap: "15px" },

  keyPoint: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    fontSize: "1.1rem",
    color: "#444",
  },

  keyPointIcon: { fontSize: "2rem" },

  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
    width: "100%",
    maxWidth: "1100px",
    marginBottom: "40px",
  },

  stepCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    padding: "30px",

    position: "relative",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
  },

  stepNumber: {
    position: "absolute",
    top: "15px",
    right: "15px",
    fontSize: "3rem",
    fontWeight: "900",
    color: "rgba(0, 0, 0, 0.05)",
  },

  stepIcon: { fontSize: "3rem", marginBottom: "15px" },

  stepTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#333",
    marginBottom: "10px",
  },

  stepDescription: { fontSize: "1rem", color: "#666", lineHeight: 1.6 },

  stepFlow: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "20px",
    padding: "25px",
    maxWidth: "700px",

    marginBottom: "30px",
  },

  flowText: { fontSize: "1.1rem", color: "#444", lineHeight: 1.6, margin: 0 },

  typesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    width: "100%",
    maxWidth: "900px",
    marginBottom: "40px",
  },

  typeCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "25px",
    overflow: "hidden",
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.2)",
  },

  typeHeader: {
    padding: "30px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    color: "white",
  },

  typeEmoji: { fontSize: "3rem" },

  typeName: { fontSize: "2rem", fontWeight: "700", margin: 0 },

  typeContent: { padding: "30px" },

  storyTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#333",
    marginBottom: "15px",
  },

  storyScenario: {
    fontSize: "1.1rem",
    color: "#555",
    lineHeight: 1.7,
    marginBottom: "20px",
  },

  revealButton: {
    width: "100%",
    padding: "15px",
    fontSize: "1.1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "15px",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginBottom: "15px",
  },

  failureBox: {
    backgroundColor: "#FFE5E5",
    borderLeft: "5px solid #FF6B6B",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "15px",
  },

  failureTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#D63031",
    marginBottom: "10px",
  },

  failureText: { fontSize: "1rem", color: "#555", lineHeight: 1.6, margin: 0 },

  fixBox: {
    backgroundColor: "#E5F9E5",
    borderLeft: "5px solid #00B894",
    padding: "20px",
    borderRadius: "10px",
  },

  fixTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#00B894",
    marginBottom: "10px",
  },

  fixText: { fontSize: "1rem", color: "#555", lineHeight: 1.6, margin: 0 },

  drawbackIntro: {
    fontSize: "1.3rem",
    color: "white",
    textAlign: "center",
    marginBottom: "40px",
    maxWidth: "700px",
  },

  drawbacksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
    width: "100%",
    maxWidth: "1100px",
    marginBottom: "40px",
  },

  drawbackCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  drawbackIcon: { fontSize: "4rem", marginBottom: "15px", textAlign: "center" },

  drawbackTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#333",
    marginBottom: "15px",
    textAlign: "center",
  },

  drawbackProblem: {
    fontSize: "1rem",
    color: "#666",
    lineHeight: 1.6,
    textAlign: "center",
    marginBottom: "15px",
  },

  resolutionBox: {
    backgroundColor: "rgba(102, 126, 234, 0.1)",
    borderRadius: "15px",
    padding: "20px",
    marginTop: "15px",
  },

  resolutionTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#667eea",
    marginBottom: "10px",
  },

  resolutionText: {
    fontSize: "1rem",
    color: "#444",
    lineHeight: 1.6,
    margin: 0,
  },

  tapHint: {
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#999",
    marginTop: "15px",
    fontStyle: "italic",
  },

  jokeContainer: { maxWidth: "800px", width: "100%" },

  jokeIcon: {
    fontSize: "100px",
    textAlign: "center",
    marginBottom: "30px",
    filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))",
  },

  jokeTitle: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "white",
    textAlign: "center",
    marginBottom: "40px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },

  jokeBox: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    padding: "30px",
    marginBottom: "25px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },

  jokeSetup: {
    fontSize: "1.3rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "15px",
  },

  jokePunchline: {
    fontSize: "1.2rem",
    color: "#667eea",
    fontWeight: "600",
    lineHeight: 1.6,
  },

  wisdomBox: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    padding: "35px",
    marginTop: "40px",
    marginBottom: "30px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },

  wisdomText: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#667eea",
    marginBottom: "15px",
    textAlign: "center",
  },

  wisdomExplanation: {
    fontSize: "1.1rem",
    color: "#555",
    lineHeight: 1.7,

    textAlign: "center",
    margin: 0,
  },

  nextButton: {
    padding: "18px 45px",
    fontSize: "1.2rem",
    fontWeight: "700",
    border: "none",
    borderRadius: "50px",
    background: "rgba(255, 255, 255, 0.9)",
    color: "#667eea",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    marginTop: "20px",
  },

  homeButton: {
    width: "100%",
    padding: "18px",
    fontSize: "1.2rem",
    fontWeight: "700",
    border: "none",
    borderRadius: "50px",
    background: "rgba(255, 255, 255, 0.9)",
    color: "#667eea",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },

  buttonGroup: { display: "flex", gap: "20px", width: "100%" },

  nextPhaseButton: {
    width: "100%",
    padding: "18px",
    fontSize: "1.2rem",
    fontWeight: "700",
    border: "none",
    borderRadius: "50px",
    background: "linear-gradient(135deg, #4ECDC4 0%, #45B7D1 100%)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(78, 205, 196, 0.3)",
  },

  particle: {
    position: "absolute",
    fontSize: "25px",
    pointerEvents: "none",
    zIndex: 1,
    opacity: 0,
  },

  pageContainer: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #4ECDC4 0%, #45B7D1 100%)",
    position: "relative",
    overflow: "hidden",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },

  backLink: {
    position: "fixed",
    top: "20px",

    left: "20px",
    padding: "12px 24px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "#333",
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

  floatingNav: {
    position: "fixed",
    right: "30px",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    zIndex: 999,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "15px 10px",
    borderRadius: "30px",
    backdropFilter: "blur(10px)",
  },

  navItem: {
    width: "50px",
    height: "50px",
    border: "none",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    fontSize: "1.5rem",

    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  navItemActive: {
    backgroundColor: "white",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    transform: "scale(1.1)",
  },

  contentContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    paddingTop: "40px",
    paddingRight: "120px",
  },

  section: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  heroIcon: {
    fontSize: "120px",
    marginBottom: "30px",
    filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))",
  },

  mainTitle: {
    fontSize: "4rem",
    fontWeight: "900",

    color: "white",
    textAlign: "center",
    marginBottom: "10px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },

  subtitle: {
    fontSize: "1.8rem",
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "center",
    marginBottom: "50px",
    fontStyle: "italic",
  },

  sectionTitle: {
    fontSize: "3rem",
    fontWeight: "800",
    color: "white",
    textAlign: "center",
    marginBottom: "40px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },

  introCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "30px",
    padding: "50px",
    maxWidth: "800px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    marginBottom: "30px",
  },

  cardTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#333",
    marginBottom: "20px",
  },

  cardText: {
    fontSize: "1.2rem",
    lineHeight: 1.8,
    color: "#555",
    marginBottom: "30px",
  },

  keyPoints: { display: "flex", flexDirection: "column", gap: "15px" },

  keyPoint: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    fontSize: "1.1rem",
    color: "#444",
  },

  keyPointIcon: { fontSize: "2rem" },

  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
    width: "100%",
    maxWidth: "1100px",
    marginBottom: "40px",
  },

  stepCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    padding: "30px",
    position: "relative",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
  },

  stepNumber: {
    position: "absolute",
    top: "15px",
    right: "15px",
    fontSize: "3rem",
    fontWeight: "900",
    color: "rgba(0, 0, 0, 0.05)",
  },

  stepIcon: { fontSize: "3rem", marginBottom: "15px" },

  stepTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#333",
    marginBottom: "10px",
  },

  stepDescription: { fontSize: "1rem", color: "#666", lineHeight: 1.6 },

  stepFlow: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",

    borderRadius: "20px",
    padding: "25px",
    maxWidth: "700px",
    marginBottom: "30px",
  },

  flowText: { fontSize: "1.1rem", color: "#444", lineHeight: 1.6, margin: 0 },

  typesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    width: "100%",
    maxWidth: "900px",
    marginBottom: "40px",
  },

  typeCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "25px",
    overflow: "hidden",
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.2)",
  },

  typeHeader: {
    padding: "30px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    color: "white",
  },

  typeEmoji: { fontSize: "3rem" },

  typeName: { fontSize: "2rem", fontWeight: "700", margin: 0 },

  typeContent: { padding: "30px" },

  storyTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#333",
    marginBottom: "15px",
  },

  storyScenario: {
    fontSize: "1.1rem",
    color: "#555",
    lineHeight: 1.7,
    marginBottom: "20px",
  },

  revealButton: {
    width: "100%",
    padding: "15px",
    fontSize: "1.1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "15px",
    color: "white",
    cursor: "pointer",

    transition: "all 0.3s ease",
    marginBottom: "15px",
  },

  failureBox: {
    backgroundColor: "#FFE5E5",
    borderLeft: "5px solid #FF6B6B",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "15px",
  },

  failureTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#D63031",
    marginBottom: "10px",
  },

  failureText: { fontSize: "1rem", color: "#555", lineHeight: 1.6, margin: 0 },

  fixBox: {
    backgroundColor: "#E5F9E5",
    borderLeft: "5px solid #00B894",
    padding: "20px",
    borderRadius: "10px",
  },

  fixTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#00B894",

    marginBottom: "10px",
  },

  fixText: { fontSize: "1rem", color: "#555", lineHeight: 1.6, margin: 0 },

  drawbackIntro: {
    fontSize: "1.3rem",
    color: "white",
    textAlign: "center",
    marginBottom: "40px",
    maxWidth: "700px",
  },

  drawbacksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
    width: "100%",
    maxWidth: "1100px",
    marginBottom: "40px",
  },

  drawbackCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  drawbackIcon: {
    fontSize: "4rem",
    marginBottom: "15px",
    textAlign: "center",
  },

  drawbackTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#333",
    marginBottom: "15px",
    textAlign: "center",
  },

  drawbackProblem: {
    fontSize: "1rem",
    color: "#666",
    lineHeight: 1.6,
    textAlign: "center",
    marginBottom: "15px",
  },

  resolutionBox: {
    backgroundColor: "rgba(78, 205, 196, 0.1)",
    borderRadius: "15px",
    padding: "20px",
    marginTop: "15px",
  },

  resolutionTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#4ECDC4",
    marginBottom: "10px",
  },

  resolutionText: {
    fontSize: "1rem",

    color: "#444",
    lineHeight: 1.6,
    margin: 0,
  },

  tapHint: {
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#999",
    marginTop: "15px",
    fontStyle: "italic",
  },

  jokeContainer: { maxWidth: "800px", width: "100%" },

  jokeIcon: {
    fontSize: "100px",
    textAlign: "center",
    marginBottom: "30px",
    filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))",
  },

  jokeTitle: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "white",
    textAlign: "center",
    marginBottom: "40px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },

  jokeBox: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",

    padding: "30px",
    marginBottom: "25px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },

  jokeSetup: {
    fontSize: "1.3rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "15px",
  },

  jokePunchline: {
    fontSize: "1.2rem",
    color: "#4ECDC4",
    fontWeight: "600",
    lineHeight: 1.6,
  },

  wisdomBox: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    padding: "35px",
    marginTop: "40px",
    marginBottom: "30px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },

  wisdomText: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#4ECDC4",
    marginBottom: "15px",
    textAlign: "center",
  },

  wisdomExplanation: {
    fontSize: "1.1rem",
    color: "#555",
    lineHeight: 1.7,
    textAlign: "center",
    margin: 0,
  },

  nextButton: {
    padding: "18px 45px",
    fontSize: "1.2rem",
    fontWeight: "700",
    border: "none",
    borderRadius: "50px",
    background: "rgba(255, 255, 255, 0.9)",
    color: "#4ECDC4",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    marginTop: "20px",
  },

  homeButton: {
    width: "100%",
    padding: "18px",
    fontSize: "1.2rem",
    fontWeight: "700",
    border: "none",
    borderRadius: "50px",
    background: "rgba(255, 255, 255, 0.9)",
    color: "#4ECDC4",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },

  buttonGroup: {
    display: "flex",

    gap: "20px",
    width: "100%",
  },

  nextPhaseButton: {
    width: "100%",
    padding: "18px",
    fontSize: "1.2rem",
    fontWeight: "700",
    border: "none",
    borderRadius: "50px",
    background: "linear-gradient(135deg, #45B7D1 0%, #96CEB4 100%)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(69, 183, 209, 0.3)",
  },

  particle: {
    position: "absolute",
    fontSize: "25px",
    pointerEvents: "none",
    zIndex: 1,
    opacity: 0,
  },

  pageContainer: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #96CEB4 0%, #FFEAA7 100%)",

    position: "relative",
    overflow: "hidden",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },

  backLink: {
    position: "fixed",
    top: "20px",
    left: "20px",
    padding: "12px 24px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "#333",
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

  floatingNav: {
    position: "fixed",
    right: "30px",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    zIndex: 999,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "15px 10px",
    borderRadius: "30px",
    backdropFilter: "blur(10px)",
  },

  navItem: {
    width: "50px",
    height: "50px",
    border: "none",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    fontSize: "1.5rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  navItemActive: {
    backgroundColor: "white",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    transform: "scale(1.1)",
  },

  contentContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    paddingTop: "40px",
    paddingRight: "120px",
  },

  section: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  heroIcon: {
    fontSize: "120px",
    marginBottom: "30px",
    filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))",
  },

  mainTitle: {
    fontSize: "4rem",
    fontWeight: "900",
    color: "white",
    textAlign: "center",
    marginBottom: "10px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },

  subtitle: {
    fontSize: "1.8rem",
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "center",
    marginBottom: "50px",
    fontStyle: "italic",
  },

  sectionTitle: {
    fontSize: "3rem",
    fontWeight: "800",
    color: "white",
    textAlign: "center",
    marginBottom: "40px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },

  introCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "30px",
    padding: "50px",
    maxWidth: "800px",

    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    marginBottom: "30px",
  },

  cardTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#333",
    marginBottom: "20px",
  },

  cardText: {
    fontSize: "1.2rem",
    lineHeight: 1.8,
    color: "#555",
    marginBottom: "30px",
  },

  keyPoints: { display: "flex", flexDirection: "column", gap: "15px" },

  keyPoint: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    fontSize: "1.1rem",
    color: "#444",
  },

  keyPointIcon: { fontSize: "2rem" },

  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
    width: "100%",
    maxWidth: "1100px",
    marginBottom: "40px",
  },

  stepCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    padding: "30px",
    position: "relative",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
  },

  stepNumber: {
    position: "absolute",
    top: "15px",
    right: "15px",
    fontSize: "3rem",
    fontWeight: "900",
    color: "rgba(0, 0, 0, 0.05)",
  },

  stepIcon: { fontSize: "3rem", marginBottom: "15px" },

  stepTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#333",
    marginBottom: "10px",
  },

  stepDescription: { fontSize: "1rem", color: "#666", lineHeight: 1.6 },

  stepFlow: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "20px",
    padding: "25px",
    maxWidth: "700px",
    marginBottom: "30px",
  },

  flowText: { fontSize: "1.1rem", color: "#444", lineHeight: 1.6, margin: 0 },

  typesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    width: "100%",
    maxWidth: "900px",
    marginBottom: "40px",
  },

  typeCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "25px",
    overflow: "hidden",
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.2)",
  },

  typeHeader: {
    padding: "30px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    color: "white",
  },

  typeEmoji: { fontSize: "3rem" },

  typeName: { fontSize: "2rem", fontWeight: "700", margin: 0 },

  typeContent: { padding: "30px" },

  storyTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#333",
    marginBottom: "15px",
  },

  storyScenario: {
    fontSize: "1.1rem",
    color: "#555",
    lineHeight: 1.7,
    marginBottom: "20px",
  },

  revealButton: {
    width: "100%",
    padding: "15px",
    fontSize: "1.1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "15px",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginBottom: "15px",
  },

  failureBox: {
    backgroundColor: "#FFE5E5",
    borderLeft: "5px solid #FF6B6B",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "15px",
  },

  failureTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#D63031",
    marginBottom: "10px",
  },

  failureText: { fontSize: "1rem", color: "#555", lineHeight: 1.6, margin: 0 },

  fixBox: {
    backgroundColor: "#E5F9E5",

    borderLeft: "5px solid #00B894",
    padding: "20px",
    borderRadius: "10px",
  },

  fixTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#00B894",
    marginBottom: "10px",
  },

  fixText: { fontSize: "1rem", color: "#555", lineHeight: 1.6, margin: 0 },

  drawbackIntro: {
    fontSize: "1.3rem",
    color: "white",
    textAlign: "center",
    marginBottom: "40px",
    maxWidth: "700px",
  },

  drawbacksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
    width: "100%",
    maxWidth: "1100px",
    marginBottom: "40px",
  },

  drawbackCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  drawbackIcon: { fontSize: "4rem", marginBottom: "15px", textAlign: "center" },

  drawbackTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#333",
    marginBottom: "15px",
    textAlign: "center",
  },

  drawbackProblem: {
    fontSize: "1rem",
    color: "#666",
    lineHeight: 1.6,
    textAlign: "center",
    marginBottom: "15px",
  },

  resolutionBox: {
    backgroundColor: "rgba(150, 206, 180, 0.1)",
    borderRadius: "15px",
    padding: "20px",
    marginTop: "15px",
  },

  resolutionTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#96CEB4",
    marginBottom: "10px",
  },

  resolutionText: {
    fontSize: "1rem",
    color: "#444",
    lineHeight: 1.6,
    margin: 0,
  },

  tapHint: {
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#999",
    marginTop: "15px",
    fontStyle: "italic",
  },

  jokeContainer: { maxWidth: "800px", width: "100%" },

  jokeIcon: {
    fontSize: "100px",
    textAlign: "center",
    marginBottom: "30px",
    filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))",
  },

  jokeTitle: {
    fontSize: "2.5rem",
    fontWeight: "800",

    color: "white",
    textAlign: "center",
    marginBottom: "40px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },

  jokeBox: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    padding: "30px",
    marginBottom: "25px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },

  jokeSetup: {
    fontSize: "1.3rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "15px",
  },

  jokePunchline: {
    fontSize: "1.2rem",
    color: "#96CEB4",
    fontWeight: "600",
    lineHeight: 1.6,
  },

  wisdomBox: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    padding: "35px",
    marginTop: "40px",
    marginBottom: "30px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },

  wisdomText: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#96CEB4",
    marginBottom: "15px",
    textAlign: "center",
  },

  wisdomExplanation: {
    fontSize: "1.1rem",
    color: "#555",
    lineHeight: 1.7,
    textAlign: "center",
    margin: 0,
  },

  nextButton: {
    padding: "18px 45px",
    fontSize: "1.2rem",
    fontWeight: "700",
    border: "none",
    borderRadius: "50px",
    background: "rgba(255, 255, 255, 0.9)",
    color: "#96CEB4",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    marginTop: "20px",
  },

  homeButton: {
    width: "100%",
    padding: "18px",
    fontSize: "1.2rem",
    fontWeight: "700",
    border: "none",
    borderRadius: "50px",

    background: "rgba(255, 255, 255, 0.9)",
    color: "#96CEB4",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },

  buttonGroup: { display: "flex", gap: "20px", width: "100%" },

  nextPhaseButton: {
    width: "100%",
    padding: "18px",
    fontSize: "1.2rem",
    fontWeight: "700",
    border: "none",
    borderRadius: "50px",
    background: "linear-gradient(135deg, #FFEAA7 0%, #DDA0DD 100%)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(255, 234, 167, 0.3)",
  },

  particle: {
    position: "absolute",
    fontSize: "25px",
    pointerEvents: "none",
    zIndex: 1,
    opacity: 0,
  },
};

export default styles;
