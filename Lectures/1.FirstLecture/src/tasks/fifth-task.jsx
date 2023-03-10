import React, {useState} from "react";

export default function FifthtTask() {

    const [leftRight, setLeftRight] = useState(0);
    const [topBottom, setTopBottom] = useState(0);
    return (
        <div>
            <div>
                <button onClick={() => {setTopBottom(topBottom - 10)}}>Up</button>
                <button onClick={() => {setTopBottom(topBottom + 10)}}>Down</button>
                <button onClick={() => {setLeftRight(leftRight - 10)}}>Left</button>
                <button onClick={() => {setLeftRight(leftRight + 10)}}>Right</button>
            </div>
            <div style={{
                width:50,
                height:50,
                background:'green',
                marginTop:topBottom,
                marginLeft: leftRight
            }}>
            </div>
        </div>
    )
}