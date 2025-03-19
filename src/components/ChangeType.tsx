import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Define the possible Question types
export type QuestionType = "multiple_choice_question" | "short_answer_question";

export function ChangeType(): React.JSX.Element {
    // Initialize state with "short_answer_question"
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    // Handle the button click to toggle between question types
    const changeType = () => {
        setQuestionType((prevType) =>
            prevType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    return (
        <div>
            <h3>Change Type</h3>
            {/* Display the current type based on the state */}
            <p>
                {questionType === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </p>

            {/* Button to toggle the question type */}
            <Button onClick={changeType}>Change Type</Button>
        </div>
    );
}
