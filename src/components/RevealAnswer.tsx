import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState(false); // State to track visibility

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev); // Toggle the visibility state
    };

    return (
        <div>
            <Button onClick={toggleVisibility}>Reveal Answer</Button>
            {isVisible && <div>{42}</div>}{" "}
            {/* Conditionally render the answer */}
        </div>
    );
}
