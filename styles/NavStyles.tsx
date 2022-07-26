import styled from 'styled-components'

const media = {
    medium: '@media(min-width: 800px)',
}

type props = {
    active?: boolean,
    mask?: boolean,
    view?: boolean,
    contact?: boolean,
}

export const CNavbar = styled.nav<props>`
    z-index: 3;
    overflow: hidden;
    position: fixed;
    top: 20px;
    left: calc(100vw - 110px);
    transition: height 0.6s ease;
    background: ${(props) => (props.active ? "var(--primary-color)" : props.mask? "rgba(255, 255, 255, 0.2)" : "transparent")};
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
        transition: 0.5s ease;
        color: ${(props) => (props.contact ? "white" : "black")};
        z-index: 10;
        position: absolute;
        visibility: visible;
        display: flex;
        left: 0;
        width: 100%;
        justify-content: space-between;

        li{
            padding: 5px; 
            position: relative;
        }

        li:after{
            content: "";
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: var(--primary-color);
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
        }
        li:hover::after{
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }

`
