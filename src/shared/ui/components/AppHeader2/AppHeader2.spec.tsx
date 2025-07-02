import { describe, it, vi, beforeEach, afterEach, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AppHeader } from "./AppHeader2";
import { currentTheme$ } from "@shared/state/global/current-theme";

const currentTheme$ValueSpy = vi.spyOn(currentTheme$, "value", "get");
const currentTheme$SetSpy = vi.spyOn(currentTheme$, "set");

describe("AppHeader", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the header with the correct text", () => {
    render(<AppHeader />);
    expect(screen.getByText(/Kevin Clark Dev/i)).toBeInTheDocument();
  });

  it("shows sun icon and ☀️ when theme is light", () => {
    currentTheme$ValueSpy.mockReturnValue("light");
    render(<AppHeader />);
    expect(screen.getByText(/☀️/i)).toBeInTheDocument();
    const icon = screen.getByTitle("theme-toggle-icon");
    expect(icon).toBeInTheDocument();
  });

  it("shows moon icon and 🌙 when theme is dark", () => {
    currentTheme$ValueSpy.mockReturnValue("dark");
    render(<AppHeader />);
    expect(screen.getByText(/🌙/i)).toBeInTheDocument();
    const icon = screen.getByTitle("theme-toggle-icon");
    expect(icon).toBeInTheDocument();
  });

  it("toggles theme when button is clicked", () => {
    currentTheme$ValueSpy.mockReturnValue("light");
    render(<AppHeader />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(currentTheme$SetSpy).toHaveBeenCalledWith("dark");
  });

  it("toggles theme from dark to light", () => {
    currentTheme$ValueSpy.mockReturnValue("dark");
    render(<AppHeader />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(currentTheme$SetSpy).toHaveBeenCalledWith("light");
  });
});
