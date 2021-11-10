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
    }
    if (oldTarget == 5) {
         document.getElementById("Unnati1").src = "https://st4.depositphotos.com/1720323/31060/v/1600/depositphotos_310600904-stock-illustration-cute-kawaii-character-black-tapioca.jpg";
    }
    if (oldTarget == 6) {
         document.getElementById("Jovita1").src = "https://scontent.fewr1-6.fna.fbcdn.net/v/t1.18169-9/11701079_1108700615814049_3893307625563998154_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kKp3VeG5OLMAX_0UWeU&_nc_ht=scontent.fewr1-6.fna&oh=a52b7e1e4f3ace58a648fee139b0107d&oe=61B1CFCE";
    } 
    
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
        document.getElementById("Nivedithadescription").innerHTML = "Nive <strong>loves</strong> photography <3"
}
document.getElementById("Niveditha1").addEventListener("click", changeNiveditha);

function changeUnnati(event) {
    event.target.src = "https://previews.123rf.com/images/diplograma/diplograma2008/diplograma200800567/153696749-cute-boba-bubble-milk-tea-with-tapioca-pearl-milk-tea-black-delicious-pearls-is-taiwanese-famous-pop.jpg";
    restorePicture();
    oldtarget = 5;
        document.getElementById("unnatidescription").innerHTML = "Unnati <strong>loves<strong> strawberry mochi :P"
}
document.getElementById("Unnati1").addEventListener("click", changeUnnati);

function changeJovita(event) {
    event.target.src = "https://i.etsystatic.com/16096833/r/il/14d066/1869303136/il_1588xN.1869303136_f65e.jpg";
    restorePicture();
    oldtarget = 6;
        document.getElementById("jovitadescription").innerHTML = "Jovita <strong>loves</strong> froyo :D"
}
document.getElementById("Jovita1").addEventListener("click", changeJovita);

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
 
    document.getElementById("Unnati1").src = "https://st4.depositphotos.com/1720323/31060/v/1600/depositphotos_310600904-stock-illustration-cute-kawaii-character-black-tapioca.jpg";
    document.getElementById("unnatidescription").innerHTML = "";
    
    document.getElementById("Jovita1").src = "https://scontent.fewr1-6.fna.fbcdn.net/v/t1.18169-9/11701079_1108700615814049_3893307625563998154_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kKp3VeG5OLMAX_0UWeU&_nc_ht=scontent.fewr1-6.fna&oh=a52b7e1e4f3ace58a648fee139b0107d&oe=61B1CFCE";
    document.getElementById("jovitadescription").innerHTML = "";
    
//add
}
document.getElementById("reset").addEventListener("click", reset);


//above is updated

