import React, { useState } from "react";
//import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";
import { Form } from "react-bootstrap";

export function CheckAnswer(expectedAnswer: string): React.JSX.Element {
    //state: answer is originally empty str
    const [answer, setAnswer] = useState<string>("");
    let correctness: String;

    //control: handles given answer
    function updateAnswer(answer: string): string {
        setAnswer(answer);
        return answer;
    }

    if (expectedAnswer === answer) {
        correctness = "✔️";
    } else {
        correctness = "❌";
    }

    //view: handles given answer; displays expected results based on answer
    return (
        <div>
            <Form.Group controlId="answer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    value={answer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        updateAnswer(event.target.value)
                    }
                />
            </Form.Group>
            <div>{correctness}</div>
        </div>
    );
}
