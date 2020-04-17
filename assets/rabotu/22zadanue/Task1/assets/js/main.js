// 1)

function getName() {
    let name = prompt('What is your name?');
    if (name != "") {
        alert("Hello, " + name);
    } else {
        alert("Enter your name, please");
        getName();
    }
}

// 2) 

function getAge() {
    const current_year = 2020;
    let birth_year = prompt("Your birth year");
    let age = current_year - birth_year;
    alert("Your age: " + age);
}


// 3)

function getNumber() {

    let Side_Length_Of_A_Square = prompt("Side length of a square");
    let the_number_of_sides_of_the_square = 4;
    let square_perimeter = Side_Length_Of_A_Square * the_number_of_sides_of_the_square;
    if (Side_Length_Of_A_Square != "") {
        alert("Square perimeter:" + square_perimeter);
    } else {
        alert("Enter side length of a square");
        getNumber();
    }
}

// 4) 

function getRadius() {

    let Radius = prompt("Circle radius");
    let Circle_radius = Math.PI * (Radius ** 2);

    if (Radius != "") {
        alert("Circle radius: " + Circle_radius.toFixed(3));
    } else {
        alert("Enter circle radius");
        getRadius();
    }
}

// 5)

function getSpeed() {

    let getDistance = prompt("Enter a distance (km)?");
    let getHours = prompt("Enter for how many hours would like to reach?");
    let Speed = getDistance / getHours;


    if (getDistance != "" && getHours != "") {
        alert("Speed: " + Speed.toFixed(3) + " km/h");
    } else {

        alert("Enter a distance (km) and for how many hours would like to reach? ");

        getSpeed();

    }

}

// 6)

function getMoney() {

    const Dollar = 27.26;
    const Euro = 29.52;
    let summa = prompt("Enter the amount of dollars");
    let Convert = (summa * Dollar) / Euro;

    if (summa != "") {
        alert("Amount in euro: " + Convert.toFixed(2) + " €");
    } else {
        alert("Enter the amount of dollars");
        getMoney();
    }
}

// 7) 

function getNumberOfFiles() {

    const fileSize = 820;

    let flashDriveVolume = prompt("Enter flash drive volume");
    let flashDriveVolumeMb = flashDriveVolume * 1024;
    let NumberOfFiles = flashDriveVolumeMb / fileSize;

    if (flashDriveVolume != "") {
        alert("Number of files: " + Math.floor(NumberOfFiles));
    } else {
        alert("Enter flash drive volume");
        getNumberOfFiles();
    }
}


// 8) 


function getСhocolate() {
    let summa = prompt("Enter the amount in your wallet");
    let cena = prompt("Enter the value of the chocolate bar");
    let NumberOfChocolates = Math.floor(summa / cena);
    //let sdacha = (NumberOfChocolates - Math.floor(NumberOfChocolates)) * cena;
    let sdacha = summa - (NumberOfChocolates * cena);
    if (summa != "" && cena != "") {
        alert("Number of chocolates: " + NumberOfChocolates + " Сhange: " + sdacha);
    } else {
        alert("Enter the amount in your wallet and the value of the chocolate bar");
        getСhocolate();
    }
}


//9) 

function reverse() {
    let val = parseInt(document.getElementById("val").value)
    t = 0;
    s = 0;
    d = 0;
    e = 0;
    rez = 0;

    t = Math.floor(val / 1000);
    s = Math.floor(val / 100) % 10;
    d = Math.floor((val % 100) / 10);
    e = val % 10;
    rez = e * 1000 + d * 100 + s * 10 + t;
    alert(rez);


    /* Или можно еще так !!!!!!!!!!!!!!

function reverse() {
    let val = parseInt(document.getElementById("val").value)
    t = Math.floor(val / 1000);
    s = Math.floor(val / 100) % 10;
    d = Math.floor((val % 100) / 10);
    e = val % 10;
    rez = e * 1000 + d * 100 + s * 10 + t;
    alert(rez);
}
*/

}


// 10)

function getAmount() {
    let depositAmount = prompt("What is the amount of the deposit");
    let month = prompt("How long do you want to create a contribution (in months)?");
    let percent = prompt("What is the interest rate of the deposit?");

    let TheAmountOfAccruedInterest = ((((depositAmount * percent) / 100) / 12) * month);


    if (depositAmount != "" && month != "" && percent != "") {
        alert("The amount of accrued interest: " + TheAmountOfAccruedInterest.toFixed(2));
    } else {
        alert("Enter what is the amount of the deposit and How long do you want to create a contribution (in months) and what is the interest rate of the deposit?");
        getAmount();
    }
}