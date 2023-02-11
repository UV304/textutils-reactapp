import React, { useState } from 'react'

export default function TextForms(props) {
    const [text, setText] = useState('')

    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Text Converted To Uppercase', 'success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Text Converted To Lowercase', 'success')
    }

    const handleRemoveText = () => {
        setText('')
        props.showAlert('Text Deleted', 'success')
    }

    const handleCopyText = () => {
        let myText = document.getElementById('myBox')
        myText.select();
        myText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(myText.value)
        props.showAlert('Text Copied', 'success')
    }

    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert('Removed Extra Space', 'success')
    }


    return (
        <>
            <div className={`container my-2 text-${props.mode === 'light' ? 'black' : 'white'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-2">
                    <textarea className="form-control my-2" id="myBox" style={{ background: props.mode === 'light' ? 'white' : '#495057', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} rows="8" value={text} ></textarea>
                    <button onClick={handleUpperCase} type="button" className="btn btn-primary mx-1">Covert to UpperCase</button>
                    <button onClick={handleLowerCase} type="button" className="btn btn-primary mx-1">Covert to LowerCase</button>
                    <button onClick={handleCopyText} type="button" className="btn btn-primary mx-1">Copy Text</button>
                    <button onClick={handleRemoveExtraSpaces} type="button" className="btn btn-primary mx-1">Remove Extra Space</button>
                    <button onClick={handleRemoveText} type="button" className="btn btn-primary mx-1">Remove Text</button>
                </div>
            </div>
            <div className={`container my-2 text-${props.mode === 'light' ? 'black' : 'white'}`}>
                <h2>Text Summary</h2>
                <p>{text.trim().split(' ').length} {text.trim().split(' ').length === 1 ? 'word' : 'words'} and {text.trim().length} {text.trim().length === 1 ? 'character' : 'charaters'}  </p>
                <p>{0.008 * text.trim().split(' ').length} minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>

        </>
    )
}
