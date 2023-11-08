import { useState } from "react";
import { useRef } from "react";
function EducationInfoForm(props){
    
    
    const [school , setNewSchool] = useState('');
    /* const schoolInputRef = useRef(); */
    const degreeInputRef = useRef();
    const startDateInputRef = useRef();
    const endDateInputRef = useRef();
    const locationInputRef = useRef();
    
    function submitHandler(e){
        e.preventDefault();

        /* const submittedSchool = schoolInputRef.current.value; */
        const submittedDegree = degreeInputRef.current.value;
        const submittedStartDate = startDateInputRef.current.value;
        const submittedEndDate = endDateInputRef.current.value;
        const submittedLocation = locationInputRef.current.value;
        
        const educationData = {
            school : {school}, // from useState
            degree : submittedDegree,
            startDate: submittedStartDate,
            endDate : submittedEndDate,
            location: submittedLocation,
            id: crypto.randomUUID()
        }

        console.log(educationData);
        props.onAddEducation(educationData);

        //TODO create and array/storage with submitted eduData
        
    }
    
    return(
        <div>
            <form className="form" onSubmit={submitHandler}>
                <h1>Education</h1>  

                <div className="form-field">
                    <label htmlFor="school">Institution Name</label>
                    <input type="text" id='school' 
                        onChange = {e => setNewSchool(e.target.value)}
                        value={school}
                    />
                    
                </div>

                <div className="form-field">
                    <label htmlFor="degree">Degree/Qualification</label>
                    <input type="text" id='degree' ref={degreeInputRef}/>
                </div>

                <div className="form-field">
                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" id='start-date' ref={startDateInputRef} />

                    <label htmlFor="end-date">End Date</label>
                    <input type="date" id='end-date' ref={endDateInputRef} />
                </div>

                <div className="form-field">
                    <label htmlFor="location">Location</label>
                    <input type="text" id='location' ref={locationInputRef}/>
                </div>

                <button>Save</button>

            </form>
        </div>
    );
};

export default EducationInfoForm;