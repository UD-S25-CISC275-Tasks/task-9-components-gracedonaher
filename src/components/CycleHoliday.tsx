//done
import React, { useState } from "react";
import { Button } from "react-bootstrap";

// List of holidays with emojis and approximate dates
const holidays = [
    { name: "New Year's Day", emoji: "🎉", month: 1, day: 1 },
    { name: "Easter", emoji: "🐰", month: 4, day: 1 }, // simplified
    { name: "Independence Day", emoji: "🇺🇸", month: 7, day: 4 },
    { name: "Halloween", emoji: "🎃", month: 10, day: 31 },
    { name: "Christmas", emoji: "🎄", month: 12, day: 25 },
];

// Alphabetical function
const nextHolidayAlphabetically = (currentHoliday: string): string => {
    const currentIndex = holidays.findIndex(
        (holiday) => holiday.name === currentHoliday
    );
    const nextIndex = (currentIndex + 1) % holidays.length;
    return holidays[nextIndex].name;
};

// Year function
const nextHolidayByYear = (currentHoliday: string): string => {
    const currentIndex = holidays.findIndex(
        (holiday) => holiday.name === currentHoliday
    );
    const nextIndex = (currentIndex + 1) % holidays.length;
    return holidays[nextIndex].name;
};

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] =
        useState<string>("New Year's Day");

    // Handle cycling through holidays alphabetically
    const handleAlphabeticalCycle = () => {
        setCurrentHoliday(nextHolidayAlphabetically(currentHoliday));
    };

    // Handle cycling through holidays by time of year
    const handleYearlyCycle = () => {
        setCurrentHoliday(nextHolidayByYear(currentHoliday));
    };

    // Find the current holiday emoji
    const currentHolidayEmoji = holidays.find(
        (holiday) => holiday.name === currentHoliday
    )?.emoji;

    return (
        <div>
            <div>Holiday: {currentHolidayEmoji}</div>
            <Button onClick={handleAlphabeticalCycle}>
                Advance by Alphabet
            </Button>
            <Button onClick={handleYearlyCycle}>Advance by Year</Button>
        </div>
    );
}
