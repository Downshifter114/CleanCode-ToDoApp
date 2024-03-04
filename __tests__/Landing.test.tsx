import Home from "@/app/page";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

describe("Landing page renders properly", () => {
	it("Renders the name of the current user", () => {
		render(<Home />); // arrange
		const userName = screen.getByText(/is logged in\./i); // act
		expect(userName).toBeInTheDocument(); // assert
	});
});
