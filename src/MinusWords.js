import React from "react";
import FormWordsTransformation from "./FormWordsTransformation";

export default () => {
    const transformWords = (input) => {
        const set = new Set(input
            .split("-")
            .map(word => word.replace(/[^\wа-я]/g, ''))
            .map(word => word.trim()))
        return Array.from(set).join("\n");
    };

    return <FormWordsTransformation transformWordsFunc={transformWords} />;
};
