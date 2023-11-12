import React, { useState } from 'react';

function Checkboxes() {

    const [hobbies, setHobbies] = useState([])

    const handleChange = (event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        console.log(value, checked)

        if(checked) {
            setHobbies([
                ...hobbies, value
            ])

        } else {
            setHobbies(hobbies.filter((event) => (event!== value)))
        }

    }




    return (
        <div class="App">
            <h1>My Hobbies Includes:</h1><br></br>
    <h1> {hobbies} </h1>
    <input type ="checkbox" name="hobbies" value="Sports" onChange={handleChange}/>
    <label>Sports  </label>
    <br></br>

    <input type ="checkbox" name="hobbies" value="Travel" onChange={handleChange}/>
    <label>Travel </label>
    <br></br>

    <input type ="checkbox" name="hobbies" value="Music" onChange={handleChange}/>
    <label>Music  </label>
    <br></br>

    <input type ="checkbox" name="hobbies" value="Reading" onChange={handleChange}/>
    <label>Reading  </label>
    <br></br>
        </div>
    );
}

export default Checkboxes;