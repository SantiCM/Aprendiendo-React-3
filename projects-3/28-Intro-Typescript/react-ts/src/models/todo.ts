// el todo
class Todo { 

    // damos el id que es string
    id: string

    // el texto que es string
    text: string

    // damos el text del todo como string
    constructor( todoText: string ) {

        // el text es el todotext
        this.text = todoText

        // el id es una nueva date de string
        this.id = new Date().toISOString()
        
    }

}

export default Todo