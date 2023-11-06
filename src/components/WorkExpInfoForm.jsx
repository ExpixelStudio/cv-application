function WorkExpInfoForm(){
    return(
        <div>
            <h1>Work Experience</h1>

            <div className="form-field">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id='company' />
                </div>

                <div className="form-field">
                    <label htmlFor="title">Job Title</label>
                    <input type="text" id='title' />
                </div>

                <div className="form-field">
                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" id='start-date' />

                    <label htmlFor="end-date">End Date</label>
                    <input type="date" id='end-date' />
                </div>

                <div className="form-field">
                    <label htmlFor="title">Description</label>
                    <textarea id='description' rows='5' />
                </div>

                <button>Save</button>

        </div>
    );
};

export default WorkExpInfoForm;