import React from 'react'

export default function Contact() {
  function handleClick(event){
    event.preventDefault()
    alert('submitted')
  }
  function onChange(event){
    console.log(event.target.value)
  }
 
    return (
    <>
    <form onSubmit={handleClick}>
    <label>email:</label>
      <input type="text" onChange={onChange}/>

      <br />

      <label>Message:</label>
      <textarea onChange={onChange}></textarea>

      <br /> 

    <button type="submit">
        Submit 
    </button>
    </form>

    </>
  )
}
