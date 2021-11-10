var oldPicture;
var oldTarget = 0;
function restorePicture() {
    if (oldTarget == 1) {
        document.getElementById("Sejal1").src = "https://media4.giphy.com/media/IMfi5ugpf3W1y/giphy.gif";
    }
    if (oldTarget == 2) {
        document.getElementById("Bhakti1").src = "https://i.pinimg.com/564x/40/e6/29/40e629ddb31aedacdf2c5e94cfc7e23a.jpg";
    }
    if (oldTarget == 3) {
        document.getElementById("Sruthi1").src = "https://www.nicepng.com/png/full/161-1615668_super-mario-sunshine-princess-peach.png";
    }
    if (oldTarget == 4) {
        document.getElementById("Unnati1").src = "https://st4.depositphotos.com/1720323/31060/v/1600/depositphotos_310600904-stock-illustration-cute-kawaii-character-black-tapioca.jpg";
    }
    if (oldTarget == 5) {
        document.getElementById("Niveditha1").src = "https://global.canon/ja/c-museum/wp-content/uploads/2021/02/dslr892_top.jpg";
    }
    if (oldTarget == 6) {
        document.getElementById("Jovita1").src = "https://cdn2.vectorstock.com/i/1000x1000/52/31/cute-woman-avatar-casual-vector-12875231.jpg";
    }
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
    event.target.src = "https://media2.giphy.com/media/auvPdJqCpMA4E/200.gif";
    restorePicture();
    oldTarget = 1;
    document.getElementById("sejaldescription").innerHTML = "Sejal has 2 dogs named <strong>Coco and Sweety</strong>!";
}

document.getElementById("Sejal1").addEventListener("click", changeSejal);

//------------------------------------------------------------------------------------------------------------------------------

function changeBhakti(event) {
    event.target.src = "https://onmyojiguide.com/wp-content/uploads/2017/01/Glowing-Grass-Onmyoji-Shikigami-Icon-2-1.png";
    restorePicture();
    oldTarget = 2;
    document.getElementById("bhaktidescription").innerHTML = "Bhakti <strong>loves</strong> Brown Sugar Bubble tea ^_^";
}

document.getElementById("Bhakti1").addEventListener("click", changeBhakti);

//------------------------------------------------------------------------------------------------------------------------------

function changeSruthi(event) {
    event.target.src = "https://upload.wikimedia.org/wikipedia/en/5/53/Snoopy_Peanuts.png";
    restorePicture();
    oldTarget = 3;
    document.getElementById("sruthidescription").innerHTML = "Sruthi <strong>loves</strong> her dog Jupiter <3";
}

document.getElementById("Sruthi1").addEventListener("click", changeSruthi);

//------------------------------------------------------------------------------------------------------------------------------

function changeUnnati(event) {
    event.target.src = "https://media.dayoftheshirt.com/images/shirts/9nDCm/teepublic_cute-kawaii-bubble-tea-boba-milk-cat-lover-gift-idea-teepublic_1576507293.large.png";//put your second picture here
    restorePicture();
    oldTarget = 4;
    document.getElementById("unnatidescription").innerHTML = "Unnati loves <strong>bubble tea</strong>!";
}

document.getElementById("Unnati1").addEventListener("click", changeUnnati);

//------------------------------------------------------------------------------------------------------------------------------

function changeNiveditha(event) {
    event.target.src = "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/dslr-camera/desktop/DSLR_P1_900x420.jpg.img.jpg";
    restorePicture();
    oldTarget = 5;
    document.getElementById("Nivedithadescription").innerHTML = "Nive <strong>loves</strong> photography <3";
}

document.getElementById("Niveditha1").addEventListener("click", changeNiveditha);

//------------------------------------------------------------------------------------------------------------------------------

function changeJovita(event) {
    event.target.src = "https://media.istockphoto.com/vectors/frozen-yogurt-graphic-vector-id483509751?k=20&m=483509751&s=612x612&w=0&h=KaPRg4Xhoe-AZrk12ui5__bN1Ng33w2eqXjL8ifzzSo=";
    restorePicture();
    oldTarget = 6;
    document.getElementById("jovitadescription").innerHTML = "Jovita loves <strong>frozen yogurt</strong>!"
}

document.getElementById("Jovita1").addEventListener("click", changeJovita);

//------------------------------------------------------------------------------------------------------------------------------

function reset() {
    document.getElementById("Sejal1").src = "https://media4.giphy.com/media/IMfi5ugpf3W1y/giphy.gif";
    document.getElementById("sejaldescription").innerHTML = "";

    document.getElementById("Bhakti1").src = "https://i.pinimg.com/564x/40/e6/29/40e629ddb31aedacdf2c5e94cfc7e23a.jpg";
    document.getElementById("bhaktidescription").innerHTML = "";

    document.getElementById("Sruthi1").src = "https://www.nicepng.com/png/full/161-1615668_super-mario-sunshine-princess-peach.png";
    document.getElementById("sruthidescription").innerHTML = "";

    document.getElementById("Unnati1").src = "https://st4.depositphotos.com/1720323/31060/v/1600/depositphotos_310600904-stock-illustration-cute-kawaii-character-black-tapioca.jpg";
    document.getElementById("unnatidescription").innerHTML = "";

    document.getElementById("Niveditha1").src = "https://global.canon/ja/c-museum/wp-content/uploads/2021/02/dslr892_top.jpg";
    document.getElementById("Nivedithadescription").innerHTML = "";

    document.getElementById("Jovita1").src = "https://cdn2.vectorstock.com/i/1000x1000/52/31/cute-woman-avatar-casual-vector-12875231.jpg";
    document.getElementById("jovitadescription").innerHTML = "";

}
document.getElementById("reset").addEventListener("click", reset);
