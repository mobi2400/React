import React from "react";
const date = new Date();
const year = date.getFullYear;

function Footer(){
    return <Footer>
        <p>copyright {year}</p>
    </Footer>
}
export default Footer;