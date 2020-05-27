const img = document.getElementById("img");
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);
  document.getElementById("loader").style.display = "block";
  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      let output = '';
      

      if(response.type === 'success') {
        response.value.forEach(function(joke){
          document.getElementById("loader").style.display = "none";
          output += `<li>${joke.joke}</li>`;
          
        });
      } else {
        output += '<li>Ooops! We\'ve got an error</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
      document.getElementById('number').value = "";
     
    }
  }

  xhr.send();

  e.preventDefault();
}
