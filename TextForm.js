import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClClick = ()=>{
       
        let newText = " ";
        setText(newText);
        props.showAlert("Clear text", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
   
    const [text, setText] = useState('')

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
   
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1"  onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClClick}>Clear text</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text: "Enter in the textbox"}</p>
        </div>
        </>
    )
}
