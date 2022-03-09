import { isValidation } from "../types/OnAddItems";

export const ValidationTitle = ( title: string ): isValidation => {
    let isValid: isValidation = ({ error: false, msg: "" })

    if ( title.trim() !== "" ) {
        isValid = { error: false, msg: "" };
    } else {
        isValid = { error: true, msg: "Enter a title to continue" };
    };

    return isValid;
};

export const ValidationCategory = ( category: string ): isValidation => {
    let isValid: isValidation = ({ error: false, msg: "" })

    if ( category !== "" ) {
        isValid = { error: false, msg: "" };
    } else {
        isValid = { error: true, msg: "Select a category to continue" };
    };

    return isValid;
};

export const ValidationDate = ( date: string ): isValidation => {
    let isValid: isValidation = ({ error: false, msg: "" })

    if ( date !== "" ) {
        isValid = { error: false, msg: "" };
    } else {
        isValid = { error: true, msg: "Enter a date to continue" };
    };

    return isValid;
};

export const ValidationValue = ( value: number ): isValidation => {
    let isValid: isValidation = ({ error: false, msg: "" })

    if ( value > 0 ) {
        isValid = { error: false, msg: "" };
    } else {
        isValid = { error: true, msg: "Enter a value to continue" };
    };

    return isValid;
};