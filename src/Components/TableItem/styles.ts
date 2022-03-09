import styled from "styled-components";

export const TableLine = styled.tr`
    width: 100%;

    text-align: center;
`;

export const TableColumn = styled.th`
    padding: 10px 0;
`;

export const Category = styled.th<{ color: string }>`
    display: inline-block;
    padding: 5px 10px;

    margin-top: 7px;

    border-radius: 5px;
    color: #FFF;

    background-color: ${props => props.color};
`;

export const Value = styled.th<{ color: string }>`
    color: ${props => props.color};
`;