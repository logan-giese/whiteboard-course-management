import React from 'react';
const Test = ({handleLogout})=> {
    return(
        <section className = "Test">
            <nav>
                <h2>Welcome to WhiteBoard</h2>
                <button onClick = {handleLogout}>Logout</button>
            </nav>
        </section>
    )
}
export default Test;