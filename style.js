var oldpic; //null for now 
var oldtarget = 0; //null for now 
function restorePicture() {
    if (oldtarget = 1) {
        document.getElementById("Sejal1").src = "https://i.pinimg.com/236x/02/6a/cc/026acca08fb7beea6bd4ecd430e312bd.jpg";
    }
    if (oldtarget = 2) {
        document.getElementById("Bhakti1").src = "https://i.pinimg.com/564x/40/e6/29/40e629ddb31aedacdf2c5e94cfc7e23a.jpg";
    }
    if (oldtarget = 3) {
        document.getElementById("Mochi").src"";
    }
    if (oldtarget = 4) {
        document.getElementById("Jovita1").src"";
    }
    if (oldtarget = 5) {
        document.getElementById("Sruthi1").src"";
    }
    if (oldtarget = 6) {
        document.getElementById("Nive1").src"";
    }
}


function changeSejal(event) {
    console.dir(oldtarget);
    event.target.src = "https://i.pinimg.com/originals/15/a4/63/15a463647cf3353b62b372ba1551c337.png";
    restorePicture();
    oldtarget = 1;
    document.getElementById("description").innerHTML = "Hello!";
}
document.getElementById("Sejal1").addEventListener("click", changeSejal)
//Sejal

function changeBhakti(event) {
    console.dir(oldtarget);
    event.target.src = "https://onmyojiguide.com/wp-content/uploads/2017/01/Glowing-Grass-Onmyoji-Shikigami-Icon-2-1.png";
    restorePicture();
    oldtarget = 2;
    document.getElementById("description").innerHTML = "Bhakti <strong>loves<strong> Brown Sugar Bubble tea ^_^";
}
document.getElementById("Bhakti1").addEventListener("click", changeBhakti);
//Bhakti 

function changeUnnati(event) {
    console.dir(oldtarget);
    event.target.src = "http://vivianwskwan.com/wp-content/uploads/2018/06/mochimii_family-gif-500.gif";
    if (oldtarget !== null) {
        oldtarget.src = oldpic;
    }
    oldtarget = event.target;
    oldpic = "https://st4.depositphotos.com/1720323/31060/v/1600/depositphotos_310600904-stock-illustration-cute-kawaii-character-black-tapioca.jpg";
    document.getElementById("description").innerHTML = "Unnati <strong>loves<strong> strawberry mochi :P"
}
document.getElementById("Mochi").addEventListener("click", changeUnnati);
//Unnati

function changeJovita(event) {
    console.dir(oldtarget);
    event.target.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fbrown-hair-businesswoman-avatar-woman-face-profile-icon-concept-online-support-service-female-cartoon-character-portrait-brown-126956822.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fbrown-hair-businesswoman-avatar-woman-face-profile-icon-concept-online-support-service-female-cartoon-character-portrait-brown-image126956822&tbnid=zzOFjYXkb3ahLM&vet=10CA0QxiAoBGoXChMI-M71y_v68wIVAAAAAB0AAAAAECg..i&docid=aGaahZixbesGuM&w=1600&h=1690&itg=1&q=avatars%20for%20profile&ved=0CA0QxiAoBGoXChMI-M71y_v68wIVAAAAAB0AAAAAECg";
    if (oldtarget !== null) {
        oldtarget.src = oldpic;
    }
    oldtarget = event.target;
    oldpic =
        document.getElementById("description").innerHTML = "Jovita <strong>loves</strong> "
}
document.getElementById("Jovita1").addEventListener("click", changeJovita);
//Jovita 

function changeSruthi(event) {
    console.dir(oldtarget);
    event.target.src = "https://www.nicepng.com/maxp/u2w7a9q8e6w7q8q8/";
    if (oldtarget !== null) {
        oldtarget.src = oldpic;
    }
    oldtarget = event.target;
    oldpic = "https://static.wikia.nocookie.net/id5/images/9/92/AdaMesmer.png/revision/latest/scale-to-width-down/371?cb=20210719132900";
    document.getElementById("description").innerHTML = "Sruthi <strong>loves<strong> her dog Jupiter <3"
}
document.getElementById("Sruthi1").addEventListener("click", changeSruthi);
//Sruthi 

function changeNiveditha(event) {
    console.dir(oldtarget);
    event.target.src = "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    if (oldtarget !== null) {
        oldtarget.src = oldpic;
    }
    oldtarget = event.target;
    oldpic =
        document.getElementById("description").innerHTML = "Nive <strong>loves<strong> photography <3"
}
document.getElementById("Niveditha1").addEventListener("click", changeNiveditha);
//Nive


