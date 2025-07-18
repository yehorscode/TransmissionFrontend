import React, { useEffect, useState, useRef, useCallback } from "react";
import { getStationData, submitTransmission } from "@/functions/functions"; // Import functions and types
import type {
    StationData,
    Frequency,
    Transmission,
} from "@/functions/functions"; // Ensure types are imported correctly
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Radio() {
    const [currentFrequency, setCurrentFrequency] = useState<Frequency | null>(
        null
    );

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <span className="text-center">{currentFrequency?.number}</span>
                <div className="flex items-center justify-center">
                    <button
                        className="mx-2"
                        onClick={() => {
                            // Logic to go to the previous frequency
                        }}
                    >
                        <ArrowLeft className="h-8 w-8" />
                    </button>
                    <button
                        className="mx-2"
                        onClick={() => {
                            // Logic to go to the next frequency
                        }}
                    >
                        <ArrowRight className="h-8 w-8" />
                    </button>
                </div>
            </div>
        </div>
    );
}
