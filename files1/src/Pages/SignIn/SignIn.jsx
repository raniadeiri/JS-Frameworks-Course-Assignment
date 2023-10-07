import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {AiFillEye} from 'react-icons/ai'
import './signin-style.css'


const SignIn = () => {
    const [show,setShow]=useState(false)
    const [showPass,setShowPass]=useState(false)
    const [mail,setMail]=useState("")
    const [password,setPassword]=useState("")
    const logindata={
        "identifier":mail,
        "password":password
    }
    let jwt;
    const handleSubmit=(e)=>{
            
        e.preventDefault()
        axios.post('http://localhost:1337/api/auth/local',logindata)
        .then(res=>{setShow(false); jwt=res.data.jwt; console.log(res); console.log(jwt);})
        .catch(err=>{console.log(err); setShow(true)})
    }
return (
    <div className=''>
        <h2 className='text-3xl font-bold p-2 text-black'>Sign In</h2>
        <form className=' flex flex-col gap-2 justify-center items-center '>
            {show && <p className='warning p-3 w-[40%]  bg-[#fff0db]'>Invalid Email or Password</p>}
            <div className=' w-[40%] flex flex-col p-5 bg-[#4285f4]'>
                <div className='flex flex-col gap-3 rounded-md'>
                    <label htmlFor="e-mail">E-mail/Username</label>
                    <input 
                    type="text" 
                    className='px-2 py-1 rounded-md' 
                    placeholder='email or username' 
                    id='e-mail' 
                    required
                    onChange={(e)=>setMail(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                    <div className='relative flex w-full'>
                        <input 
                        type={showPass?"text":"password"} 
                        className='px-2 py-1 rounded-md w-full' 
                        placeholder='Password' 
                        id='password' 
                        required 
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                        <AiFillEye className={`absolute top-1 left-[90%] text-2xl ${showPass?"text-gray-600":"text-gray-300"} cursor-pointer select-none`} onClick={()=>setShowPass(prev=>!prev)}/>
                    </div>

                </div>

            <div className="w-full flex justify-end py-3">
                
                    <Link 
                    to='/' 
                    className='bg-white rounded-md p-2 cursor-pointer text-black'
                    onClick={(e)=>handleSubmit(e)}>Sign In</Link>
                </div>
            </div>
        </form>
    </div>
  )
}
export default SignIn