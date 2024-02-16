const  arr = [5, 1, 2, 3, 4]

const r = arr.filter((el ,i) => {
    console.log(i);
    return el > 2
})
//console.log(r);

//const mapped = arr.map((el) => `<h1>${el}</h1>`)
//console.log(mapped);


const user = [
    {id: 1, name: "Santi"},
    {id: 2, name: "Santia"},
    {id: 3, name: "Santiag"},
    {id: 4, name: "Santiago"},
]


/*const mapped = user.map((user) => `<h1>${user.name}</h1>`)
console.log(mapped);*/


//-------------

//const r1 = arr.reduce((acc, el) =>  acc + el, 0) 

//const getMax = (a, b, c) => Math.max(a,b,c)
//const r1 = arr.reduce(getMax) 

//const r1 = user.reduce((acc, el) => 
//`${acc === "" ? "" : `${acc},`} ${el.name}`, "")


const r1 = user.reduce((acc, el) => {
    if (el.id < 2) {
        return acc
    } 
    return acc.concat(el)
}, [])
console.log(r1);