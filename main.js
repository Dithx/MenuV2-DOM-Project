const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.59,
        img: "img/Foods/Breakfast/item-1.jpg",
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "img/Foods/Lunch/item-1.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "img/Foods/Shakes/item-1.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "img/Foods/Breakfast/item-2.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "img/Foods/Lunch/item-2.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "img/Foods/Shakes/item-2.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "img/Foods/Breakfast/item-3.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      },
      {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "img/Foods/Lunch/item-3.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "img/Foods/Shakes/item-3.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
      {
        id: 10,
        title: "steak dinner jumbo",
        category: "dinner",
        price: 45.89,
        img: "img/Foods/Dinner/item-1.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
      {
        id: 11,
        title: "steak dinner",
        category: "dinner",
        price: 39.99,
        img: "img/Foods/Dinner/item-2.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
      {
        id: 12,
        title: "steak pizza",
        category: "dinner",
        price: 21.59,
        img: "img/Foods/Dinner/item-3.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
];

const menuContainer = document.querySelector('.menu-container');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', ()=>{
    displayMenuItems();
    displayMenuButton();
})
 
function displayMenuButton(){
    // reduce category menjadi tunggal pada array menu
    const buttons = menu.reduce(
        function(values, item){
        // jika array values tidak terdapat category pada item.category maka akan ditambahkan
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },
    // inisialisasi akumulasi menjadi array
    ["all"],
    );

    console.log(buttons);

    // create button berdasarkan category
    const createBtn = buttons.map((category)=>{
        return `<button class="filter-btn" data-id=${category}>${category}</button>`;
    }).join("");
    btnContainer.innerHTML= createBtn;

    const allButtons = document.querySelectorAll('.filter-btn');
    allButtons.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
            const category = btn.dataset.id;
            const menuCategory = menu.filter((menuItem)=>{
                if(menuItem.category === category){
                    return menuItem;
                }
            })
            console.log(category);
            console.log(menuCategory);
            
            if(category === "all"){
                displayMenuItems()
            }else{
                displayMenuItems(menuCategory);
            }
        });
    });

}

function displayMenuItems(menuItems=menu){
    const items = menuItems.map((item)=>{
        return `
        <article class="menu-item">
            <img src="${item.img}">
            <div class="item-info">
                <header>
                    <h3>${item.title}</h3>
                    <hr>
                </header>
                <div class="item-text">
                    <p>${item.desc}</p>
                </div>
            </div>
        </article>
        `
    }).join("");
    menuContainer.innerHTML = items;
}