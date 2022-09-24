import React, { useState } from 'react'

function TextForm(props) {

    const handleUpClick = () => {
        console.log('Upper clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const onChangeHandler = (e) => {
        console.log('OnChange');
        setText(e.target.value);
    }
    const [text, setText] = useState('Enter Text');
    // you can pass default value null in useState
    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">{props.title}</label>
                <textarea className="form-control" onChange={onChangeHandler} id="myText" value={text} row='15'></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert To Uppercase</button>
        </>
    )
}

export default TextForm