//Puts entire document inside the console//
let fruitCardContainer = document.getElementById ("fruitCardContainer");

//This function prints cards automatically for future additions//

let fruitCardItemsData = [{
    id:"yubarikingmeloncard",
    name: "Yubari King Melon",
    price: 200,
    desc: "These high priced melons are grown in Hokkaido, Japan. This expensive fruit is known for being sweet and flavorful. What makes them so unique is that their skin is perfectly smooth. Yubari King melons are grown in greenhouses in volcanic ash.",
    img: "images/YubariKingMelon.webp"
},
{
    id:"sembikiyacherrycard",
    name: "Sembikiya Cherry (Pack of 40)",
    price: 160,
    desc: "Sembikiya cherries are grown in small glasshouses. There they are monitored closely to ensure their size, color, and quality meet the exacting requirement for this premium fruit. For maximum visual appeal, the size and color of each one have to be identical.",
    img: "images/SembikiyaCherries.jpg"
},
{
    id:"dekoponcitruscard",
    name: "Dekopon Citrus (Pack of 4)",
    price: 80,
    desc: "This unique fruit balances intense sweetness with low acidity to create a wonderfully aromatic fruit experience. They are easy to peel with thin flesh, are seedless, and have meltingly soft flesh. They require an intensive cultivation process in temperature and humidity-controlled glasshouses. Once picked, they are cured for up to 40 days while the sugar level develops, and the acidity drops to under 1%.",
    img: "images/DekoponCitrus.jpg"
},
{
    id:"tomagomangocard",
    name: "Taiyo no Tomago Mango",
    price: 50,
    desc: "The name of these mangoes translates to egg of the sun. They have a high sugar content and spectacular coloring. Their hue can range from the deepest orange or red to purple. The texture of the pulp is meltingly soft, and even the skin can be eaten.",
    img: "images/TamagoMangoes.jpg"
},
{
    id:"sekaichiapplecard",
    name: "Seka-Ichi Apples (Pack of 8)",
    price: 150,
    desc: "The elevated price is due to its appearance and rarity. Cultivated since 1974, these Japanese apples can grow up to 38cm wide and weigh close to 1kg per fruit. One of the largest apple variants in the world, with superb juicy sweetness and crunchy texture. They’re also washed in honey before being sold.",
    img: "images/SekaIchiApples.jpg"
},
{
    id:"buddhapearcard",
    name: "Buddha Pears (Pack of 10)",
    price: 90,
    desc: "This juicy delight originates from China’s Hebei province, where Mr. Xianzhang Hao has developed an incredible Buddha pear in his backyard. He uses a mold to form the intricate design.",
    img: "images/BuddhaShapedPears.jpg"
},
{
    id:"densukewatermeloncard",
    name: "Densuke Watermelon",
    price: 200,
    desc: "Smooth, glossy-black, ball-shaped and sized like a large coconut, the Densuke watermelon is another Japanese invention. Crunchier, juicier and sweeter than regular watermelons. Only about 10,000 Densuke-s are produced annually, exclusive from Hokkaido. During growth, the melons are carefully shielded from sunlight to develop their dark sheen; nurtured in rich soil and freshwater.",
    img: "images/DensukeWatermelon.webp"
},
{
    id:"sembikiyastrawberrycard",
    name: "Sembikiya S'berry (Pack of 12)",
    price: 100,
    desc: "Vibrant red, impeccably shaped, topped with perfect green leaves and tastes soothingly sweet. The Sembikiya Queen Strawberries are named after one of the oldest and most venerable fruit shops in Japan. Meticulously grown, picked and packaged like individual rubies in gorgeous gift boxes.",
    img: "images/SembikiyaQueenStrawberries.jpg"
},];

//Function for storing data inside the basket so i can see which items specifically have been selected
let basket = [{
    id:"uniqueid",
    item: 0
}]; //Amend this

let generateFruitCardContainer = () => {
    return (fruitCardContainer.innerHTML = fruitCardItemsData.map((x)=>{
        let {id, name, price, desc, img } =x //This is destructuring, it saves time from having to constantly ${x.etc} underneath
        return `
        <div id=product-id-${id} class="fruitCard">
        <img width="346" src=${img} alt=""> 
    <div class="fruitCardDetails">
        <h2>${x.name}</h2>
        <p>${desc}</p>
        <div class="price-quantity">
            <h2>$ ${x.price} </h2>
            <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">0</div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
        </div>
        <a href="">Nutritional Info</a>
    </div>
    </div>
        `;
    }).join(""));
};

generateFruitCardContainer();

//This function updates the quantity counter + adds to basket//

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }

else{
    search.item += 1;
}
    
    //console.log(basket);
    update(selectedItem.id);
};


let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search.item === 0) return;

else{
    search.item -= 1;
}
    
    //console.log(basket);
    update(selectedItem.id);
};
let update = (id) => {
    let search = basket.find((x)=>x.id === id)
    // console.log(search.item);
    document.getElementById(id) .innerHTML = search.item;
    calculation ();
};

//The following function using ES6 Arrow function is for the cart calc
let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x, y) => x + y, 0);
    //console.log(basket.map((x)=>x.item).reduce((x, y) => x + y, 0));
}; 

// IMPORTANT TODO: IMPLEMENT LOCAL STORAGE COMPONENT FOR CART