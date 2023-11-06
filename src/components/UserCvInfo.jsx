import PersonalInfoForm from "./PersonalInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import WorkExpInfoForm from "./WorkExpInfoForm";

function UserCvInfo(){
    return (
        <section>
            <PersonalInfoForm />
            <EducationInfoForm />
            <WorkExpInfoForm />
        </section>

        
    );
};

export default UserCvInfo;