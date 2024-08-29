// NOTA:
// Los fixtures se utilizan para hacer diferentes escenarios
// Y ahorrarnos tiempo jijijiji

export const initialState = {

    status: "cheking", 

    user: {},

    errorMessage : undefined,

}


export const authenticedState = {

    status: "authenticed", 

    user: {
        
        uid: "abc",

        name: "Santiago"

    },

    errorMessage : undefined,

}

export const notAuthenticedState = {

    status: "not-authenticed", 

    user: {},

    errorMessage : undefined,

}
    

