const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryList = document.querySelector(".gallery");
galleryList.style.display = "flex";
galleryList.style.flexDirection = "column";
galleryList.style.gap = "10px";
galleryList.style.flexWrap = "nowrap";

const markup = images.map(({url, alt}) => `<li class="list__item" style="list-style: none"><div class="image__wrap" style="width: 480px; height: auto;"><img class="item__image" style="display: block; width: 100%; height: 100%;" src="${url}" alt="${alt}"></div></li>`).join("");

galleryList.insertAdjacentHTML("beforeend", markup);