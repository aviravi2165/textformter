import React,{ useState } from 'react'

export const FormText = (props) => {
    const [text,setText] = useState("");
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () =>{
        console.log("click to text uppercase");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text convet to uppercase","success");
    }
    const handleLwClick = () =>{
        console.log("click to text lowercase");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text convet to lower","success");
    }
    const handleClsClick = () =>{
        console.log("click to clear");
        let newText = '';
        setText(newText);
        props.showAlert("Clear text successfully","success");
    }
    const handleCopy = () => {
        let text = document.getElementById('textBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard successfully","success");
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove extra spaces successfully","success");
    }
    return (
        <>
            <div className="container" style={{color:props.mode ==='light' ? 'black' : 'white'}}>
                <div className="mb-3">
                    <h2>Textbox Here To Write</h2>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLwClick}>Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClsClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Text Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
                       
            </div>
            <div className={`container text-${props.mode ==='light' ? 'dark' : 'light'}`}>
                <h3>Your Text Summary</h3>
                <p>Text 3 : In above text {text.trim().split(/\s+/).length} words and {text.length} characters</p>
                <p>Text 2 :  In above text {((text.trim().split(" ")).filter(function (element) {
                    return element != "";
                })).length} words and {text.length} characters </p>
                <p>Read this content approx {0.8 * text.split(" ").length} in minutes</p>
                <h4>Preview</h4>
                <p>{text}</p>   
            </div>
        </>  
    )
}
