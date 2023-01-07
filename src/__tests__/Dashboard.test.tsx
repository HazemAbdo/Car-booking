import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Dashboard from "../Pages/Dashboard/Dashboard";

describe("Renders main page correctly", async () => {
  const { container } = render(<Dashboard />);
  it("sidebar is visible", async () => {
    expect(container.querySelector(".sidebar")).toBeTruthy();
  });
  it("navbar is visible", async () => {
    expect(container.querySelector(".navbar")).toBeTruthy();
  });
  it("cards-list is visible", async () => {
    expect(container.querySelector(".cards-list")).toBeTruthy();
  });
  it("percentage-card is visible", async () => {
    expect(container.querySelector(".percentage-card")).toBeTruthy();
  });
  it("statistics is visible", async () => {
    expect(container.querySelector(".statistics")).toBeTruthy();
  });
  it("vertical-bar-chart is visible", async () => {
    expect(container.querySelector(".vertical-bar-container")).toBeTruthy();
  });
  it("continuous-graph is visible", async () => {
    expect(container.querySelector(".continuous-graph-container")).toBeTruthy();
  });
  it("recommendations is visible", async () => {
    expect(container.querySelector(".recommendations")).toBeTruthy();
  });
  it("vertical-bar-chart has buttons", async () => {
    const buttons = container.querySelectorAll(
      ".vertical-bar-container button"
    );
    expect(buttons.length).toBe(3);
  });
  it("continuous-graph has 3 buttons", async () => {
    const buttons = container.querySelectorAll(
      ".continuous-graph-container button"
    );
    expect(buttons.length).toBe(3);
  });

  it("vertical-bar-chart initial state of buttons", async () => {
    const buttons = container.querySelectorAll(
      ".vertical-bar-container .vertical-bar-button"
    );
    const [firstButton, secondButton, thirdButton] = buttons;
    expect(firstButton.classList.contains("active")).toBeTruthy();
    expect(secondButton.classList.contains("active")).toBeFalsy();
    expect(thirdButton.classList.contains("active")).toBeFalsy();
  });
  it("continuous-graph initial state of buttons", async () => {
    const buttons = container.querySelectorAll(
      ".continuous-graph-container .continuous-graph-button"
    );
    const [firstButton, secondButton, thirdButton] = buttons;
    expect(firstButton.classList.contains("active-continuos")).toBeTruthy();
    expect(secondButton.classList.contains("active-continuos")).toBeFalsy();
    expect(thirdButton.classList.contains("active-continuos")).toBeFalsy();
  });
});
