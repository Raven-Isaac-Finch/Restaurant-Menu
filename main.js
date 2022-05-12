const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "images/item-1.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.`,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "images/item-2.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.`,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "images/item-3.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "images/item-4.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.`,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "images/item-5.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.`,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "images/item-6.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "images/item-7.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.`,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "images/item-8.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.`,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "images/item-9.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "images/item-10.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.`,
    },
  ];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

// Load Items
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function(item){
    return `<article class="menu-item">
              <img src=${item.img} class="item-pic" alt=${item.title}>
              <div class="item-info">
                <div class="item-top-info">
                  <h4 class="item-heads">${item.title}</h4>
                  <h4 class="item-price">$${item.price}</h4>
                </div>
                <p class="item-text">${item.desc}</p>
              </div>
            </article>`;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(function(values, item) {
    if(!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },['all']);
  const categoryBtns = categories.map(function(category) {
    return `<button class="menu-btn" type="button" data-id=${category}>${category[0].toUpperCase() + category.slice(1).toLowerCase()}</button>`
  }).join('');
  
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll('.menu-btn');
  // Filter Items
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(menuItem){
        if(menuItem.category === category) {
          return menuItem;
        }      
      });
      if(category === 'all') {
        displayMenuItems(menu);
      }
      else {
        displayMenuItems(menuCategory);
      }
    });
  });
}