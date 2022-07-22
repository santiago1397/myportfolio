import { Title, TriangleContainer, Container, Paragraph, Button } from '../styles/AboutStyles'

import { LetterAnimation2 } from './LetterAnimation'

export const About: React.FC = () => {

    return (
        <TriangleContainer>
            <div className="triContainer">
                <div className="leftTriangle"></div>
                <div className="rightTriangle"></div>
            </div>
            <Container id="About">

                <LetterAnimation2 text="About me"/>

                <Paragraph 
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ ease: "easeOut", duration: 0.4 }}
                    whileInView={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Paragraph>

                <div style={{textAlign: "center", marginTop: "20px"}}>
                    <Button>
                        Download Resume
                    </Button>
                </div>
            </Container>

        </TriangleContainer>
    )

}

export default About;