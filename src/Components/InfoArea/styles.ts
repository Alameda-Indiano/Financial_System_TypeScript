import styled from "styled-components";

export const Container = styled.div`
    width: 90%;

    background-color: #FFF;
    box-shadow: 0 0 5px #ccc;

    border-radius: 10px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    display: flex;
    align-items: center;
    padding: 20px;
    margin-top: 30px;
`;

export const MonthArea = styled.div`
    flex: 1;
    min-width: 200px;

    display: flex;
    align-items: center;

    margin-bottom: 10px;
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;

    padding: 10px;
    border-radius: 15px;

    font-weight: bold;

    background-color: #ccc;
`;

export const MonthArrow = styled.div`
    width: 30px;

    text-align: center;

    font-size: 21px;
    cursor: pointer;
`;

export const ResumeArea = styled.div`
    flex: 2;
    min-width: 300px;
    display: flex;
`;