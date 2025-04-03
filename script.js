
function generate() {
  let id = Math.floor(Math.random() * 898) + 1;
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
    document.querySelector("#poke-pic").src =
      response.data.sprites.front_default;
  });

  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
    let name =
      response.data.name.charAt(0).toUpperCase() + response.data.name.slice(1);
    document.querySelector("#title").innerText = name;
  });
}

generate();
