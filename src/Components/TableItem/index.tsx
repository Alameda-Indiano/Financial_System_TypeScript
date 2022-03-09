import { ITems } from "../../types/Item";
import * as C from "./styles";

import { formatDate } from "../../Helpers/dateFilter";
import { formatValue } from "../../Helpers/valueFilter";

import { categorys } from "../../data/Categorys";

type Props = {
    item: ITems
};

export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{ formatDate(item.date) }</C.TableColumn>
                <C.Category color={`${ categorys[item.category].color }`}>
                    { categorys[item.category].title }
                </C.Category>
            <C.TableColumn>{ item.title }</C.TableColumn>
            <C.Value color={`${ categorys[item.category].expense? "#ed2939" : "green" }`}>
                R$ { formatValue(item.value) }
            </C.Value>
        </C.TableLine>
    );
};