interface inputProps {
    type : string,
    onChange : (e:React.FormEvent<HTMLInputElement>)=> void,
    required?: boolean,
    label: string,
    className?:string,
    htmlfor:string,
    error? : string

}

const Input = ({type, onChange, required, label, className, htmlfor, error }:inputProps) => {
return(
    <div className={`input ${className}`}>
        <label htmlFor={htmlfor}>{label}</label>
        <input type={type} onChange={onChange} required={required}></input>
        {error && <div className="error">{error}</div>}
    </div>
)
}

export default Input