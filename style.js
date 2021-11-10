var oldPicture;
var oldTarget = 0;
function restorePicture() {
    if (oldTarget == 1) {
        document.getElementById("Sejal1").src = "https://i.pinimg.com/236x/02/6a/cc/026acca08fb7beea6bd4ecd430e312bd.jpg";
    }
    if (oldTarget == 2) {
        document.getElementById("Bhakti1").src = "https://i.pinimg.com/564x/40/e6/29/40e629ddb31aedacdf2c5e94cfc7e23a.jpg";
    }
    if (oldTarget == 3) {
        document.getElementById("Sruthi1").src = "https://www.nicepng.com/png/full/161-1615668_super-mario-sunshine-princess-peach.png";
    }
    if (oldTarget == 4) {
         document.getElementById("Niveditha1").src = "https://global.canon/ja/c-museum/wp-content/uploads/2021/02/dslr892_top.jpg";
//add
}
function toggleVis(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function changeSejal(event) {
    event.target.src = "https://i.pinimg.com/originals/15/a4/63/15a463647cf3353b62b372ba1551c337.png";
    restorePicture();
    oldTarget = 1;
    document.getElementById("sejaldescription").innerHTML = "Sejal has 2 dogs named <strong>Coco and Sweety</strong>!";
}

document.getElementById("Sejal1").addEventListener("click", changeSejal);

function changeBhakti(event) {
    event.target.src = "https://onmyojiguide.com/wp-content/uploads/2017/01/Glowing-Grass-Onmyoji-Shikigami-Icon-2-1.png";
    restorePicture();
    oldTarget = 2;
    document.getElementById("bhaktidescription").innerHTML = "Bhakti <strong>loves</strong> Brown Sugar Bubble tea ^_^";
}

document.getElementById("Bhakti1").addEventListener("click", changeBhakti);

function changeSruthi(event) {
    event.target.src = "https://upload.wikimedia.org/wikipedia/en/5/53/Snoopy_Peanuts.png";
    restorePicture();
    oldTarget = 3;
    document.getElementById("sruthidescription").innerHTML = "Sruthi <strong>loves</strong> her dog Jupiter <3";
}

document.getElementById("Sruthi1").addEventListener("click", changeSruthi);

function changeNiveditha(event) {
    event.target.src = "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/dslr-camera/desktop/DSLR_P1_900x420.jpg.img.jpg";
    restorePicture();
    oldtarget = 4;
        document.getElementById("nivedithadescription").innerHTML = "Nive <strong>loves</strong> photography <3"
}
document.getElementById("Niveditha1").addEventListener("click", changeNiveditha);
//add


function reset() {
    document.getElementById("Sejal1").src = "https://i.pinimg.com/236x/02/6a/cc/026acca08fb7beea6bd4ecd430e312bd.jpg";
    document.getElementById("sejaldescription").innerHTML = "";

    document.getElementById("Bhakti1").src = "https://i.pinimg.com/564x/40/e6/29/40e629ddb31aedacdf2c5e94cfc7e23a.jpg";
    document.getElementById("bhaktidescription").innerHTML = "";

    document.getElementById("Sruthi1").src = "https://upload.wikimedia.org/wikipedia/en/5/53/Snoopy_Peanuts.png";
    document.getElementById("sruthidescription").innerHTML = "";

    document.getElementById("Niveditha1").src = "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/dslr-camera/desktop/DSLR_P1_900x420.jpg.img.jpg";
    document.getElementById("nivedithadescription").innerHTML = "";
//add
}
document.getElementById("reset").addEventListener("click", reset);


//above is updated




    if (oldtarget = 3) {
        document.getElementById("Unnati1").src"http://vivianwskwan.com/wp-content/uploads/2018/06/mochimii_family-gif-500.gif";
    }
    if (oldtarget = 4) {
        document.getElementById("Jovita1").src"";
    }
    if (oldtarget = 6) {
        document.getElementById("Niveditha1").src"";
    }
}




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
document.getElementById("Unnati1").addEventListener("click", changeUnnati);
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



