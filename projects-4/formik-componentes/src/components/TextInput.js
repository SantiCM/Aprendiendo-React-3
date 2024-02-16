import { useField } from "formik"
//Reemplazar el onChange seria un ...props

const TextInput = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <div>
            <label className="label">{label}</label>
            <input className="input" {...field}></input> 
            {meta.touched && meta.error ? <div className="error">{meta.error}</div>: null}
        </div>
    )
}

export default TextInput