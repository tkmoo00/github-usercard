import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "tkmoo00",
];

for (let i = 0; i < followersArray.length; i++) {
  getCard(followersArray[i]);
}

function getCard(username) {
  axios
    .get(`https://api.github.com/users/${username}`)
    .then((res) => {
      document.querySelector(".cards").appendChild(objFunc(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => console.log("IT WORKS???"));
}

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function objFunc(obj) {
  const divCard = document.createElement("div");
  const userImg = document.createElement("img");
  const divCardInfo = document.createElement("div");
  const h3Name = document.createElement("h3");

  const pUsername = document.createElement("p");
  const pLocation = document.createElement("p");
  const pProfile = document.createElement("p");

  const aLink = document.createElement("a");
  const pFollowers = document.createElement("p");
  const pFollowing = document.createElement("p");
  const pBio = document.createElement("p");

  divCard.appendChild(userImg);
  divCard.appendChild(divCardInfo);
  divCardInfo.appendChild(h3Name);
  divCardInfo.appendChild(pUsername);
  divCardInfo.appendChild(pLocation);
  divCardInfo.appendChild(pProfile);
  divCardInfo.appendChild(pFollowers);
  divCardInfo.appendChild(pFollowing);
  divCardInfo.appendChild(pBio);
  pProfile.appendChild(aLink);

  userImg.src = obj.avatar_url;
  userImg.alt = "thats a me";
  h3Name.textContent = obj.name;
  pUsername.textContent = obj.login;
  pLocation.textContent = obj.location;
  pProfile.textContent = "Profile";
  aLink.textContent = "Link to Profile";
  aLink.href = obj.html_url;
  pFollowers.textContent = `Followers: ${obj.followers}`;
  pFollowing.textContent = `Following: ${obj.following}`;
  pBio.textContent = obj.bio;

  divCard.classList.add("card");
  divCardInfo.classList.add("card-info");
  h3Name.classList.add("name");
  pUsername.classList.add("username");

  return divCard;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
