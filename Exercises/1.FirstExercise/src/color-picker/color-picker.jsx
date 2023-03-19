import React, {useState} from "react";

export default function ColorPicker (){

    const [background, setBackgroun] = useState('white')

    return (
        <div>
            <input placeholder="Type background color" onChange={ e => setBackgroun(e.target.value)}/>
            <div style={{background: background, height: 100, width: 100, borderStyle: "solid" }}>
            </div>
        </div>
    )
}