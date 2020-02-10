import React from "react";
import styled from 'styled-components';





const PropertyContainer = styled.div`
    margin-bottom: 35px;
    height: auto;
    padding: 0 4%;
`;


const PropertyIcon = styled.div`
    width: 22px;
    height: 22px;
    margin: 0 auto 20px;
    background-color: green;
`;

const TypePropertyIcon = styled(PropertyIcon)`
    background: url("https://storage.googleapis.com/ild-cdn-bucket/home.svg");
`;

const AreaPropertyIcon = styled(PropertyIcon)`
    background: url("https://storage.googleapis.com/ild-cdn-bucket/crop.svg");
`;

const EstimatedPropertyIcon = styled(PropertyIcon)`
    background: url("https://storage.googleapis.com/ild-cdn-bucket/dollar-sign.svg");
`;


const PropertyLabel = styled.p`
    font-weight: bold;
    text-align: center;
    color: #646A7C;
    font-size: 14px;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    margin-bottom: 5px;
`;

const PropertyValue = styled.p`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: #090E1E;
`;


const Properties = () => (

    <div className="box-container">

        <PropertyContainer>
            <TypePropertyIcon></TypePropertyIcon>
            <PropertyLabel>Type of Dwelling</PropertyLabel>
            <PropertyValue>Detached</PropertyValue>
        </PropertyContainer>

        <PropertyContainer>
            <AreaPropertyIcon></AreaPropertyIcon>
            <PropertyLabel>Type of Dwelling</PropertyLabel>
            <PropertyValue>Detached</PropertyValue>
        </PropertyContainer>

        <PropertyContainer>
            <EstimatedPropertyIcon></EstimatedPropertyIcon>
            <PropertyLabel>Type of Dwelling</PropertyLabel>
            <PropertyValue>Detached</PropertyValue>
        </PropertyContainer>

    </div>

);




export default Properties;
