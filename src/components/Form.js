import React from 'react'

function Form({text, handleSubmit, handleChange, btnStatus}) {

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <textarea rows="5" cols="33" placeholder="What would you like to say?" value={text.content} onChange={(e) => handleChange(e)}/>
            <br />
            {(btnStatus) ? <button type="submit">Submit</button> : <button disabled type="submit">Submit</button>}
        </form>
    </div>
  )
}

export default Form