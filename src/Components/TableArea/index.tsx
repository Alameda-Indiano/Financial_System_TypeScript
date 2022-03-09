import * as C from "./styles";

import { TableItem } from "../TableItem";

import { ITems } from "../../types/Item";

type Props = {
    list: Array<ITems>
};

export const TableArea = ({ list }: Props) => {
    return (
        <>
            {list.map((item, index) => (
                <C.Table>
                    <thead>
                        <tr>
                            <C.TableHeadColumn width={15} >Date of Issue</C.TableHeadColumn>
                            <C.TableHeadColumn width={20} >Category</C.TableHeadColumn>
                            <C.TableHeadColumn width={30} >Title</C.TableHeadColumn>
                            <C.TableHeadColumn width={20} >Value</C.TableHeadColumn>
                        </tr>
                    </thead>
                    <tbody>
                        <TableItem key={index} item={item} />
                    </tbody>
                </C.Table>
            ))}
        </>
    );
};