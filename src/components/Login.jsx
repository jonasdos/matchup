import React from "react";
import { addNewUser, validateLogin } from "../../mockdatabase/db";

function Login() {
  const [loginForm, setLoginForm] = React.useState({
    login: '',
    password: '',
  })
  const [registerForm, setRegisterForm] = React.useState({
    name: '',
    login: '',
    password: '',
  })
  const [loginStatus, setLoginStatus] = React.useState(false)
  const [userName, setUserName] = React.useState('')
  const [registeredAlert, setRegisteredAlert] = React.useState(null)


function cleanInputs() {
  setLoginForm({
    login: '',
    password: '',
  })
  setRegisterForm({
    name: '',
    login: '',
    password: '',
  })

}
  const handleRegister = async (e) => {
    e.preventDefault();
    const createadUser =  await addNewUser(registerForm.name,registerForm.login,registerForm.password)
    if(createadUser) {
    console.log("inserir aviso de usuário criado")
    cleanInputs()
    window.localStorage.setItem('userData', JSON.stringify(createadUser))
    setRegisteredAlert(true)
  }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await validateLogin(loginForm.login, loginForm.password)
    
    if(user) {
      setLoginStatus(true)
      setUserName(user.name)
      window.localStorage.setItem('userData', JSON.stringify(user))
      cleanInputs()
    } else {
      console.log("inserir função de Login inválido")

    }
  }
  const logout = () => {
   
    window.localStorage.removeItem('userData')
    setLoginStatus(!loginStatus)
  }


  
  return (
<>

{loginStatus ? <div><h1>Olá, {userName}! </h1> <p>Seção com opções do usuário</p></div> : null}
{loginStatus ? <button onClick={logout}>Fazer logout</button> : null}
{!loginStatus ? <>  
   <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="loginForm">login:</label>
          <input
            type="text"
            id="loginForm"
            name="login"
            value={loginForm.login}
            onChange={(e) => setLoginForm({...loginForm, login: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="passwordForm">senha:</label>
          <input
            type="password"
            id="passwordForm"
            name="password"
            value={loginForm.password}
            onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      
    </div>
 {registeredAlert ? null :
  <div>
      <h1>Cadastrar</h1>
      <form onSubmit={handleRegister}>
      <div>
          <label htmlFor="userName">nome:</label>
          <input
            type="text"
            id="userName"
            name="name"
            value={registerForm.name}
            onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
            required
          />
        </div>
        <div>
          <label htmlFor="login">login:</label>
          <input
            type="text"
            id="login"
            name="login"
            minLength={3}
            value={registerForm.login}
            onChange={(e) => setRegisterForm({...registerForm, login: e.target.value})}
            required
          />
        </div>
        <div>
          <label htmlFor="password">senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            minLength={3}
            value={registerForm.password}
            onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      
      
    </div>} </> : null}
    {registeredAlert && loginStatus === false ? <p>{"Usuário cadastrado com sucesso, faça login :)"}</p> : null}
    </>
);
}

export default Login;
