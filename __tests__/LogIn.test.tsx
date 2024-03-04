import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Home from "@/app/login/page";

describe("LogIn page renders properly", () => {
	it("Renders an email field.", () => {
		render(<Home />); //arrange
		const emailInput = screen.getByLabelText("Email"); // act
		expect(emailInput).toBeInTheDocument(); // assert
	});

	it("Renders a password field.", () => {
		render(<Home />); // arrange
		const passwordInput = screen.getByLabelText("Password"); // act
		expect(passwordInput).toBeInTheDocument(); // assert
	});

	it("Renders a submit button.", () => {
		render(<Home />); // arrange
		const submitButton = screen.getByRole("button"); // act
		expect(submitButton).toBeInTheDocument(); // assert
	});
});
