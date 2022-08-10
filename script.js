function customizar() {
    let r = Math.floor(Math.random()* 255);
    let g = Math.floor(Math.random()* 255);
    let b = Math.floor(Math.random()* 255);
    let a = Math.floor(Math.random()* 255);

        document.getElementById("card").style.border = "20px solid rgb("+r+","+g+","+b+")";

        document.getElementById("img").style.border = "3px solid rgb("+r+","+g+","+b+")";

        document.getElementById("nome").style.color = "rgb("+r+","+g+","+b+")";

        document.getElementById("background").style.background = "rgba("+r+","+g+","+b+",0.300)";

        document.getElementById("image-border").style.border = "1px solid rgb("+r+","+g+","+b+")"
}

const url = "https://api.github.com/users/marlonsc15";

function getApiGitHub(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        following.textContent = data.following+' following';
        followers.textContent = data.followers+' followers';
        repos.textContent = data.public_repos+' repositorios';
        company.textContent = data.company;
        local.textContent = data.location;
    })
    .catch(error => console.error(error))
}

getApiGitHub()
