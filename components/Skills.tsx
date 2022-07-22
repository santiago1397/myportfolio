import { Title, TriangleContainer, Container, SkillsContainer, Logo, Skill } from '../styles/SkillsStyles'
import Image from 'next/image'
import { LetterAnimation2 } from './LetterAnimation'
import { motion } from 'framer-motion'

type logos = {
    id: number,
    src: string,
    name: string,
    alt: string,
}

let techs: logos[] = [
    {   
        id: 1,
        src: '/html.svg',
        name: 'HTML',
        alt: 'HTML'
    },
    {
        id: 2,
        src: '/css.svg',
        name: 'CSS',
        alt: 'CSS'
    },
    {
        id: 3,
        src: '/sass.svg',
        name: 'SASS',
        alt: 'SASS'
    },
    {
        id: 4,
        src: '/bootstrap.svg',
        name: 'Bootstrap',
        alt: 'Bootstrap'
    },
    {
        id: 5,
        src: '/javascript.svg',
        name: 'Javascript',
        alt: 'Javascript'
    },
    {
        id: 6,
        src: '/typescript.svg',
        name: 'Typescript',
        alt: 'Typescript'
    },
    {
        id: 7,
        src: '/react.svg',
        name: 'ReactJS',
        alt: 'ReactJS'
    },
    {
        id: 8,
        src: '/nextjs.svg',
        name: 'NextJS',
        alt: 'NextJS'
    },
    {
        id: 9,
        src: '/firebase.svg',
        name: 'Firebase',
        alt: 'Firebase'
    },
    {
        id: 10,
        src: '/php.svg',
        name: 'PHP',
        alt: 'PHP'
    },
    {
        id: 11,
        src: '/mysql.svg',
        name: 'MySQL',
        alt: 'MySQL'
    },
    {
        id: 12,
        src: '/git.svg',
        name: 'GIT',
        alt: 'GIT'
    },
    {
        id: 13,
        src: '/java.svg',
        name: 'Java',
        alt: 'Java'
    },
    {
        id: 14,
        src: '/figma.svg',
        name: 'Figma',
        alt: 'Figma'
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
                            <Skill 
                                initial={{ opacity: 0, y: 50 }}
                                transition={{ ease: "easeOut", duration: 0.4 }}
                                whileInView={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                key={tech.id}
                            >
                                <Logo >
                                    <Image src={tech.src} width='80%' height='80%' alt={tech.alt}/>
                                </Logo>
                                <p>{tech.name}</p>
                            </Skill>
                        )
                    })}

                </SkillsContainer>
            </Container>

        </TriangleContainer>
    )

}

export default Skills;