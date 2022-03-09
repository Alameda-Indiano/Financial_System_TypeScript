import * as C from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';

import { formatCurrentMonth } from "../../Helpers/dateFilter";

import { ResumeItem } from "../ResumeItem";

type Props = {
    currentMonth: string,
    onMonthChange: ( ( newMonth: string ) => void ),
    income: number, 
    expense: number
};

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
    const [ year, month ] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);

    const HandlePrevMonth = () => {
        currentDate.setMonth( currentDate.getMonth() -1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    };

    const HandleNextMonth = () => {
        currentDate.setMonth( currentDate.getMonth() +1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    };

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={HandlePrevMonth} ><FontAwesomeIcon icon={faCircleLeft} /></C.MonthArrow>
                <C.MonthTitle>{ formatCurrentMonth( currentMonth ) }</C.MonthTitle>
                <C.MonthArrow onClick={HandleNextMonth} ><FontAwesomeIcon icon={faCircleRight} /></C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title="Revenues" value={income} />
                <ResumeItem title="Expenses" value={expense} />
                <ResumeItem title="Swing" value={ income - expense } color={ income - expense < 0 ? "red" : "green"} />
            </C.ResumeArea>
        </C.Container>
    );
};