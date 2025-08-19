const MainButton = ({ 
  children, 
  onClick, 
  disabled = false,
  fullWidth = true,
  type = "button"
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${fullWidth ? 'w-full' : 'w-auto'}
        py-3 px-6
        h-10
        bg-gradient-to-r from-[#9f3247] to-[#7b2334]
        text-white font-medium
        rounded-lg
        shadow-md
        hover:from-[#7b2334] hover:to-[#5a1a26]
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-[#9f3247] focus:ring-opacity-50
        active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer
        justify-center items-center
        flex
      `}
    >
      {children}
    </button>
  );
};

export default MainButton;