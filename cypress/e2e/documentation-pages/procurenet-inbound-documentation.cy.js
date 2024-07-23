/// <reference types="cypress" />

describe("documentation page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/documentation");
  });

  it("displays sidebar", () => {
    cy.get("#SidebarMenuDocs").should("be.visible");
  });
  it("displays navbar header", () => {
    cy.get("#NavigationBarHeader").should("be.visible");
  });
});
