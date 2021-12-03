import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstName = screen.getByLabelText(/first name:/i);
    const lastName = screen.getByLabelText(/last name:/i);
    const address = screen.getByLabelText(/address:/i);
    const city = screen.getByLabelText(/city:/i);
    const state = screen.getByLabelText(/state:/i);
    const zip = screen.getByLabelText(/zip:/i);
    const button = screen.getByRole('button');
    // address, city, state, zip

    userEvent.type(firstName, 'laila');
    userEvent.type(lastName, 'arkadan');
    userEvent.type(address, '13976 w 76th pl');
    userEvent.type(city, 'arvada');
    userEvent.type(state, 'Colorado');
    userEvent.type(zip, '80005');
    userEvent.click(button);

    const successMsg = screen.getByTestId('successMessage');

    expect(successMsg).toBeInTheDocument();
});