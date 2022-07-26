import styled from 'styled-components'
import {motion, HTMLMotionProps } from 'framer-motion'

const media = {
    small: '@media(min-width: 600px)',
    medium: '@media(min-width: 900px)',
    large: '@media(min-width: 1200px)'
}

interface Props extends HTMLMotionProps<"div"> {
    src?: string;
  }

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
    margin: 0 1.7em 0 1.7em;
    padding-bottom: 6em;

    h3{
        margin: 0;
        padding 2em 0 1em 0;
        font-size: 2em;
        font-weight: 500;
        margin: 0;
    }

    ${media.small}{
        margin: 0em 3em 0 3em;
        h3{
            font-size: 2.8em;
        }
        padding-bottom: 10em;
    }
    ${media.medium}{
        margin: 0 8em 0 8em;
    }
    ${media.large}{
        padding-bottom: 18em;
        margin: 0em 12em 0 12em;
        h3{
            font-size: 3.5em;
        }
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

    ${media.medium}{
        flex-direction: row;
    }
`
export const TitleDescriptionContainer = styled.div`
    ${media.medium}{
        width: 60%;
        height: 20em;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
`
export const Description = styled.div`
    display: none;
    ${media.medium}{
        display: block;
        font-size: 1.1em;
        padding-right: 30px;
        font-weight: 300;
    }
`

export const ProjectTitle = styled.h4`
    font-weight: 300;
    font-size: 1.5em;
    margin-top: 1em;
    margin-bottom: 1em;

    ${media.medium}{
        width: 100%;
        font-size: 2em;
        margin-top: 0;
    }

`

export const ProjPrev = styled(motion<Props>("div"))`
    overflow: hidden;
    border-radius: 15px;
    height: 20em;
    width: 100%;
    z-index: 1;
    position: relative;

    ${media.medium}{
        width: 40%;
    }
`

export const ButtonContainer = styled.div`
    position: absolute;
    top: 85%;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

export const CodeBtn = styled.a`
    background-color: #797979;
    color: white;
    font-size: 1em;
    border-radius: 10px;
    padding: 10px 15px;
    border-style: none;
    margin-right: 15px;
    cursor: pointer;
`

export const DemoBtn = styled.a`
    cursor: pointer;
    display: flex;
    align-items:center;
    background-color: var(--primary-color);
    color: white;
    font-size: 1em;
    border-radius: 10px;
    padding: 10px 15px;
    border-style: none;
    margin-right: 15px;
`

export const MoreProjectsBtn = styled.button`
    margin: 8em auto 1.5em auto;
    border-radius: 10px;
    font-size: 1em;
    background-color: #000;
    color: white;
    border-style: none;
    padding: 6px 10px;
    font-family: Kanit;
    font-weight: 300;
    z-index: 1;
    cursor: pointer;
    position: relative;
    overflow: hidden;

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
        padding: 8px 16px;
        font-size: 1.1em;
    }

    ${media.medium}{
        padding: 6px 10px;
        font-size: 1em;
    }
`