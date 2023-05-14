import { Row } from "react-bootstrap";
import Banner from "../components/Banner";
import SingleService from "../components/SingleService";
import Footer from "../layouts/Footer";

export default function Service(){ 
    return(
        <>
        <Banner title ="Service"/>
        <Row className="mx-5">
        <SingleService title="App Dev" text= "We design mobile apps for ios android"/>
        <SingleService title="UI/UX" text= "We design mobile apps for ios android"/>
        <SingleService title="Web Dev" text= "We design mobile apps for ios android"/>
        </Row>
        <Footer/>
        </>
    )
 }