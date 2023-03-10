import React, {useState} from "react";

export default function SecondTask () {

    //Създайте контактна форма със следните полета и валидации:
    //Име (задължително поле, поне 3 символа)
    //Имейл (задължително поле)
    //Тема (задължително поле – поне 10 символа)
    //Съобщение (задължително поле, textarea)
    //Бутон изпрати.

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [topic, setTopic] = useState("");
    const [message, SetMessage] = useState("");

    return (
        <div>
            <form>
                <div>
                    <input 
                        type="text"
                        placeholder="Enter name"
                        onInput={e => setName(e.target.value)}
                    />
                    {name.length < 3 ? "The name has to contain at least 3 symbols" : null}
                <div>
                </div>
                    <input 
                        type="text"
                        placeholder="Enter mail"
                        onInput={e => setMail(e.target.value)}
                    />
                    {mail == 0 ? "Required field" : null }
                </div>               
                <div>
                    <input 
                        type="text"
                        placeholder="Enter topic"
                        onInput={e => setTopic(e.target.value)}
                    />
                    {topic.length < 10 ? "The topix has to contain at least 10 symbols" : null}
                </div>    
                <div>
                    <textarea
                        placeholder="Enter message"
                        onInput={e => SetMessage(e.target.value)}>
                    </textarea>
                    {message.length == 0 ? "Required field" : null }
                    </div>  
                <button>Submit</button>
            </form>
        </div>
    )
}