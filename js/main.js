var url = "https://api.themoviedb.org/3/search/movie";
var myKey = "6631e5f1dc96088e0d26b86da29b5b6a";
var myWrapper = document.querySelector('.swiper-wrapper');
var input = document.querySelector('input');
var mySend = document.querySelector('button');

function affichage(donnees){
  console.log(donnees);
  for(i=0; i < donnees.results.length; i++) {
    var myTemplate = `
    <div class="swiper-slide">
      <h1>${donnees.results[i].original_title}</h1>
      <img src="https://image.tmdb.org/t/p/w200${donnees.results[i].poster_path}">
    </div>
    `
    var myTemplateWithoutImg = `
    <div class="swiper-slide">
      <h1>${donnees.results[i].original_title}</h1>
      <img src="https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg">
    </div>
    `
    if(donnees.results[i].poster_path) {
      myWrapper.innerHTML += myTemplate
    } else {
      myWrapper.innerHTML += myTemplateWithoutImg
    }
  }
}

function recherche() {
  myWrapper.innerHTML = "";
  myInput = document.querySelector('[type="text"]').value;
  console.log(myInput);
  fetch(`${url}?api_key=${myKey}&language=fr&query=${myInput}`)
  .then(response => response.json())
  .then(data => {
    affichage(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}


mySend.addEventListener('click', function() {
  recherche();
})

input.addEventListener('keypress', function(e){
  if (e.key === "Enter") {
    recherche();
  }
})



const swiper = new Swiper('.swiper', {
  slidesPerView: 6,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});