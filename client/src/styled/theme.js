import styled from 'styled-components';
const theme = {
	colors: {
		navbar: '#FFFFFF',
		background: '#EFEFEF',
		font: '#545454',
		primary: '#FF3B3F',
		secondary: '#CAEBF2',
	},
};
const Main = styled.div`
	display: flex;
	justify-content: center;
	margin: 1vmax;
	margin-top: 5vmax;
	padding: 1vmax;
	background-color: blue;
	width: 80vw;
	min-height: 80vh;
	border-radius: 5px;
	background-color: #FFF;
`;
const Form = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    margin-bottom: 1rem;
    width: 300px;
    height: 35px;
    border: 1px solid #ccc;
    background-color: #fff;
    &::-webkit-input-placeholder{
        padding-left: 1rem;
    }
    &::-moz-placeholder{
        padding-left: 1rem;
    }
    &::-ms-input-placeholder{
        padding-left: 1rem;
    }
`;

const Button = styled.button`
    width: 300px;
    height: 35px;
    border: none;
    text-decoration: none;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: ${props => props.theme.colors.font};
    color: #fff;
    border-radius: 3px;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    &:hover{
        background-color:${props => props.theme.colors.primary};
    }
`;

// Text

const Title = styled.h1`
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 600;
  color: ${props => props.theme.colors.font};
  font-size: calc(18pt + 0.5rem);
`;

const Title2 = styled.h2`
  font-family: 'Overpass', sans-serif;
  font-weight: 300;
  color: ${props => props.theme.colors.font};
  font-size: calc(14pt + 1rem);
`;

const Text = styled.p`
  font-family: 'Meera Inimai', sans-serif;
  color: ${props => props.theme.color.colors.font || '#4d4d4d'};
`;

const Nav = styled.nav`    
    background-color: ${(props) => props.theme.colors.navbar};
    box-shadow: 0px 3px 15px rgba(0,0,0,0.15);
`;
const NavItems = styled.ul`
    display: flex;
    margin: 0.5rem;
    min-width: 100vw;
    max-width: 100vw;
    align-items: center;
    li {
        margin-right: 1.5rem;
        list-style: none;
    }
    @media(max-width: 600px) {
        padding-inline-start: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .logo, li {
            margin: 0 !important;
        }
    }
    .logo {
        margin-right: auto;
    }
  
`;
export {Form, Button, Input, Nav, NavItems, Title, Title2, Text, Main, theme};