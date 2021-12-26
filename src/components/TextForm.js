import React ,{useState} from 'react'



export default function TextForm(props) {
   
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convered To UpperCase!","success");
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convered To LowerCase!","success");
    }
    const handleClearClick=()=>{
        let newText ="";
        setText(newText)
        props.showAlert("Cleared Text","success");
    }
    const handleExtraSpace=()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Done","success");
    } 
    const handleCopy=()=>{
        console.log("I am Copy");
        var text= document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");
    }
    const handleOnChange =(event)=>{
        console.log("on Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className='container my-3' style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
            <h1>Your Text Summary</h1>
            <p>{text.split(/[ ]+/).filter((a1)=>{return a1.length!=0}).length} words and {text.length} characters</p>
            <p>{0.008 *text.split(" ").length } Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the TextBox above to preview it here"}</p>
        </div>
        
        
        </>
    )
}
