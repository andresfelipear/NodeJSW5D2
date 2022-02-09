import { Component } from 'react'

class SignUpPage extends Component {
    state = {
        password: undefined,
        confirmPassword: undefined
    }

    onChange = (event) => {
        const { id, value } = event.target
        this.setState({ [id]: value })
    }

    render(){
        let disabled = true
        const {password, confirmPassword} = this.state
        if(password && confirmPassword){
            disabled = password !== confirmPassword
        }
        return(
            <>
                <h1>Sign Up</h1>
                <label htmlFor='username'>Username</label>
                <input id='username' type="text" />

                <label htmlFor='email'>Email</label>
                <input id='email' type="email" />

                <label htmlFor='password'>Password</label>
                <input id='password' type="password" onChange={this.onChange} />

                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input id='confirmPassword' type="password" onChange={this.onChange} />

                <button disabled={disabled}>Sign Up</button>
            </>
        )
    }
}

export default SignUpPage