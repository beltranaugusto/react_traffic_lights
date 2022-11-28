import React, { useState } from "react";

const TrafficLight = () => {

    const [color, setColor] = useState("red")

	return (
		<div className="tf-box m-auto d-flex flex-column justify-content-center align-items-center">
            <div className="tf-bar bg-dark">
            </div>
            <div className="tf-light-container d-flex flex-column justify-content-center align-items-center bg-dark rounded">
                <div onClick={() => {setColor("red")}} className={"tf-light rounded-circle m-1 bg-danger " + (color === "red" ? "selected": "")}></div>
                <div onClick={() => {setColor("orange")}} className={"tf-light rounded-circle m-1 bg-warning " + (color === "orange" ? "selected": "")}></div>
                <div onClick={() => {setColor("green")}} className={"tf-light rounded-circle m-1 bg-success " + (color === "green" ? "selected": "")}></div>
            </div>
        </div>
	);
};

export default TrafficLight;
