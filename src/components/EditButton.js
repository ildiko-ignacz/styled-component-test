
import styled from 'styled-components';





const EditButton = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 50px;
    box-shadow: 0 21px 18px -8px rgba(0, 29, 147, 0.18);
    border: none;
    color: white;
    position: absolute;
    right: 25px;
    cursor: pointer;
    bottom: -35px;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, background-color 0.3s ease-in-out;
    background-color: #23A4A2;
    
    &:hover {
        background-color: #0db7b4;
    }
`;



export default EditButton;