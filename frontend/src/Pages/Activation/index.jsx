import { userActivate } from "./api";
import { Alert } from "../../shared/components/Alert";
import { Spinner } from "../../shared/components/Spinner";
import { useRouteParamApiRequest } from "@/shared/hooks/useRouteParamApiRequest";

export default function Activation() {
  const { apiProgress, data, error } = useRouteParamApiRequest(
    "token",
    userActivate
  );
  return (
    <>
      {apiProgress && (
        <Alert styleType="secondary" center>
          <Spinner />
        </Alert>
      )}
      {data && ( // ya da data?.message
        <Alert>{data.message}</Alert> // children bu işe yarıyor
      )}
      {error && <Alert styleType="danger">{error}</Alert>}
    </>
  );
}
