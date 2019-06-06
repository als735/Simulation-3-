export const FIND_USER = 'FIND_USER'; // action types are typically stored in a constant outside the function and exported 

let initialState = {  // initial state 
    username: '',
    profilePicture : '',
    id: null
}; 

// export const thisUser = (id, username, profilePicture) => { // this is an action builder it returns an object with two props type and payload // it also needs to be exported 
//     return {
//         type: 'FIND_USER', // a string that describes what this action is supposed to do 
//         payload: { //obj with a prop for every parameter that is passed into the function 
//             id: id,
//             email: email, 
//             profilePicture: profilePicture 
//         }
//     }
// }

const reducer = (state = initialState, action) => {
    const {type, payload} = action; // destructing action for easy access to its props // payload is the data you are sending to the store to have changed. 
    switch(type) { //tests the type property of the action object
         case FIND_USER:
            return { // return an object with all the same props in initialState// The values of the object should be based on the values of the action payload, which is why they are payload.value 
                ...state,
                payload
            }
        default: 
            return state 
    }
} 


export default reducer;
