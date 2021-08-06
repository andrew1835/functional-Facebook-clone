import Image from "next/image"


function Contact({ key, src, name }) {
    return (
        <div className='flex items-center space-x-3 mb-2 relative cursor-pointer hover:bg-gray-200  p-2 rounded-xl'>
            <Image
                className="rounded-full"
                objectFit='cover'
                src={src}
                width={50}
                height={50}
                layout='fixed'
            />
            <p>{name}</p>
            <div className='absolute bottom-2 left-7 bg-green-500 h-3 w-3 rounded-full border-solid border-2 border-white'></div>
        </div>
    )
}

export default Contact
