import "./LoginForm.css";

export interface ILoginForm {
  usernamePlaceholder: string;
  passwordPlaceholder: string;
}
export const LoginForm = (props: ILoginForm) => {
  return (
    <div id="logincontainer">
      <div id="logingreeting">Logg inn :)</div>
      <form id="loginform">
        <div id="username">
          <label>Username</label>
          <input
            type="email"
            name=""
            id=""
            placeholder={props.usernamePlaceholder}
          />
        </div>
        <div id="password">
          <label>Password</label>
          <input
            type="password"
            name=""
            id=""
            placeholder={props.passwordPlaceholder}
          />
        </div>
        <div id="forgottenPassword">
          <a href="">Forgotten password?</a>
        </div>
      </form>
    </div>
  );
};
