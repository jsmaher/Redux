const STARTING_STATE = {
    name:"Sayalani",
    city:"Mithi",
    counter : 0, 
}


const reducer = (state=STARTING_STATE,action)=>{
    console.log(action)
    switch (action.type){
        case "UPDATENAME" :
            // state.counter = action.counter
            return {
                counter:action.counter
            } 
            default:{
               return state
             }

    }
    
   
}

export default reducer