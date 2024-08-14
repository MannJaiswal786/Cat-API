const url = "https://api.thecatapi.com/v1/images/search";

async function fetchCatApi() {
  try {
  let response = await fetch(url);
  let data = await response.json();
    displayCat(data[0].url);
  }
  catch(error){
    console.error(`There was an error`, error);
    document.getElementById('cat-container').innerText = "Failed to fetch cat image. Try again!";
  }
}

function displayCat(imageUrl){
  const catContainer = document.querySelector('#cat-container');
  catContainer.innerHTML = '';
  
  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = "Random Cat Photo";
  img.style.maxWidth = '100%';
  img.style.height = 'auto';
  
  catContainer.appendChild(img);
}

document.getElementById('fetch-cat-button').addEventListener("click", fetchCatApi);