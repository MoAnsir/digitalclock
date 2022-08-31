/// <reference types="cypress" />

describe("digital clock", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays the default view - day, time, switch", () => {
    cy.get(".clock__day").should("exist");
    cy.get(".clock__timer").should("exist");
    cy.get(".clock__24h-switch").should("exist");
  });

  it("displays the correct day", () => {
    const d = new Date();
    const day = d.getDay();
    const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    cy.get(".clock__day").should("have.text", days[day]);
  });

  it("displays the correct time", () => {
    const d = new Date();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const sec = d.getSeconds();

    const minuteFormat = minute < 10 ? "0" + minute : minute;
    const secondFormat = sec < 10 ? "0" + sec : sec;
    const timeFormat = `${hour}:${minuteFormat}:${secondFormat}`;

    cy.get(".clock__timer").should("have.text", timeFormat);
  });

  it("change from 24h clock to 12h clock", () => {
    const d = new Date();
    const hour = d.getHours();
    const ampm = hour >= 12 ? "PM" : "AM";
    cy.get(".clock__24h-switch input").should("exist");
    cy.get(".clock__24h-switch input").click({ force: true });
    cy.get(".clock__timer").should("include.text", ampm);
  });
});
