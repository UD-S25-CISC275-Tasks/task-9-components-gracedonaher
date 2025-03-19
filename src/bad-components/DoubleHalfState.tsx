import React, { useState } from "react";

export function DoubleHalfState(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half State</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
        </div>
    );
}
