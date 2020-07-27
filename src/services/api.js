//TOKEN HELD IN THE BROWSER
const token = () => localStorage.getItem("token");


//THE HEADERS FOR EACH FETCH
const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token(),
  };
};

// ALL GAMES FETCH 


//USER AUTHENTICATION FETCHES - SIGNIN, SIGNUP, & GETCURRENTUSER
const signUp = (data) => {
    console.log(data)
  return fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

const signIn = (data) => {
  return fetch("http://localhost:3000/api/v1/auth", {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

const getCurrentUser = () => {
  const URL = "http://localhost:3000/api/v1/current_user";
  return fetch(URL, {
    headers: headers(),
  }).then((resp) => {
    return resp.json();
  });
};



export const api = {
  auth: {
    signIn,
    getCurrentUser,
    signUp,
  }
};