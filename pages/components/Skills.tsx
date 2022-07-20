import { Title, TriangleContainer, Container, SkillsContainer, Logo } from '../../styles/SkillsStyles'
import Image from 'next/image'
import { LetterAnimation2 } from './LetterAnimation'
import {motion } from 'framer-motion'

type logos = {
    src: string,
    name: string,
}

let techs: logos[] = [
    {
        src: '/html.svg',
        name: 'HTML'
    },
    {
        src: '/CSS.svg',
        name: 'CSS'
    },
    {
        src: '/sass.svg',
        name: 'SASS'
    },
    {
        src: '/bootstrap.svg',
        name: 'Bootstrap'
    },
    {
        src: '/javascript.svg',
        name: 'Javascript'
    },
    {
        src: '/typescript.svg',
        name: 'Typescript'
    },
    {
        src: '/react.svg',
        name: 'ReactJS'
    },
    {
        src: '/nextjs.svg',
        name: 'NextJS'
    },
    {
        src: '/firebase.svg',
        name: 'Firebase'
    },
    {
        src: '/php.svg',
        name: 'PHP'
    },
    {
        src: '/mysql.svg',
        name: 'MySQL'
    },
    {
        src: '/git.svg',
        name: 'GIT'
    },
    {
        src: '/java.svg',
        name: 'Java'
    },
    {
        src: '/figma.svg',
        name: 'Figma'
    }
]


export const Skills: React.FC = () => {

    return (
        <TriangleContainer>
            <div className="triContainer">
                <div className="leftTriangle"></div>
                <div className="rightTriangle"></div>
            </div>
            <Container id="Skills">
                <LetterAnimation2 text="Skills"/>

                <SkillsContainer>
                    {techs.map((tech) => {
                        return (
                            <motion.div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20px'}}
                                initial={{ opacity: 0, y: 50 }}
                                transition={{ ease: "easeOut", duration: 0.4 }}
                                whileInView={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                            >
                                <Logo >
                                    <Image src={tech.src} width={'55%'} height={'55%'} />
                                </Logo>
                                {tech.name}
                            </motion.div>
                        )
                    })}

                </SkillsContainer>
            </Container>

        </TriangleContainer>
    )

}