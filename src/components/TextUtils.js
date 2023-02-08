import React, { useState } from 'react'

export default function TextUtils(props) {
    const [text, setText] = useState('')

    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleRemoveText = () => {
        setText('')
    }



    return (
        <>
            <div className="container my-2">
                <h1>{props.heading}</h1>
                <div className="mb-2">
                    <textarea className="form-control my-2" id="exampleFormControlTextarea1" onChange={handleOnChange} rows="8" value={text} ></textarea>
                    <button onClick={handleUpperCase} type="button" className="btn btn-primary mx-1">Covert to UpperCase</button>
                    <button onClick={handleLowerCase} type="button" className="btn btn-primary mx-1">Covert to LowerCase</button>
                    <button onClick={handleRemoveText} type="button" className="btn btn-primary mx-1">Remove Text</button>
                </div>
            </div>
            <div className="container">
                <h2>Text Summary</h2>
                <p></p>
            </div>

        </>
    )
}
