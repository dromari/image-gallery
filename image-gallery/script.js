const imagesContainer = document.querySelector('.img-container');
const loupe = document.querySelector('.loupe');
const input = document.querySelector('.input');

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  displayPicture(data.results);
}

function displayPicture(searchImg) {
  imagesContainer.innerHTML = '';
  searchImg.forEach((element) => {
    const img = document.createElement('img');
    img.classList.add('img-wrapper');
    img.src = element.urls.regular + '$client_id=sBXGNF1qLTi-NHYBsjfS6SEHqf1fU-D1kwztJRUJg7Q';
    img.alt = `image`;
    imagesContainer.append(img);
  }
  )
}

loupe.addEventListener('click', () => {
  
  let query = input.value;
  let url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&orientation=landscape&client_id=sBXGNF1qLTi-NHYBsjfS6SEHqf1fU-D1kwztJRUJg7Q`;
  getData(url);
})

input.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
    
    let query = input.value;
    let url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&orientation=landscape&client_id=sBXGNF1qLTi-NHYBsjfS6SEHqf1fU-D1kwztJRUJg7Q`;
    getData(url);
  }
});

window.onload = () => getData('https://api.unsplash.com/search/photos?query=maldives&per_page=30&orientation=landscape&client_id=sBXGNF1qLTi-NHYBsjfS6SEHqf1fU-D1kwztJRUJg7Q');

