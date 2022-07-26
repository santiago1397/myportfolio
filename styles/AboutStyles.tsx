import styled from 'styled-components'
import { motion } from "framer-motion";

const media = {
    small: '@media(min-width: 600px)',
    medium: '@media(min-width: 900px)',
    large: '@media(min-width: 1200px)',
    extraLarge: '@media(min-width: 1400px)'
}

export const TriangleContainer = styled.div`
    background-color: #D9D9D9;
    z-index: 1;
    position: relative;

    .triContainer{
        z-index: 1;
        --triangle-angle: -20vw;
        --triangle-angleP: 20vw; 
        width: 100%;
        height: 0px;
        display: flex;
        position: relative;
    }

    .leftTriangle{
        position: absolute;
        top: calc(var(--triangle-angle) + 2px);
        height: 0px; 
        width: 50vw; 
        border-top: var(--triangle-angleP) solid transparent;
        border-bottom: 0vw solid transparent;
        border-left: 50vw solid #D9D9D9;

    }

    .rightTriangle{
        position: absolute;
        top: calc(var(--triangle-angle) + 2px);
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
    padding-bottom: 10em;
    padding-top: 2em;
    position: relative;
    max-width: 1200px;
    h3{
        margin: 0;
        padding 2em 0 1em 0;
        font-size: 2em;
        font-weight: 500;
    }
    z-index: 2;
    ${media.small}{
        margin: 1.2em 3em 0 3em;
        h3{
            font-size: 2.8em;
        }
    }
    ${media.medium}{
        margin: 1.2em 8em 0 8em;
        padding-bottom: 15em;
    }
    ${media.large}{
        padding-bottom: 18em;
        margin: 1.2em 12em 0 12em;
        h3{
            font-size: 3.5em;
        }
    }
    ${media.extraLarge}{
        margin-left: auto;
        margin-right: auto;
    }
`
export const Title = styled.h3`
    margin: 0;
    padding 2em 0;
    font-size: 1.5em;
    font-weight: 500;

`
export const Paragraph = styled(motion.p)`
    font-family: 'Noto Serif', serif;
    text-align: justify;
    ${media.medium}{
        font-size: 1.2em;
        font-weight: 300;
    }
`
export const Button = styled.button`
    z-index: 1;
    margin: auto;
    font-size: 1em;
    overflow: hidden;
    background-color: #000;
    color: white;
    border: none;
    border-radius: 10px;
    font-family: Kanit;
    font-weight: 300;
    cursor: pointer;
    position: relative;

    padding: 10px 0px;

    a{
        width: 100%;
        height: 100%;
        padding: 10px 15px;
    }
    
    &::before {
        content: '';
        width: 0;
        height: 400%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        background-color: var(--primary-color);
        transition: .5s ease;
        display: block;
        z-index: -1;
    }
    
    &:hover::before {
        width: 105%;       
    }

    &:hover {
        color: black;
    }

    

    ${media.small}{
        margin-top: 20px;
        font-size: 1.1em;

    }

    ${media.medium}{
        margin-top: 40px;
        font-size: 1.3em;
    }

    ${media.large}{
        margin-top: 80px;
        
    }
    
`

