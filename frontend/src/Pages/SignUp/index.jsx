import { useEffect, useMemo, useState } from "react";
import { signUp } from "./api";
import Input from "./components/Input";
import { useTranslation } from "react-i18next";
import { Alert } from "@/shared/components/Alert";
import { Spinner } from "@/shared/components/Spinner"; // vite.config.js içindeki koyduğumuz alias ile yaptık
import Submit from "@/shared/components/Submit";

function SignUp() {
  // Eskiden functional Component ile Class component arasında işlevsel farklar vardı fakat artık bu kalktı
  //Fonksiyonel Componentler daha fazla kullanılmaya başlandı

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const {t} = useTranslation();
  


  useEffect(() => {
    setErrors((lastErrors) => {
      return {
        // Buradaki temel mantık objenin içinden sadece spesifik bir şeyi güncellemek istediğimizde bunu callback dediğimiz fonksiyonlar ile yapmak
        ...lastErrors, //bize güncellenmeden önceki halini veriyor biz de bunu kopyala yapıştır gibi buraya yapıştırıyoruz
        username: undefined,
      };
    });
  }, [username]); // buradaki listeye bir şey vermezsek sadece component'ın ilk anında çalışıp bırakıcak

  useEffect(() => {
    setErrors((lastErrors) => {
      return {
        ...lastErrors,
        email: undefined,
      };
    });
  }, [email]);

  useEffect(() => {
    setErrors((lastErrors) => {
      return {
        ...lastErrors,
        password: undefined,
      };
    });
  },[password]);

  // let passwordError = password === passwordRepeat ? "" : "Password Mismatch" gerekli gereksiz sürekli render edilecek ve performans sorununa yol açıcak
  let passwordRepeatError = useMemo(()=>{ //UseMemo sadece alttaki değişkenlerin inputu değişirse işlem yapıcak yani gereksiz yere çalışmanın önüne geçecek
    return password !== passwordRepeat ? t('Password Mismatch') : ''
  },[password,passwordRepeat])

  const onSubmit = async (event) => {
    event.preventDefault(); // event bize form'dan geldi ve browser'in form ile ilgili işlem yapıp kendini sıfırlamasını engelledik
    //bundan sonra browser form'u dönüştürmeye uğraşmayacak ve sayfa yenilenmeyecek
    setGeneralError();
    setApiProgress(true);
    const user = {
      username,
      email,
      password,
    };
    try {
      //refactor (1)
      const response = await signUp(user);
      setSuccessMessage(response.data.message);
    } catch (error) {
      // Buradaki error içinde bir data var
      console.log(error);
      if (error.response?.data ) {
        // Error varsa ve error code 400 ise
        if( error.response.data.status === 400){
          setErrors(error.response.data.validationErrors);
        }else{
        setGeneralError(error.response.data.message)
        }
      } 
      else {
        setGeneralError(t("Generic Error"));
      }
    } finally {
      setApiProgress(false);
      setTimeout(() => {
        setSuccessMessage();
      }, 2000);
    }
  };


  return (
    <div className="container">
      <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
        <form className="card " onSubmit={onSubmit}>
          {" "}
          {/* Form'u enter ile yollamak için onSubmit kullanabilirsin*/}
          {/* Sadece bir tane parent dönebiliriz ondan dolayı bunu fragment içine aldık*/}
          <div className="text-center card-header">
            <h1>{t('Sign Up')}</h1>
          </div>
          <div className="card-body">
            <Input
              label={t("Username")}
              id="username"
              type="text"
              error={errors.username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <Input
              label={t("Email")}
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
            <Input
              label={t("Password Repeat")}
              id="passwordRepeat"
              type="password"
              error={passwordRepeatError}
              onChange={() => {
                setPasswordRepeat(event.target.value)
              }
            }
            />
            {successMessage && (
              <Alert>{successMessage}</Alert>
            )}
            {generalError && (
              <Alert styleType="danger">{generalError}</Alert>
            )}
            <div className="text-center">
              <Submit
                disabled={
                  !password || password !== passwordRepeat 
                }
                apiProgress={apiProgress}
                sm={true}
                title={t("Sign Up")}
              />


     

            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
