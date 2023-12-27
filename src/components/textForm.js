import React , {useState} from 'react';

 
export default function TextForm(props) {
    

    const convertToUpperCase = function(){
        
        if(text == ''){
            props.showAlert('Enter some text' , 'warning')
            return;
        }
        let newtext = text.toUpperCase();
        setText(newtext) 
        props.showAlert('converted to upperCase','success')
    }
    const handleOnChange = function(event){
            setText(event.target.value);
    }
    const convertToLowerCase = function(){
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert('converted to upperCase','success')
    }

    const handleClearText = ()=>{
        setText("");
    }
    
    const removeExtraSpaces = ()=>{

        let newtext = text.split(/[ ] +/);
        setText(newtext.join(' '));
    }

    const [text, setText] = useState('Enter text here');

    return (
        <>
        <div className='container' style={{color:props.mode =='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="textArea" className="form-label">Textarea</label>
                <textarea className="form-control" style={ {backgroundColor: props.mode == 'dark'?'rgb(18 69 110)':'white' , color:props.mode =='light'?'black':'white'}} onChange={handleOnChange} value={text}  id="textArea" rows="8"></textarea>
            </div>
            <button  disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={convertToUpperCase}>Conver to Uppercase</button>
            <button disabled={text.length === 0}  className="btn btn-primary mx-1 my-2" onClick={convertToLowerCase}>Conver to Lowercase</button>
            <button disabled={text.length === 0}  className="btn btn-primary mx-1 my-2" onClick={handleClearText}>Clear Text</button>
            <button disabled={text.length === 0}  className="btn btn-primary mx-1 my-2" onClick={removeExtraSpaces}>Remove Extraspaces</button>



            

        </div>
        <div className="container my-3" style={{color:props.mode=='dark'?'white':'black'}}>
            <h1>Your text summery</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} min reading time</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
  