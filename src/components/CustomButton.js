function CustomButton({ children, onClick, className, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`btn-ap-custom ${className && className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CustomButton;
