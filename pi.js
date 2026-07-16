Pi.init({
    version: "2.0"
});


function loginPi(){

    Pi.authenticate(
        ["username"],
        function(payment){
            console.log("Incomplete payment", payment);
        }
    )
    .then(function(auth){

        console.log(auth);

        document.getElementById("user").innerHTML =
        "مرحبا " + auth.user.username;


        document.getElementById("loginPage").style.display = "none";

        document.getElementById("gamePage").style.display = "block";


        start();

    })
    .catch(function(error){

        console.log(error);

        alert("فشل تسجيل الدخول إلى Pi");

    });

}
