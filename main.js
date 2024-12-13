let navigation = document.getElementById("navigation")
let navicon = document.getElementById("navicon")

let cardstyle = document.getElementById("cardstyle")
let NorthAmerica = document.getElementById("NorthAmerica")
let Africa = document.getElementById("Africa")
let Astralia = document.getElementById("Astralia")
let SouthAmerica = document.getElementById("SouthAmerica")
let Asia = document.getElementById("Asia")

let whychoose = document.getElementById("whychoose")
let discription = document.getElementById("discription")



navicon.addEventListener("mouseover" , () => {
    navigation.className = "navpop-up"
})
navigation.addEventListener("mouseleave" , () => {
    navigation.className = "navpop-down"
})

NorthAmerica.addEventListener("mouseover" , () => {
    cardstyle.className = "continent-popup"
    whychoose.textContent = "Why Choose North America Laundry Service?"
    discription.textContent = "North America Laundry Service is known for its reliable and on-time services, ensuring customer satisfaction every step of the way. With a focus on eco-friendly practices, the service uses sustainable methods and detergents to minimize environmental impact. Their experienced team handles every garment with care, delivering exceptional results. Plus, with easy scheduling and convenient doorstep delivery, laundry has never been more hassle-free."
})

NorthAmerica.addEventListener("mouseleave" , () => {
    cardstyle.className = "continent-down"
    
})


SouthAmerica.addEventListener("mouseover" , () => {
    cardstyle.className = "continent-popupSouthAmerica"
    whychoose.textContent = "Why Choose South America Laundry Service?"
    discription.textContent = "South America Laundry Service is known for its reliable and on-time services, ensuring customer satisfaction every step of the way. With a focus on eco-friendly practices, the service uses sustainable methods and detergents to minimize environmental impact. Their experienced team handles every garment with care, delivering exceptional results. Plus, with easy scheduling and convenient doorstep delivery, laundry has never been more hassle-free."
})

SouthAmerica.addEventListener("mouseleave" , () => {
    cardstyle.className = "continent-down"
})

Africa.addEventListener("mouseover" , () => {
    cardstyle.className = "continent-popupAfrica"
    whychoose.textContent = "Why Choose Africa Laundry Service?"
    discription.textContent = "Africa Laundry Service is known for its reliable and on-time services, ensuring customer satisfaction every step of the way. With a focus on eco-friendly practices, the service uses sustainable methods and detergents to minimize environmental impact. Their experienced team handles every garment with care, delivering exceptional results. Plus, with easy scheduling and convenient doorstep delivery, laundry has never been more hassle-free."
})

Africa.addEventListener("mouseleave" , () => {
    cardstyle.className = "continent-down"
})
Astralia.addEventListener("mouseover" , () => {
    cardstyle.className = "continent-popupAstralia"
    whychoose.textContent = "Why Choose Astralia Laundry Service?"
    discription.textContent = "Astralia Laundry Service is known for its reliable and on-time services, ensuring customer satisfaction every step of the way. With a focus on eco-friendly practices, the service uses sustainable methods and detergents to minimize environmental impact. Their experienced team handles every garment with care, delivering exceptional results. Plus, with easy scheduling and convenient doorstep delivery, laundry has never been more hassle-free."
})

Astralia.addEventListener("mouseleave" , () => {
    cardstyle.className = "continent-down"
})
Asia.addEventListener("mouseover" , () => {
    cardstyle.className = "continent-popupAsia"
    whychoose.textContent = "Why Choose Asia Laundry Service?"
    discription.textContent = "Asia Laundry Service is known for its reliable and on-time services, ensuring customer satisfaction every step of the way. With a focus on eco-friendly practices, the service uses sustainable methods and detergents to minimize environmental impact. Their experienced team handles every garment with care, delivering exceptional results. Plus, with easy scheduling and convenient doorstep delivery, laundry has never been more hassle-free."
})

Asia.addEventListener("mouseleave" , () => {
    cardstyle.className = "continent-down"
})



let myform = document.getElementById("myform")
let Nameinputer = document.getElementById("Nameinputer")
let Phone = document.getElementById("Phone")
let address = document.getElementById("address")
let section = document.getElementById("section")


myform.addEventListener("submit" , (e) =>{
    console.log("rati");
    e.preventDefault()
    getData()
    console.log(section.value);
    console.log(address.value);
    console.log(Phone.value);
    console.log(Nameinputer.value);
})

async function getData() {
    
    const res = await fetch(`https://dummyjson.com/users`)
    const data = await res.json()
    console.log(data);
}

