import React, { useState } from 'react'

const TextUtills = (props) => {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase())
        props.showAlert()
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase())
        props.showAlert()
    }

    const clear = () => {
        setText()
        props.showAlert()
    }

    const [text, setText] = useState('');
    return (
        <div className="textbox_container" style={{color: props.currMode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <textarea className="text_inputContainer" style={{backgroundColor: props.currMode==='light'?'white':'black', color: props.currMode==='dark'?'white':'black'}} onChange={handleOnChange} value={text} rows="10" id="myBox"></textarea>

            <div className="button_container">
                <button disabled={text.length === 0} onClick={handleUpperCase} className={`btn_type${props.currTheme}`}>Convert to Uppercase</button>
                <button disabled={text.length === 0} onClick={handleLowerCase} className={`btn_type${props.currTheme}`}>Convert to Lowercase</button>
                <button disabled={text.length === 0} onClick={clear} className={`btn_type${props.currTheme}`}>Clear Text</button>
                <hr />
                <div className="preview_container">
                    <h1>Your text summary</h1>
                    <p>1 words and {text.length} characters</p>
                    <p>0.008 Minutes read</p>
                    <h2>Preview</h2>
                    <p>{text.length === 0?"Enter something in the textbox above to preview it here":text}</p>
                </div>
            </div>
        </div>
    )
}

export default TextUtills;