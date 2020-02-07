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
const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    @media(max-width: 700px) {
        flex-direction: column;
    }
`;
const Main = styled.div`
    width: 70%;
    padding: 1vh;
    margin: 5vh 0vw 5vh 10vw;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
    }
    @media(max-width: 700px) {
        height: 70vh;
        width: 100%;
        margin: 0;
    }
`;
const SideBar = styled.div`
    width: 30%;
    padding: 1vh;
    margin: 5vh 10vw 5vh 1vw;
    .user {
        display: flex;
        align-items: center;
        margin-bottom: 1vh;
    }
    .friends {
        background-color: #fff;
        height: 50vh;
        display: flex;
        justify-content: center;
        padding-top: 5px;
    }
    @media(max-width: 700px) {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 20vh;
        .user,
        .user >div,
        .user > div > * {
            display: none;
        }
        .friends {
            height: 15vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: ${props => props.theme.colors.background} ;
        }
    }
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
    border-bottom: 1px solid lightgrey;
    /* box-shadow: 0px 1px 15px rgba(0,0,0,0.15); */
`;
const NavItems = styled.ul`
    display: flex;
    width: 100vw;
    height: 3vh;
    align-items: center;
    li {
        margin-right: 1.5rem;
        list-style: none;
    }
    @media(max-width: 700px) {
        height: 10vh;
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
// img 
const Img = styled.img`
    max-width:100%;
    max-height:100%;
`;
//Trip
const Avatar = styled.div`
    height: 40px;
`;
const Trip = styled.div`
    border: 1px solid lightgrey;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin-bottom: 5vh;
    @media(max-width: 700px) {
        margin-bottom: 10vh;
    }
`;
const TripTitle = styled.div`
    margin: 5px 10px 5px 10px;
    padding: 0;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    div {
        margin-left: 10px;
    }
    .title {
        font-family: 'Meera Inimai';
        font-weight: bolder;
        font-size: 20pt;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        left: -5vw;
    }
    

`;
const TripImg = styled.div`
    margin: 0px 0px 0px 0px;
    max-height: 1000px;
    object-fit: cover;
`;

const TripComments = styled.div`
    height: 40px;
`;
export {Form, Button, Input, Nav, NavItems, Title, Title2, Text, Main, Container, SideBar, Trip, TripTitle,TripImg, Avatar, Img, TripComments, theme};