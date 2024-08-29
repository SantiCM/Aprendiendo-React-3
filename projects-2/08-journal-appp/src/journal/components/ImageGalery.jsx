import { ImageList, ImageListItem } from "@mui/material";

// Este es un componente para recibir las imagenes 

// Recojemos las imagenes de las props
export const ImageGalery = ({images}) => {

  return (
  
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {/*Recibimos las imagenes y le damos todooo*/}
      {images?.map((image) => (
    
        <ImageListItem key={image}>
      
          <img
      
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            
            alt='La imagen de la nota'
            
            loading="lazy"
          
          />
        
        </ImageListItem>
      
      ))}
    
    </ImageList>
  
  );

}

// Cuando el error es  Cannot read properties of undefined (reading 'map') es poner un "?"