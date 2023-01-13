import React from "react";
import './SidebarOption.css';



const  SidebarOption = (props) =>  {

    const text = props.text;
    const Icon = props.Icon;
    const active = props.active;
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>

            <Icon />
            <h2> {text}</h2>
        </div>


    );

}





export default SidebarOption;