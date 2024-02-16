import logo from '../assets/logo.png';

export default function Header() {

  return (
  
    <header 
    
      className="flex flex-col items-center mt-8 mb-16 md:mb-4"
      
    >
    
      <img 
        
        src={logo} 
        
        alt="A canvas" 
        
        className='mb-8 w-50 h-40 object-contain' 
        
      />
    
      <h1 className='text-4xl font-semibold tracking-widest text-center text-green-800 font-title'
      
      >

        Environmental World
        
      </h1>
    
      <p 
      
        className='text-blue-900 text-center mt-5 font-extrabold'
      
      >
        
        A community of artists and art-lovers.
        
      </p>
    
    </header>
  
  );

}