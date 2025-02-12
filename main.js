const searchForm = document.querySelector('#search-form');
const searchBox = document.querySelector('#search-box');
const searchResult  = document.querySelector('#search-result');
const showMoreBtn = document.querySelector('#show-more-btn');

const body = document.querySelector('body');

const accessKey = "vNqsZ6dKyeSQn5dpF5U69njlUoxB3727W1NpPEiYlpc";

// const searchForm = document.getElementById("search-form");
// const searchBox = document.getElementById("search-box");
// const searchResult = document.getElementById("search-result");
// const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    
    const response = await fetch(url);
    const data = await response.json();

    if(page === 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
    document.querySelector(".bgni").style.animation = 'none'
    document.querySelector(".bgni").style.boxShadow = "box-shadow: -5px -5px 10px 5px blue;";
    body.style.backgroundColor = "black";
    // body.style.backgroundImage = "url('https://wallpapers.com/images/hd/creative-background-loadfv4c0ijtx3ig.jpg')";
    // body.style.backgroundSize = 'contain';
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})
