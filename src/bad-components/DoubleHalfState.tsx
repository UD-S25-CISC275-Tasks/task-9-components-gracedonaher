import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalfState(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    // Function to double the value
    function doubleValue() {
        setDhValue((prevValue) => prevValue * 2);
    }

    // Function to halve the value
    function halveValue() {
        setDhValue((prevValue) => prevValue * 0.5);
    }

    return (
        <div>
            <h3>Double Half State</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={doubleValue}>Double</Button>
            <Button onClick={halveValue}>Halve</Button>
        </div>
    );
}
