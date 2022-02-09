import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SignUpPage from './SignUpPage'

describe("Layout", () => {

    it('has a header', () => {
        render(<SignUpPage />)
        const header = screen.queryByRole("heading", { name: "Sign Up"})
        expect(header).toBeInTheDocument()
    })

    it('has a username input', () => {
        render(<SignUpPage />)
        const input = screen.getByLabelText("Username")
        expect(input).toBeInTheDocument()
    })

    it('has an email input', () => {
        render(<SignUpPage />)
        const input = screen.getByLabelText("Email")
        expect(input).toBeInTheDocument()
    })

    it('has a password input', () => {
        render(<SignUpPage />)
        const input = screen.getByLabelText("Password")
        expect(input).toBeInTheDocument()
    })

    it('has a password type for password input', () => {
        render(<SignUpPage />)
        const input = screen.getByLabelText("Password")
        expect(input.type).toBe("password")
    })

    it('has a confirm password input', () => {
        render(<SignUpPage />)
        const input = screen.getByLabelText("Confirm Password")
        expect(input).toBeInTheDocument()
    })

    it('has a password type for confirm password input', () => {
        render(<SignUpPage />)
        const input = screen.getByLabelText("Confirm Password")
        expect(input.type).toBe("password")
    })

    it('has a Sign Up button', () => {
        render(<SignUpPage />)
        const button = screen.queryByRole("button", { name: "Sign Up" })
        expect(button).toBeInTheDocument()
    })

    it('disables the button initially', () => {
        render(<SignUpPage />)
        const button = screen.queryByRole("button", { name: "Sign Up" })
        expect(button).toBeDisabled()
    })

})

describe("Interactions", () => {
    it("enables the sign up button when password field and confirm password field has same value", () => {
        render(<SignUpPage />)
        const passwordInput = screen.getByLabelText("Password")
        const confirmPasswordInput = screen.getByLabelText("Confirm Password")

        userEvent.type(passwordInput, '123')
        userEvent.type(confirmPasswordInput, '123')

        const button = screen.queryByRole("button", { name: "Sign Up"})
        expect(button).not.toBeDisabled()
        // expect(button).toBeEnabled()
    })
})
