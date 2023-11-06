function EducationInfoForm(){
    return(
        <div>
            <form className="form">
                <h1>Education</h1>  

                <div className="form-field">
                    <label htmlFor="school">Institution Name</label>
                    <input type="text" id='school' />
                </div>

                <div className="form-field">
                    <label htmlFor="degree">Degree/Qualification</label>
                    <input type="text" id='degree' />
                </div>

                <div className="form-field">
                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" id='start-date' />

                    <label htmlFor="end-date">End Date</label>
                    <input type="date" id='end-date' />
                </div>

                <div className="form-field">
                    <label htmlFor="location">Location</label>
                    <input type="text" id='location' />
                </div>

                <button>Save</button>

            </form>
        </div>
    );
};

export default EducationInfoForm;