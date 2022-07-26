import styled from 'styled-components'

const media = {
    small: '@media(min-width: 600px)',
    medium: '@media(min-width: 800px)',
    large: '@media(min-width: 1200px)'
}

export const Title = styled.div`
    margin: 50px 0 100px 30px;
    padding-bottom: 6em;

    p{
        margin: 0;
        font-weight: 300;
    }

    h1{
        font-size: 2.2em;
        margin: 0;
        font-weight: 900;
    }

    h2{
        margin: 0;
        font-weight: 300;
    }

    h2:after{
        color: var(--primary-color);
        content: '|';
        animation: blink 1s step-start infinite;
    }

    div{
        margin: 10px 0; 
    }

    @keyframes blink{
        50%{
            opacity: 0;
        }
    }
    
    ${media.small}{
        margin-left: 15vw;
        h1{
            font-size: 3em;
        }
        h2{
            font-size: 2em;
            font-weight: 300;
        }
    }

    ${media.medium}{
        display: flex;
        justify-content: flex-end;
        flex-direction: row-reverse;
        padding-bottom: 10em;
        div{
            margin: 0; 
        }
        margin-left: 8vw;
    }

    ${media.large}{
        p{
            font-size: 1.3em;
        }
        h1{
            font-size: 4em;
        }
        padding-top: 4em;
        padding-bottom: 14em;
    }
`;

export const Socials = styled.div`
    width: 40%; 
    display: flex; 
    justify-content: space-between;
    
    a{
        transition: .5s ease;
        height: 30px;
        width: 30px;
        
    }

    
    ${media.small}{
        a{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 45px;
            width: 45px;
            border: solid 1px black;
            border-radius: 50%;
            padding: 10px;
        }

        a:hover{
            color: var(--primary-color);
            border-color: var(--primary-color);
        }
        
    }
    ${media.medium}{
        flex-direction: column;
        width: 10%;
        padding-right: 50px;
        height: 100%;
    }
    
`