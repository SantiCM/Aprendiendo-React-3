import { memo } from "react"
import { isEqual } from "lodash" 

/*const Li = memo(({ fullname }) => {
  console.log(`renderizando ${fullname}`)
  return (
    <li>
      {fullname}
    </li>
  )
})


const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <Li
          key={x.name + x.lastname}
          fullname={`${x.name} ${x.lastname}`}
        />
      )}
    </ul>
  )
}*/

const Li = memo(({ children }) => {
  console.log(`renderizando ${children}`)
  return (
    <li>
      {children}
    </li>
  )
}, (prev, post) => {
  console.log(prev, post)
}, isEqual)


const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <Li key={x.name + x.lastname}>
          {x.name} {x.lastname}
        </Li>
      )}
    </ul>
  )
}

export default memo(MyList)

// memo
// memoization
// const memo = (fn) => {
// const memory {}
// return (a) =Z {
// if (memory[a]) {
//  console.log("sacando de la memoria") 
//  }
//  console.log("computando")
//  memory[a] = fn(a)
//  return a
// }
//}

