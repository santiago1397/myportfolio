import styled from 'styled-components'

const media = {
    medium: '@media(min-width: 800px)',
}

type props = {
    active?: boolean,
    mask?: boolean
}

export const CNavbar = styled.nav<props>`
    z-index: 3;
    overflow: hidden;
    position: fixed;
    top: 20px;
    left: calc(100vw - 110px);
    transition: height 0.6s ease;
    background: ${(props) => (props.active ? "black" : props.mask? "rgba(255, 255, 255, 0.2)" : "transparent")};
    color: ${(props) => (props.active ? "white" : "black")};
    height: ${(props) => (props.active ? "300px" : "42px")};
    backdrop-filter: ${(props) => (props.active ? "blur(0px)" : props.mask? "blur(8px)" : "blur(0px)")};
    border-radius: 15px;
    text-align: center;
    ${media.medium}{
        visibility: hidden;
        left: 20vw;
        width: 60vw;
        height: 54px;
        top: 2px;
    }
`;

export const MenuBtn = styled.div<props>`
    padding: 10px;
    ${media.medium}{
        display: none !important; 
        visibility: hidden;
    }
`

export const Ul = styled.ul<props>`
    padding: 10px;
    margin: 0;
    list-style-type: none;
    border-radius: 30px;
    li{
        padding: 10px; 
    }

    ${media.medium}{
        
        color: black;
        z-index: 10;
        position: absolute;
        visibility: visible;
        display: flex;
        left: 0;
        width: 100%;
        justify-content: space-between;
        li{
            padding: 5px; 
        }
    }

`
