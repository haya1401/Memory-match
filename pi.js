Pi.init({
    version:"2.0"
});


async function loginPi(){

try{

let user = await Pi.authenticate(
["username"],
()=>{}
);


document.getElementById("user").innerHTML =
"مرحبا " + user.user.username;


// إخفاء صفحة الدخول
document.getElementById("loginPage").style.display="none";


// إظهار اللعبة
document.getElementById("gamePage").style.display="block";


start();


}

catch(e){

console.log(e);

}

}
