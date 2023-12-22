const Boton = ({ children, className = '', ...args }) => {

    return (
        <button
            className={`rounded-lg py-2 px-4 bg-yellow-500 text-white text-center m-4
         hover:bg-green-700 hover:scale-95 transition-all ${className}`}
            {...args}
        >
            {children}
        </button>
    )
}

export default Boton