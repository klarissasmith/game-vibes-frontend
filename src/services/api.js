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


//User authentication fetches
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

const getAllUsers = () => {
  const URL = "http://localhost:3000/api/v1/users";
  return fetch(URL).then((resp) => resp.json());
};

export const api = {
  auth: {
    signIn,
    getCurrentUser,
    signUp,
  },
  users: {
    getAllUsers,
  },
};

/*
 
POSSIBLE FETCH GAMES FOR API NEEDED...OR THE POST
const fetchGames = () => {
  const URL = "http://localhost:3000/api/v1/games";
  return fetch(URL).then((resp) => resp.json());
};



BASE EXAMPLE POSTS, DELETE, AND EDIT FROM MOD 4 PROJECT
(PROBABLY JUST ADD API KEY FROM BACKEND??)
POST fetch games
const postGames = (data) => {
  const URL = "gamesURL";
  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

DELETE fetch message
const deleteMessage = (messageId) => {
  const URL = `http://localhost:3000/api/v1/messages/${messageId}`;
  return fetch(URL, {
    method: "DELETE",
  }).then((resp) => resp.json());
};

const editJournal = (data) => {
  const URL = `http://localhost:3000/api/v1/journals/${data.id}`;
  return fetch(URL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      title: data.title,
      content: data.content,
      user_id: data.user_id,
    }),
  }).then((resp) => resp.json());
};
*/