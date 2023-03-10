import React from "react";
import Content from "./components/content";
import Footer from "./components/footer";
import Menu from "./components/menu";

export default function MainPage (){
    return (
        <div>
            <Menu />
            <Content /> 
            <Footer />
        </div>
    )
}