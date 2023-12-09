import defaultProfileImage from "@/assets/profile.png"
import Input from "@/pages/SignUp/components/Input";
import Submit from "@/shared/components/Submit";
import { useState } from "react";
import { useSelector } from "react-redux"
export function ProfieCard({user}){
    const authState = useSelector((store)=>store.auth)
    const [editMode,setEditMode] = useState(false);
    const editButtonVisible =  (!editMode && authState.id === user.id )

    console.log(authState);
    return (
        <div className="card">
            <div className="card-header text-center">
                <img
                src={defaultProfileImage}
                width="200"
                className="img-fluid rounded-circle shadow-sm"></img>
            </div>
            <div className="card-body text-center ">
                <span className="fs-3 d-block">
                    {user.username} </span>
                    {editButtonVisible && <Submit onClick={()=>{
                        setEditMode(!editMode)
                    }} 
                    title="Edit"
                    className="btn btn-success"/>}
                    {editMode && 
                    <>
                    <Input>
                    <Submit title="Save"></Submit>
                    <Submit title="Cancel" styleType="outline-secondary"></Submit> 
                    </Input>
                    </>                    
                    }
            </div>
        </div>
    )
}