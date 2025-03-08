import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // State to hold the value of each die
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>(d6());

    // Function to handle left die roll
    const rollLeft = () => {
        setLeftDie(d6());
    };

    // Function to handle right die roll
    const rollRight = () => {
        setRightDie(d6());
    };

    // Determine win/lose condition
    const getResultMessage = (): string | null => {
        if (leftDie === rightDie) {
            if (leftDie === 1) {
                return "Lose";
            } else {
                return "Win";
            }
        }
        return null;
    };

    // Render the dice and buttons
    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span> - </span>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            {getResultMessage() && <div>{getResultMessage()}</div>}
        </div>
    );
}
