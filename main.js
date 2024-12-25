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
    const limit = 2;
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
                <path
                    d="M10.3672 2.20312L7.82812 7.39844L2.08594 8.21875C1.07031 8.375 0.679688 9.625 1.42188 10.3672L5.52344 14.3906L4.54688 20.0547C4.39062 21.0703 5.48438 21.8516 6.38281 21.3828L11.5 18.6875L16.5781 21.3828C17.4766 21.8516 18.5703 21.0703 18.4141 20.0547L17.4375 14.3906L21.5391 10.3672C22.2812 9.625 21.8906 8.375 20.875 8.21875L15.1719 7.39844L12.5938 2.20312C12.1641 1.30469 10.8359 1.26562 10.3672 2.20312Z"
                    fill="#FC9700" />
                <path
                    d="M48.3672 2.20312L45.8281 7.39844L40.0859 8.21875C39.0703 8.375 38.6797 9.625 39.4219 10.3672L43.5234 14.3906L42.5469 20.0547C42.3906 21.0703 43.4844 21.8516 44.3828 21.3828L49.5 18.6875L54.5781 21.3828C55.4766 21.8516 56.5703 21.0703 56.4141 20.0547L55.4375 14.3906L59.5391 10.3672C60.2812 9.625 59.8906 8.375 58.875 8.21875L53.1719 7.39844L50.5938 2.20312C50.1641 1.30469 48.8359 1.26562 48.3672 2.20312Z"
                    fill="#FC9700" />
                <path
                    d="M86.3672 2.20312L83.8281 7.39844L78.0859 8.21875C77.0703 8.375 76.6797 9.625 77.4219 10.3672L81.5234 14.3906L80.5469 20.0547C80.3906 21.0703 81.4844 21.8516 82.3828 21.3828L87.5 18.6875L92.5781 21.3828C93.4766 21.8516 94.5703 21.0703 94.4141 20.0547L93.4375 14.3906L97.5391 10.3672C98.2812 9.625 97.8906 8.375 96.875 8.21875L91.1719 7.39844L88.5938 2.20312C88.1641 1.30469 86.8359 1.26562 86.3672 2.20312Z"
                    fill="#FC9700" />
                <path
                    d="M124.367 2.20312L121.828 7.39844L116.086 8.21875C115.07 8.375 114.68 9.625 115.422 10.3672L119.523 14.3906L118.547 20.0547C118.391 21.0703 119.484 21.8516 120.383 21.3828L125.5 18.6875L130.578 21.3828C131.477 21.8516 132.57 21.0703 132.414 20.0547L131.438 14.3906L135.539 10.3672C136.281 9.625 135.891 8.375 134.875 8.21875L129.172 7.39844L126.594 2.20312C126.164 1.30469 124.836 1.26562 124.367 2.20312Z"
                    fill="#FC9700" />
                <path
                    d="M172.875 8.21875L167.172 7.39844L164.594 2.20312C164.359 1.73438 163.93 1.5 163.461 1.5C163.031 1.5 162.602 1.73438 162.367 2.20312L159.789 7.39844L154.086 8.21875C153.07 8.375 152.641 9.625 153.383 10.3672L157.523 14.3906L156.547 20.0547C156.391 20.875 157.055 21.5 157.797 21.5C157.992 21.5 158.188 21.4609 158.383 21.3828L163.461 18.6875L168.578 21.3828C168.773 21.4609 168.969 21.5 169.164 21.5C169.906 21.5 170.531 20.875 170.414 20.0547L169.438 14.3906L173.578 10.3672C174.32 9.625 173.891 8.375 172.875 8.21875ZM168.109 13.0234L167.406 13.7266L167.562 14.7031L168.344 19.1172L164.359 17.0469L163.461 16.5781L163.5 4.19531L165.492 8.21875L165.922 9.11719L166.898 9.23438L171.352 9.89844L168.109 13.0234Z"
                    fill="#FC9700" />
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
    const limit2 = 4; 
    const res = await fetch(`https://dummyjson.com/users/?limit=${limit2}`);
    const data = await res.json();
    const users = data.users.slice(2, 6);
    
    appenhere2.innerHTML = ""; 
    
    users.forEach((element) => {
      console.log(element);
      const userDiv = document.createElement("div");
      userDiv.className = "fetchbox";
      
      userDiv.innerHTML = `
      <div class="rating">
          <svg width="175" height="23" viewBox="0 0 175 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.3672 2.20312L7.82812 7.39844L2.08594 8.21875C1.07031 8.375 0.679688 9.625 1.42188 10.3672L5.52344 14.3906L4.54688 20.0547C4.39062 21.0703 5.48438 21.8516 6.38281 21.3828L11.5 18.6875L16.5781 21.3828C17.4766 21.8516 18.5703 21.0703 18.4141 20.0547L17.4375 14.3906L21.5391 10.3672C22.2812 9.625 21.8906 8.375 20.875 8.21875L15.1719 7.39844L12.5938 2.20312C12.1641 1.30469 10.8359 1.26562 10.3672 2.20312Z"
                    fill="#FC9700" />
                <path
                    d="M48.3672 2.20312L45.8281 7.39844L40.0859 8.21875C39.0703 8.375 38.6797 9.625 39.4219 10.3672L43.5234 14.3906L42.5469 20.0547C42.3906 21.0703 43.4844 21.8516 44.3828 21.3828L49.5 18.6875L54.5781 21.3828C55.4766 21.8516 56.5703 21.0703 56.4141 20.0547L55.4375 14.3906L59.5391 10.3672C60.2812 9.625 59.8906 8.375 58.875 8.21875L53.1719 7.39844L50.5938 2.20312C50.1641 1.30469 48.8359 1.26562 48.3672 2.20312Z"
                    fill="#FC9700" />
                <path
                    d="M86.3672 2.20312L83.8281 7.39844L78.0859 8.21875C77.0703 8.375 76.6797 9.625 77.4219 10.3672L81.5234 14.3906L80.5469 20.0547C80.3906 21.0703 81.4844 21.8516 82.3828 21.3828L87.5 18.6875L92.5781 21.3828C93.4766 21.8516 94.5703 21.0703 94.4141 20.0547L93.4375 14.3906L97.5391 10.3672C98.2812 9.625 97.8906 8.375 96.875 8.21875L91.1719 7.39844L88.5938 2.20312C88.1641 1.30469 86.8359 1.26562 86.3672 2.20312Z"
                    fill="#FC9700" />
                <path
                    d="M124.367 2.20312L121.828 7.39844L116.086 8.21875C115.07 8.375 114.68 9.625 115.422 10.3672L119.523 14.3906L118.547 20.0547C118.391 21.0703 119.484 21.8516 120.383 21.3828L125.5 18.6875L130.578 21.3828C131.477 21.8516 132.57 21.0703 132.414 20.0547L131.438 14.3906L135.539 10.3672C136.281 9.625 135.891 8.375 134.875 8.21875L129.172 7.39844L126.594 2.20312C126.164 1.30469 124.836 1.26562 124.367 2.20312Z"
                    fill="#FC9700" />
                <path
                    d="M172.875 8.21875L167.172 7.39844L164.594 2.20312C164.359 1.73438 163.93 1.5 163.461 1.5C163.031 1.5 162.602 1.73438 162.367 2.20312L159.789 7.39844L154.086 8.21875C153.07 8.375 152.641 9.625 153.383 10.3672L157.523 14.3906L156.547 20.0547C156.391 20.875 157.055 21.5 157.797 21.5C157.992 21.5 158.188 21.4609 158.383 21.3828L163.461 18.6875L168.578 21.3828C168.773 21.4609 168.969 21.5 169.164 21.5C169.906 21.5 170.531 20.875 170.414 20.0547L169.438 14.3906L173.578 10.3672C174.32 9.625 173.891 8.375 172.875 8.21875ZM168.109 13.0234L167.406 13.7266L167.562 14.7031L168.344 19.1172L164.359 17.0469L163.461 16.5781L163.5 4.19531L165.492 8.21875L165.922 9.11719L166.898 9.23438L171.352 9.89844L168.109 13.0234Z"
                    fill="#FC9700" />
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

let  appenhere3 = document.getElementById("appenhere3")

async function getData3() {
  try {
    const limit3 = 6; 
    const res = await fetch(`https://dummyjson.com/users/?limit=${limit3}`);
    const data = await res.json();
    const users = data.users.slice(4, 6);

    appenhere3.innerHTML = ""; 

    users.forEach((element) => {
      console.log(element);
      const userDiv = document.createElement("div");
      userDiv.className = "fetchbox";

      userDiv.innerHTML = `
        <div class="rating">
        <svg width="175" height="23" viewBox="0 0 175 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.3672 2.20312L7.82812 7.39844L2.08594 8.21875C1.07031 8.375 0.679688 9.625 1.42188 10.3672L5.52344 14.3906L4.54688 20.0547C4.39062 21.0703 5.48438 21.8516 6.38281 21.3828L11.5 18.6875L16.5781 21.3828C17.4766 21.8516 18.5703 21.0703 18.4141 20.0547L17.4375 14.3906L21.5391 10.3672C22.2812 9.625 21.8906 8.375 20.875 8.21875L15.1719 7.39844L12.5938 2.20312C12.1641 1.30469 10.8359 1.26562 10.3672 2.20312Z"
                    fill="#FC9700" />
                <path
                    d="M48.3672 2.20312L45.8281 7.39844L40.0859 8.21875C39.0703 8.375 38.6797 9.625 39.4219 10.3672L43.5234 14.3906L42.5469 20.0547C42.3906 21.0703 43.4844 21.8516 44.3828 21.3828L49.5 18.6875L54.5781 21.3828C55.4766 21.8516 56.5703 21.0703 56.4141 20.0547L55.4375 14.3906L59.5391 10.3672C60.2812 9.625 59.8906 8.375 58.875 8.21875L53.1719 7.39844L50.5938 2.20312C50.1641 1.30469 48.8359 1.26562 48.3672 2.20312Z"
                    fill="#FC9700" />
                <path
                    d="M86.3672 2.20312L83.8281 7.39844L78.0859 8.21875C77.0703 8.375 76.6797 9.625 77.4219 10.3672L81.5234 14.3906L80.5469 20.0547C80.3906 21.0703 81.4844 21.8516 82.3828 21.3828L87.5 18.6875L92.5781 21.3828C93.4766 21.8516 94.5703 21.0703 94.4141 20.0547L93.4375 14.3906L97.5391 10.3672C98.2812 9.625 97.8906 8.375 96.875 8.21875L91.1719 7.39844L88.5938 2.20312C88.1641 1.30469 86.8359 1.26562 86.3672 2.20312Z"
                    fill="#FC9700" />
                <path
                    d="M124.367 2.20312L121.828 7.39844L116.086 8.21875C115.07 8.375 114.68 9.625 115.422 10.3672L119.523 14.3906L118.547 20.0547C118.391 21.0703 119.484 21.8516 120.383 21.3828L125.5 18.6875L130.578 21.3828C131.477 21.8516 132.57 21.0703 132.414 20.0547L131.438 14.3906L135.539 10.3672C136.281 9.625 135.891 8.375 134.875 8.21875L129.172 7.39844L126.594 2.20312C126.164 1.30469 124.836 1.26562 124.367 2.20312Z"
                    fill="#FC9700" />
                <path
                    d="M172.875 8.21875L167.172 7.39844L164.594 2.20312C164.359 1.73438 163.93 1.5 163.461 1.5C163.031 1.5 162.602 1.73438 162.367 2.20312L159.789 7.39844L154.086 8.21875C153.07 8.375 152.641 9.625 153.383 10.3672L157.523 14.3906L156.547 20.0547C156.391 20.875 157.055 21.5 157.797 21.5C157.992 21.5 158.188 21.4609 158.383 21.3828L163.461 18.6875L168.578 21.3828C168.773 21.4609 168.969 21.5 169.164 21.5C169.906 21.5 170.531 20.875 170.414 20.0547L169.438 14.3906L173.578 10.3672C174.32 9.625 173.891 8.375 172.875 8.21875ZM168.109 13.0234L167.406 13.7266L167.562 14.7031L168.344 19.1172L164.359 17.0469L163.461 16.5781L163.5 4.19531L165.492 8.21875L165.922 9.11719L166.898 9.23438L171.352 9.89844L168.109 13.0234Z"
                    fill="#FC9700" />
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

      appenhere3.appendChild(userDiv);
    });
  } catch (error) {
    console.log(error);
  }
}

getData3()


let clgname = document.getElementById("clgname")

let clglastname = document.getElementById("clglastname")

let clgemail = document.getElementById("clgemail")

let clgsubj = document.getElementById("clgsubj")

let clgmesage = document.getElementById("clgmesage")

let messageform = document.getElementById("messageform")


messageform.addEventListener("submit" , (e) =>{
    e.preventDefault()
    console.log(clgname.value);
    console.log(clglastname.value);
    console.log(clgemail.value);
    console.log(clgsubj.value);
    console.log(sendmessage.value);

    clgname.value = ""
    clglastname.value = ""
    clgemail.value = ""
    clgsubj.value = ""
    clgmesage.value = ""



})


let container = document.querySelector(".container");
let whiteElements = document.getElementsByClassName("white");
let talkbtn = document.getElementsByClassName("talkbtn");

container.addEventListener("mouseover", () => {
  for (let element of whiteElements) {
    element.style.color = "white";
  }

  for (let button of talkbtn) {
    button.style.backgroundColor = "white";
    button.style.color = "#3DB2FF";
  }
});

container.addEventListener("mouseout", () => {
  for (let element of whiteElements) {
    element.style.color = "";
  }

  for (let button of talkbtn) {
    button.style.backgroundColor = "";
    button.style.color = "";
  }
});


let footerform = document.getElementById("footerform")
let footeremail = document.getElementById("footeremail")

footerform.addEventListener("submit" , (e) => {
    e.preventDefault()
    console.log(footeremail.value);
})


let playvideo = document.getElementById("playvideo")
let videosdisplay = document.getElementById("videosdisplay")
let videodown = document.getElementById("videodown")


playvideo.addEventListener("click" , () => {
  videosdisplay.classList = "videobox"
})


videodown.addEventListener("click" , () => {
  videosdisplay.className = "videonone"
})



