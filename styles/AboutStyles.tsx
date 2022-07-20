import styled from 'styled-components'
import { motion } from "framer-motion";


export const TriangleContainer = styled.div`
    background-color: #D9D9D9;
    z-index: 2;
    position: relative;

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
        border-left: 50vw solid #D9D9D9;

    }

    .rightTriangle{
        position: absolute;
        top: var(--triangle-angle);
        left: 50%;
        height: 0px; 
        width: 50vw; 
        border-top: var(--triangle-angleP) solid transparent;
        border-bottom: 0vw solid transparent;
        border-right: 50vw solid #D9D9D9;

    }
`
export const Container = styled.div`
    margin: 1.2em 1.7em 0 1.2em;
    padding-bottom: 6em;
    position: relative;
    h3{
        font-size: 1.5em;
        font-weight: 500;
    }
    z-index: 2;
`
export const Title = styled.h3`
    font-size: 1.5em;
    font-weight: 500;
`
export const Paragraph = styled(motion.p)`
    text-align: justify;
`
export const Button = styled.button`
    margin: auto;
    font-size: 1em;
    background-color: #000;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 6px 10px;
    font-family: Kanit;
    font-weight: 300;
    
`

