import styled from 'styled-components';

export const BackgroundWrapper = styled.button`
margin-left: auto;
margin-right: auto;
border-radius: 1em;
border: 1px solid #f1f4f6;
min-height: 50px;
min-width: 400px;
box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.05);
padding-left: 2%;
background-color: #ffffff;
::placeholder {
    color: #828282;
    font-size: 1.5em;
    margin-left: 10px;
    margin-right: auto;
  }
`;

export default BackgroundWrapper