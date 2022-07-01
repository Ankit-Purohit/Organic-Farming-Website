
let outerContainer=document.getElementById("outer-container");

function createProduct(title,desc,price,img_url){
    let div_outer=document.createElement("div");
    let div_inner1=document.createElement("div");
    let div_inner2=document.createElement("div");
    let img=document.createElement("img");
    div_outer.classList.add("product__");
    div_inner1.classList.add("p__image");
    div_inner2.classList.add("p__description");
    img.classList.add("img");
    img.src=img_url;
    let head2=document.createElement("h2");
    let para=document.createElement("p");
    let head3=document.createElement("h2");
    head2.textContent=title;
    para.textContent=desc;
    head3.textContent=`price : ${price}`;
    let btn=document.createElement("button");
    btn.classList.add("btn");
    btn.innerHTML="BUY NOW";

    // appending

    div_inner1.appendChild(img);
    div_inner2.appendChild(head2);
    div_inner2.appendChild(para);
    div_inner2.appendChild(head3);
    div_inner2.appendChild(btn);
    div_outer.appendChild(div_inner1);
    div_outer.appendChild(div_inner2);
    return div_outer;
}
const product=[
    {
        title:"Van Heusen",
        desc:"this is my product Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis.",
        price:"799",
        imageURL:"p1.webp"
    },
    {
        title:"Van Heusen",
        desc:"this is my product Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis.",
        price:"79",
        imageURL:"p1.webp"
    },
    {
        title:"Van Heusen",
        desc:"this is my product Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis.",
        price:"799",
        imageURL:"p1.webp"
    },
    {
        title:"Van Heusen",
        desc:"this is my product Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis.",
        price:"799",
        imageURL:"p1.webp"
    },
    {
        title:"Van Heusen",
        desc:"this is my product Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis.",
        price:"799",
        imageURL:"p1.webp"
    },
    {
        title:"Van Heusen",
        desc:"this is my product Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis.",
        price:"799",
        imageURL:"p1.webp"
    },
    {
        title:"Van Heusen",
        desc:"this is my product Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis.",
        price:"799",
        imageURL:"p1.webp"
    },
    {
        title:"Van Heusen",
        desc:"this is my product Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis.",
        price:"799",
        imageURL:"p1.webp"
    },
    {
        title:"Van Heusen",
        desc:"this is my product Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis.",
        price:"799",
        imageURL:"p1.webp"
    },
    {
        title:"Van Heusen",
        desc:"this is my product Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis.",
        price:"799",
        imageURL:"p1.webp"
    },
    {
        title:"Van Heusen",
        desc:"this is my product Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis.",
        price:"799",
        imageURL:"p1.webp"
    },
    {
        title:"Van Heusen",
        desc:"this is my product Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis.",
        price:"799",
        imageURL:"p1.webp"
    },
]

window.onload=()=>{
    product.map(prd=>{
        outerContainer.appendChild(createProduct(prd.title,prd.desc,prd.price,prd.imageURL));
    })
}


auth.onAuthStateChanged(user=>{
    if(user){
        console.log("Login");

    }else{
        //  body.appendChild(pop);
         
         alert("not login ");
        console.log("Not login");
        window.location.replace("/");
    }
})

