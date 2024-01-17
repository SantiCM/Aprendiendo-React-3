// recojemos los turnos, que es X y 0
export const TURNS = {

  X: "❌",

  O: "⚪️",

};

// wins

export const WIINER_COMBOS = [

  // horizontales

  [0, 1, 2],

  [3, 4, 5],

  [6, 7, 8],

  // verticales
  
  [0, 3, 6],

  [1, 4, 7],

  [2, 5, 8],

  // diagonales
  
  [0, 4, 8],

  [2, 4, 6],

];