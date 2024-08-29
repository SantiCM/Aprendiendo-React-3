// NOTA:
// Los fixtures se utilizan para hacer diferentes escenarios
// Y ahorrarnos tiempo jijijiji

export const events = [

    {
    
        id: "1",

        start: new Date("2023-11-7 13:00:00"),
    
        end: (new Date("2023-11-7 15:00:00")),

        title: "Cumpleaños de mi mama ",
  
        notes: "Hay que comprar regalos",

    },

    {
    
        id: "2",

        start: new Date("2023-12-7 13:00:00"),
    
        end: (new Date("2023-12-7 15:00:00")),

        title: "Cumpleaños de mi hermano",
  
        notes: "Hay que comprar regalos",

    }

]

export const initialState = {

    isLoandingEvents: true , 
        
    events: [],
       
    activeEvent: null

}

export const calendarWithEventsState = {

    isLoandingEvents: false , 
        
    events: [...events],
       
    activeEvent: null

}

export const calendarWithActiveEventState = {

    isLoandingEvents: false , 
        
    events: [...events],
       
    activeEvent: [...events[0]]

}