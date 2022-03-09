import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #959595;
`;

export const Info = styled.div<{ color?: string }>`
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.color};

    margin-top: 10px;
`;