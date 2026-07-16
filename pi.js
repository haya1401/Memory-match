Pi.init({
version:"2.0"
});


async function loginPi(){


try{


let user=await Pi.authenticate(
["username"],
()=>{}
);


document.getElementById("user").innerHTML=
"مرحبا "+user.user.username;


}

catch(e){

console.log(e);

}


}
