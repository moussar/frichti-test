import styled from 'styled-components';

const Styled = {};

Styled.searchContainer = styled.div`
    background-color: white;
    position: fixed;
    top: 50px;
    width: 100%;
    z-index: 1;
    display: flex;
    height: 5.8rem;
`;

Styled.inputWrapper = styled.div`
    height: auto;
    position: relative;
    width: 100%;
`;

Styled.inputContainer = styled.div`
    background-color: rgb(240, 243, 247);
    display: flex;
    flex-direction: row;
    height: 3.6rem;
    padding-left: 1.2rem;
    position: relative;
    border-radius: 1.8rem;
    margin: 1rem 1.6rem;
`;

Styled.inputIcon = styled.figure`
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 0px;
`;

Styled.inputText = styled.input`
    text-transform: none;
    background-color: rgb(240, 243, 247);
    color: rgb(38, 48, 60);
    height: auto;
    letter-spacing: normal;
    padding-left: 0.8rem;
    width: 100%;
    font: 1.4rem / 2.4rem Circular, Helvetica, Arial, sans-serif;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 1.8rem;
    outline: none;
    transition: all 0.3s ease-in-out 0s;
`;

export default Styled;
