import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    background-color: #FFF;
    box-shadow: 0 0 5px #ccc;

    border-radius: 10px;

    display: flex;
    align-items: center;
    padding: 20px;
    margin-top: 20px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const InputLabel = styled.label`
    flex: 1;
    min-width: 150px;
`;

export const InputTitle = styled.p`
    font-weight: bold;
`;

export const Input = styled.input`
    width: 50%;
    height: 20px;
  
    padding: 0 5px;
  
    border: 2px solid #ccc;
    border-radius: 5px;
    
    outline: none;
    transition: 0.3s;

    font-size: 10px;
    font-weight: bold;

    &:focus {
        transition: 0.3s;
        border-color: black;
    }
`;

export const Select = styled.select`
    width: 55%;
    height: 20px;
  
    border: 2px solid #ccc;
    border-radius: 5px;

    padding: 0 5px;
    text-align: center;
    
    font-size: 10px;
    font-weight: bold;

    outline: none;
    transition: 0.3s;

    &:focus {
        transition: 0.3s;
        border-color: black;
    }
`;

export const ContainerButton = styled.div`
    width: 100%;

    margin-top: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    width: 25%;
    height: 30px;
    padding: 0 5px;

    border: 2px solid #ccc;
    border-radius: 5px;
    
    background-color: lightblue;
    
    color: black;

    font-weight: bold;
    font-size: 11px;
    
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transition: 0.3s;
        background-color: blue;
        color: white;
    }
`;