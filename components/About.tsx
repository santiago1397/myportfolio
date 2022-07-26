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
                    I am a programmer who loves using new technologies to create cool, creative and fun stuff, I’m constantly searching, learning and experimenting with new features in the industry to create optimal and digital solutions. I also like creative websites and to watch inspiring things and ideas. Sometimes as a hobby I play videogames.
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