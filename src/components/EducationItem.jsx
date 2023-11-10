

// determins how a education field will render on CV
function EducationItem(){
    return (
        <div>
            <li className="item">
                <div className="title">
                    <h2>{props.school}</h2>
                </div>
                
                <div className="date_location">
                    <p>{props.startDate} - {props.endDate}</p>
                    <p>{props.location}</p>
                </div>

                <div>
                    <p><b>{props.degree}</b> |<b><em>{props.subject}</em></b> </p>
                    <p>{props.school}</p>
                </div>


            </li>
        </div>
    );
};