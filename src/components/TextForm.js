import React, { useState } from 'react'

function TextForm(props) {

    const handleUpClick = () => {
        console.log('Upper clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = () => {
        console.log('Lower clicked');
        let newText = text.toLowerCase();
        setText(newText);
    }
    const onChangeHandler = (e) => {
        console.log('OnChange');
        setText(e.target.value);
    }
    const [text, setText] = useState('');
    // you can pass default value null in useState
    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">{props.title}</label>
                <textarea className="form-control" onChange={onChangeHandler} id="myText" value={text} row='15'></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To Uppercase</button>
            <button className='btn btn-primary' onClick={handleLowerClick}>Convert To Lowercase</button>
            <div className='container my-4'>
                <h1>Word counter</h1>
                <p>Count {text.split(' ').length} words and lenth {text.length}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm