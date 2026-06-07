// ===== MENU DATA =====
const MENU_DATA = {
    'Fried Chicken': [
        {id:'fc1',name:'Crispy Fried Chicken (2 pcs)',emoji:'🍗',price:180,desc:'Golden crispy fried chicken with secret spices',variants:['Normal','Spicy','Cheese'],vPrices:[180,200,220],img:'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80'},
        {id:'fc2',name:'5 Pcs Bucket Chicken',emoji:'🪣',price:400,desc:'Bucket of 5 crispy pieces — perfect for sharing',variants:['Normal','Spicy','Cheese'],vPrices:[400,410,420],img:'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80'},
        {id:'fc3',name:'10 Pcs Bucket Chicken',emoji:'🪣',price:780,desc:'Family bucket — 10 pieces of pure joy',variants:['Normal','Spicy','Cheese'],vPrices:[780,790,800],img:'https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?w=400&q=80'},
        {id:'fc4',name:'Mixed Bucket',emoji:'🍗',price:400,desc:'2 Fried + 2 Lollipop + 2 Wings + 2 Boneless',variants:['Normal','Spicy','Cheese'],vPrices:[400,410,420],img:'https://images.unsplash.com/photo-1606755962775-bf3f9ddce507?w=400&q=80'},
        {id:'fc5',name:'Chicken Wings (5 pcs)',emoji:'🍗',price:170,desc:'Crispy chicken wings with dipping sauce',variants:['Normal','Spicy','Cheese'],vPrices:[170,180,190],img:'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80'},
        {id:'fc6',name:'Chicken Wings (10 pcs)',emoji:'🍗',price:320,desc:'Large wings serving for wing lovers',variants:['Normal','Spicy','Cheese'],vPrices:[320,330,340],img:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80'},
        {id:'fc7',name:'Boneless Strips (5 pcs)',emoji:'🍖',price:170,desc:'Tender boneless strips — all meat, no bone',variants:['Normal','Spicy','Cheese'],vPrices:[170,180,190],img:'https://images.unsplash.com/photo-1606755962775-bf3f9ddce507?w=400&q=80'},
        {id:'fc8',name:'Boneless Strips (10 pcs)',emoji:'🍖',price:320,desc:'Large boneless serving — extra meaty',variants:['Normal','Spicy','Cheese'],vPrices:[320,330,340],img:'https://images.unsplash.com/photo-1606755962775-bf3f9ddce507?w=400&q=80'},
        {id:'fc9',name:'Lollipop (5 pcs)',emoji:'🍢',price:180,desc:'Classic chicken lollipop — crispy and juicy',variants:['Normal','Spicy','Cheese'],vPrices:[180,190,200],img:'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80'},
        {id:'fc10',name:'Lollipop (10 pcs)',emoji:'🍢',price:340,desc:'Large lollipop serving — party starter',variants:['Normal','Spicy','Cheese'],vPrices:[340,350,360],img:'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80'},
        {id:'fc11',name:'Chicken Popcorn (100g)',emoji:'🍿',price:100,desc:'Bite-sized popcorn chicken — perfect snack',variants:[],vPrices:[100],img:'https://images.unsplash.com/photo-1606755962775-bf3f9ddce507?w=400&q=80'},
    ],
    'Burgers & Rolls': [
        {id:'br1',name:'Fried Chicken Burger',emoji:'🍔',price:115,desc:'Classic crispy chicken burger with fresh veggies',variants:[],vPrices:[115],img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80'},
        {id:'br2',name:'Cheesy Tower Burger',emoji:'🍔',price:150,desc:'Loaded cheesy tower burger — double the cheese',variants:[],vPrices:[150],img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80'},
        {id:'br3',name:'Crispy Chicken Burger',emoji:'🍔',price:85,desc:'Light & crispy burger — perfect for a quick bite',variants:[],vPrices:[85],img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80'},
        {id:'br4',name:'Chicken Roll',emoji:'🌯',price:85,desc:'Chicken in soft roll wrap with fresh veggies',variants:[],vPrices:[85],img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80'},
        {id:'br5',name:'Veg Burger',emoji:'🍔',price:85,desc:'Fresh vegetarian burger with crispy patty',variants:[],vPrices:[85],img:'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80'},
        {id:'br6',name:'Veg Roll',emoji:'🌯',price:85,desc:'Veggie roll wrap — fresh and healthy',variants:[],vPrices:[85],img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80'},
    ],
    'Rice & Noodles': [
        {id:'rn1',name:'Veg Fried Rice/Noodles',emoji:'🍜',price:90,desc:'Classic veg rice or noodles with fresh veggies',variants:[],vPrices:[90],img:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80'},
        {id:'rn2',name:'Egg Fried Rice/Noodles',emoji:'🍳',price:110,desc:'Egg fried rice or noodles — protein packed',variants:[],vPrices:[110],img:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80'},
        {id:'rn3',name:'Mushroom Rice/Noodles',emoji:'🍄',price:120,desc:'Mushroom rice or noodles — earthy flavors',variants:[],vPrices:[120],img:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80'},
        {id:'rn4',name:'Paneer Rice/Noodles',emoji:'🧀',price:120,desc:'Paneer rice or noodles — creamy & delicious',variants:[],vPrices:[120],img:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80'},
        {id:'rn5',name:'Chicken Rice/Noodles',emoji:'🍗',price:120,desc:'Chicken fried rice or noodles — crowd favorite',variants:[],vPrices:[120],img:'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80'},
    ],
    'Momos': [
        {id:'mo1',name:'Veg Momos',emoji:'🥟',price:60,desc:'Veg dumplings — steamed or fried',variants:['Fried','Steam'],vPrices:[60,70],img:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80'},
        {id:'mo2',name:'Paneer Momos',emoji:'🥟',price:70,desc:'Paneer dumplings — soft and flavorful',variants:['Fried','Steam'],vPrices:[70,80],img:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80'},
        {id:'mo3',name:'Chicken Momos',emoji:'🥟',price:80,desc:'Chicken dumplings — juicy and tender',variants:['Fried','Steam'],vPrices:[80,90],img:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80'},
        {id:'mo4',name:'Chicken Tikka Momos',emoji:'🥟',price:90,desc:'Spicy tikka momos — bold flavors',variants:['Fried','Steam'],vPrices:[90,100],img:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80'},
        {id:'mo5',name:'Chicken Cheese Momos',emoji:'🥟',price:100,desc:'Cheesy chicken momos — extra indulgence',variants:['Fried','Steam'],vPrices:[100,100],img:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80'},
        {id:'mo6',name:'Chocolate Momos (4 pcs)',emoji:'🍫',price:100,desc:'Sweet chocolate momos — dessert surprise',variants:['Fried','Steam'],vPrices:[100,100],img:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80'},
    ],
    'Snacks': [
        {id:'sn1',name:'Salted French Fries',emoji:'🍟',price:70,desc:'Classic salted fries — crispy golden',variants:[],vPrices:[70],img:'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&q=80'},
        {id:'sn2',name:'Masala French Fries',emoji:'🍟',price:75,desc:'Spicy masala fries — Indian twist',variants:[],vPrices:[75],img:'https://images.unsplash.com/photo-1573080496987-a199f8cd1e4a?w=400&q=80'},
        {id:'sn3',name:'Tandoori French Fries',emoji:'🍟',price:85,desc:'Tandoori-spiced fries — smoky flavor',variants:[],vPrices:[85],img:'https://images.unsplash.com/photo-1573080496987-a199f8cd1e4a?w=400&q=80'},
        {id:'sn4',name:'Cheesy French Fries',emoji:'🍟',price:90,desc:'Loaded cheese fries — pure indulgence',variants:[],vPrices:[90],img:'https://images.unsplash.com/photo-1573080496987-a199f8cd1e4a?w=400&q=80'},
        {id:'sn5',name:'Chicken Fingers (6 pcs)',emoji:'🍗',price:90,desc:'Golden chicken fingers — crispy strips',variants:[],vPrices:[90],img:'https://images.unsplash.com/photo-1606755962775-bf3f9ddce507?w=400&q=80'},
        {id:'sn6',name:'Chicken Nuggets',emoji:'🍗',price:90,desc:'Juicy chicken nuggets — kid favorite',variants:[],vPrices:[90],img:'https://images.unsplash.com/photo-1606755962775-bf3f9ddce507?w=400&q=80'},
        {id:'sn7',name:'Chicken Samosa (5 pcs)',emoji:'🥟',price:100,desc:'Crispy chicken samosas — perfect snack',variants:[],vPrices:[100],img:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80'},
        {id:'sn8',name:'Chicken Cheese Ball (6 pcs)',emoji:'⚽',price:100,desc:'Cheesy chicken balls — gooey center',variants:[],vPrices:[100],img:'https://images.unsplash.com/photo-1606755962775-bf3f9ddce507?w=400&q=80'},
    ],
    'Sandwiches': [
        {id:'sw1',name:'Veg Cheese Sandwich',emoji:'🥪',price:75,desc:'Grilled veg cheese sandwich — classic comfort',variants:[],vPrices:[75],img:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80'},
        {id:'sw2',name:'Fried Chicken Sandwich',emoji:'🥪',price:80,desc:'Crispy chicken sandwich — hearty & filling',variants:[],vPrices:[80],img:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80'},
        {id:'sw3',name:'Paneer Cheese Sandwich',emoji:'🥪',price:85,desc:'Grilled paneer sandwich — creamy & rich',variants:[],vPrices:[85],img:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80'},
        {id:'sw4',name:'Tandoori Mayo Chicken',emoji:'🥪',price:85,desc:'Tandoori chicken with mayo — bold & creamy',variants:[],vPrices:[85],img:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80'},
        {id:'sw5',name:'Chocolate Sandwich',emoji:'🥪',price:85,desc:'Chocolate sandwich — sweet treat',variants:[],vPrices:[85],img:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80'},
    ],
    'Pizza': [
        {id:'pz1',name:'Chicken Pizza',emoji:'🍕',price:130,desc:'Loaded chicken pizza with melted cheese',variants:['Medium','Large'],vPrices:[130,180],img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80'},
        {id:'pz2',name:'Paneer Pizza',emoji:'🍕',price:145,desc:'Paneer & cheese pizza — vegetarian delight',variants:['Medium','Large'],vPrices:[145,195],img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80'},
        {id:'pz3',name:'Mushroom Pizza',emoji:'🍕',price:130,desc:'Mushroom & cheese pizza — earthy & cheesy',variants:['Medium','Large'],vPrices:[130,185],img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80'},
        {id:'pz4',name:'Tandoori Pizza',emoji:'🍕',price:150,desc:'Spicy tandoori pizza — bold Indian flavors',variants:['Medium','Large'],vPrices:[150,200],img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80'},
    ],
    'Milkshakes': [
        {id:'ms1',name:'Strawberry Monster',emoji:'🍓',price:80,desc:'Creamy strawberry shake — fruity & fresh',variants:[],vPrices:[80],img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'},
        {id:'ms2',name:'Mango Burst',emoji:'🥭',price:80,desc:'Luscious mango shake — tropical vibes',variants:[],vPrices:[80],img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'},
        {id:'ms3',name:'Butterscotch Crush',emoji:'🧈',price:80,desc:'Butterscotch milkshake — sweet & nutty',variants:[],vPrices:[80],img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'},
        {id:'ms4',name:'Chocolate Oreo Crush',emoji:'🍫',price:80,desc:'Rich chocolate oreo shake — chocoholic dream',variants:[],vPrices:[80],img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'},
        {id:'ms5',name:'Orange Crush',emoji:'🍊',price:80,desc:'Fresh orange shake — citrusy refreshment',variants:[],vPrices:[80],img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'},
        {id:'ms6',name:'Pineapple Crush',emoji:'🍍',price:80,desc:'Pineapple milkshake — tropical sweetness',variants:[],vPrices:[80],img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'},
        {id:'ms7',name:'Blueberry Crush',emoji:'🫐',price:80,desc:'Blueberry milkshake — antioxidant rich',variants:[],vPrices:[80],img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'},
        {id:'ms8',name:'Cold Coffee',emoji:'☕',price:90,desc:'Chilled cold coffee — caffeine kick',variants:[],vPrices:[90],img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'},
        {id:'ms9',name:'Rose Milk',emoji:'🌹',price:50,desc:'Sweet chilled rose milk — traditional favorite',variants:[],vPrices:[50],img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'},
    ],
    'Mocktails': [
        {id:'mc1',name:'Mint Mojito',emoji:'🌿',price:85,desc:'Refreshing mint mojito — cool & crisp',variants:[],vPrices:[85],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
        {id:'mc2',name:'Blue Curacao',emoji:'💙',price:80,desc:'Cool blue curacao — visually stunning',variants:[],vPrices:[80],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
        {id:'mc3',name:'Green Apple Crush',emoji:'🍏',price:80,desc:'Green apple mocktail — tangy & sweet',variants:[],vPrices:[80],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
        {id:'mc4',name:'Mango Mojito',emoji:'🥭',price:80,desc:'Tropical mango mojito — summer in a glass',variants:[],vPrices:[80],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
        {id:'mc5',name:'Pineapple Mojito',emoji:'🍍',price:80,desc:'Pineapple mojito — island vibes',variants:[],vPrices:[80],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
        {id:'mc6',name:'Blueberry Mojito',emoji:'🫐',price:80,desc:'Blueberry mojito — berry blast',variants:[],vPrices:[80],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
        {id:'mc7',name:'Kiwi Mojito',emoji:'🥝',price:80,desc:'Kiwi mojito — exotic & refreshing',variants:[],vPrices:[80],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
        {id:'mc8',name:'Strawberry Mojito',emoji:'🍓',price:80,desc:'Strawberry mojito — berry sweet',variants:[],vPrices:[80],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
    ],
    'Juice Stall': [
        {id:'ju1',name:'Lemon Juice',emoji:'🍋',price:25,desc:'Fresh lemon juice — vitamin C boost',variants:[],vPrices:[25],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
        {id:'ju2',name:'Lemon Mint',emoji:'🍋',price:40,desc:'Lemon with mint — refreshing combo',variants:[],vPrices:[40],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
        {id:'ju3',name:'Masombi Juice',emoji:'🍊',price:50,desc:'Sweet masombi juice — local favorite',variants:[],vPrices:[50],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
        {id:'ju4',name:'Watermelon Juice',emoji:'🍉',price:50,desc:'Fresh watermelon juice — hydrating',variants:[],vPrices:[50],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
        {id:'ju5',name:'Kirni Juice',emoji:'🍈',price:50,desc:'Sweet kirni juice — seasonal delight',variants:[],vPrices:[50],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
        {id:'ju6',name:'Red Banana Mix',emoji:'🍌',price:50,desc:'Red banana mix — energy booster',variants:[],vPrices:[50],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
        {id:'ju7',name:'Pomegranate Juice',emoji:'🍎',price:65,desc:'Pomegranate juice — antioxidant rich',variants:[],vPrices:[65],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
        {id:'ju8',name:'Apple Juice',emoji:'🍎',price:65,desc:'Fresh apple juice — crisp & sweet',variants:[],vPrices:[65],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
        {id:'ju9',name:'Grapes Juice',emoji:'🍇',price:65,desc:'Grapes juice — natural sweetness',variants:[],vPrices:[65],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
        {id:'ju10',name:'Orange Juice',emoji:'🍊',price:65,desc:'Fresh orange juice — vitamin C rich',variants:[],vPrices:[65],img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'},
        {id:'ju11',name:'Vanilla Milkshake',emoji:'🍦',price:80,desc:'Creamy vanilla milkshake — classic',variants:[],vPrices:[80],img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'},
    ]
};

const COMBO_DATA = [
    {id:'cb1',name:'KIDDY COMBO',badge:'FOR KIDS',price:390,items:'2 Pcs Fried Chicken + 1 French Fries + 1 Chicken Popcorn',emoji:'👶'},
    {id:'cb2',name:'COMBO FOR TWO',badge:'FOR TWO',price:420,items:'2 Pcs Fried Chicken + 1 Mojito + 1 Fried Chicken Burger',emoji:'👫'},
    {id:'cb3',name:'PUBG COMBO',badge:'FOR FRIENDS',price:550,items:'3 Pcs Fried Chicken + 5 Pcs Fried Chicken Wings',emoji:'🎮'},
    {id:'cb4',name:'TRENDY COMBO',badge:'TRENDY',price:620,items:'5 Pcs Fried Chicken + 1 Fried Chicken Burger + 2 Chicken Roll',emoji:'🔥'},
    {id:'cb5',name:'FAMILY COMBO',badge:'FOR FAMILY',price:870,items:'5 Pcs Fried Chicken + 2 Fried Chicken Burger + 3 Mint Mojito',emoji:'👨‍👩‍👧‍👦'},
];

// ===== STATE =====
let cart = [];
let selectedVariants = {};
let selectedPayment = 'cod';
let screenshotData = null;
// currentCategory no longer needed - all categories displayed on one page
const KARTHI_WHATSAPP = '919500058912';

function getDeliveryCharge(distance) {
    const d = parseFloat(distance);
    if (isNaN(d) || d <= 0) return 0;
    if (d > 3) return 100;
    return 50;
}

// ===== INIT =====
function init() {
    renderMenuTabs();
    renderMenu();
    renderCombos();
    setupEventListeners();
    setupScrollAnimations();
    setupNavbarScroll();
    hideLoader();
}

function hideLoader() {
    setTimeout(() => { document.getElementById('loader').classList.add('hidden'); }, 1500);
}

// ===== MENU RENDERING =====
function renderMenuTabs() {
    const icons = {
        'Fried Chicken': 'fa-drumstick-bite', 'Burgers & Rolls': 'fa-hamburger', 'Rice & Noodles': 'fa-bowl-rice',
        'Momos': 'fa-dumpling', 'Snacks': 'fa-cookie-bite', 'Sandwiches': 'fa-bread-slice',
        'Pizza': 'fa-pizza-slice', 'Milkshakes': 'fa-glass-whiskey', 'Mocktails': 'fa-cocktail', 'Juice Stall': 'fa-lemon'
    };
    const tabs = Object.keys(MENU_DATA).map(cat => {
        const icon = icons[cat] || 'fa-utensils';
        const catId = cat.toLowerCase().replace(/[^a-z0-9]/g, '-');
        return `<a href="#menu-${catId}" class="menu-tab" onclick="event.preventDefault();document.getElementById('menu-${catId}').scrollIntoView({behavior:'smooth',block:'start'})"><i class="fas ${icon}"></i> ${cat}</a>`;
    }).join('');
    document.getElementById('menuTabs').innerHTML = tabs;
}

function switchCategory(cat) {
    // No longer used - all categories displayed on one page
}

function renderMenu() {
    const grid = document.getElementById('menuGrid');
    let html = '';
    Object.keys(MENU_DATA).forEach(cat => {
        const catId = cat.toLowerCase().replace(/[^a-z0-9]/g, '-');
        const items = MENU_DATA[cat];
        html += `<div class="menu-category" id="menu-${catId}"><div class="menu-category-header"><h3 class="menu-category-title">${cat}</h3></div><div class="menu-grid">`;
        html += items.map(item => {
            const variantIdx = selectedVariants[item.id] || 0;
            const price = item.vPrices[variantIdx];
            const variantLabel = item.variants[variantIdx] || '';
            const variantBtns = item.variants.length > 0 ? `<div class="menu-variants">${item.variants.map((v, i) => `<button class="menu-variant ${i === variantIdx ? 'active' : ''}" onclick="selectVariant('${item.id}', ${i})">${v}</button>`).join('')}</div>` : '';
            const qty = getCartQty(item.id, variantLabel);
            const qtyControls = qty > 0 ? `<div class="menu-qty"><button onclick="updateQty('${item.id}', '${variantLabel}', -1)">−</button><span>${qty}</span><button onclick="updateQty('${item.id}', '${variantLabel}', 1)">+</button></div>` : `<button class="menu-add" onclick="addToCart('${item.id}', '${item.name}', ${price}, '${item.emoji}', '${variantLabel}')"><i class="fas fa-plus"></i></button>`;
            return `<div class="menu-item"><div class="menu-img"><img src="${item.img}" alt="${item.name}" loading="lazy"><div class="emoji">${item.emoji}</div></div><div class="menu-body"><div class="menu-name">${item.name}</div><div class="menu-desc">${item.desc}</div>${variantBtns}<div class="menu-foot"><div class="menu-price">₹${price}</div>${qtyControls}</div></div></div>`;
        }).join('');
        html += '</div></div>';
    });
    grid.innerHTML = html;
}

function selectVariant(itemId, idx) {
    selectedVariants[itemId] = idx;
    renderMenu();
}

// ===== COMBO RENDERING =====
function renderCombos() {
    document.getElementById('comboGrid').innerHTML = COMBO_DATA.map(combo => `<div class="combo-card"><div class="combo-badge">${combo.badge}</div><div class="combo-name">${combo.emoji} ${combo.name}</div><div class="combo-items">${combo.items}</div><div class="combo-foot"><div class="combo-price">₹${combo.price}</div><button class="combo-add" onclick="addComboToCart('${combo.id}', '${combo.name}', ${combo.price}, '${combo.emoji}')"><i class="fas fa-plus"></i> Add Combo</button></div></div>`).join('');
}

// ===== CART FUNCTIONS =====
function addToCart(id, name, price, emoji, variant) {
    const cartId = id + (variant ? '_' + variant : '');
    const existing = cart.find(item => item.cartId === cartId);
    if (existing) { existing.qty++; } else { cart.push({ cartId, id, name, price, emoji, variant, qty: 1 }); }
    updateCartUI();
    showToast(`${name} added to cart!`, 'success');
    renderMenu();
}

function addComboToCart(id, name, price, emoji) {
    const cartId = 'combo_' + id;
    const existing = cart.find(item => item.cartId === cartId);
    if (existing) { existing.qty++; } else { cart.push({ cartId, id, name, price, emoji, variant: 'Combo', qty: 1, isCombo: true }); }
    updateCartUI();
    showToast(`${name} combo added!`, 'success');
}

function getCartQty(id, variant) {
    const cartId = id + (variant ? '_' + variant : '');
    const item = cart.find(c => c.cartId === cartId);
    return item ? item.qty : 0;
}

function updateQty(id, variant, delta) {
    const cartId = id + (variant ? '_' + variant : '');
    const item = cart.find(c => c.cartId === cartId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) { cart = cart.filter(c => c.cartId !== cartId); }
    }
    updateCartUI();
    renderMenu();
}

function removeFromCart(cartId) {
    cart = cart.filter(c => c.cartId !== cartId);
    updateCartUI();
    renderMenu();
}

function updateCartUI() {
    const totalQty = cart.reduce((s, c) => s + c.qty, 0);
    const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
    const delivery = subtotal > 0 ? 50 : 0;
    const grandTotal = subtotal + delivery;
    document.getElementById('navBadge').textContent = totalQty;
    document.getElementById('fabBadge').textContent = totalQty;
    document.getElementById('cartSubtotal').textContent = '₹' + subtotal;
    document.getElementById('cartDelivery').textContent = '₹' + delivery + ' (0–3 km)';
    document.getElementById('cartGrandTotal').textContent = '₹' + grandTotal;
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    if (cart.length === 0) {
        cartItems.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-basket"></i><h4>Your cart is empty</h4><p>Add some delicious items!</p></div>`;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `<div class="cart-item"><div class="cart-item-img">${item.emoji}</div><div class="cart-item-info"><div class="cart-item-name">${item.name}</div><div class="cart-item-variant">${item.variant} • ₹${item.price}</div><div class="cart-item-qty"><button onclick="updateCartQty('${item.cartId}', -1)">−</button><span>${item.qty}</span><button onclick="updateCartQty('${item.cartId}', 1)">+</button></div></div><div class="cart-item-right"><div class="cart-item-price">₹${item.price * item.qty}</div><button class="cart-item-remove" onclick="removeFromCart('${item.cartId}')"><i class="fas fa-trash"></i></button></div></div>`).join('');
        cartFooter.style.display = 'block';
    }
}

function updateCartQty(cartId, delta) {
    const item = cart.find(c => c.cartId === cartId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) { cart = cart.filter(c => c.cartId !== cartId); }
    }
    updateCartUI();
    renderMenu();
}

// ===== CART DRAWER =====
function openCart() {
    document.getElementById('cartOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart(e) {
    if (!e || e.target === document.getElementById('cartOverlay')) {
        document.getElementById('cartOverlay').classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===== CHECKOUT =====
function openCheckout() {
    if (cart.length === 0) { showToast('Your cart is empty!', 'error'); return; }
    closeCart();
    updateOrderSummary();
    document.getElementById('checkoutOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateOrderSummary() {
    const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
    const delivery = subtotal > 0 ? 50 : 0;
    const grandTotal = subtotal + delivery;
    document.getElementById('orderSummaryItems').innerHTML = cart.map(item => `<div class="order-item"><span>${item.name} ${item.variant !== 'Combo' ? '(' + item.variant + ')' : ''} × ${item.qty}</span><span>₹${item.price * item.qty}</span></div>`).join('') + `<div class="order-item" style="border-top:1px solid #eee;padding-top:8px;margin-top:8px"><span>Delivery Charge</span><span>₹${delivery}</span></div><div class="order-item" style="font-size:0.8rem;color:#888;margin-top:4px"><span>🛵 0–3 km: ₹50 | Above 3 km: ₹100</span></div>`;
    document.getElementById('orderSummaryTotal').textContent = '₹' + grandTotal;
}

function closeCheckout(e) {
    if (!e || e.target === document.getElementById('checkoutOverlay')) {
        document.getElementById('checkoutOverlay').classList.remove('active');
        document.body.style.overflow = '';
    }
}

function selectPayment(method) {
    selectedPayment = method;
    document.querySelectorAll('.payment-option').forEach(el => el.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    const qrSection = document.getElementById('qrSection');
    if (method === 'online') { qrSection.classList.add('active'); } else { qrSection.classList.remove('active'); }
}

function handleScreenshot(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            screenshotData = event.target.result;
            document.getElementById('screenshotImg').src = screenshotData;
            document.getElementById('screenshotPreview').classList.add('active');
            showToast('Screenshot uploaded!', 'success');
        };
        reader.readAsDataURL(file);
    }
}

function placeOrder() {
    const name = document.getElementById('checkoutName').value.trim();
    const phone = document.getElementById('checkoutPhone').value.trim();
    const address = document.getElementById('checkoutAddress').value.trim();
    const type = document.getElementById('checkoutType').value;
    const note = document.getElementById('checkoutNote').value.trim();
    if (!name) { showToast('Please enter your name', 'error'); return; }
    if (!phone || phone.length < 10) { showToast('Please enter valid phone number', 'error'); return; }
    if (!address) { showToast('Please enter delivery address', 'error'); return; }
    const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
    const delivery = 50;
    const grandTotal = subtotal + delivery;
    let message = `🍗 *NEW ORDER - CLUB10CHICKEN* 🍗

`;
    message += `👤 *Customer:* ${name}
`;
    message += `📞 *Phone:* ${phone}
`;
    message += `📍 *Address:* ${address}
`;
    message += `🚚 *Type:* ${type === 'delivery' ? 'Home Delivery' : 'Pickup'}
`;
    if (note) message += `📝 *Note:* ${note}
`;
    message += `
*ORDERED ITEMS:*
`;
    cart.forEach(item => {
        const variant = item.variant !== 'Combo' ? ` (${item.variant})` : '';
        message += `▸ ${item.name}${variant} × ${item.qty} = ₹${item.price * item.qty}
`;
    });
    message += `
📦 *Subtotal:* ₹${subtotal}
`;
    message += `🚚 *Delivery:* ₹${delivery} (0–3 km: ₹50 | Above 3 km: ₹100)
`;
    message += `💰 *GRAND TOTAL:* ₹${grandTotal}
`;
    message += `
💳 *Payment:* ${selectedPayment === 'cod' ? 'Cash on Delivery (COD)' : 'Online Payment (UPI)'}
`;
    if (selectedPayment === 'online' && screenshotData) { message += `✅ *Payment Screenshot:* Uploaded
`; }
    message += `
Please confirm my order. Thank you! 🙏`;
    const encodedMsg = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${KARTHI_WHATSAPP}?text=${encodedMsg}`;
    window.open(whatsappURL, '_blank');
    cart = [];
    selectedVariants = {};
    screenshotData = null;
    document.getElementById('screenshotPreview').classList.remove('active');
    document.getElementById('screenshotInput').value = '';
    document.getElementById('checkoutName').value = '';
    document.getElementById('checkoutPhone').value = '';
    document.getElementById('checkoutAddress').value = '';
    document.getElementById('checkoutNote').value = '';
    updateCartUI();
    renderMenu();
    closeCheckout();
    showToast('Order sent to WhatsApp! Karthi Anna will confirm soon.', 'success');
}

// ===== TOAST =====
function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');
    toast.className = 'toast ' + type;
    toastMsg.textContent = msg;
    toast.querySelector('i').className = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== MOBILE MENU =====
function openMobileMenu() {
    document.getElementById('mobileMenu').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== SCROLL ANIMATIONS =====
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== NAVBAR SCROLL =====
function setupNavbarScroll() {
    const nav = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { nav.classList.add('scrolled'); } else { nav.classList.remove('scrolled'); }
        if (window.scrollY > 500) { backToTop.classList.add('visible'); } else { backToTop.classList.remove('visible'); }
    });
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) { current = section.getAttribute('id'); }
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) { link.classList.add('active'); }
        });
    });
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { closeCart(); closeCheckout(); closeMobileMenu(); }
    });
}

// ===== START =====
document.addEventListener('DOMContentLoaded', init);