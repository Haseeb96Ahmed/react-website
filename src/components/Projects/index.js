import React from 'react'
import Icon1 from '../InfoSection/images/react.png'
import Icon2 from '../InfoSection/images/ROR.png'
import Icon3 from '../InfoSection/images/Python.png'
import { ProjectContainer, ProjectsCard, ProjectsH1, ProjectsH2, ProjectsIcon, ProjectsP, ProjectsWrapper } from './ProjectElements'

const Projects = () => {
    return (
        <ProjectContainer id="projects">
            <ProjectsH1> My Projects </ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>React</ProjectsH2>
                    <ProjectsP></ProjectsP>
                </ProjectsCard>

                <ProjectsCard>
                    <ProjectsIcon src={Icon2}/>
                    <ProjectsH2>Ruby on rails</ProjectsH2>
                    <ProjectsP></ProjectsP>
                </ProjectsCard>

                <ProjectsCard>
                    <ProjectsIcon src={Icon3}/>
                    <ProjectsH2>Python</ProjectsH2>
                    <ProjectsP></ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectContainer>
    )
}

export default Projects
