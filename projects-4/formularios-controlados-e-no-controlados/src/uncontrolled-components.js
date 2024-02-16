import { useRef } from "react"


const App = () => {
  const input = useRef()
  const file = useRef()
  const submit = () => {
    console.log(input.current.value)
    console.log(file.current.files[0])
    const form = new FormData()
    form.append("archivo",file.current.value)
    //fetch("/lala", (method: "Post", body: form))
  }

  return (
    <div>
      <div>
      <span>lala</span>
      <input type="text" name="campo" ref={input}></input>
      <input type="file" ref={file}></input>
      </div>
      <input type="submit" value="Enviar" onClick={submit}></input>
    </div>  
  )
}

// export default App