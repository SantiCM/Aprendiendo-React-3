// Async await

//const getImagenPromesa = () => new Promise (resolve => resolve("https://hahahaha.com"))

const getImagen = async () => {
  // Con Try y con Catch

  try {

    const apiKey = "QjhilnOIXrYRxa1o5paIaM6UVJ5AjhXH";

    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

    );

    const { data } = await response.json();

    console.log(data);
    
    const { url } = data.images.original;
    
    const img = document.createElement("img");
    
    img.src = url;
    
    document.body.append(img);
  
  } catch (error) {
    //  manejo del error
    console.error(error)
  
  }
};

getImagen();

// Forma normal

/*const apiKey = "QjhilnOIXrYRxa1o5paIaM6UVJ5AjhXH"
    const response = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await response.json()
    console.log(data)
    const {url} = data.images.original
    const img = document.createElement("img")
    img.src = url
    document.body.append(img)
*/