import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    // state / model
    const [color, setColor] = useState<string>("");

    // control
    function updateColor(color: React.ChangeColor<HTMLInputElement>) {
        setColor(color.target.value);
    }

    // view
    return (
        <div>
            <Form.Check
                type="radio"
                name="red"
                onchange={updateColor}
                id="color-red"
                label="red"
                value="red"
                data-testid="red-box"
                checked={color === "red"}
            />;
            <Form.Check
                type="radio"
                name="blue"
                onchange={updateColor}
                id="color-blue"
                label="blue"
                data-testid="blue-box"
                checked={color === "blue"}
            />
            <Form.Check
                type="radio"
                name="green"
                onchange={updateColor}
                id="color-green"
                label="green"
                data-testid="green-box"
                checked={color === "green"}
            />
            <Form.Check
                type="radio"
                name="purple"
                onchange={updateColor}
                id="color-purple"
                label="purple"
                data-testid="purple-box"
                checked={color === "purple"}
            />
            <Form.Check
                type="radio"
                name="yellow"
                onchange={updateColor}
                id="color-yellow"
                label="yellow"
                data-testid="yellow-box"
                checked={color === "yellow"}
            />
            <Form.Check
                type="radio"
                name="pink"
                onchange={updateColor}
                id="color-pink"
                label="pink"
                data-testid="pink-box"
                checked={color === "pink"}
            />
            <Form.Check
                type="radio"
                name="orange"
                onchange={updateColor}
                id="color-orange"
                label="orange"
                data-testid="orange-box"
                checked={color === "orange"}
            />
            <Form.Check
                type="radio"
                name="black"
                onchange={updateColor}
                id="color-black"
                label="black"
                data-testid="black-box"
                checked={color === "black"}
            />
            <div>You have chosen "{color}".</div>
        </div>;
    );
}