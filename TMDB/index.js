const API_KEY='api_key=231d6db3dd9c91cb53282faf7010ecc7';
const BASE_URL='https://api.themoviedb.org/3';
const API_url=BASE_URL+'/discover/movie?sort_by=popularity.desc&'+API_KEY;
const img_url ='https://image.tmdb.org/t/p/w500';
const Main=document.getElementById('main');
GETMOVIE(API_url);

function GETMOVIE(URL)
{
 return fetch(URL).then(res => res.json()).then(data =>{
    console.log(data.results);
  showmovies(data.results);
})
}

function showmovies(data)
{
   Main.innerHTML='';

  data.forEach(movie => {
      const {title,poster_path,id,overview}=movie;
      const moviess=document.createElement('div');
      moviess.classList.add('movie');

      moviess.innerHTML=`
      <div class="movie " id="${id}" onclick="openPopup('${overview}');">
      <img src="${img_url+poster_path}" alt="${title}">
      <p>${title}</p>
  </div>`
  Main.appendChild(moviess);

  });  
}

function openPopup(overview) {
  const modal = document.getElementById('myModal');
  const overviewText = document.getElementById('overviewText');
  const closeBtn = document.getElementsByClassName('close')[0];

  overviewText.textContent = overview;
  modal.style.display = 'block';

  closeBtn.onclick = function() {
    modal.style.display = 'none';
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}

function horror()
{
  return 
}