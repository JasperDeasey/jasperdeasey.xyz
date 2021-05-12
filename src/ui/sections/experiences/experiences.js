import './experiences.css'
import Header from "../../components/header";
import Experience from "../../components/experience";

const Experiences = (props) => {
    return (
        <div className={'experiences'}>
            <Header data={"Experiences"}/>
            <div className={'experience-container'}>
                <div className={'experience-display'}>
                    <Experience data={{'image':'n/a', 'title':'Experience 1', 'details':'Details for Experience 1 go here'}}/>
                    <Experience data={{'image':'n/a', 'title':'Experience 2', 'details':'Details for Experience 2 go here'}}/>
                </div>
            </div>
        </div>
    )
}

export default Experiences