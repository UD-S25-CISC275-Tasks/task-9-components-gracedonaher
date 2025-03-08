import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    //two pieces of state
    const [quizInProgress, setInProgress] = useState<Boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    const handleStartQuiz = () => {
        if (attempts > 0) {
            setAttempts((prevAttempts) => prevAttempts - 1);
            setInProgress(true);
        }
    };

    const handleStopQuiz = () => {
        setInProgress(false);
    };

    const handleMulligan = () => {
        setAttempts((prevAttempts) => prevAttempts + 1);
    };

    return (
        <div>
            <div>Attempts left: {attempts}</div>
            <Button
                onClick={handleStartQuiz}
                disabled={quizInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={handleStopQuiz} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={handleMulligan} disabled={quizInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
