import { Title, TriangleContainer, MoreProjectsBtn, Container, ProjectsContainer,Proj, ProjPrev,DemoBtn, CodeBtn, ButtonContainer  } from '../../styles/ProjectsStyles'
import { LetterAnimation2 } from './LetterAnimation'

type projectsData = {
    src: string,
    name: string,
}

let projects: projectsData[] = [
    {
        src: '/html.svg',
        name: 'Web Database Manager'
    },
    {
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
                            <Proj>
                                <h4 style={{fontWeight: '300', fontSize: '1.5em', marginTop: '1em', marginBottom: '1em'}}>{project.name}</h4>
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