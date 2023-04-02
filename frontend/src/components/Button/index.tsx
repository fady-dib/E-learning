import "./Button.css"
interface buttonProps {
    name : string,
    handleClick : () => void,
    className?:string
}
const Button = ({name, handleClick, className }:buttonProps) => {
    return (
        <button className={`btn ${className}`} onClick={handleClick}>
            {name}
        </button>
    );
}
export default Button;