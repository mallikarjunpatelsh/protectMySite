import styled from 'styled-components';

export const MainBackgroundWrapper = styled.div`
margin-left: auto;
margin-right: auto;
background: ${props => props?props.theme.colors.background:'#ECEFF4'};
box-shadow: rgba(0, 0, 0, 0.17) 0px 2px 20px;
display: flex;
flex-direction: column;
box-sizing: border-box;
    min-height: 100vh;
    margin-bottom: 1vh;
`;

export default MainBackgroundWrapper
