import { Title,Description,ProjectTitle, TriangleContainer, MoreProjectsBtn, Container, ProjectsContainer,Proj, TitleDescriptionContainer, ProjPrev,DemoBtn, CodeBtn, ButtonContainer  } from '../styles/ProjectsStyles'
import { LetterAnimation2 } from './LetterAnimation'

type projectsData = {
    id: number,
    src: string,
    name: string,
}

let projects: projectsData[] = [
    {   
        id: 1,
        src: '/html.svg',
        name: 'Web Database Manager'
    },
    {
        id: 2,
        src: '/CSS.svg',
        name: 'Porfolio'
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat.
                                    </Description>
                                </TitleDescriptionContainer>
                                <ProjPrev
                                    initial={{ opacity: 0, y: 100 }}
                                    transition={{ ease: "easeOut", duration: 0.4 }}
                                    whileInView={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                                >
                                    <ButtonContainer>
                                        <CodeBtn>Code</CodeBtn>
                                        <DemoBtn>Demo</DemoBtn>
                                    </ButtonContainer>
                                </ProjPrev>
                            </Proj>   
                        )
                    })}
                </ProjectsContainer>
                
                <div style={{display: 'flex', }}>
                    <MoreProjectsBtn>
                        More Projects
                    </MoreProjectsBtn>
                </div>
            </Container>

        </TriangleContainer>
    )

}

export default Projects;