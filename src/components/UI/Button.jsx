function Button({ styles }) {
  return (
    <button
      type='button'
      className={`rounded-[5px] px-6 h-12 flex items-center bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Get Started
    </button>
  )
}

export default Button
