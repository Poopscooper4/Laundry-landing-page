let navigation = document.getElementById("navigation");
let navicon = document.getElementById("navicon");

let cardstyle = document.getElementById("cardstyle");
let NorthAmerica = document.getElementById("NorthAmerica");
let Africa = document.getElementById("Africa");
let Astralia = document.getElementById("Astralia");
let SouthAmerica = document.getElementById("SouthAmerica");
let Asia = document.getElementById("Asia");

let whychoose = document.getElementById("whychoose");
let discription = document.getElementById("discription");

navicon.addEventListener("mouseover", () => {
  navigation.className = "navpop-up";
});
navigation.addEventListener("mouseleave", () => {
  navigation.className = "navpop-down";
});

NorthAmerica.addEventListener("mouseover", () => {
  cardstyle.className = "continent-popup";
  whychoose.textContent = "Why Choose North America Laundry Service?";
  discription.textContent =
    "North America Laundry Service is known for its reliable and on-time services, ensuring customer satisfaction every step of the way. With a focus on eco-friendly practices, the service uses sustainable methods and detergents to minimize environmental impact. Their experienced team handles every garment with care, delivering exceptional results. Plus, with easy scheduling and convenient doorstep delivery, laundry has never been more hassle-free.";
});

NorthAmerica.addEventListener("mouseleave", () => {
  cardstyle.className = "continent-down";
});


let myform = document.getElementById("myform");
let Nameinputer = document.getElementById("Nameinputer");
let Phone = document.getElementById("Phone");
let address = document.getElementById("address");
let section = document.getElementById("section");

myform.addEventListener("submit", (e) => {
  console.log("rati");
  e.preventDefault();
  console.log(section.value);
  console.log(address.value);
  console.log(Phone.value);
  console.log(Nameinputer.value);
});

let  userinfo = document.getElementById("userinfo")
let  appenhere = document.getElementById("appenhere")

let showanotheruser = 3;

async function getData() {
  try {
    const limit = 2; // Ensure you define the limit for the number of users
    const res = await fetch(`https://dummyjson.com/users?limit=${limit}`);
    const data = await res.json();
    const users = data.users;
    
    appenhere.innerHTML = ""; 
    
    users.forEach((element) => {
      console.log(element);
      const userDiv = document.createElement("div");
      userDiv.className = "fetchbox";
      
      userDiv.innerHTML = `
      <div class="rating">
      <svg width="175" height="23" viewBox="0 0 175 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- SVG content -->
      </svg>
      </div>
      <div class="recdisc">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="userprofile">
      <img src="${element.image}" alt="">
      <div id="userinfo" class="userinfo">
      <h1>${element.firstName} ${element.lastName}</h1>
      <span>Reviews On Google</span>
      </div>
      </div>
      `;
      
      appenhere.appendChild(userDiv);
    });
  } catch (error) {
    console.log(error);
  }
}
getData();

let  appenhere2 = document.getElementById("appenhere2")

async function getData2() {
  try {
    const limit2 = 4; // Ensure you define the limit for the number of users
    const res = await fetch(`https://dummyjson.com/users/?limit=${limit2}`);
    const data = await res.json();
    const users = data.users;

    appenhere2.innerHTML = ""; 

    users.forEach((element) => {
      console.log(element);
      const userDiv = document.createElement("div");
      userDiv.className = "fetchbox";

      userDiv.innerHTML = `
        <div class="rating">
          <svg width="175" height="23" viewBox="0 0 175 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- SVG content -->
          </svg>
        </div>
        <div class="recdisc">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="userprofile">
          <img src="${element.image}" alt="">
          <div id="userinfo" class="userinfo">
            <h1>${element.firstName} ${element.lastName}</h1>
            <span>Reviews On Google</span>
          </div>
        </div>
      `;

      appenhere2.appendChild(userDiv);
    });
  } catch (error) {
    console.log(error);
  }
}

getData2();



