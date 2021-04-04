alert("Escolha seu Pokémon Inicial")

var escolhaPokemon = prompt("Digite 1 para Bulbasaur, 2 para Charmander, 3 para Squirtle ou 4 para Pikachu")

if(escolhaPokemon == 1){
  document.write("<h3>Parabéns! Agora você tem um Bulbasaur!<h3>" + '<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png")>')
}
else if(escolhaPokemon == 2){
  document.write("<h3>Parabéns! Agora você tem um Charmander!<h3>" + '<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png")>')
}
else if(escolhaPokemon == 3){
  document.write("<h3>Parabéns! Agora você tem um Squirtle!<h3>" + '<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png")>')
}
else if(escolhaPokemon == 4){
  document.write("<h3>Parabéns! Agora você tem um Pikachu!<h3>" + '<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png")>')
}
else{
  document.write("<h3>Você chegou atrasado! Prof. Carvalho não tem mais pokémons...</h3>" + '<img src="https://lh3.googleusercontent.com/-Fg0_ZlKfO1U/TYeTbFSfnJI/AAAAAAAABOw/UlFnN8V8SQc/s320/1.bmp")>')
}