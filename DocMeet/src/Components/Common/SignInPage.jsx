import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

function SignInPage() {
    let navigate = useNavigate()
    return (
        <form className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-2 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
                <div>
                    <p className='text-2xl font-semibold'>SignIn</p>
                    <p className='text-sm text-zinc-500'>Please sign in to book appointment</p>
                </div>

                <div className='w-full mt-3'>
                    <label className='block text-sm font-medium text-zinc-700'>Email</label>
                    <input
                        className='border border-zinc-300 rounded w-full p-2 mt-1'
                        type='email'
                    />
                </div>
                <div className='w-full mt-3'>
                    <label className='block text-sm font-medium text-zinc-700'>Password</label>
                    <input
                        className='border border-zinc-300 rounded w-full p-2 mt-1'
                        type='password'
                    >
                    </input>
                </div>
                <button className='bg-[#5D6BFF] text-white w-full py-2 !rounded-lg text-base mt-3'>SignIn</button>
                <p>Don't have an account ? <Link to="/user/signup"><span className='text-[#5D6BFF] underline cursor-pointer'>SignUp Here</span></Link></p>
            </div>
        </form>
    );
}

export default SignInPage