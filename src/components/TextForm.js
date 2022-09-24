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
    const [text, setText] = useState('');
    // you can pass default value null in useState
    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">{props.title}</label>
                <textarea className="form-control" onChange={onChangeHandler} id="myText" value={text} row='15'></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert To Uppercase</button>
            <div className='container my-4'>
                <h1>Word counter</h1>
                <p>Count {text.split(' ').length} words and lenth {text.length}</p>
            </div>
        </>
    )
}

export default TextForm