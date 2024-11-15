var option;

function select(){
    option = document.getElementById("select").value;
    document.getElementById("loading").innerHTML = "You Selected : " + option +" <br> Waiting for Response........";

}

const URL = "https://dummyjson.com/users";

let userData = async ()=>{
    let data = await fetch(URL);
    
        console.log(data);
    

    let finalData = await data.json();
    // document.write("Waiting for Response........");
    document.getElementById("loading").innerHTML = "Select Any one option." ; 
    setTimeout(() => {
        document.write("<br>" + finalData.users[option].firstName)
    }, 4000);
}

userData();