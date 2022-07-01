// let pop_up=document.getElementById('pop');
// pop_up.style.color="red";
let p_btn=document.querySelector('#pro');
const images=["img1","img2","img3","img4","img5"];
let carosle=document.getElementById("carosel");
const KEY="UNIQUEFORFARMINGWEB";
let flag_carosel=1;
let flag_burger=true;
let testimonial__data=[
    {
        title:"Allan Fernandis",
        location:"mumbai",
        para:"I have been a regular customer of Organic Tattva. The masala tea from Organic Tattva is one of my favorite products. I start my day with the masala tea as it energizes me and prepares me for my busy day "
    },
    {
        title:"Vijay Dhanraj",
        location:"Lucknow",
        para:"I had been searching for organic foods for a long time before I tried Organic Tattva. And since then I have given up on my search. This is my destination for all sorts of organic products now. Food made from Organic Tattva products is both healthy and tasty. That is why I recommend Organic Tattva to everyone."
    }
];
let toggleTestimonial=0;

function changeBurger(){
    let navHid=document.getElementById("navbarhidder");
    if(flag_burger){
        navHid.classList.remove("none");
        navHid.classList.add("navbar-hidden");
    }else{
        navHid.classList.remove("navbar-hidden");
        navHid.classList.add("none");
    }
    flag_burger=!flag_burger;
}

function gotoLeft(){
    carosle.src=`./images/${images[flag_carosel]}.jpg`;
    flag_carosel=(flag_carosel-1+images.length)%images.length;
}
function gotoRight(){
    carosle.src=`./images/${images[flag_carosel]}.jpg`;
    flag_carosel=(flag_carosel+1)%images.length;
}

function handleSignin(){
    
}
function logouted(){
    

}
function handleLogout(){
  
    
}
function gotoRightTestimonial(){
    let title=document.getElementById("testimonial__1");
    let location=document.getElementById("testimonial__2");
    let para=document.getElementById("testimonial__3");
    title.innerHTML=testimonial__data[toggleTestimonial].title;
    location.innerHTML=testimonial__data[toggleTestimonial].location;
    para.innerHTML=testimonial__data[toggleTestimonial].para;
    
    toggleTestimonial=(toggleTestimonial+1)%testimonial__data.length;
}
window.onload=()=>{
    setInterval(gotoRight,2000);
    setInterval(gotoRightTestimonial,1500);
    
}

//firebase authstateChange

auth.onAuthStateChanged((user)=>{
    if(user){
        console.log("You are Login");
        document.getElementById("navbar-logout").style.display="block";
        document.getElementById("navbar-signin").style.display="none";
            
        
    }
    else {

        //  pop_up.style.href="#";
        //  pop_up.style.border="2px solid red";
        console.log("You are Not Login");
        document.getElementById("navbar-logout").style.display="none";
        document.getElementById("navbar-signin").style.display="block";
    }
})

// p_btn.addEventListener('click',()=>{
//     alert("btn clicked");
// })



/*

auth.onAuthStateChanged(user=>{
    if(user){

    }else{
        
    }
})
*/