const Boton = ({ children, className = '', ...args }) => {

    return (
        <button
            className={`rounded-lg py-2 px-4 bg-yellow-500 text-white text-center m-4
         hover:bg-green-700 hover:translate-x-1 hover:scale-98 transition-all ${className}`}
            {...args}
        >
            {children}
        </button>
    )
}

export default Boton