import React, { useState, createContext } from 'react'
import Form from './Form'

function List() {

    const [text, setText] = useState({
        id: 0,
        content: ''
    })
    const [list, setList] = useState([])
    const [btnStatus, setBtnStatus] = useState(false)

    const handleChange = (e) => {
        // setText(prevState => ({...prevState, content: e.target.value}))
        setText({...text, content: e.target.value})
        setBtnStatus(true)
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setList([...list, {id: text.id++, content: text.content}])
        // clear text so next text can be displayed as it is typed out
        setText({...text, content: ''})
        setBtnStatus(false)
    }

    const handleRemove = (item) => {
        setList(list.filter(listItem => listItem.id !== item.id))
    }

  return (
      <div>
            {list.map((item) => {
                return <p key={item.id}>{item.content} <button onClick={() => handleRemove(item)}>x</button></p>
            })}
            <p data-testid='text-content'>{text.content}</p>
            <Form 
                text={text} 
                inputProps={{ "data-testid": "content-input" }}
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                btnStatus={btnStatus}
            />
      </div>
  )
}

export default List