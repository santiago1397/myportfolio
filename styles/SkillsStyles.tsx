import styled from 'styled-components'


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
    margin: 1.2em 1.7em 0 1.7em;
    padding-bottom: 6em;
    h3{
        font-size: 1.5em;
        font-weight: 500;
    }
`
export const Title = styled.h3`
    font-weight: 500;
    font-size: 1.5em;
`
export const SkillsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const Logo = styled.div`
    background-color: white;
    border-radius: 20px;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

`

