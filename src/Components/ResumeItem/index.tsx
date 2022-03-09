import * as C from "./styles";

import { formatValue } from "../../Helpers/valueFilter";

type Props = {
    title: string,
    value: number,
    color?: string
};

export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <C.Container>
            <C.Title>{ title }</C.Title>
            <C.Info color={color}>R$ { formatValue(value) }</C.Info>
        </C.Container>
    );
};