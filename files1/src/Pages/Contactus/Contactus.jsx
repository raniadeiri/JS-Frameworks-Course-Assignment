import React from 'react'
import './contact-us-style.css'

const Contactus = () => {
  return (
    <div className=''>
        <h2 className='text-3xl font-bold p-2 text-black'>Contact Us</h2>
        <form className=' flex flex-col justify-center items-center '>
            <div className=' w-[40%] flex flex-col p-5 bg-[#4285f4]'>
                <div className='flex flex-col gap-3 rounded-md'>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" minLength={3} className='px-2 py-1' placeholder='First Name' id='first-name' required />
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" minLength={4} className='px-2 py-1' placeholder='First Name' id='last-name' required />
                    <label htmlFor="e-mail">E-mail</label>
                    <input type="email" minLength={3} className='px-2 py-1' placeholder='example@example.com' id='e-mail' required />
                    <label htmlFor="subject">Subject</label>
                    <select name="subject" className='p-2' id="subject">
                        <option value="select-option"  defaultValue={true} hidden={true}>Select Option</option>
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                    </select>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" minLength={10} className='h-[50px]' id="" cols="30" rows="10" required></textarea>
                </div>

                <div className="w-full flex justify-end py-3">
                    <button type='submit' className='bg-white rounded-md p-2 text-black'> Send Message</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Contactus