export const formatValue = ( value: number ): string => {
    let newNumber = value.toFixed(2).toString().replace('.', ',');

    return newNumber;
};