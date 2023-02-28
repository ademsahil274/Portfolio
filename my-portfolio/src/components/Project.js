import React from "react";

function Project(props) {
    return (
        <div className="project">
            <h3> {props.name} </h3> 
            <a href= { props.link }> {props.linkName}</a>
            <img src={props.image} />
        </div>
    )
}

export default Project;