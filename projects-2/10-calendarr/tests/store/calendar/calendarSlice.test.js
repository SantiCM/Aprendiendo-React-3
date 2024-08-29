import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice"
import { calendarWithActiveEventState, calendarWithEventsState, events, initialState } from "../../fixtures/calendarState"

describe('Pruebas en calendarSlice', () => { 

    test('debe de regresar el estado inicial', () => { 
        
        // mandamos un estado del calendarSlice con el estado inicial
        const state = calendarSlice.getInitialState()

        // esperamos que ese estado sea igaul al estaddo inicial por defecto
        expect(state).toEqual(initialState)


    })

    // PRUEBAS DE EL COMPONENTE DE TERCEROS
    test('onSetActiveEvent debe de activar el evento', () => { 
        
        const state = calendarSlice.reducer(calendarWithEventsState, onSetActiveEvent(events[0]))

        expect(state.activeEvent).toEqual(events[0])

    
    })

    test('onAddNewEvent debe de agregar el evento', () => { 
    
        const newEvent = {
        
            id: "3",

            start: new Date("2023-12-10 13:00:00"),
    
            end: (new Date("2023-12-10 15:00:00")),
    
            title: "Cumpleaños de mi hermano y tio",
      
            notes: "Hay que comprar regalos",

        }

        const state = calendarSlice.reducer(calendarWithEventsState, onAddNewEvent(newEvent))

        expect(state.events).toEqual([...events, newEvent])

    })


    test('onUpdateEvent debe de actualzar el evento', () => { 
    
        const updateEvent = {
        
            id: "1",

            start: new Date("2023-12-10 13:00:00"),
    
            end: (new Date("2023-12-10 15:00:00")),
    
            title: "Cumpleaños de mi hermano y tio actualizado",
      
            notes: "Hay que comprar regalos",

        }

        const state = calendarSlice.reducer(calendarWithEventsState, onUpdateEvent(updateEvent))

        expect(state.events).toContain(updateEvent)

    })

    test('onDeleteEvent debe de borrar eventos', () => { 
    
        const state = calendarSlice.reducer(calendarWithActiveEventState, onDeleteEvent())

        expect(state.activeEvent).toBe(null)

        expect(state.events).not.toContain(events[0])
    
    })

    test('onLoadEvents debe de establecer los eventos', () => { 

        const state = calendarSlice.reducer(initialState, onLoadEvents(events))

        expect(state.isLoandingEvents).toBeFalsy()

        expect(state.events).toEqual(events)

        const newState = calendarSlice.reducer(initialState, onLoadEvents(events))

        expect(newState.events.length).toBe(2)
    
        
    
    })

    test('onLogoutCalendar debe de limpiar el estado', () => { 
    
        const state = calendarSlice.reducer(calendarWithActiveEventState, onLogoutCalendar())

        expect(state).toEqual(initialState)

    
    })


})