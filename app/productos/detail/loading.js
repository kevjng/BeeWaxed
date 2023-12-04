import Image from "next/image"

const Loading = () => {

    return (
        <div className="w-full h-full min-h-screen flex justify-center items-center">
            <Image
                src={'/images/logo.png'}
                alt="BeeWaxed logo"
                width={200}
                height={200}
                className="animate-pulse"
            />
        </div>
    )
}

export default Loading