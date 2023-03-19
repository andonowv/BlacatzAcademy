import React, {useState} from "react";

export default function Button () {

    //Създайте бутон с текст, като по подразбиране показва Off с червен цвят. При
    //натискане на бутона текста се променя на On и цвета става зелен.

    const [buttonText, setButtonText] = useState("off")
    const [color, setColor] = useState('red')

    function toggleButton () {
        setButtonText("on")
    }

    return(
        <div>
            <button style={{color: buttonText == "off" ? 'red' : 'green'}} onClick={toggleButton}>{buttonText}</button>
        </div>
    )
}