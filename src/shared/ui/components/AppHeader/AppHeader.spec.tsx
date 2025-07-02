import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { AppHeader } from "./AppHeader";
import * as useCurrentThemeModule from "../../hooks/useCurrentTheme/useCurrentTheme";
import { IonApp } from "@ionic/react";

// Mock useCurrentTheme hook
const useCurrentThemeSpy = vi
  .spyOn(useCurrentThemeModule, "useCurrentTheme")
  .mockReturnValue({
    theme: "light",
    toggleTheme: vi.fn(),
  });

describe("AppHeader", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the header with light theme", () => {
    render(<AppHeader />);
    expect(screen.getByText(/Kevin Clark Dev ☀️/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders the header with dark theme", () => {
    useCurrentThemeSpy.mockReturnValue({
      theme: "dark",
      toggleTheme: vi.fn(),
    });

    render(<AppHeader />);
    expect(screen.getByText(/Kevin Clark Dev 🌙/i)).toBeInTheDocument();
  });

  it("calls toggleTheme when theme button is clicked", () => {
    render(
      <IonApp>
        <AppHeader />
      </IonApp>
    );

    const button = screen.getByRole("button", { hidden: true });
    fireEvent.click(button);
    expect(useCurrentThemeSpy).toHaveBeenCalled();
    expect(
      useCurrentThemeSpy.mock.results[0].value.toggleTheme
    ).toHaveBeenCalledTimes(1);
  });
});
