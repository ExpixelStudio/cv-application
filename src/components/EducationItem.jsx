

/* let educationData = JSON.parse(localStorage.getItem("educationData")) || []; */



// determins how a education field will render on CV
function EducationItem(){

    try {
        let educationData  = JSON.parse(localStorage.getItem("educationData")) || [];
    
        if (!Array.isArray(educationData)) {
            console.error("educationData is not an array:", educationData);
            educationData = [];
        }
    
        const listItems = educationData.map(education => 
            <li key={education.id}>
                {education.degree}
            </li>
        );
    
        return <ul>{listItems}</ul>;
    } catch (error) {
        console.error("Error retrieving or processing educationData:", error);
        // Handle the error or set educationData to a default value
        return null; // or a default UI element
    }

        

       /*  <div>
            <li className="item">
                <div className="title">
                    <h2>{props.school}</h2>
                </div>
                
                <div className="date_location">
                    <p>{props.startDate} - {props.endDate}</p>
                    <p>{props.location}</p>
                </div>

                <div className="degree">
                    <p><b>{props.degree}</b> |<b><em>{props.subject}</em></b> </p>
                    <p>{props.school}</p>
                </div>


            </li>
        </div> */
    /* return <ul>{listItems}</ul>; */
};

export default EducationItem;