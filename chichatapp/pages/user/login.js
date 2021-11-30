import React, { useState } from 'react';
import add from '../../public/user.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

let data = {
    email: '',
    password: '',
}


function Login() {
    const router = useRouter()

    const [logindata, setLoginData] = useState(data);
    const [otpenter, setOtpEnter] = useState(false);

    const [textValidation, setTextValidation] = useState();
    const [pwdValidation, setPwdValidation] = useState();


    const handler = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setLoginData(values => ({ ...values, [name]: value }))
        setTextValidation(true);
    }
    const submitData = async(e) => {
        e.preventDefault();
        await setOtpEnter(true);
        var digit1 = document.getElementById("digit1");
        digit1.focus();
        console.log("user data:", logindata)
    }
    const logIn = ()=>{
        router.push("../homePage")
    }
    const handlefocus =()=>{
        var digit1 = document.getElementById("digit1");
        var digit2 = document.getElementById("digit2");
        var digit3 = document.getElementById("digit3");
        var digit4 = document.getElementById("digit4");
        if(digit1.value != ""){
            digit2.focus();
        }
        if(digit2.value != ""){
            digit3.focus();
        }
        if(digit3.value != ""){
            digit4.focus();
        }
    }
    return (
        <div className="lg:grid md:grid-cols-3 grid-cols-1 h-screen w-screen">
            <div className="md:block  md:h-screen h-auto w-full space-y-7 p-5 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-center">
                <Image src={add} alt="addnrecord image" width={200} height={200} className="image-gray" />
                <div className="w-full flex flex-col space-y-7 items-center justify-center">
                    <p className="text-white md:block hidden w-10/12 place-items-center capitalize">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nisi quam sint corporis harum minus, molestiae optio veniam, nemo error vitae est voluptas expedita cum nesciunt!
                    </p>
                    <p className="text-white w-10/12 place-items-center capitalize">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nisi quam sint corporis harum minus, molestiae optio veniam, nemo error vitae est voluptas expedita cum nesciunt!
                    </p>
                </div>
            </div>
            <div className="bg-gradient-to-tl from-green-600 via-white to-red-400 md:h-screen h-auto w-full col-span-2 text-center p-5">
                <form className="shadow-md h-full m-5 flex flex-col items-center justify-center bg-transparent">                
                    <h2 className="text-2xl uppercase font-bold pb-5 ">Login</h2>

                    <div className="flex flex-col items-center justify-center w-full space-y-7">
                        <div className="md:w-5/12 w-8/12 md:space-x-2 space-x-0 md:space-y-0 space-y-7 flex items-center justify-center ">
                            <input type="email" value={logindata.email} onChange={handler} className="border-2 p-2 border-black rounded-md w-full bg-transparent h-10 focus:border-green-400 focus:outline-none" placeholder="Email*" name="email" required/>
                            {
                                textValidation && logindata.email == "" ? <p className="text-red-700">Required </p> : null
                            }
                        </div>
                        <div className="md:w-5/12 w-8/12 space-x-2">
                            <input type="password" value={logindata.password} onChange={handler} className="border-2 p-2 border-black w-full rounded-md bg-transparent h-10 focus:border-green-400 focus:outline-none" placeholder="Password" name="password" required/>
                        </div>
                        {
                            otpenter ? <div className="grid grid-cols-4 gap-4 md:w-5/12 w-8/12 ">
                                <input type="text" maxLength={1} id="digit1" onChange={handlefocus} className="border-2 p-2 border-black w-full rounded-md bg-transparent h-10 focus:border-green-400 focus:outline-none" placeholder="0" name="password" />
                                <input type="text" maxLength={1} id="digit2" onChange={handlefocus} className="border-2 p-2 border-black w-full rounded-md bg-transparent h-10 focus:border-green-400 focus:outline-none" placeholder="0" name="password" />
                                <input type="text" maxLength={1} id="digit3" onChange={handlefocus} className="border-2 p-2 border-black w-full rounded-md bg-transparent h-10 focus:border-green-400 focus:outline-none" placeholder="0" name="password" />
                                <input type="text" maxLength={1} id="digit4" onChange={handlefocus} className="border-2 p-2 border-black w-full rounded-md bg-transparent h-10 focus:border-green-400 focus:outline-none" placeholder="0" name="password" />

                            </div> : null
                        }
                        {
                            otpenter ? null : <div className="w-6/12 md:space-x-2 space-x-0 justify-items-center">
                                <button type="submit" onClick={submitData} className="border-black border-2 h-10 bg-transparent w-8/12 font-semibold rounded-lg hover:bg-green-400 hover:border-green-400 ">Get OTP</button>
                            </div>
                        }
                        {
                            otpenter ? <div className="w-6/12 md:space-x-2 space-x-0 justify-items-center">
                                <button type="submit" onClick={logIn} className="border-black border-2 h-10 bg-transparent w-8/12 font-semibold rounded-lg hover:bg-green-400 hover:border-green-400 ">Login</button>
                            </div> : null
                        }
                    </div>
                    <div className="mt-3">
                    <p>New User: <a href="./register" className='text-blue-600'><u>Register</u></a></p>
                </div>
                </form>
                
            </div>
        </div>
    );
}

export default Login;