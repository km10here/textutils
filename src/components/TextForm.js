import React, {useState} from 'react';
export default function TextForm(props) {
    const [text, setText] = useState();
    
    const handleUpclick=()=>{
        // console.log("Uppercase was clicked" +text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }

    const handleLowclick=()=>{
      // console.log("Lowercase was clicked" +text);
      let newtext = text.toLowerCase();
      setText(newtext)
    }

    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    return(
      <>
       <div>
           <div className="form-group">
      <h1>{props.heading}</h1>
    <label htmlFor="mybox">Text Area</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange} value={text}></textarea>
  </div>

  <button type="button" className="btn btn-primary" onClick={handleUpclick}>Convert to Upper Case</button>
  <button type="button" className="btn btn-success mx-3" onClick={handleLowclick}>Convert to Lower Case</button>

      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} Minuits to read </p>
        <h2>Preview</h2>
        <p>
          {text}
        </p>
      </div>
      </>
     
  )
}
