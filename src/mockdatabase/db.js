import axios from "axios";

// verifica dados locais 
export function saveLocalUserData(data) {
  localStorage.setItem("BolaTodaUserData", JSON.stringify(data));

}
export function getlocalUserData() {
  const userData = JSON.parse(localStorage.getItem("BolaTodaUserData"));
  return userData
}
export function removeLocalUserData() {
  localStorage.removeItem("BolaTodaUserData")
}
// Adicionar usuários
export async function addNewUser(name, login, password) {

  let response = {
    cod: "",
    message: "",
    user: {}
  }
  if (await validateNewUser(login)) {
    response.cod = "409 Conflict"
    response.message = "Já existe um usuário com esse login."
    return response
  }
  try {

    await axios.post("http://localhost:3000/users", { name, login, password, registerDate: new Date() })

    response.user = await getUserByLogin(login)
    return response
  }
  catch (error) {
    console.log(error)

  }

}
async function validateNewUser(login) {
  const users = await getAllUsers()

  return users.find(item => item.login === login);

}

export async function validateLogin(login, password) {
  const users = await getAllUsers()

  let validatedUser = users.find(item => item.login === login && item.password === password ? item : false)
  let response = {
    cod: "",
    message: "",
    user: {}
  }

  if (validatedUser === undefined) {
    response.cod = "401 Unauthorized"
    response.message = "The user login data was invalid"
  } else {
    response.cod = "200 OK"
    response.message = "Login succesfull"
    response.user = validatedUser
  }
  return response;
}

async function getAllUsers() {
  try {
    const { data } = await axios.get("http://localhost:3000/users");
    return data
  } catch (error) {
    console.log(error);
  }

}
async function getUserByLogin(login) {
  const users = await getAllUsers()
  let user = users.find(item => item.login === login)
  console.log(user)
  return user
}