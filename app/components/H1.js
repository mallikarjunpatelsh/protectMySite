import styled from 'styled-components';

export const H1 = styled.h1`
color: ${props => props?props.theme.colors.primaryHeadingColor:'#2E3440'};
font-family: Poppins;
font-weight: 600;
font-size : 5em;
margin-left: auto;
margin-right: auto;
`;

export default H1