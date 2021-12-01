import { screen, render, fireEvent } from "@testing-library/react";
import { GameCard } from "components/GameCard";

describe("Components/GameCard", () => {
  it("renders component correctly", () => {
    render(<GameCard title="Game card title" description="Game card description" image="#" />);
    expect(screen.getByTestId("title").textContent).toBe("Game card title");
    expect(screen.getByTestId("description").textContent).toBe("Game card description");
    expect(screen.getByTestId("image").title).toBe("Game card title");
    expect(screen.getByTestId("image").getAttribute("src")).toBe("#");
  });

  it("doesn't render description paragraph if there's no description prop", () => {
    render(<GameCard title="Game card title" image="#" />);
    expect(screen.queryByTestId("description")).not.toBeInTheDocument();
  });

  it("calls onClick function correctly", () => {
    const clickMock = jest.fn();
    render(<GameCard id="1" onClick={clickMock} />);
    fireEvent.click(screen.getByTestId("addButton"));
    expect(clickMock).toHaveBeenCalledWith("1");
  });
});
