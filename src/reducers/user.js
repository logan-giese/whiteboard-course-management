const def =
  {email: "denden@banks.com",
  first_name: "Denny ",
  last_name: "Banks",
  role: "1" } 

const user = (state = def, action) => {
    switch (action.type) {
      case 'LOGIN':
        return state;
      case 'LOGOUT':
        return state = null; 
      default:
        return state =     
         {email: "denden@banks.com",
         first_name: "Denny ",
         last_name: "Banks",
         role: "1" }    
    }
  }
  export default user

