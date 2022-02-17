import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {rest} from 'msw'
import {setupServer} from 'msw/node'

import SignUpPage from './SignUpPage'

const server = setupServer()

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

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

    it('sends username, email and password to backend', async() => {
        server.use(
            rest.post('http://localhost:8000/api/user/signup', (req,res,ctx) => {
                return res(ctx.status(200))
            })
        )

        render(<SignUpPage />)
        const usernameInput = screen.getByLabelText("Username")
        const emailInput = screen.getByLabelText("Email")
        const passwordInput = screen.getByLabelText("Password")
        const confirmPasswordInput = screen.getByLabelText("Confirm Password")

        userEvent.type(usernameInput, 'hoge')
        userEvent.type(emailInput, 'hoge@hoge.com')
        userEvent.type(passwordInput, '123')
        userEvent.type(confirmPasswordInput, '123')

        const button = screen.queryByRole("button", { name: "Sign Up"})
        
        userEvent.click(button)

        await new Promise((resolve) => setTimeout(resolve, 2000))

        // expect(screen.getByRole('dialog')).toHaveTextContent('Signed up successfully')
        // // expect(screen.queryByRole('p')).toHaveTextContent('Signed up successfully')
        // expect(screen.getByLabelText("Username")== "hoge")
        expect(screen.getByText('Signed up successfully'))

    })
})
