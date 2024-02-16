/*import styled from "styled-components";

export const StylesButton = styled.button`

  cursor: pointer;
  background: none;
  line-height: inherit;
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #fff ;
  background-color: #308446;
  border-radius: 6px;
  border: none;

  &:focus {
    outline: none;
  }

  & .button:hover {
    background-color: #95c799;
  }
  
  & .text-button {
    color: #333;
    border: none;
    font-size: 0.9rem;
  }
  
  & .text-button:hover {
    color: #164620;
  }
`

export default StylesButton*/

export const Button = ({children, ...props}) => {

  return (
    
    <button 

      className=" p-4 px-4 py-2 font-semibold rounded-2xl text-white-500 bg-green-500 hover:bg-green-200"
    
      {...props}
    
    >
      
      {children}
      
    </button>  
    
  )

}