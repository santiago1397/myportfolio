import styled from 'styled-components'



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
`;

export const Name = styled.div`
    width: 
`