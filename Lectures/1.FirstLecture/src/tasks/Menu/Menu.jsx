import React, {useState} from "react";
import "./Menu.css"

export default function Menu (){

    //Създайте хамбургер меню за всички резолюции. Първоначално менюто е скрито, но при
    //натискане – то се отваря или затваря. Менюто трябва да е в собствен компонент
    //Menu.
    const [isShown, setIsShown] = useState(true)

    return (
        <div className="menu">
            <img 
                src = "./menu.png"
                alt="menu_logo"
                className="menu_icon"
                onClick={() => setIsShown(!isShown)}    
            />
            {isShown ? (     
                <div >
                    <ul>
                        <li>
                            <a href="./home">Home</a>
                        </li>
                        <li>
                            <a href="./about">About</a>
                        </li>
                        <li>
                            <a href="./contact">Contact</a>
                        </li>
                    </ul>
                </div> ) : null
            }
        </div>
    )
}