import React from'react'
const Home =() => {
    // return <div>
    //     <h1> Hello that JSX</h1>
    // </div>
    return React.createElement('div', {id : "hello", className :"dummyClass"},<h1>Home Page</h1>)
}
export default Home;