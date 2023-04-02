interface inputProps {
    type : string,
    onChange : ()=> void,
    required?: boolean,
    label: string,
    className?:string,
    htmlfor:string
}

const Input = ({type, onChange, required, label, className, htmlfor }:inputProps) => {
return(
    <div className={className}>
        <label htmlFor={htmlfor}>{label}</label>
        <input type={type} onChange={onChange} required={required}></input>
    </div>
)
}

export default Input