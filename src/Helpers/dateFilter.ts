import { ITems } from "../types/Item";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}` 
};

export const filterListByMonth = ( list: Array<ITems>, date: string ): Array<ITems> => {
    let newList: Array<ITems> = [];
    let [year, month] = date.split('-');

    for ( let i in list ) {
        if (
            list[i].date.getFullYear() === parseInt(year) 
            &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    };

    return newList; 
};

export const formatDate = (date: Date): string => {
    let day = date.getDate().toString();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`
};

export const formatCurrentMonth = ( currentMonth: string ): string => {
    let [ year, month ] = currentMonth.split('-');

    const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    return `${months[parseInt(month) - 1]} of ${year}`; 
};
