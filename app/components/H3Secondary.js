import styled from 'styled-components';

export const H3 = styled.h3`
color: ${props => props?props.theme.colors.secondaryHeadingColor:'#2E3440'};
font-family: Poppins;
font-weight: 400;
font-size : 2em;
margin-left: auto;
margin-right: auto;
`;

export default H3