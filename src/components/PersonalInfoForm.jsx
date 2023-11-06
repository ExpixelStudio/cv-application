function PersonalInfoForm(){
    return (
        <div>
            <form className="form">
                <h1>Personal Info</h1>  

                <div className="form-field">
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" id='full-name' />
                </div>

                <div className="form-field">
                    <label htmlFor="Email">Email</label>
                    <input type="text" id='full-name' />
                </div>

                <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" id='phone' />
                </div>

                <div className="form-field">
                    <label htmlFor="address">Address</label>
                    <input type="text" id='address' />
                </div>
            </form>
        </div>
    );
};

export default PersonalInfoForm;