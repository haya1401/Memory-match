Pi.init({
    version: "2.0"
});


async function loginPi(){

    try {

        const user = await Pi.authenticate(
            ["username"],
            function(payment){
                console.log(payment);
            }
        );


        document.getElementById("user").innerHTML =
        "مرحبا " + user.user.username;


        document.getElementById("loginPage").style.display="none";
        document.getElementById("gamePage").style.display="block";

        start();

    } catch(error){

        console.log(error);

        alert("افتح اللعبة من Pi Browser");

    }

}
