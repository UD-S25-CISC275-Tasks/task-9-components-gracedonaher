import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    // State to handle whether the answer is visible or not
    const [isVisible, setIsVisible] = useState<boolean>(false);

    // Toggle visibility of the answer when the button is clicked
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            {/* Button to reveal or hide the answer */}
            <Button onClick={toggleVisibility}>Reveal Answer</Button>

            {/* Conditionally render the answer based on the visibility state */}
            {isVisible && <div>{42}</div>}
        </div>
    );
}
