import React , {useState}from 'react'

export default function Textforms(props) {
    const handleUpClick =()=>{
        const newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to uppercase","success");
      }
      const speak=()=>{
        let speech= new SpeechSynthesisUtterance();
        speech.text= text;
        window.speechSynthesis.speak(speech);
        props.showAlert("converted to uppercase","success");
      }
      const handleOnChange = (event)=>{
        console.log("OnChange");
        setText(event.target.value);
        console.log(event.target.value);

    }
    const[text,setText] = useState('Enter text here');
    // setText("new text");
  return (
<>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mx-3">
   <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-3"onClick={speak}>Text to Speech</button>
    </div>
    <div className="container my-3">
    <h1>Your Text Summary</h1>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
