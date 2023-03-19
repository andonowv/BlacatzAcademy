import React, {useState} from "react";

export default function CounterApp (){

    //Създайте брояч с първоначална стойност 0 и два бутона „+“ и „-”. При натискане на
    //бутоните брояча се увеличава или намаля. Стойността на брояча трябва да се
    //визуализира в div.

    const [counter, setCounter] = useState(0);

    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}