import React, { useState } from 'react'

function SimpleForm() {
    // const [name,setName] = useState("");
    // const [email,setEmail] = useState("");
    // const [age,setAge] = useState(0);

    const [formData,setFormData] = useState({"name":"", "email":"", "age":0});

    // const handleName = (e) => {
    //     let name = e.target.value;
    //     name = name.toUpperCase();
    //     setName(name)
    // }

    const handleChange = (e) => {
        let {id:key,value} = e.target;
        console.log(key);
        value = value.toUpperCase();
        setFormData((prevData) => ({...prevData, [key]:value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault(); //prevent the default behaviour
        // console.log("Name ", name);
        // console.log("Email ", email);
        console.log(formData);
        
        //sanitise/validate the data 
        //call an api 
        // save to db

        // setName("")
        // setEmail("")

    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            {/* <input type="text" id="name" value={name} onChange={handleName}/> */}
            <input type="text" id="name" value={formData.name} onChange={handleChange}/>
        </div>

        <div>
            <label htmlFor="email">Email:</label>
            {/* <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> */}
            <input type="email" id="email" value={formData.email} onChange={handleChange}/>
        </div>

        <div>
            <label htmlFor="age">Age:</label>
            {/* <input type="number" id="age" value={age} onChange={(e)=>setAge(e.target.value)}/> */}
            <input type="number" id="age" value={formData.age} onChange={handleChange}/>
        </div>

        <button type='submit'>Submit</button>
    </form>
  )
}

export default SimpleForm


// hw -> controlled / uncontrolled -> def -> 
// useRef() -> uncontrolled component 