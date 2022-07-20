import styled, {keyframes} from 'styled-components'

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
    
`;

export const MenuBtn = styled.div<props>`
    padding: 10px;
    
`

export const Ul = styled.ul<props>`
    padding: 10px;
    margin: 0;
    list-style-type: none;
    border-radius: 30px;
    li{
        padding: 10px; 
    }
`
