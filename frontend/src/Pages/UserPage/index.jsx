import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert } from "../../shared/components/Alert";
import { Spinner } from "../../shared/components/Spinner";
import { getUser } from "./api";
import { useRouteParamApiRequest } from "@/shared/hooks/useRouteParamApiRequest";
import { ProfieCard } from "./components/ProfileCard";

export function UserPage() {
  const {
    apiProgress,
    data: user,
    error,
  } = useRouteParamApiRequest("id", getUser); // Activation page ile neredeyse birebir aynı şeyler olduğu için ortak bir hook yaptık 

  return (
    <>
      {apiProgress && (
        <Alert styleType="secondary" center>
          <Spinner />
        </Alert>
      )}
      {user && <ProfieCard user={user}></ProfieCard>}
      {error && <Alert styleType="danger">{error}</Alert>}
    </>
  );
}

// import { Component, useEffect, useState, useTransition } from "react"
// import { useParams } from "react-router-dom"
// import { getUser } from "./api"
// import { Alert } from "@/shared/components/Alert"
// import { Spinner } from "@/shared/components/Spinner"
// import { useTranslation } from "react-i18next"

// export class UserPageClass extends Component{

//     state = {
//         user : null,
//         apiProgress:false,
//         error : null
//     }

//    loadUsers = async()=>{
//     this.setState({apiProgress:true})
//     try{
//         const response = await getUser(this.props.id)
//         this.setState({
//             user : response.data
//         })
//     }catch(error){
//         this.setState({error:this.props.t('User Not Found')})
//     }finally{
//         this.setState({apiProgress:false})
//     }
//    }
//     async componentDidMount(){ //onCreate misali
//         this.loadUsers()
//     }
//     componentDidUpdate(previousProps,previousState){
//         if(this.state.id !== previousState.id){
//             this.loadUsers()
//         }
//     }

//     render(){
//         return(
//             <>
//             {this.state.user && <h1>{this.state.user.username}</h1>}
//             {this.state.apiProgress && (
//                  <Alert styleType="secondary" center>
//                     <Spinner></Spinner>
//                  </Alert>
//             )}
//             {this.state.error && <Alert styleType="danger">{this.state.error}</Alert>}
//             </>
//         )
//     }

// }

// //Burayı bilerek class component olarak tanımladık
// //Functional ile Component class arasındaki farkı görebilmek için
// //Class component'larda hook kullanılamaz !

// export function UserPage(){ // Madem dedik hooks kullanılmıyor biz de böyle bir çözüme gidelim
//    const {id} = useParams()
//    const {t} = useTranslation() //bunu High Order Component ile de yapabilirdik
//     return <><UserPageClass id={id} t={t}></UserPageClass></>
// }
