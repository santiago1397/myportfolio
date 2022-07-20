import styled from 'styled-components'
import {motion } from 'framer-motion'

export const TriangleContainer = styled.div`
    background-color: #ACACAC;

    .triContainer{
        --triangle-angle: -20vw;
        --triangle-angleP: 20vw; 
        width: 100%;
        height: 0px;
        display: flex;
        position: relative;
    }

    .leftTriangle{
        position: absolute;
        top: var(--triangle-angle);
        height: 0px; 
        width: 50vw; 
        border-top: var(--triangle-angleP) solid transparent;
        border-bottom: 0vw solid transparent;
        border-left: 50vw solid #ACACAC;

    }

    .rightTriangle{
        position: absolute;
        top: var(--triangle-angle);
        left: 50%;
        height: 0px; 
        width: 50vw; 
        border-top: var(--triangle-angleP) solid transparent;
        border-bottom: 0vw solid transparent;
        border-right: 50vw solid #ACACAC;

    }
`

export const Container = styled.div`
    margin: 0em 1.7em 0 1.7em;
    padding-bottom: 6em;
    h3{
        font-size: 1.5em;
        font-weight: 500;
        padding-top: 1em;
        padding-bot: 1em;
        margin: 0;
    }
`

export const Title = styled.h3`
    font-weight: 500;
    padding-top: 1em;
    padding-bot: 1em;
    margin: 0;
    font-size: 1.5em;
`

export const ProjectsContainer = styled.div`

`

export const Proj = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`

export const ProjPrev = styled(motion.div)`
    background-color: #D9D9D9;
    border-radius: 10%;
    height: 20em;
    width: 85vw;
    position: relative;
`

export const ButtonContainer = styled.div`
    position: absolute;
    top: 85%;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

export const CodeBtn = styled.button`
    background-color: #797979;
    color: white;
    font-size: 1em;
    border-radius: 10px;
    padding: 10px 15px;
    border-style: none;
    margin-right: 15px;
`

export const DemoBtn = styled.button`
    background-color: #797979;
    color: white;
    font-size: 1em;
    border-radius: 10px;
    padding: 10px 15px;
    border-style: none;
    margin-right: 15px;
`

export const MoreProjectsBtn = styled.button`
    margin: 3em auto 1.5em auto;
    border-radius: 10px;
    font-size: 1em;
    background-color: #000;
    color: white;
    border-style: none;
    padding: 3px 15px;
    font-family: Kanit;
    font-weight: 300;
`