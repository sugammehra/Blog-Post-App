import React from "react";

// function Greet(){
//     return <h1> </h1>
// }

// CONST AND ARROW
// export const Greet=() =>
// <div>
//     <h1>Hello Sugam</h1>
// </div> 

//USING PROPS
// export const Greet=(props) =>
// <div>
//     <h1>Hello kaise ho {props.name}</h1>
// </div> 


export const Greet=(props) =>{
    return(
        <div>
            <h1>Hello kaise ho {props.name} {props.lastName}</h1>
            {props.children}
        </div>
    )
}


// export default Greet;