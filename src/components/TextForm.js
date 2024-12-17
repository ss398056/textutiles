import React, {useState} from 'react'

//This is the example of State in react (Hooks in react)
//Handling event and states

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Converted to Uppercase");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to the uppercase","primary");
        //document.title="UpperCase";
    }
    
    const handleLowClick = ()=>{
        //console.log("Converted to Lowercase");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to the lowercase","success");
    }

    const handleOnChange = (event)=>{
        //console.log("OnChange method working..");
        setText(event.target.value);

        //Total word after ignoring spaces
        let count = 0;
        let arr = event.target.value.split(/\s+/);
        
        for(let i=0; i<arr.length; i++){
            if(arr[i]!==''){
                count++;
            }
        }
        if(event.target.value.length===0){
            setWordLength(0);
        }else{
            setWordLength(count);
        }
        
        //console.log(event.target.value);
    }

    const handleClearClick = (event)=>{
        //console.log("clear text method working..");
        setText("");
        props.showAlert("All Text cleared","danger");
    }

    const handleFirstCapClick = ()=>{
        let newArr = text.split(" ");
        //console.log(newArr);
        let capStr = "";
        for(let i=0; i<newArr.length; i++){
            let sub = newArr[i].substring(1);
            newArr[i]=newArr[i].charAt(0).toUpperCase()+sub;
            capStr= capStr+" "+newArr[i];
        }
        
        setText(capStr);
        props.showAlert("Text converted to the each word first character capital","warning");
    }

    const handleRemoveExtraSpacesClick = ()=>{
        let newArr = text.split(" ");
        //console.log(newArr);
        let capStr = "";
        for(let i=0; i<newArr.length; i++){
            if(newArr[i]===''){
                continue;
            }
            capStr= capStr+" "+newArr[i];
        }
        
        setText(capStr);
        props.showAlert("Remove all the extra spaces from the text","warning");
    }

    const handleCopyTextClick = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert('Text copied to clipboard!',"success");
    }

    const [text, setText] = useState("");

    const [wordLength, setWordLength] = useState(0);

    return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <div className="mb-3 mt-5">
            <h2>{props.heading}</h2>
            <textarea className="form-control"  style={{backgroundColor: props.mode==='dark'?'#444c56':'white', color: props.mode==='dark'?'white':'black',borderBlockStyle:'outset',borderBlockWidth:'3px'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" placeholder="Enter the text"></textarea>
        </div>
        <button className="btn btn-primary" disabled={text.length===0} onClick={handleUpClick} >Convert To Uppercase</button>
        <button className="btn btn-success mx-3 my-1" disabled={text.length===0} onClick={handleLowClick} >Convert To Lowercase</button>
        <button className="btn btn-warning mx-3 my-1" disabled={text.length===0} onClick={handleFirstCapClick} >First Word Capital</button>
        <button className="btn btn-warning mx-3 my-1" disabled={text.length===0} onClick={handleRemoveExtraSpacesClick} >Remove Extra Spaces</button>
        <button className="btn btn-info mx-3 my-1" disabled={text.length===0} onClick={handleCopyTextClick} >Copy Text</button>
        <button className="btn btn-danger mx-3 my-1" disabled={text.length===0} onClick={handleClearClick} >Clear Text</button>
        
        <div className="container mt-3">
            <h2>Text Summary</h2>
            <p>{wordLength} words and {text.length} characters</p>
            <p>{text}</p>
        </div>
    </div>
    
        
    </>
  )
}
