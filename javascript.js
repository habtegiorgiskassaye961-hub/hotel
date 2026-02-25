let images =["images/img1.png","images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg","images/img6.jpg","images/img7.jpg"];
let index = 0;
function showslide(){
    document.getElementById("slide").src=images[index];
}
function nextslide(){
    index++;
    if(index >= images.length){
        index=0;
    }
    showslide();
}
function prevslide(){
    index--;
    if(index<0){
        index=images.length-1;
    }
    showslide();
}
function showpage(){
    window.location.href="home.html";
}
function showfood(){
    let meal = document.getElementById("meal").value;
    let drink = document.getElementById("drink").value;
    let time = document.getElementById("time").value;

    let mealprice = 0;
    let drinkprice = 0;

    if(meal === "berger") mealprice = 1200;
    if(meal === "pizza") mealprice = 900;
    if(meal === "pasta") mealprice = 200;

    if(drink === "wuha") drinkprice = 100;
    if(drink === "tej") drinkprice = 150;
    if(drink === "bira") drinkprice = 400;

    let foodprice = mealprice + drinkprice;

    localStorage.setItem("foodorder", meal + " + " + drink);
    localStorage.setItem("foodprice", foodprice);

    if(time === ""){
        alert("እባክዎ የመምጫ ሰአት ያስገቡ!");
        return;
    }

    alert(
        "ትዕዛዝ ተቀብሏል!\n\n" +
        "ምግብ: " + meal + "\n" +
        "መጠጥ: " + drink + "\n" +
        "ሰአት: " + time + "\n" +
        "ዋጋ: " + foodprice + " ብር"
    );
}

function showroom(){
    let bed = document.getElementById("bed").value;
    let floor = document.getElementById("floor").value;
    let room = document.getElementById("room").value;

    let roomprice = 0;
    if(bed === "ባለ አንድ") roomprice = 500;
    if(bed === "ባለ ሁለት") roomprice = 1000;

    if(bed === "" || floor === "" || room === ""){
        alert("እባክዎ ሁሉንም ያሟሉ!");
        return;
    }

    localStorage.setItem("roominfo", bed + " ፎቅ " + floor + " ቁጥር " + room);
    localStorage.setItem("roomprice", roomprice);

    alert(
        "መኝታ ክፍል ይዘዋል!\n\n" +
        "አይነት: " + bed + "\n" +
        "ፎቅ: " + floor + "\n" +
        "ቁጥር: " + room + "\n" +
        "ዋጋ: " + roomprice + " ብር"
    );
}

function showpayment(){
    let foodorder = localStorage.getItem("foodorder");
    let foodprice = localStorage.getItem("foodprice");
    let roominfo = localStorage.getItem("roominfo");
    let roomprice = localStorage.getItem("roomprice");

    if(foodorder === null || roominfo === null){
        alert("እባክዎ መጀመሪያ ምግብና ክፍል ይዘዙ!");
        return;
    }

    let total = Number(foodprice) + Number(roomprice);

    alert(
        "ምግብ:  " + foodorder + " = " + foodprice + " ብር\n" +
        "መኝታ:  " + roominfo + " = " + roomprice + " ብር\n\n" +
        "ጠቅላላ ክፍያ:  " + total + " ብር\n\n" +
        "ከፍለዋል!"
    );
}

