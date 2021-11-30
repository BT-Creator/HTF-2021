const Button = ({ value, onClick, addClass = "", ...restProps }) => {
  return (
    <button className={"btn" + addClass} onClick={onClick} {...restProps}>
      {value}
    </button>
  );
};

export default Button;
