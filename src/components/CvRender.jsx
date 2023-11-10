import NewEducationForm from "./NewEducationForm";

function CvRender() {

    function addFormInfoHandler(educationData){
        localStorage.setItem('educationData', educationData);
        console.log(educationData);
        
    }

    return (
        <div>
            <h1>CV</h1>
            <NewEducationForm onAddEducation={addFormInfoHandler} />
        </div>
    );
};

export default CvRender;