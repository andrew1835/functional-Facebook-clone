import icon from "../public/facebookIcon.png"
import Image from 'next/image'
import { signin } from "next-auth/client"


function Login() {
    return (
        <div className='grid place-items-center mt-28'>
            <Image
                src={icon}
                height={250}
                width={250}
                objectFit="contain"
            />
            <h1 onClick={signin} className='mt-20 p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>
        </div>
    )
}

export default Login
