describe("AI-Enhanced SDLC Pages Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to AI-Enhanced SDLC hub", () => {
    cy.contains("button", "AI-Enhanced", { matchCase: false }).click();
    cy.url().should("include", "/ai-augmented-development");
    cy.get("h1").should("be.visible");
  });

  it("should load AI analysis page correctly", () => {
    cy.contains("button", "AI-Enhanced", { matchCase: false }).click();
    cy.url().should("include", "/ai-augmented-development");
    
    // Open menu and navigate to AI Analysis
    cy.contains("button", "Menu").click();
    cy.get("a").contains("Analysis").should("be.visible").click();
    cy.url().should("include", "/ai-analysis");
    cy.get("h1, h2").should("be.visible");
  });

  it("should display AI-specific content features", () => {
    cy.contains("button", "AI-Enhanced", { matchCase: false }).click();
    cy.url().should("include", "/ai-augmented-development");
    
    // Open menu and navigate to AI Planning
    cy.contains("button", "Menu").click();
    cy.get("a").contains("Planning").should("be.visible").click();

    // Look for AI-related content (without emoji dependency)
    cy.get("body").should("contain.text", "AI");
    cy.get("h1, h2, h3").should("be.visible");
  });

  it("should navigate between AI SDLC phases", () => {
    cy.contains("button", "AI-Enhanced", { matchCase: false }).click();
    cy.url().should("include", "/ai-augmented-development");

    // Test navigation to first few phases
    const testPhases = ["Planning", "Analysis", "Design"];
    testPhases.forEach((phase) => {
      // Open menu and navigate to phase
      cy.contains("button", "Menu").click();
      cy.get("a").contains(phase).should("be.visible").click();
      cy.url().should("include", phase.toLowerCase());
      cy.get("h1, h2, h3").should("be.visible");
      cy.wait(500);
    });
  });

  it("should have working interactive elements", () => {
    cy.contains("button", "AI-Enhanced", { matchCase: false }).click();
    cy.url().should("include", "/ai-augmented-development");
    
    // Open menu and navigate to AI Implementation
    cy.contains("button", "Menu").click();
    cy.get("a").contains("Implementation").should("be.visible").click();

    // Check for buttons and interactive elements
    cy.get("button").should("have.length.greaterThan", 0);
    cy.get("body").should("not.be.empty");
  });

  it("should have proper page structure", () => {
    cy.contains("button", "AI-Enhanced", { matchCase: false }).click();
    cy.url().should("include", "/ai-augmented-development");
    
    // Open menu and navigate to AI Testing
    cy.contains("button", "Menu").click();
    cy.get("a").contains("Testing").should("be.visible").click();

    // Check essential elements exist
    cy.get("h1, h2, h3").should("be.visible");
    cy.get("p, div").should("have.length.greaterThan", 0);
  });

  it("should be responsive on mobile devices", () => {
    cy.viewport("iphone-6");
    cy.contains("button", "AI-Enhanced", { matchCase: false }).click();
    cy.url().should("include", "/ai-augmented-development");
    
    // Check menu button is visible on mobile
    cy.contains("button", "Menu").should("be.visible");
    cy.checkResponsive();
  });
});

context("AI Design Page", () => {
  beforeEach(() => {
    cy.navigateToAISDLCPage("design");
  });

  it("should load AI design page correctly", function () {
    cy.checkPageLoad(this.testData.pages.aiSdlc[1].title);
    cy.contains("AI-augmented design leverages machine learning").should(
      "be.visible"
    );
  });

  it("should show AI design capabilities", () => {
    cy.get('[aria-label="Steps"]').click();
    cy.contains("AI Design Steps").should("be.visible");
  });

  it("should display AI tools and techniques", () => {
    cy.get('[aria-label="Types"]').click();
    cy.contains("AI Design Approaches").should("be.visible");
  });
});

context("AI Planning Page", () => {
  beforeEach(() => {
    cy.navigateToAISDLCPage("planning");
  });

  it("should load AI planning page correctly", function () {
    cy.checkPageLoad(this.testData.pages.aiSdlc[2].title);
    cy.contains("Smarter project planning with artificial intelligence").should(
      "be.visible"
    );
  });

  it("should show AI planning features", () => {
    cy.contains("AI-Augmented Planning").should("be.visible");
    cy.contains("AI", { matchCase: false }).should("exist");
  });
});

