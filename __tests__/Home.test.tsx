import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("should have the title rendered", () => {
	render(<Home />); // ARRANGE
	const header = screen.getByRole("heading"); // ACT
	expect(header).toBeInTheDocument(); // ASSERT
});
