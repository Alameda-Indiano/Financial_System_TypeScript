import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    padding: 15px;
    margin-top: 20px;

    background-color: #FFF; 
    box-shadow: 0 0 5px #CCC;
    border-radius: 10px;

    text-align: left;
`;

export const TableHeadColumn = styled.th<{ width?: number, minWidth?: number }>`
    width: ${props => props.width ? `${props.width}%` : 'auto'};
    padding: 10px 0;

    text-align: center;
`;