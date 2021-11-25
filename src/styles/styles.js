import styled from "styled-components";

export const Title = styled.span`
    color:black;
    font-size: 2rem;
    margin-left:10px;
    font-weight: bold;
    display:flex;
`;

export const Completed = styled.button`

display:${({ disabledCheckDiscovery }) => (disabledCheckDiscovery === true ? "none" : "inline")};

`;

export const CompletedDiscovery = styled.button`

display:${({ disabledCheckDelivery }) => (disabledCheckDelivery === true ? "none" : "inline")};

`;

