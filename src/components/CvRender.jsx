import { useState } from "react";

import NewEducationForm from "./NewEducationForm";
import EducationItem from "./EducationItem";

function CvRender() {

    function addFormInfoHandler(educationData){
        localStorage.setItem('educationData', educationData);
        console.log(educationData);
        
    }

    return (
        <div>
            <h1>CV</h1>
            {/* <EducationItem /> */}
            <NewEducationForm />
        </div>
    );
};

export default CvRender;