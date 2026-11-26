import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { CiMail, CiLock, CiLogin } from 'react-icons/ci'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import Navbar from '../components/Navbar'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password })
    // TODO: ហៅ API login នៅទីនេះ
  }
  

  return (
    <div>

      {/* <Navbar/> */}

      <div className='w-full min-h-[calc(100vh-70px)] flex justify-center items-center bg-gray-50 px-4'>
      <div className='w-full max-w-[400px] bg-white rounded-2xl shadow-xl p-8'>

        {/* logo */}
        <Link to= "/">
          <div className='w-[80px] h-[80px] mx-auto mb-4'>
            <img className='w-full h-full object-contain' src={logo} alt='logo' />
          </div>
        </Link>
        

        <h1 className='text-2xl font-bold text-center'>Welcome Back</h1>
        <p className='text-gray-500 text-center mb-6'>Log in to your account</p>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

          {/* email */}
          <div>
            <label className='text-sm font-medium'>Email</label>
            <div className='flex items-center gap-2 border rounded-xl px-3 py-2 mt-1 focus-within:border-black'>
              <CiMail className='text-xl text-gray-500' />
              <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='you@example.com' required className='w-full outline-none'/>
            </div>
          </div>

          {/* password */}
          <div>
            <label className='text-sm font-medium'>Password</label>
            <div className='flex items-center gap-2 border rounded-xl px-3 py-2 mt-1 focus-within:border-black'>
              <CiLock className='text-xl text-gray-500' />
              <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='••••••••' required className='w-full outline-none'/>
              <button type='button' onClick={() => setShowPassword(!showPassword)}className='text-gray-500'> {showPassword ? <FiEyeOff /> : <FiEye />}</button>
            </div>
          </div>

          {/* submit */}
          <button
            type='submit'
            className='w-full h-[45px] rounded-2xl flex justify-center items-center gap-3 text-[18px] text-amber-50 bg-black hover:bg-gray-600 mt-2'
          >
            <CiLogin className='text-xl' />
            Log In
          </button>
        </form>

        <p className='text-sm text-center text-gray-500 mt-6'>
          Don't have an account?{' '}
          <Link to='/register' className='text-black font-semibold hover:underline'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
    </div>
    
  )
}

export default Login