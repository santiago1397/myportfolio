import { Tech,TechContainer,Description,ProjectTitle, TriangleContainer, MoreProjectsBtn, Container, ProjectsContainer,Proj, TitleDescriptionContainer, ProjPrev,DemoBtn, CodeBtn, ButtonContainer  } from '../styles/ProjectsStyles'
import { LetterAnimation2 } from './LetterAnimation'
import {BiRightArrow} from 'react-icons/bi'
import Image from 'next/image'

type projectsData = {
    id: number,
    src: string,
    code: string,
    demo: string,
    name: string,
    tech: string[],
    description: string,
}

let projects: projectsData[] = [
    {   
        id: 1,
        src: '/database.png',
        code: 'https://github.com/santiago1397/React-Project-RNI',
        demo: 'https://santiago1397.github.io/React-Project-RNI',
        name: 'Web Database Manager',
        tech: ["react.js","javascript","firebase", "html","css"],
        description: 'This project was made with the goal of creating a web app wich could register innovators or especific users and information about their projects so we can have a register with graphics and statistics, some others features about this project are: registers multiple users or innovators with and excel sheet, download the current information to an excel sheet and specific searchbar or filter.'
    },
    {
        id: 2,
        src: '/portfolio.png',
        code: 'https://github.com/santiago1397/myportfolio',
        demo: 'myportfolio-santiago1397.vercel.app',
        name: 'Porfolio',
        tech: ["next.js","typescript", "html","css"],
        description: "Simple portfolio made to show my skills and projects ",
    }
]

export const Projects: React.FC = () => {

    return (
        <TriangleContainer>
            
            <Container id="Projects">

                <LetterAnimation2 text="Projects"/>
                <ProjectsContainer>
                    {projects.map((project) =>{
                        return(
                            <Proj key={project.id}>
                                <TitleDescriptionContainer>
                                    <ProjectTitle>{project.name}</ProjectTitle>
                                    <Description>
                                        {project.description}
                                    </Description>
                                    <TechContainer>
                                        {project.tech.map((tec)=>{
                                            return(
                                                <Tech key={tec}> {tec}</Tech>
                                            )
                                        })}
                                    </TechContainer>
                                </TitleDescriptionContainer>
                                <ProjPrev
                                    initial={{ opacity: 0, y: 100 }}
                                    transition={{ ease: "easeOut", duration: 0.4 }}
                                    whileInView={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                                    src ={project.src}
                                >
                                    <div style={{height:'100%',width:'100%',background:'rgba(0, 0, 0, 0.2)',zIndex:'1'}}>

                                    </div>
                                    <Image  src={project.src} alt='test' layout="fill"
                                    style={{zIndex: '-1'}}
                                    objectPosition='left'
                                    objectFit="cover"
                                    quality={100}/>
                                    <ButtonContainer>
                                        <CodeBtn href={project.code} target="_blank" rel="noopener noreferrer">Code</CodeBtn>
                                        <DemoBtn href={project.demo} target="_blank" rel="noopener noreferrer">Demo <div style={{display:'flex', alignItems: 'center', paddingLeft: '10px'}}><BiRightArrow /></div></DemoBtn>
                                    </ButtonContainer>
                                </ProjPrev>
                            </Proj>   
                        )
                    })}
                </ProjectsContainer>
                
                <div style={{display: 'flex', }}>
                    <MoreProjectsBtn>
                        <a href='https://github.com/santiago1397?tab=repositories' target="_blank" rel="noopener noreferrer">
                            More Projects
                        </a>
                    </MoreProjectsBtn>
                </div>
            </Container>

        </TriangleContainer>
    )

}

export default Projects;