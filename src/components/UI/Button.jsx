function Button({ styles, children }) {
  return (
    <button
      type='button'
      className={`rounded-[5px] px-6 h-10 flex items-center bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      {children}
    </button>
  )
}

export default Button
