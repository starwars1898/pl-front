import React, { useEffect, useState } from 'react'
import Label from '../Label'
import Input from '../Input'
import Icon from '../Icon'
import { FaUser } from "react-icons/fa"
import { BsFillShieldLockFill } from "react-icons/bs"
import Button from '../Button'
import { LoginStore } from '@/container/login/store'
import { UserStore } from '@/utils/store'
import { useQuery } from 'react-query'
import CircularLoading from '../Loader/CircularLoading'
import { doPostLogin } from '@/container/login/actions'

const classes = {
  loginBody: `
    w-full md:w-1/2
    h-full
    flex
    flex-col
    justify-center
    bg-gray-200
  `,
  loginLabel: `
    text-center
    ml-[3rem]
    w-[70%] lg:w-[50%]
    text-xl
    uppercase
    font-bold
    text-red-500
    mb-2
  `,
  loginInputText: `
    w-[65%] lg:w-[45%] self-center text-md
  `,
  loginButton: `
    w-[64.5%] lg:w-[44.5%] h-[2.8rem]
    ml-[3rem] mt-[0.5rem] self-center
  `,
  inputIcons: `h-[2.8rem] flex mx-2 text-gray-500 text-2xl items-center`
}

function LoginForm() {

  const [DisabledButton, setDisabledButton] = useState(true)
  
  const { setUserModel } = UserStore()
  const {
    LoginFormModel,
    setUsername,
    setPassword
  } = LoginStore()

  useEffect(() => {
    if(LoginFormModel.username !== '' && LoginFormModel.password !== ''){
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  },[LoginFormModel])

  const { isLoading, refetch } = useQuery(
    'userLogin', 
    () => doPostLogin(LoginFormModel, setUserModel),
    { enabled: false, retry: 1 }
  )
    
  //EVENTS
  const handleSignInButton = () => {
    refetch()
  }

  return (
    <div className={classes.loginBody}>

      <Label text='login' className={classes.loginLabel}/>

      <Input 
        placeholder='Username' 
        icon={<Icon icon={<FaUser />} className={classes.inputIcons}/>}
        className={classes.loginInputText}
        value={LoginFormModel.username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Input 
        type='password' 
        placeholder='Password' 
        icon={<Icon icon={<BsFillShieldLockFill />} className={classes.inputIcons}/>}
        className={classes.loginInputText}
        value={LoginFormModel.password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {
        isLoading
        ? <CircularLoading className='ml-[3rem]'/>
        : <Button 
            type='primary' 
            text='Sign in' 
            disabled={DisabledButton}
            buttonClass={classes.loginButton} 
            onClick={() => handleSignInButton()} 
          />
      }

    </div>
  )
}

export default LoginForm