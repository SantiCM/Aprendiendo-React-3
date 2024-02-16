import { useField } from "formik";

const Checkbox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: "checkbox"})
    //console.log(field)
    return (
        <div>
            <label>
                <input type="checkbox" {...field} {...props}></input>
                {children}
            </label>
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </div>    
    )
}
export default Checkbox