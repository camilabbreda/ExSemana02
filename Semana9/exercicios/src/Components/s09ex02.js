import React, { useState, useEffect } from 'react';

export default function Exercise02() {
    const [text, setText] = useState('');
    function handleChange(event) {
        setText(event.target.value)
    }
    useEffect(() => {
        console.log(text)
    }, [text])
    return (
        <div>
            <input value={text} onChange={handleChange}></input>
        </div>
    )

}