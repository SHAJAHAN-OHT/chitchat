import React, { useState } from 'react';
import add from '../../public/add.jpg'
import Image from 'next/image'

let data = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    gender: '',
    hno: '',
    village: '',
    mandal: '',
    district: '',
    state: '',
    pincode: '',
}

function Register() {
    const [userdata, setUserData] = useState(data);

    const handler = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setUserData(values => ({ ...values, [name]: value }))
    }
    const submitData = (e) => {
        e.preventDefault();
        console.log("user data:", userdata)
    }
    return (
        <div className="lg:grid md:grid-cols-3 grid-cols-1 h-screen w-screen">
            <div className="md:block hidden h-screen w-full space-y-7 p-5 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-center">
                <Image src={add} alt="addnrecord image" />
                <div className="w-full flex flex-col space-y-7 items-center justify-center">
                    <p className="text-white w-10/12 place-items-center capitalize">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nisi quam sint corporis harum minus, molestiae optio veniam, nemo error vitae est voluptas expedita cum nesciunt!
                    </p>
                    <p className="text-white w-10/12 place-items-center capitalize">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nisi quam sint corporis harum minus, molestiae optio veniam, nemo error vitae est voluptas expedita cum nesciunt!
                    </p>
                </div>
            </div>
            <div className="bg-gradient-to-tl from-green-600 via-white to-red-400 bg-gray-200 md:h-screen h-auto w-full col-span-2 text-center p-5">
                <form className="shadow-md h-full m-5 flex flex-col items-center justify-center bg-transparent">
                <h2 className="text-2xl uppercase font-bold pb-5 ">Register</h2>
                    <div className="flex flex-col items-center justify-center w-full space-y-7">
                        <div className="md:grid md:grid-cols-2 grid-cols-1 md:w-6/12 w-8/12 md:space-x-2 space-x-0 md:space-y-0 space-y-7 ">
                            <input type="text" value={userdata.firstName} onChange={handler} className="border-2 p-2 w-full  border-black rounded-md bg-transparent h-10 focus:border-green-400 focus:outline-none" placeholder="First Name" name="firstName" />
                            <input type="text" value={userdata.lastName} onChange={handler} className="border-2 p-2 w-full border-black rounded-md bg-transparent h-10 focus:border-green-400 focus:outline-none" placeholder="Last Name" name="lastName" />
                        </div>
                        <div className="md:w-6/12 w-8/12 md:space-x-2 space-x-0 md:space-y-0 space-y-7  ">
                            <input type="email" value={userdata.email} onChange={handler} className="border-2 p-2 border-black rounded-md w-full bg-transparent h-10 focus:border-green-400 focus:outline-none" placeholder="Email" name="email" />
                        </div>
                        <div className="md:w-6/12 w-8/12 space-x-2">
                            <input type="text" value={userdata.phoneNumber} onChange={handler} className="border-2 p-2 border-black w-full rounded-md bg-transparent h-10 focus:border-green-400 focus:outline-none" placeholder="Phone Number" name="phoneNumber" />
                        </div>
                        <div className="md:w-6/12 w-8/12 space-x-2">
                            <input type="password" value={userdata.password} onChange={handler} className="border-2 p-2 border-black w-full rounded-md bg-transparent h-10 focus:border-green-400 focus:outline-none" placeholder="Password" name="password" />
                        </div>
                        <div className=" md:grid md:grid-cols-2 grid-cols-1 w-6/12 md:space-x-2 space-x-0 md:space-y-0 space-y-2">
                            <h4 className="text-left text-lg font-semibold pl-2">Gender</h4>
                            <div className="text-left flex flex-col pl-2">
                                <div className="space-x-1 flex items-center mb-3 ">
                                    <input type="radio" value="male" onChange={handler} className="border-2 bg-transparent w-4 h-4 border-black" name="gender" /><label className="font-semibold" htmlFor="male">Male</label>
                                </div>
                                <div className="space-x-1 flex items-center">
                                    <input type="radio" value="female" onChange={handler} className="border-2 border-black bg-transparent w-4 h-4" name="gender" /><label className="font-semibold" htmlFor="female">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 grid-cols-1 md:w-6/12 w-8/12 md:space-x-2 space-x-0 md:space-y-0 space-y-7">
                            <input type="text" value={userdata.hno} onChange={handler} className="border-2 p-2 border-black rounded-md bg-transparent h-10 focus:border-green-400 focus:outline-none" placeholder="House Number" name="hno" />
                            <input type="text" value={userdata.village} onChange={handler} className="border-2 p-2 border-black rounded-md bg-transparent h-10 focus:border-green-400 focus:outline-none" placeholder="Village" name="village" />
                        </div>
                        <div className="md:grid md:grid-cols-2 grid-cols-1 md:w-6/12 w-8/12 md:space-x-2 space-x-0 md:space-y-0 space-y-7">
                            <input type="text" value={userdata.mandal} onChange={handler} className="border-2 p-2 border-black rounded-md bg-transparent h-10 focus:border-green-400 focus:outline-none" placeholder="Mandal" name="mandal" />
                            <input type="text" value={userdata.district} onChange={handler} className="border-2 p-2 border-black rounded-md bg-transparent h-10 focus:border-green-400 focus:outline-none" placeholder="District" name="district" />
                        </div>
                        <div className="md:grid md:grid-cols-2 grid-cols-1 md:w-6/12 w-8/12 md:space-x-2 space-x-0 md:space-y-0 space-y-7">
                            <input type="text" value={userdata.state} onChange={handler} className="border-2 p-2 border-black rounded-md bg-transparent h-10 focus:border-green-400 focus:outline-none" placeholder="State" name="state" />
                            <input type="text" value={userdata.pincode} onChange={handler} className="border-2 p-2 border-black rounded-md bg-transparent h-10 focus:border-green-400 focus:outline-none" placeholder="PinCode" name="pincode" />
                        </div>
                        <div className="w-6/12 md:space-x-2 space-x-0 justify-items-center">
                            <button type="submit" onClick={submitData} className="border-black border-2 h-10 bg-transparent w-8/12 font-semibold rounded-lg hover:bg-green-400 hover:border-green-400 ">Submit</button>
                        </div>
                    </div>
                    <div className="mt-3">
                    <p>If already have account: <a href="./login" className='text-blue-600'><u>Login</u></a></p>
                </div>
                </form>
                
            </div>
        </div>
    );
}

export default Register;