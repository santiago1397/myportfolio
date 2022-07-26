import styled from 'styled-components'
import {motion} from 'framer-motion'

const media = {
    small: '@media(min-width: 600px)',
    medium: '@media(min-width: 900px)',
    large: '@media(min-width: 1200px)'
}

export const TriangleContainer = styled.div`
    background-color: #ACACAC;
    z-index: 2;
    .triContainer{
        z-index: 2;
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
        border-left: 50vw solid #ACACAC;

    }

    .rightTriangle{
        position: absolute;
        top: calc(var(--triangle-angle) + 2px);
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
    padding: 6em 0;
    h3{
        font-size: 2em;
        font-weight: 500;
    }
    ${media.small}{
        margin: 1.2em 3em 0 3em;
        h3{
            font-size: 2.8em;
        }
        padding-bottom: 10em;
    }
    ${media.medium}{
        margin: 1.2em 8em 0 8em;
    }
    ${media.large}{
        padding-bottom: 18em;
        margin: 1.2em 12em 0 12em;
        h3{
            font-size: 3.5em;
        }
    }
`
export const Title = styled.h3`
    font-weight: 500;
    font-size: 1.5em;
`
export const SkillsContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, 25vw);
    justify-content: space-between;

    ${media.small}{
        grid-template-columns: repeat(auto-fill, 22vw);
    }

    ${media.medium}{
        grid-template-columns: repeat(auto-fill, 150px);
    }
`

export const Skill = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    height: 25vw;

    p{
        margin: 5px 0 0 0;
        font-size: 1.3em;
    }
    ${media.small}{
        height: 22vw;
    }

    ${media.medium}{
        height: 150px;
        width: 150px;
    }
`

export const Logo = styled.div`
    background-color: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 80%;

    ${media.small}{
        height: 80%;
        width: 80%;
    }

    ${media.medium}{
        height: 120px;
        width: 120px;
    }

`

