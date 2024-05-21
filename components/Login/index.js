import React from 'react'
import LoginForm from './login-form'
import LoginImage from './login-image'

function LoginIndex() {
  return (
    <div className={`w-full h-full flex`}>
        <LoginImage />
        <LoginForm />
    </div>
  )
}

export default LoginIndex