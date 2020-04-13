import React from 'react'
import styled from 'styled-components'
import ColumnWrapper from './ColumnWrapper'

const IconWrapper = styled.span`
font-size: 2.5em;
padding-bottom: 0.1em;
`
const TextWrapper = styled.span`
font-family: roboto;
font-size: 2em;
color: ${props => props?props.theme.colors.textColor:'#ECEFF4'};
`
const PaddingAndMargin = styled.div`

padding: 0%;
margin: 1%;
min-width: 15vw;
border-right: 1px solid #A3A3A3;
:hover{
    span{
        color: ${props => props?props.theme.colors.secondaryHeadingColor:'#ECEFF4'};
    };
    text-shadow: 3px 4px 20px #CECECE    ;
  };
:last-child{
    border: none;
  }
  .active{
    color: ${props => props?props.theme.colors.secondaryHeadingColor:'#ECEFF4'};
    text-shadow: 3px 4px 20px #CECECE    ;
}
`

const tabItem = ({
    icon,
    text,
    className,
    onClick,
}) => {
    return(
        <PaddingAndMargin
        onClick={onClick}
        >
<ColumnWrapper>
<IconWrapper className={className}>
{icon}
</IconWrapper>
<TextWrapper className={className}>
{text}
</TextWrapper>
</ColumnWrapper>
</PaddingAndMargin>
)
}

export default tabItem