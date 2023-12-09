import { useCallback, useEffect, useState } from "react";
import { getUsers } from "./api";
import { Spinner } from "@/shared/components/Spinner";
import { UserListItem } from "./components/UserListItem";

export default function Home() {
  const [userPage, setUserPage] = useState({
    content: [],
    first: false,
    last: false,
    number: 0,
  });

  const [apiProgress, setApiProgress] = useState(false);

  const loadUsers = useCallback(async (number = 0) => {
    //nedir nasıl kullanılır ?
    setApiProgress(true);
    try {
      const response = await getUsers(number);
      setUserPage(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setApiProgress(false);
    }
  }, []);
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="card">
      <div className="card-header text-center fs-4">UserList</div>
      <ul className="list-group list-group-flush">
        {userPage.content.map((user) => (
          <UserListItem user={user}/>
        ))}
        <div className="cart-footer text-center">
          {!apiProgress && !userPage.first && (
            <button
              className="btn btn-outline-secondary btn-sm float-start"
              //(disabled={userPage.first}
              onClick={() => {
                loadUsers(userPage.number - 1);
              }}
            >
              Prev
            </button>
          )}
          {apiProgress && <Spinner />}
          {!apiProgress && !userPage.last && (
            <button
              className="btn btn-outline-secondary btn-sm float-end"
              //disabled={userPage.last}
              onClick={() => {
                loadUsers(userPage.number + 1);
              }}
            >
              Next
            </button>
          )}
        </div>
      </ul>
    </div>
  );
}
