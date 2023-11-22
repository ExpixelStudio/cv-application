import { useState, useEffect } from "react";

import PersonalInfoForm from "./PersonalInfoForm";
import NewEducationForm from "./NewEducationForm";
import WorkExpInfoForm from "./WorkExpInfoForm";

function NewUserForm(){

    const storedEducation = JSON.parse(localStorage.getItem('educationData'));

    const [newEducation , setNewEducation] = useState(storedEducation);

    
    
    function addEducationHandler(educationData){
        setNewEducation(localStorage.setItem('educationData' , JSON.stringify(educationData)))
        
    };

    useEffect(()=>{
        /*  setNewEducation(localStorage.setItem('educationData' , JSON.stringify(educationData))) */
         console.log('g')
     }, [newEducation]) //dependency arrary list items for use effect to track
 


    return (
        <section>
            <PersonalInfoForm />
            <NewEducationForm onAddEducation={addEducationHandler} />
            <WorkExpInfoForm />
        </section>

        
    );
};

/* return (
    <section>
        <PersonalInfoForm />
        <NewEducationForm /* onAddEducation={addEducationHandler} >
        <WorkExpInfoForm />
    </section>

    
); */

export default NewUserForm;