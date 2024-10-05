let toggle = 0;

const nav_container = document.createElement("div");
nav_container.setAttribute("id", "nav_container")



const home= document.createElement("a");
home.textContent = "Home";
home.setAttribute("class", "nav_element")
home.setAttribute("href", "./index.html")


const burger_nav= document.createElement("a");
burger_nav.textContent = "Ben's Burger";
burger_nav.setAttribute("class", "nav_element")
burger_nav.setAttribute("href", "./burger.html")

const egg_nav= document.createElement("a");
egg_nav.textContent = "Ben's Burnt Egg";
egg_nav.setAttribute("class", "nav_element")
egg_nav.setAttribute("href", "./fried_egg.html")


const noodles_nav= document.createElement("a");
noodles_nav.textContent = "Ben's Noodles";
noodles_nav.setAttribute("class", "nav_element")
noodles_nav.setAttribute("href", "./instant_noodles.html")


nav_container.appendChild(home);
nav_container.appendChild(burger_nav);
nav_container.appendChild(egg_nav);
nav_container.appendChild(noodles_nav);



function abc()
{
    if (toggle == 0){
    document.querySelector(".drop_down").appendChild(nav_container);
    console.log('met');
    toggle = 1;
    } else
    {
    document.querySelector(".drop_down").removeChild(nav_container);
    toggle = 0;
    }
}

document.querySelector(".drop_down").addEventListener("click", abc);