context("AI Implementation Page", () => {
  beforeEach(() => {
    cy.navigateToAISDLCPage("implementation");
  });

  it("should load AI implementation page correctly", function () {
    cy.checkPageLoad(this.testData.pages.aiSdlc[3].title);
    cy.contains(
      "Rapid, reliable software development with artificial intelligence"
    ).should("be.visible");
  });

  it("should display AI implementation strategies", () => {
    cy.get('[aria-label="Steps"]').click();
    cy.contains("AI Implementation Steps").should("be.visible");
  });
});

context("AI Testing Page", () => {
  beforeEach(() => {
    cy.navigateToAISDLCPage("testing");
  });

  it("should load AI testing page correctly", function () {
    cy.checkPageLoad(this.testData.pages.aiSdlc[4].title);
    cy.contains(
      "Smarter, faster software testing with artificial intelligence"
    ).should("be.visible");
  });

  it("should show AI testing capabilities", () => {
    cy.contains("AI-Augmented Testing").should("be.visible");
  });
});

context("AI Deployment Page", () => {
  beforeEach(() => {
    cy.navigateToAISDLCPage("deployment");
  });

  it("should load AI deployment page correctly", function () {
    cy.checkPageLoad(this.testData.pages.aiSdlc[5].title);
    cy.contains("Deploy smarter and safer with artificial intelligence").should(
      "be.visible"
    );
  });

  it("should display AI deployment strategies", () => {
    cy.contains("AI-Augmented Deployment").should("be.visible");
  });
});

context("AI Maintenance Page", () => {
  beforeEach(() => {
    cy.navigateToAISDLCPage("maintenance");
  });

  it("should load AI maintenance page correctly", function () {
    cy.checkPageLoad(this.testData.pages.aiSdlc[6].title);
    cy.contains(
      "Maintain, optimize, and secure your software with artificial intelligence"
    ).should("be.visible");
  });
});

context("AI Review Page", () => {
  beforeEach(() => {
    cy.navigateToAISDLCPage("review");
  });

  it("should load AI review page correctly", function () {
    cy.checkPageLoad(this.testData.pages.aiSdlc[7].title);
    cy.contains(
      "Review, learn, and improve with artificial intelligence"
    ).should("be.visible");
  });
});

context("AI-Specific Features", () => {
  it("should highlight AI capabilities across all pages", () => {
    const aiPages = [
      "analysis",
      "design",
      "planning",
      "implementation",
      "testing",
      "deployment",
      "maintenance",
      "review",
    ];

    aiPages.forEach((page) => {
      cy.navigateToAISDLCPage(page);
      cy.contains("AI", { matchCase: false }).should("be.visible");
      cy.contains("AI", { matchCase: false }).should("be.visible");
      cy.contains("artificial intelligence", { matchCase: false }).should(
        "be.visible"
      );
    });
  });

  it("should show AI vs traditional SDLC differences", () => {
    cy.navigateToAISDLCPage("analysis");
    cy.contains("AI-Augmented Analysis").should("be.visible");

    // Compare with traditional analysis
    cy.navigateToSDLCPage("analysis");
    cy.contains("Analysis Phase").should("be.visible");
  });

  it("should maintain AI context throughout navigation", () => {
    // Start at AI analysis
    cy.navigateToAISDLCPage("analysis");
    cy.get('[aria-label="Steps"]').click();
    cy.contains("AI Analysis Steps").should("be.visible");

    // Navigate to AI design
    cy.navigateToAISDLCPage("design");
    cy.contains("AI-Augmented Design").should("be.visible");

    // Navigate to AI implementation
    cy.navigateToAISDLCPage("implementation");
    cy.contains("Implementation Phase with AI").should("be.visible");
  });
});

context("Cross-Platform AI Features", () => {
  it("should work consistently across different screen sizes", () => {
    cy.navigateToAISDLCPage("analysis");

    // Test mobile
    cy.viewport("iphone-6");
    cy.get("h1").should("be.visible");
    cy.contains("AI", { matchCase: false }).should("exist");

    // Test tablet
    cy.viewport("ipad-2");
    cy.get("h1").should("be.visible");
    cy.contains("AI", { matchCase: false }).should("exist");

    // Test desktop
    cy.viewport(1280, 720);
    cy.get("h1").should("be.visible");
    cy.contains("AI", { matchCase: false }).should("exist");
  });
});
