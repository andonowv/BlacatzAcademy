import React, {useState} from "react";

export default function FirstTask (){

    //Създайте текстово поле и div с текст “Hello,”. При въвеждане на име текста се
    //допълва.
    //Например при въведено Gosho текста в div-a става “Hello, Gosho”.


    const [name, setName] = useState('') 

    return(
        <div>
            <input 
                type="text"
                placeholder="Please, enter name"
                onInput={e => setName(e.target.value)}
            />
            <p>Hello, {name}!</p>
        </div>
    )
}