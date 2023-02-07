import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
            let newText = text.toUpperCase();
            setText(newText);
            props.setAlertMessageAndType("Converted to Uppercase!","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.setAlertMessageAndType("Extra Spaces Removed!","success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.setAlertMessageAndType("Copied to Clipboard!","success");
    }

    const handleLoClick = () => {
            let newText = text.toLowerCase();
            setText(newText);
            props.setAlertMessageAndType("Converted to Lowercase!","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = () => {
        setText("");
        props.setAlertMessageAndType("Text Cleared!","success");
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container my-4' style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container my-4" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>It will take {0.008 * text.split(" ").length} Minutes to read.</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
            </div>
        </>
    )
}
