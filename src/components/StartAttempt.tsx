import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [isQuizInProgress, setIsQuizInProgress] = useState(false);

    const startQuiz = () => {
        setAttempts((prev) => prev - 1);
        setIsQuizInProgress(true);
    };

    const stopQuiz = () => {
        setIsQuizInProgress(false);
    };

    const mulligan = () => {
        setAttempts((prev) => prev + 1);
    };

    return (
        <div>
            <div>Attempts: {attempts}</div>
            <Button
                onClick={startQuiz}
                disabled={isQuizInProgress || attempts <= 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!isQuizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={isQuizInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
