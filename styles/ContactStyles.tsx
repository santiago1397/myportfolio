import styled from 'styled-components'


export const TriangleContainer = styled.div`
    background-color: #000;

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
        border-left: 50vw solid #000;

    }

    .rightTriangle{
        position: absolute;
        top: var(--triangle-angle);
        left: 50%;
        height: 0px; 
        width: 50vw; 
        border-top: var(--triangle-angleP) solid transparent;
        border-bottom: 0vw solid transparent;
        border-right: 50vw solid #000;

    }
`
export const Container = styled.div`
    margin: 1.2em 1.7em 0 1.2em;
    padding-bottom: 6em;
    h3{
        font-size: 1.5em;
        font-weight: 500;
        color: white;
    }
`
export const Title = styled.h3`
    font-weight: 500;
    font-size: 1.5em;
    color: white;
`
export const Paragraph = styled.p`
    text-align: justify;
`

export const Form = styled.form`
    textarea{
        color:white;
        margin-bottom: 1.6em;
        border-radius: 10px;
        background: transparent;
        border: solid 1px white;
        padding: 8px;

        :focus{
            outline: none;
            border: solid 2px white;
        }

        ::placeholder{
            font-size: 1.1em;
            font-family: Kanit;
            font-weight: 300;
            color:white;
        }
    }
`
export const Input = styled.input`
    margin-bottom: 1.6em;
    border-radius: 10px;
    background: transparent;
    border: solid 1px white;
    padding: 8px;
    color:white;

    :focus{
        outline: none;
        border: solid 2px white;
    }

    ::placeholder{
        font-size: 1.1em;
        font-family: Kanit;
        font-weight: 300;
        color:white;
    }
`

export const SubmitBtn = styled.button`
    backgroun-color: #D9D9D9;
    border-style: none;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 1em;
`

export const Socials = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    border-top: solid 2px white;
    padding: 10px;

    div{
        display: flex;
        width: 50%;
        justify-content: space-between;
    }
`