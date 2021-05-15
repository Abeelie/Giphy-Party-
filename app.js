const gifArea = document.getElementById("gif-area");
const searchInput = document.getElementById("search");


async function submission() {
  let searchTerm = searchInput.value;
  searchInput.value = "";
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  })
  .then((result) => {
    return result.data.data;
  });
  addGif(response)
  console.log(response);
}

function addGif(res){
    let numResults = res.length;
    if (numResults > 0) {
      let randomIdx = Math.floor(Math.random() * numResults);
      let img = res[randomIdx].images.original.url
      let newGif = `<img src="${img}" class="col-3 mb-4">`
      $("#gif-area").append(newGif);
    }else{
      alert("No images found for that word");
    }
}
function removeGif(){
  $("#gif-area").empty();
}