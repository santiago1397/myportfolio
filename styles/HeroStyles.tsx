import styled from 'styled-components'

const media = {
    extraSmall: '@media(min-width: 400px)',
    small: '@media(min-width: 600px)',
    medium: '@media(min-width: 800px)',
    large: '@media(min-width: 1200px)',
    extraLarge: '@media(min-width: 1400px)'
}

export const HomeContainer = styled.div`
    
    ${media.extraSmall}{

    }

    ${media.small}{
        
    }

    ${media.medium}{
        margin-top: 60px;
    }

    ${media.large}{

    }

`

export const Title = styled.div`
    margin: 50px 1.7em 100px 30px;
    padding-bottom: 6em;
    max-width: 1200px;
    
    p{
        margin: 0;
        font-weight: 300;
    }

    h1{
        font-family: Aquire;
        font-size: 2.1em;
        margin: 0;
        font-weight: 500;
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

    .container{
        margin: 10px 0; 
    }

    @keyframes blink{
        50%{
            opacity: 0;
        }
    }

    ${media.extraSmall}{
        h1{
            font-size: 2.8em;
        }
    }

    ${media.small}{
        margin: 0em 3em 15vw 3em;
        h1{
            font-size: 4em;
        }
        h2{
            font-size: 2em;
            font-weight: 300;
        }
    }

    ${media.medium}{
        margin-right: 8em;
        display: flex;
        justify-content: flex-end;
        flex-direction: row-reverse;
        padding-bottom: 10em;
        h1{
            font-size: 3em;
        }
        .container{
            margin: 0; 
        }
        margin-left: 8vw;
    }

    ${media.large}{
        p{
            font-size: 1.3em;
        }
        h1{
            font-size: 5em;
        }
        padding-top: 4em;
        padding-bottom: 14em;
        margin: 1.2em 12em 100px 12em;
    }
    ${media.extraLarge}{
        margin-left: auto;
        margin-right: auto;
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

export const ImgContainer = styled.div`
    margin-left: auto;
    width: 20vw;
    height: 20vw;
    display: none;
    -webkit-animation: mover 1s infinite  alternate;
    animation: mover 1s infinite  alternate;


    @-webkit-keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-10px); }
    }
    @keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-10px); }
    }

    ${media.medium}{
        display: block;
    }
`