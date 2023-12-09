import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useRouteParamApiRequest(param,httpFunction){ // Custom Hookumuz
    const params = useParams()
    const pathParam = params[param] // id or token



    const [apiProgress, setApiProgress] = useState({});
    const [data, setData] = useState();
    const [error, setError] = useState();
    useEffect(() => {
      async function sendRequests() {
        setApiProgress(true);
        try {
          const response = await httpFunction(pathParam);
          setData(response.data)
        } catch (error) {
          setError(error.response.data.message);
        } finally {
          setApiProgress(false);
        }
      }
      // return (( ) => {}) bu demek component unMount edilirken demek
  
      sendRequests();
    }, [pathParam]);

    return{
        apiProgress,data,error
    }
}