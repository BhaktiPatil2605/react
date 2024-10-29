import React, {useState} from 'react'


export default function Form(props) {
    // Declare a new state variable, which we'll call "count"
    const [text, setText] = useState('');
    // text ="new text"; //wrong way to chnage the text
    // setText('new text'); //correct way to change the text

    // onlick function to convert to uppercase
    const handleUpclick =()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    // onlick function to convert to lowercase
    const handleLoclick =()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");

    }

    // onlick function to convert to reverse
    const handlereverseclick =()=>{
        let newText=text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Text Reversed","success");

    }

    // onlick function to remove extra space
    const removeExtraSpace =()=>{
        let newText=text.replace(/\s+/g, ' ')
        setText(newText);
        props.showAlert("Extra spaces removed","success");

    }

     // onlick function to clear the text 
     const clearText =()=>{
        let newText=''
        setText(newText);
        props.showAlert("Text Cleared","success");

    }

     // onlick function to clear the text 
     const handleCopy =()=>{
        // var newText=document.getElementById("text1");
        // newText.select();
        navigator.clipboard.writeText(text);
        // document.getSelection.removeAllRanges();
        props.showAlert("Copied to Clipboard !","success");

        }


    // no.of sentence
    var sentences=text.split(/[.?!]/);
    // Filter out any empty strings
    sentences = sentences.filter(function(sentence) {
        return sentence.trim() !== '';
    });

    // onchange function
    const handleOnchange =(event)=>{
        // console.log('onchange of text');
        setText(event.target.value) //by doing this we are telling that whatever we write just consider that as our text value so while change the text in text area it will get added in text variable and the new value of text variable will get set
    }
  return (
    <div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" placeholder="Enter Text here" value={text} onChange={handleOnchange}  style={{backgroundColor:props.mode==='dark'?'#07146c':'white',color: props.mode==='dark'?'white':'black'}} id="text1" rows="6"></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'primary':'dark'} mx-1 my-1`} onClick={handleUpclick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'primary':'dark'} mx-1 my-1`} onClick={handleLoclick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'primary':'dark'} mx-1 my-1`} onClick={handlereverseclick}>Reverse Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'primary':'dark'} mx-1 my-1`} onClick={removeExtraSpace}>Remove Extra Space</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'primary':'dark'} mx-1 my-1`} onClick={clearText}>Clear text</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'primary':'dark'} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p><b>{text.trim()===""?0:text.trim().split(/\s+/).length} Words and {text.length} Characters</b></p>
            {/* code with harry method to show the count as zero if nothing written */}
            {/* <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</b></p> */}
            
            <p>Time taken to read the Summary is:- {text.trim()===""?0*0.008:0.008 * text.trim().split(" ").length} Minutes</p>
            <p>No. of Sentences:- {sentences.length}</p>
            <h3>Preview:-</h3>
            <p>{text.length>0?text:"Enter something in above Text box to preview it here"}</p>
        </div>
    </div>
  )
}

// #### HOOKS  ###
// without creating a class hooks give us an advantage to use classbase features

// ####### STATES ######
// TYPES OF EVENTS
// 1) Use State Event

// now i have define on variable (not a variable just imagine it as variable) and its default value is give as 'Enter text Here' but whenever i want to change the value of that variable i.e text i compusory need to call the function which is define with it setText so wherevr that variable is used it will change it value.

// in that text area i have set the default when use state hook is called now as  said using setText can be change we can write on click function on button and change the value of text area on click of button.
// now we have have written the simple logic that wahtever the text which is written in text are wehn clicked on button aimply it will get capatalize.

// we need to write onchange event other wise we cannot type in that text area box we need to listen the eveent if anything gets type in that textarea its important to update the state whenever we type in that textarea