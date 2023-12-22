let coloroption = localStorage.getItem("color-option");
if(coloroption !== null){
    document.documentElement.style.setProperty("--main-color", coloroption)
    document.querySelectorAll(".option-box li").forEach(el => {
        el.classList.remove("active");
        if(el.dataset.color === coloroption){
            el.classList.add("active");
        }
    })
}
// ------------------------------------------------------------
let randomlocal = localStorage.getItem("random-bg");
if(randomlocal !== null){
   
    document.querySelectorAll(".background .active").forEach(ele => {
    ele.classList.remove("active");
    })
    if(randomlocal === 'true'){
        document.querySelector(".option-box .background .yes").classList.add("active")
    }
    else{
        document.querySelector(".option-box .background .no").classList.add("active")
    }
}
//  ------------------------------------------------------------------------------------------------------
let colorli = document.querySelectorAll(".option-box li");
colorli.forEach(li => {
    li.addEventListener("click" , (el) => {
        document.documentElement.style.setProperty("--main-color" , el.target.dataset.color);        
        // el.target.parentElement.querySelectorAll(".active").forEach(ele =>
        //     {ele.classList.remove("active")})
        // el.target.classList.add("active");
        handleoption(el)
        window.localStorage.setItem("color-option", el.target.dataset.color)
    })
}) 
// ----------------------------------------------------------------------
function handleoption(el){
    el.target.parentElement.querySelectorAll(".active").forEach(ele =>
        {ele.classList.remove("active")})
    el.target.classList.add("active");
}

// --------------------------------------------------------------------------------
let toggleclass = document.querySelector(".setting-box i");
toggleclass.onclick = function(){
    toggleclass.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open")
}
// -----------------------------------------------------------------------
let back = ["land-1.jpg","land-2.jpg","land-3.jpg","land-4.jpg"]
let landing = document.querySelector(".landing");
let stoprandom;
let backgroundoption = true;
function operationbackgroun(){
    stoprandom = setInterval(() => {
            let rand = Math.floor(Math.random() * back.length);
            landing.style.backgroundImage = 'url("imgs/' + back[rand] +'")';
        },1000)
    }
document.querySelectorAll(".option-box .background span").forEach(span =>{
    span.addEventListener("click" , (e) => {
        // document.querySelectorAll(".option-box .active").forEach((ele) => {
        //     ele.classList.remove("active")
        // })
        // e.target.classList.add("active");
        handleoption(e)
        if(e.target.dataset.background === 'yes'){
            backgroundoption === true;
            operationbackgroun();
            localStorage.setItem("random-bg", true)
        }
        else{
            backgroundoption === false;
            clearInterval(stoprandom)
            localStorage.setItem("random-bg", false);
        }
    })
})
function operationbackgroun(){
    if(backgroundoption === true){
        stoprandom = setInterval(() => {
            let rand = Math.floor(Math.random() * back.length);
            landing.style.backgroundImage = 'url("imgs/' + back[rand] +'")';
        },1000)
    }
}
// --------------------------------------------------------
let skills = document.querySelector(".skills");
window.onscroll = function(){
    let skillstop = skills.offsetTop;
    let skillsheight = skills.offsetHeight;
    let windowheight = this.innerHeight;
    let windowscrolltop = this.pageYOffset;
    if(windowscrolltop > (skillstop + skillsheight - windowheight)){
        let allskills = document.querySelectorAll(".info-skills .percent-skill span");
        allskills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
    })
    }
}
//-------------------------------------------------------------------------------------------------- 
document.querySelectorAll(".gallery .images-box img").forEach((img) => {
    img.addEventListener("click" , e => {
        let popupgallary = document.createElement("div")
        popupgallary.className = "popup-page";
        let popupbox = document.createElement("div")
        popupbox.className = "popup-box";
        if(img.alt !== null){
            let titlepopup = document.querySelector("h3");
            titlepopup.innerText = img.alt;
            popupbox.appendChild(titlepopup)
        }
        let imagepopup = document.createElement("img");
        imagepopup.className = "imagepopup"
        imagepopup.src = img.src;
        let spanpopup = document.createElement("span");
        spanpopup.innerText = "x";
        popupbox.appendChild(imagepopup);
        popupbox.appendChild(spanpopup);
        popupgallary.appendChild(popupbox);
        document.body.appendChild(popupgallary);
        spanpopup.onclick = function(){
            popupgallary.remove();
            popupbox.remove();
        }
    })
})
// ----------------------------------------------------------------------
let bullet = document.querySelectorAll(".allbullets .ourbull");
let headerlink = document.querySelectorAll(".header ul li a");
function scrollsomewhere(e){
    e.forEach(e => {
        e.addEventListener("click" , e => {
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}
scrollsomewhere(bullet);
scrollsomewhere(headerlink);
// -----------------------------------------------------------------------------------
let showbullet = document.querySelectorAll(".option-box .bulletoption span");
let ourbullet = document.querySelector(".allbullets");
showbullet.forEach(bullet => {
    bullet.addEventListener("click" , e => {
        handleoption(e)
        if(e.target.dataset.display === 'block'){
            ourbullet.style.display = 'block'
            localStorage.setItem("option-bullet", e.target.dataset.display)
        }else{
            ourbullet.style.display = 'none';
            localStorage.setItem("option-bullet", e.target.dataset.display)
        }
    })
})
let localbullet = localStorage.getItem("option-bullet")
if(localbullet !== null){
    showbullet.forEach(e => {
        e.classList.remove("active")
    })
    if(localbullet === "block"){
        document.querySelector(".option-box .bulletoption .yes").classList.add("active");
    }else{
        document.querySelector(".option-box .bulletoption .no").classList.add("active");
    }
}
// -------------------------------------------------------------------------------------------------
document.querySelector(".setting-box .resetoption").onclick = function(){
    localStorage.clear();
    window.location.reload()
}
//----------------------------------------------------------------------------------------------------- 
let showmenue = document.querySelector(".header .barlink i");
let links = document.querySelector(".barlink ul");
showmenue.onclick = function(){
    showmenue.classList.toggle("showmenue");
    links.classList.toggle("open")
}    
document.addEventListener("click" , (e) => {
    if(e.target !== showmenue && e.target !== links){
        if(showmenue.classList.contains("showmenue") && links.classList.contains("open")){
            showmenue.classList.toggle("showmenue");
            links.classList.toggle("open")
        }
    }
})
links.onclick = function(e){
    e.stopPropagation();
}
//-----------------------------------------------------------------------------------------------------

