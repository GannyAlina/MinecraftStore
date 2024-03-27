let database=[
    // гриф выживание   
    {
        pages:[
            {
                name:"Донаты",
                cards:[
                    {
                        id:0,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:1,
                        title:"какой-то донат",
                        price:100,
                        img: "/imgs/card_img_def.png"
                    },         
                ]
            },
            {
                name:"Донат валюта",
                cards:[
                    {
                        id:2,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                ]
            },
            {
                name:"Кейсы",
                cards:[
                    {
                        id:4,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:5,
                        title:"какой-то донат",
                        price:100,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:6,
                        title:"какой-то донат",
                        price:100,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:7,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:0,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:0,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:0,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:0,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:0,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:0,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:0,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:0,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:0,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:0,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:0,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:0,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:0,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:0,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:0,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                    {
                        id:0,
                        title:"какой-то донат",
                        price:50,
                        img:"/imgs/card_img_def.png"
                    },
                ]
            },
            {
                name:"Услуги",
                cards:[{
                    id:8,
                    title:"какой-то донат",
                    price:50,
                    img:"/imgs/card_img_def.png"
                },
                {
                    id:9,
                    title:"какой-то донат",
                    price:50,
                    img:"/imgs/card_img_def.png"
                },]
            },

        ]
    },
    // 100 игроков
    {
        pages:[
            {
                name:"проходка на 100 игроков",
                cards:[]
            },
            {
                name:"",
                cards:[]
            },
            
        ]
    },
    // город
    {
        pages:[
            {
                name:"Донаты",
                cards:[]
            },
            {
                name:"Донат валюта",
                cards:[]
            },
            {
                name:"Услуги",
                cards:[]
            },
        

        ]
    },
    // мини-игры
    {
        pages:[
            {
                name:"Донаты",
                cards:[]
            },
            {
                name:"Донат валюта",
                cards:[]
            },
            {
                name:"Кейсы",
                cards:[]
            },
            {
                name:"Услуги",
                cards:[]
            },
            {
                name:"Кейсы",
                cards:[]
            },
            {
                name:"Услуги",
                cards:[]
            },

        ]
    },
    // мерч
    {
        pages:[
            {
                name:"Донаты",
                cards:[]
            },
            {
                name:"Донат валюта",
                cards:[]
            },
            {
                name:"Кейсы",
                cards:[]
            },
            {
                name:"Услуги",
                cards:[]
            },

        ]
    },

]
let gametype=0
let gamesection=0
let allgametypes=document.querySelectorAll(".showCase__gametype")
let gamespagesbox=document.querySelector(".showCase__secondNav")
let allcardsbox=document.querySelector(".showCaseCards")
allgametypes.forEach((item)=>{
    item.addEventListener("click", function(e){
        allgametypes.forEach(el=>{
            el.classList.remove("active")
        })
        item.classList.add("active")
        e.preventDefault()
        gametype=item.id
        allcardsbox.innerHTML=""
        gamespagesbox.innerHTML=""
        database[item.id].pages.forEach(element => {
            gamespagesbox.innerHTML+=`
            <a href="" class="showCase__page">
                                ${element.name}
                            </a>
            `
        });
        addEventstopages(item.id)    
    })
})
function addEventstopages(queryId){
    let allshowcasepages=document.querySelectorAll(".showCase__page")
    for (let i = 0; i < allshowcasepages.length; i++) {
        allshowcasepages[i].addEventListener("click",function(e){
            e.preventDefault()
            allshowcasepages.forEach(el=>{
                el.classList.remove("active")
            })
            allshowcasepages[i].classList.add("active")
            allcardsbox.innerHTML=("")
            console.log(queryId)
            database[queryId].pages[i].cards.forEach(element=>{
                allcardsbox.innerHTML+=`
                <div class="card">
                    <img src="${element.img}" alt=" ">
                    <h3 class="text-1"> ${element.title} </h3>
                    <button class="card-btn" data-price=${element.price} data-title=${element.title}>
                        <img src="imgs/Favorite Cart.svg">
                    </button>
                    <p class="card-priese">
                        ${element.price} рублей
                    </p>
                </div>
                
                `
            })
            let allButtons=document.querySelectorAll(".card-btn")
            allButtons.forEach(item=>{
                item.addEventListener("click",function(){
                    
                    document.querySelector(".PoppapTitle").innerHTML=item.dataset.title
                    document.querySelector(".PoppapPrice").innerHTML=item.dataset.price
                    showPoppap()
                })
            })
        })
    }
    
}

let Poppap=document.querySelector(".Poppap")
function showPoppap (){
    Poppap.classList.add("PoppapShow")
}
function hidePoppap (){
    Poppap.classList.remove("PoppapShow")
}