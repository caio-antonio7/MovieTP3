document.getElementById("formulario").addEventListener("submit", pesquisarFilme);

function pesquisarFilme(e){
    var filmePesquisa = document.getElementById("pesquisar").value;
    buscarFilmes(filmePesquisa);
    e.preventDefault();
}


function filmesDetalhes(id) {
  sessionStorage.setItem("filmeID", id);
  window.location = "detalhes.html";
  return false;
}

function mostraFilme() {
  var filmeID = sessionStorage.getItem("filmeId");
   
}

function buscarFilmes(filmePesquisa){
    axios.get("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup" + filmeID)
  .then(function (response) {
    var filme =response.data;
    console.log(response);
    var mostraFilme = /*
    <div class= "col-md-6">
      <img src="${filme.Poster}" class ="img-responsive">
        <h3><strong>${filme.Title} </strong> </h3>
    </div>
    <div class ="col-md-6">
      <div class="well clearfix">
      <ul class="list-group">
        <li class = "list-group-item"> <strong>Genêro: </strong>${filme.Genre}</li>
        <li class = "list-group-item"> <strong>Lançamento: </strong>${filme.Realesed}</li>
        <li class = "list-group-item"> <strong>Duração: </strong>${filme.Runtime}</li>
        <li class = "list-group-item"> <strong>Atores: </strong>${filme.Actors}</li>
      </ul>

      <h3>Descrição</h3>
      ${filme.Plot}
      <hr>
      <a href= "https://www.imdb.com/search/title/${filme.imdnID}" tanget="_blank" class="btn btn-sucess" pull-left"> Ver no IMDb </a>
      <a href= "index.html" tanget="_blank" class="btn btn-default" pull-right"> Voltar a pesquisar </a>
      </div>
    </div>
    */
    

    document.getElementById("filmes").innerHTML = mostraFilme;
  })

  .catch(function (error) {
    console.log(error);
  });
}
