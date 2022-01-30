import React, {useState} from 'react';
export default function TextForm(props) {
    const [text, setText] = useState();
    
    const handleUpclick=()=>{
        console.log("Uppercase was clicked" +text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    return(
      <div>
           <div className="form-group">
      <h1>{props.heading}</h1>
    <label htmlFor="mybox">Text Area</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange} value={text}></textarea>
  </div>

  <button type="button" className="btn btn-primary" onClick={handleUpclick}>Convert to Upper Case</button>
      </div>
      
  )
}
