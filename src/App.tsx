import * as C from "./App.styles";
import { useEffect, useState } from "react";

import { isValidation, NewItem } from "./types/OnAddItems";

import { ITems } from "./types/Item";
import { items } from "./data/Items";
import { categorys } from "./data/Categorys";

import { filterListByMonth, getCurrentMonth } from "./Helpers/dateFilter";

import { InfoArea } from "./Components/InfoArea";
import { CreateItem } from "./Components/CreateItemArea";
import { TableArea } from "./Components/TableArea";

export const App = () => {

  const [ list, setList ] = useState<Array<ITems>>(items);
  const [ filteredList, setFilteredList ] = useState<Array<ITems>>([]);
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth());
  
  const [ income, setIncome ] = useState<number>(0);
  const [ expense, setExpense ] = useState<number>(0);

  useEffect(() => {
    setFilteredList(filterListByMonth( list, currentMonth ));
  }, [ list, currentMonth ]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if ( categorys[filteredList[i].category].expense ) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      };
    };

    setExpense(expenseCount);
    setIncome(incomeCount);
  }, [ filteredList ]);

  const HandleMonthChange = (newMonth: string): void => {
    setCurrentMonth(newMonth);
  };

  const OnAddItens = (prop: isValidation, Item: ITems) => {
    if ( prop.error ) {
      alert(prop.msg);
    } else {
      setList([ ...items, Item ]);
      
      alert(prop.msg);
    };
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Financial System</C.HeaderText>
        <C.Body>
          <InfoArea 
            currentMonth={currentMonth} 
            onMonthChange={HandleMonthChange}
            income={income}
            expense={expense}
          />

          <CreateItem OnAddItens={OnAddItens} />

          <TableArea list={filteredList}/>
        </C.Body>
      </C.Header>
    </C.Container>
  );
};