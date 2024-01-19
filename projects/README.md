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