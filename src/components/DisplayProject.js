import { useState } from "react"
import { Container } from "react-bootstrap"
import Project from "./Project"
import { projectdata } from "./projectdata"

const DisplayProject = ()=>{
    
    const [project, setProject]= useState(projectdata)

    return(
        <Container>
             {
                 project.map((item)=>{
                     return(
                         <Project key={item.id} projectTitle={item.name} img={item.img} projectIntro={item.intro}/>
                     )
                 })
             }
        </Container>
    )


}
export default DisplayProject;