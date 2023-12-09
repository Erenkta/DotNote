import defaultProfileImage from "@/assets/profile.png"
import { Link } from "react-router-dom"

export function UserListItem({user}){ // const {user} = props ile aynı
    return(
        <Link 
        to={`/user/${user.id}`}
        
        className="list-group-item list-group-item-action" key={user.id}>
            <img 
            width={30}
            className="img-fluid rounded-circle shadow-sm me-2"
            src={defaultProfileImage}/>
            {user.username}
          </Link>
    )
}