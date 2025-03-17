import React from "react";

const LoginCreate = () => {
    const [registerForm, setRegisterForm] = React.useState({
      name: '',
      login: '',
      password: '',
    })

    const handleRegisterForm = (e) => {
      e.PreventDefault()
    }

    return (
      <div>
      <h1>Cadastrar</h1>
      <form onSubmit={handleRegisterForm}>
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
          <label htmlFor="RegisterLogin">login:</label>
          <input
            type="text"
            id="RegisterLogin"
            name="RegisterLogin"
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
      
      
    </div>

    )
}

export default LoginCreate