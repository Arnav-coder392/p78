var members = [
    "https://jerrymahoney.files.wordpress.com/2013/06/familybook.png", 
    
    "https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Brother-512.png", 
    "https://cdn2.vectorstock.com/i/1000x1000/00/06/teen-boy-character-avatar-vector-11360006.jpg",

    "https://www.clipartkey.com/mpngs/m/145-1456201_female-using-smartphone-mom-and-baby-cartoon-png.png", 
    "https://thumbs.dreamstime.com/b/print-175056460.jpg"
    ];

    var names = [
    "My Family-Book", 
    "Ryan Gupta", 
    "Arnav Gupta", 
    "Ranjita Gupta", 
    "Achin Gupta"
    ];

    var count = 0;

    function nextslide () {

    document.getElementById("members").src = members[count];

    document.getElementById("names").innerHTML = names[count];
    
    count++;

    if (count == 6) {
    
    count = 0;

    }

    }