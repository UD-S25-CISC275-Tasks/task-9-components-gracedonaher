import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    //state to represent attempts left; initial number 3
    const [attempts, setAttempts] = useState<number>(3);
    let reqAttempts: number;

    function updateAttempts(attempts: string): attempts {
        setAttempts(attempts);
    }

    return (
        //buttons & attempts displayed
        <div>
            <Form.Group controlId="attempts">
                <Form.Label>attempts: "{reqAttempts}"</Form.Label>
                <Form.Control
                    type="number"
                    value={attempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttempts
                    }
                />
            </Form.Group>
            <Button onClick={() => setAttempts(attempts - 1)}>use</Button>
            to {attempts}.
            <Button onClick={() => setAttempts(attempts + reqAttempts)}>
                gain
            </Button>
            <div>Attempts remaining: "{attempts}"</div>
        </div>
    );
}
