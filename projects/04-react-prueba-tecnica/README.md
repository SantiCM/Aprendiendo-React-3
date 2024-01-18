#Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs:
Facts Random: https://catfact.ninja/fact

Imagen random: https://cataas.com/cat/says/hello


Recupera un hecho aleatorio de gatos de la primera API

Recuperar la primera palabra del hecho

Muestra una imagen de un gato con la primera palabra.


#Forma de inicializar react, sin poder elegir a la hora de crearlo en vite, el mismo lenguaje, sino vanilla

1- Se da el comando npm create vite@latest

2- Das el nombre de tu proyecto y escojes la opcion de Vanilla

3- Y se escoje la variant de javascript

4- Damos el comando de npm i @vitejs/plugin-react -E, donde aplicaremos una configuracion

5- Despues instalamos la dependecia de react y reaxt-dom

6- Se crea el archivo vite.config.js

7- Importas el defineConfig (definir la configuracion),
que viene de "vite"

8- Importas react de @vitejs/plugin-react

9-Creas una funcion que se exporte, que sea la configuracion, das los plugins, y das [react()]

👇🏻👇🏻👇🏻👇🏻👇🏻

export default defineConfig({
    plugins: [react()]
})

10- Y eso seria todo, con el archivo de configuracion de vite

¿Como se utiliza despues?

1- En el HTML, se tiene un script donde digo que el archivo main.js, es el que se va a ejecutar

2- El archivo de main.js es el punto de entrada

Ahora que ya se sabe eso, 
¿Como inicializo una app de REACT?

1- Tendria que importar createRoot de react-dom/client

👇🏻👇🏻👇🏻👇🏻👇🏻
import {createRoot} from "react-dom/client"

2- Dar ese mismo createRoot, y darle el document.getElementById("damos el id del script")

IMPORTANTE, TIENE QUE SER EL MISMO ID

👇🏻👇🏻👇🏻👇🏻👇🏻

createRoot(document.getElementById("app")) 👈🏻

y en el html 

👇🏻👇🏻👇🏻👇🏻👇🏻

<div id="app"></div>👈🏻

3- Ya que esta todo correcto, lo comun seria guardarlo en una constante llamada root

👇🏻👇🏻👇🏻👇🏻👇🏻
const root = createRoot(document.getElementById("app"))

4- Y ahora ese root darle el .render(y dar el componente de la App)

👇🏻👇🏻👇🏻👇🏻👇🏻

root.render(<App></App>)

OJOOOO, es muy importante que antes de seguir, tengas en cuenta dos cosas 

1- Este script tiene que tener un cambio de extension 

👇🏻👇🏻👇🏻👇🏻👇🏻
<script type="module" src="/main.js"></script>

Ahora que ya esta react, damos la extension JSX, para que funcione
👇🏻👇🏻👇🏻👇🏻👇🏻
<script type="module" src="/main.jsx"></script>

ADEMAS que el archivo main.js por OBVIO cambia a JSX

Y para que se muestre algo en la pantalla

Das un 
👇🏻👇🏻👇🏻👇🏻👇🏻
export function App() {} 

Y Listo Ya Puedes Utilizar React Y Ya Lo Configuraste desde cerooo ✅✅✅✅✅