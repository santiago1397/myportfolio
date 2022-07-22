import styled from 'styled-components'

const media = {
    small: '@media(min-width: 600px)',
    medium: '@media(min-width: 900px)',
    large: '@media(min-width: 1200px)'
}

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
        top: calc(var(--triangle-angle) + 2px);
        height: 0px; 
        width: 50vw; 
        border-top: var(--triangle-angleP) solid transparent;
        border-bottom: 0vw solid transparent;
        border-left: 50vw solid #000;

    }

    .rightTriangle{
        position: absolute;
        top: calc(var(--triangle-angle) + 2px);
        left: 50%;
        height: 0px; 
        width: 50vw; 
        border-top: var(--triangle-angleP) solid transparent;
        border-bottom: 0vw solid transparent;
        border-right: 50vw solid #000;

    }
`
export const Container = styled.div`
    margin: 0 1.7em 0 1.2em;
    padding-bottom: 6em;
    h3{
        margin: 0;
        padding 2em 0 1em 0;
        font-size: 2em;
        font-weight: 500;
        color: white;
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
    font-size: 1.5em;
    color: white;
`
export const Paragraph = styled.p`
    text-align: justify;
`

export const Form = styled.form`
    margin-top: 1.4em;
    textarea{
        color:white;
        margin-bottom: 1.6em;
        border-radius: 10px;
        background: transparent;
        border: solid 1px white;
        padding: 8px;
        font-size: 1.2em;

        :focus{
            outline: none;
            border: solid 2px white;
        }

        ::placeholder{
            font-size: 1.2em;
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
    padding: 10px;
    color:white;
    font-size: 1.2em;

    :focus{
        outline: none;
        border: solid 2px white;
    }

    ::placeholder{
        font-size: 1.2em;
        font-family: Kanit;
        font-weight: 300;
        color:white;
    }
`

export const SubmitBtn = styled.button`
    background-color: #D9D9D9;
    border-style: none;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 1.3em;
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

    a{
        width: 6vw;
        height: 6vw;

        max-width: 3.3em;
        max-heidht: 3.3em;
    }
`