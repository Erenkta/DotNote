import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert } from "@/shared/components/Alert";
import Input from "../SignUp/components/Input";
import Submit from "@/shared/components/Submit";
import { auth } from "./api";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/store";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [apiProgress, setApiProgress] = useState();
    const [errors, setErrors] = useState({});
    const [generalError, setGeneralError] = useState("");
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate()
  
    useEffect(() => {
      setErrors(function (lastErrors) {
        return {
          ...lastErrors,
          email: undefined,
        };
      });
    }, [email]);
  
    useEffect(() => {
      setErrors(function (lastErrors) {
        return {
          ...lastErrors,
          password: undefined,
        };
      });
    }, [password]);
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setGeneralError();
      setApiProgress(true);
  
      try {
       const response = await auth({email,password})
       dispatch(loginSuccess(response.data))
       navigate("/")
      }catch (error) {
        // Buradaki error içinde bir data var
        console.log(error);
        if (error.response?.data) {
          // Error varsa ve error code 400 ise
          if(error.response.data.status === 400){
            setErrors(error.response.data.validationErrors);
          }else{
          setGeneralError(error.response.data.message)
          }
        } 
        else {
          setGeneralError(t("Generic Error"));
        }
      }  finally {
        setApiProgress(false);
      }
    };
  
    return (
        <div className="container">
          <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
            <form className="card" onSubmit={onSubmit}>
              <div className="text-center card-header">
                <h1>{t("Login")}</h1>
              </div>
              <div className="card-body">
              <Input
              label={t("Email")
              id="email"
              type="text"
              error={errors.email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              label={t("Password")}
              id="password"
              type="password"
              error={errors.password}
              onChange={(event) => setPassword(event.target.value)}
            />
                {generalError && (
                  <Alert styleType="danger">{generalError}</Alert>
                )}
                <Submit
                  disabled={
                    !password || !email
                  }
                  sm={true}
                  title={t("Login")}
                  apiProgress={apiProgress}
                />
              </div>
            </form>
          </div>
        </div>
      );
}