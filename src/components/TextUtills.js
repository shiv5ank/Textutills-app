import React, { useState } from 'react'

export default function TextUtills  (props)  {
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
        <div className="text_container" style={{color: props.currMode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <textarea className="textbox_Container" style={{backgroundColor: props.currMode==='light'?'white':'grey', color: props.currMode==='dark'?'white':'black'}} onChange={handleOnChange} value={text} rows="10" id="myBox"></textarea>
            <div className="btn_container">
                <button disabled={text.length === 0} onClick={handleUpperCase} className={`btn_type${props.currTheme}`}>Convert to Uppercase</button>
                <button disabled={text.length === 0} onClick={handleLowerCase} className={`btn_type${props.currTheme}`}>Convert to Lowercase</button>
                <button disabled={text.length === 0} onClick={clear} className={`btn_type${props.currTheme}`}>Clear Text</button>
                <hr />
                <div className="preview_container">
                    <h1>Your text summary</h1>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                    <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
                </div>
            </div>
        </div>
    )
}
