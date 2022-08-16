import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";

describe("Test the clock", () => {
  test("check elements are rendered", () => {
    render(<App />);
    const day = screen.getByTestId("day");
    const timer = screen.getByTestId("timer");
    const switchToggole = screen.getByTestId("switch");
    expect(day).toBeInTheDocument();
    expect(timer).toBeInTheDocument();
    expect(switchToggole).toBeInTheDocument();
  });

  test("check the correct day is being displayed", () => {
    render(<App />);
    const d = new Date();
    const day = d.getDay();
    const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    const appDay = screen.getByText(days[day]);
    expect(appDay).toBeInTheDocument();
  });
  test("check correct time is being displayed", () => {
    render(<App />);

    const d = new Date();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const sec = d.getSeconds();

    const minuteFormat = minute < 10 ? "0" + minute : minute;
    const secondFormat = sec < 10 ? "0" + sec : sec;
    const timeFormat = `${hour}:${minuteFormat}:${secondFormat}`;
    const appTime = screen.getByText(timeFormat);

    expect(appTime).toBeInTheDocument();
  });

  test("check switch works", () => {
    render(<App />);
    //const { debug } = render(<App />);
    // screen.debug();
    const switchToggole = screen.getAllByRole("checkbox")[0];
    expect(switchToggole).toBeInTheDocument();
    expect(switchToggole.checked).toBeTruthy();
    fireEvent.click(switchToggole);

    expect(switchToggole.checked).toBeFalsy();
  });
});
