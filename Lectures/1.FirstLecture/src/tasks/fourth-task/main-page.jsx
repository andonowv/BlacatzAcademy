import React from "react";
import Content from "./components/content";
import Footer from "./components/footer";
import Menu from "./components/menu";

    //Създайте div с размери 50x50. И четири бутона „Нагоре“, „Надолу“, „Наляво“, „Надясно“.
    //При натискане на някой от бутоните div-a се премества.

export default function MainPage (){
    return (
        <div>
            <Menu />
            <Content /> 
            <Footer />
        </div>
    )
}