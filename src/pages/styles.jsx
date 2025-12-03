
const style = {
  //css for software development learn page
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

  responsiveContainer: {
    "@media (maxWidth: 1024px)": { padding: "15px" },
    "@media (maxWidth: 768px)": { padding: "10px" },
  },

  backLink: {
    position: "absolute",
    top: "20px",
    left: "20px",
    padding: "5px 24px",
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

  contentWrapper: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: "1200px",
    width: "100%",
    top: 30,
  },

  mainTitle: {
    fontSize: "3.5rem",
    fontWeight: 700,
    color: "#1ABC9C", // teal shade
    marginBottom: "2rem",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    background:
      "linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(26, 188, 156, 0.9)) text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    "@media (maxWidth: 768px)": { fontSize: "2.5rem" },
    "@media (maxWidth: 480px)": { fontSize: "2rem" },
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
    color: "#16A085", // teal shade
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
    minHeight: "200px",
    "@media (maxWidth: 768px)": { gap: "1.5rem", padding: "1rem" },
    "@media (maxWidth: 480px)": { gap: "1rem", flexDirection: "column" },
  },

  stageWrapper: {
    position: "relative",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
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
  },

  cardContent: { padding: "1.5rem", textAlign: "center" },

  cardTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "rgb(2 253 255)",
    marginBottom: "20px",
  },

  cardDescription: {
    fontSize: "0.9rem",
    lineHeight: 1.5,
    opacity: 0.95,
    textShadow: "rgb(60 171 0) 3px 4px 2px",
    color: "rgb(2 253 255)",
    "@media (maxWidth: 768px)": { fontSize: "0.8rem" },
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
    boxShadow: "0 8px 32px rgba(170, 188, 209, 0.3)",
    border: "2px solid rgba(23, 7, 68, 0.3)",
    backdropFilter: "blur(5px)",
    transition: "all 0.3s ease",
    overflow: "hidden",
    ":hover": {
      transform: "scale(1.1)",
    },
    "@media (maxWidth: 768px)": { fontSize: "0.8rem" },
    "@media (maxWidth: 480px)": { fontSize: "0.7rem" },
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
    color: "#004F4F", // dark teal text
    fontSize: "1.2rem",
    fontWeight: 600,
    padding: "1rem 2.5rem",
    borderRadius: "50px",
    cursor: "pointer",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    border: "2px solid rgba(0, 79, 79, 0.25)", // dark teal border tint
    backdropFilter: "blur(10px)",
    position: "relative",
    overflow: "hidden",
    marginTop: "3rem",
    marginBottom: "5rem",
    transition: "all 0.3s ease",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
    },
    "@media (maxWidth: 768px)": { fontSize: "1rem", padding: "0.8rem 2rem" },
  },

  storyButtonSpan: {
    background:
      "linear-gradient(45deg, #6ada4eff, #37b92cff, #338f21ff, #29610fff)", // dark-teal spectrum
    backgroundSize: "200% 200%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    position: "relative",
    zIndex: 2,
  },

  //story page styles
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
  },

  introContent: {
    backgroundColor: "rgb(49, 68, 89)",
    borderRadius: "30px",
    padding: "80px 60px",
    boxShadow: "50px 30px 20px rgba(43, 139, 151, 0.3)",
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
    background: "linear-gradient(135deg, #4bb1b4ff 0%, #325fa1ff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "15px",
    lineHeight: 1.2,
  },

  introSubtitle: {
    fontSize: "1.8rem",
    color: "#4aa07cff",
    fontWeight: "600",
    marginBottom: "30px",
    fontStyle: "italic",
  },

  introDescription: {
    fontSize: "1.3rem",
    color: "#bde4ceff",
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
    background: "linear-gradient(135deg, #4496a5ff 0%, #2dac6cff 100%)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(151, 198, 206, 0.4)",
  },

  floatingBean: {
    position: "absolute",
    fontSize: "30px",
    zIndex: 1,
    pointerEvents: "none",
  },

  //story tiles styles
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
    position: "relative",
    bottom: "450px",
    left: "63%",
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
    padding: "80px",
    position: "relative",
    justifyContent: "center",
    zIndex: 10,
  },

  chapterContent: {
    backgroundColor: "rgb(49, 68, 89)",
    borderRadius: "30px",
    padding: "100px 80px",
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


  
};

export default style;
