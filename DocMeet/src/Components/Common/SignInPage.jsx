import axios from 'axios'
import React,{useState,useContext} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../Common/AuthContext';

function SignInPage() {
    let navigate = useNavigate()
    const { userLoggedIn, setUserLoggedIn, logout ,login } = useContext(AuthContext);
    const [signInData, setsignInData] = useState({})

    const handleOnChange = (e) => {
        setsignInData({
            ...signInData,
            [e.target.name]: e.target.value
        })
    }


    const handleSignInClick = () => {
        axios.post(`http://localhost:5001/docmeet/user/signin`, signInData)
        .then((res) => {
            console.log("Successfully Added")
            console.log(signInData)
            if (res.data.token) {
                login(res.data.token)
            }
        })
        .catch((err) => {
            console.log("Not Successfully Added", err)
        })
        //setsignInData({})
    }
    return (
        <div className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-2 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
                <div>
                    <p className='text-2xl font-semibold'>SignIn</p>
                    <p className='text-sm text-zinc-500'>Please sign in to book appointment</p>
                </div>

                <div className='w-full mt-3'>
                    <label className='block text-sm font-medium text-zinc-700'>Email</label>
                    <input
                        name='email'
                        className='border border-zinc-300 rounded w-full p-2 mt-1'
                        type='email'
                        onChange={((e) => { handleOnChange(e) })}
                        value={signInData.email ? signInData.email : ''}
                    />
                </div>
                <div className='w-full mt-3'>
                    <label className='block text-sm font-medium text-zinc-700'>Password</label>
                    <input
                        name='password'
                        className='border border-zinc-300 rounded w-full p-2 mt-1'
                        type='password'
                        onChange={((e) => { handleOnChange(e) })}
                        value={signInData.password ? signInData.password : ''}
                    >
                    </input>
                </div>
                <button onClick={(()=>{handleSignInClick()})}
                    className='bg-[#5D6BFF] text-white w-full py-2 !rounded-lg text-base mt-3'>SignIn</button>
                <p>Don't have an account ? <Link to="/user/signup"><span className='text-[#5D6BFF] underline cursor-pointer'>SignUp Here</span></Link></p>
            </div>
        </div>
    );
}

export default SignInPage