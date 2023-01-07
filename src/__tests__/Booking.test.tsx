import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Booking from "../Pages/Booking/Booking";

describe("Booking main page correctly", async () => {
  const { container } = render(<Booking />);
  it("sidebar is visible", async () => {
    expect(container.querySelector(".sidebar")).toBeTruthy();
  });
  it("navbar is visible", async () => {
    expect(container.querySelector(".navbar")).toBeTruthy();
  });
  it("header is visible", async () => {
    expect(container.querySelector(".header")).toBeTruthy();
  });
  //   filters
  it("filters is visible", async () => {
    expect(container.querySelector(".filters")).toBeTruthy();
  });
  it("cars is visible", async () => {
    expect(container.querySelector(".cars")).toBeTruthy();
  });
  it("car-card is visible", async () => {
    expect(container.querySelector(".car-card")).toBeTruthy();
  });
});
