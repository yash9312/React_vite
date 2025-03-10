import React, { useState } from 'react'

function EventsInForm() {
    const[name,setName]=useState("")

    const handelSubmit=(e)=>{
        e.preventDefault()
        alert(`Submitted Name :${name}`)
    }

    const handelChange=(e)=>{
        setName(e.target.value)
    }

  return (
    <div>
        <form onSubmit={handelSubmit}>
            <label>Name :</label>
            <input type="text" onChange={handelChange} value={name}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default EventsInForm 