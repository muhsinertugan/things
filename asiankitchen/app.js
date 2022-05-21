const menu = [
	{
		id: 1,
		title: "Tteokbokki",
		category: "Korea",
		price: 10.99,
		img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
		desc: `Spicy rice cakes, serving with fish cake.`,
	},

	{
		id: 2,
		title: "Chicken Ramen",
		category: "Japan",
		price: 7.99,
		img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
		desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
	},
	{
		id: 3,
		title: "Bibimbap",
		category: "Korea",
		price: 8.99,
		img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
		desc: `Boiling vegetables, serving with special hot sauce`,
	},
	{
		id: 4,
		title: "Dan Dan Mian",
		category: "China",
		price: 5.99,
		img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
		desc: `Dan dan noodle, serving with green onion `,
	},
	{
		id: 5,
		title: "Yangzhou Fried Rice",
		category: "China",
		price: 12.99,
		img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
		desc: `Yangzhou style fried rice, serving with bean and pickles `,
	},
	{
		id: 6,
		title: "Onigiri",
		category: "Japan",
		price: 9.99,
		img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
		desc: `Rice Sandwich, serving with soy sauce`,
	},
	{
		id: 7,
		title: "Jajangmyeon",
		category: "Korea",
		price: 15.99,
		img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
		desc: `Black bean sauce noodle, serving with green onion `,
	},
	{
		id: 8,
		title: "Ma Yi Shang Shu",
		category: "China",
		price: 12.99,
		img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
		desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
	},
	{
		id: 9,
		title: "Doroyaki",
		category: "Japan",
		price: 3.99,
		img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
		desc: `Red bean paste dessert, serving with honey.`,
	},
];

// id: 1,
// title: "Tteokbokki",
// category: "Korea",
// price: 10.99,
// img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
// desc: `Spicy rice cakes, serving with fish cake.`,

function createMenu() {
	let itemCategories;
	let sortedMenuItems = [];

	const btnContainer = document.querySelector(".btn-container");

	function menuItemSort(array, valueOf) {
		for (let i = 0; i < menu.length; i++) {
			if (menu[i][valueOf] !== "") {
				array.push(menu[i][valueOf]);
			}
		}
	}

	function catBtnCreate(element) {
		const categoryButtons = document.createElement("buttons");
		btnContainer.append(categoryButtons);
		categoryButtons.innerHTML = element;
		categoryButtons.classList.add("btn", "btn-outline-dark", "btn-item");
		categoryButtons.setAttribute("id", element);
	}

	function createMenuItems(srcInfo, altInfo, titleInfo, priceInfo, descInfo) {
		const menuContainer = document.querySelector(".section-center");
		const menuInfo = document.createElement("div");
		const menuItems = document.createElement("div");
		const menuImg = document.createElement("img");
		const menuTitleCont = document.createElement("div");
		const itemTitle = document.createElement("h4");
		const menuText = document.createElement("div");
		const itemPrice = document.createElement("h4");

		menuContainer.append(menuItems);
		menuItems.append(menuImg);
		menuItems.append(menuInfo);
		menuInfo.append(menuTitleCont);
		menuTitleCont.append(itemTitle);
		menuTitleCont.append(itemPrice);
		menuInfo.append(menuText);

		menuItems.classList.add("menu-items", "col-lg-6", "col-sm-12");
		menuInfo.classList.add("menu-info");
		menuImg.classList.add("photo");
		menuTitleCont.classList.add("menu-title");
		itemPrice.classList.add("price");
		menuText.classList.add("menu-text");

		menuImg.src = srcInfo;
		menuImg.alt = altInfo;
		itemTitle.innerHTML = titleInfo;
		itemPrice.innerHTML = priceInfo;
		menuText.innerHTML = descInfo;
	}

	// create buttons
	menuItemSort(sortedMenuItems, "category");
	itemCategories = [...new Set(sortedMenuItems)];
	catBtnCreate("All");
	itemCategories.map(catBtnCreate);

	itemCategories.forEach((element) =>
		document
			.getElementById(element)
			.addEventListener("click", console.log("hello"))
	);

	for (let i = 0; i < menu.length; i++) {
		createMenuItems(
			menu[i].img,
			menu[i].title,
			menu[i].title,
			menu[i].price,
			menu[i].desc
		);
	}
}

createMenu();
