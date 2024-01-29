#useState
Declara una variable de estado, el cual dependiendo del estado de la situacion, actualizara un valor o no

#useEffect
Permite ejecutar codigo arbritrario (el codigo que yo quiera mandar) cuando el componente se monta en el dom y cada vez que Cambian las dependencias

#useRef
Ref, permite crear referencia mutable que persiste en el ciclo de vida del componente,
Cada vez que cambia, no da renderizacion

#useMemo
Memorizar un valor para no tener que volverlo a calcular dependiendo de una lista de dependencias
En ves de hacer un calculo inecesario, damos el hook para evitar renderizados de mas
Y se volvera a ejecutar dependiendo de la dependecia que nosotros pongamos

#useCallback
Este hook es igual que el memo, solo que esta pensando para las funciones
Osea si es valor useMemo y si es funcion useCallback

#useId

Genera un identificador unico que siempre va a ser el mismo

#useContext

Se crea un contexto, donde puede ser utilizado ya no en todo el arbol de componentes,
Si no en lugared de la app especificos, se crea, lo provees y lo consumes

#useReducer
Permite manejar el estado de manera escalable, se basa en que recibe
En una funcion el estado actual y la accion, y a partir de ello
Lo que hace es devolver un nuevo estado