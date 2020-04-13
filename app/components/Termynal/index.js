import React, {useEffect} from 'react'
import styled from 'styled-components'
import Termynal from './termynal'
import  './termynal.css'
const TermynalWrapper = styled.div`
padding: 0; 
margin: 0;
margin-bottom: 20px;
width: 100%;
                min-height: 50vh;
                display: -webkit-box; display: -ms-flexbox; display: flex;
                -webkit-box-align: center; -ms-flex-align: center; align-items: center;
                -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center;
                -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
`
function TermynalOut(){
useEffect(
    ()=>{
        new Termynal('#termynal', { startDelay: 600 })
    },[]
)
    return(
        <TermynalWrapper>
        <div id="termynal" data-termynal>
            <span data-ty="input">pip install Karthik</span>
            <span data-ty="progress"></span>
            <span data-ty>Successfully installed spacy</span>
            <span data-ty></span>
            <span data-ty="input">python -m spacy download en</span>
            <span data-ty="progress"></span>
            <span data-ty>Installed model 'en'</span>
            <span data-ty></span>
            <span data-ty="input">python</span>
            <span data-ty="input" data-ty-prompt=">>>">import spacy</span>
            <span data-ty="input" data-ty-prompt=">>>">nlp = spacy.load('en')</span>
            <span data-ty="input" data-ty-prompt=">>>">doc = nlp(u'Hello world')</span>
            <span data-ty="input" data-ty-prompt=">>>">print([(w.text, w.pos_) for w in doc])</span>
            <span data-ty>[('Hello', 'INTJ'), ('world', 'NOUN')]</span>
        </div>
        </TermynalWrapper>
    )
}

export default TermynalOut