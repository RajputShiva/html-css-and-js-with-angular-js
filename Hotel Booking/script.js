const countValue1 = document.getElementById('counter1');
const roomLeft = document.getElementById('p2');

// first row button logic
function increment1() {
    // get the value from UI
    let value = parseInt(countValue1.innerText);
    // Update the value
    value += 1;
    // set the value onto UI
    if(value<=3) {
        countValue1.innerText = value;
        decrementRoom();
    }
};
const decrement1 = () => {
    // get the value from UI
    let value = parseInt(countValue1.innerText);
    // Update the value
    value -= 1;
    // set the value onto UI
    if(value>=0) {
        countValue1.innerText = value;
        incrementRoom();
    }
};

// second row button logic
const countValue2 = document.getElementById('counter2');

function increment2() {
    let value = parseInt(countValue2.innerText);
    value += 1;
    if(value<=3) {
        countValue2.innerText = value;
        decrementRoom();
    }
};
const decrement2 = () => {
    let value = parseInt(countValue2.innerText);
    value -= 1;
    if(value>=0) {
        countValue2.innerText = value;
        incrementRoom();
    }
};

// third row button logic
const countValue3 = document.getElementById('counter3');

function increment3() {
    let value = parseInt(countValue3.innerText);
    value += 1;
    if(value<=3) {
        countValue3.innerText = value;
        decrementRoom();
    }
};

const decrement3 = () => {
    let value = parseInt(countValue3.innerText);
    value -= 1;
    if(value>=0) {
        countValue3.innerText = value;
        incrementRoom();
    }
};


// heart click logic
const heart = document.getElementById('heart1');

function red() {
   heart.style.color = "red";
}
function white() {
    heart.style.color = "white";
 }

heart.addEventListener('click', red);
heart.addEventListener('dblclick', white);


// rooms are left logic
let roomCount = 9;
function incrementRoom() {  
    if(roomCount < 9) {
        roomCount++;
    }
    roomLeft.innerText = roomCount +" "+ "rooms left";
    // roomLeft.innerText = "rooms left";
}
function decrementRoom() {
    if(roomCount > 0) {
        roomCount--;
    }
   roomLeft.innerText = roomCount +" "+ "rooms left";
//    roomLeft.innerText = "rooms left";
}


// All function call for discount amount
const discount = document.getElementById('discount');
function changedColor() {
     firstClick1();
     firstClick3();
     firstClick5();
}

discount.addEventListener('click',changedColor);

// All function call for actual amount
const price = document.getElementsByClassName('price');

function changedColor1() {
    firstClick2();
    firstClick4();
    firstClick6();

}

discount.addEventListener('dblclick',changedColor1);


// All function define
const p1 = document.getElementById('price1');
const p2 = document.getElementById('price2');
const p3 = document.getElementById('price3');

const ap1 = document.querySelector('.ap1');
const ap2 = document.querySelector('.ap2');
const ap3 = document.querySelector('.ap3');

function firstClick1() {
    let val = 10+","+500;
    p1.innerText = `₹ ${val+"/"+"night"}`;
    added1();
}

ap1.addEventListener('click',firstClick1)

function firstClick2() {
    let val = `14,000`
    p1.innerText = `₹ ${val+"/"+"night"}`;
    removed1();
}

ap1.addEventListener('dblclick',firstClick2)

function firstClick3() {
    let val = 11+","+250;
    p2.innerText = `₹ ${val+"/"+"night"}`;
    added2();
}

ap2.addEventListener('click',firstClick3)

function firstClick4() {
    let val = `15,000`;
    p2.innerText = `₹ ${val+"/"+"night"}`;
    removed2()
}

ap2.addEventListener('dblclick',firstClick4)

function firstClick5() {
    let val = 12+","+750;
    p3.innerText = `₹ ${val+"/"+"night"}`;
    added3();
}

ap3.addEventListener('click',firstClick5)

function firstClick6() {
    let val = `17,000`
    p3.innerText = `₹ ${val+"/"+"night"}`;
    removed3();
}

ap3.addEventListener('dblclick',firstClick6)


// add and remove class of first row
const active1 = document.querySelector("[active1]");
const active2 = document.querySelector("[active2]");
// add and remove class of second row
const active3 = document.querySelector("[active3]");
const active4 = document.querySelector("[active4]");
// add and remove class of third row
const active5 = document.querySelector("[active5]");
const active6 = document.querySelector("[active6]");

// function of first row
function added1() {
    if(!ap1.classList.contains("active1" || "active2")){
       active1.classList.add("active1");
       active2.classList.add("active2");
    }
}
function removed1() {
    if(!ap1.classList.contains("active1" || "active2")){
       active1.classList.remove("active1");
       active2.classList.remove("active2");
    }
}

// function of second row
function added2() {
    if(!ap2.classList.contains("active3" || "active4")){
       active3.classList.add("active3");
       active4.classList.add("active4");
    }
}
function removed2() {
    if(!ap2.classList.contains("active3" || "active4")){
       active3.classList.remove("active3");
       active4.classList.remove("active4");
    }
}

// function of third row
function added3() {
    if(!ap3.classList.contains("active5" || "active6")){
       active5.classList.add("active5");
       active6.classList.add("active6");
    }
}
function removed3() {
    if(!ap3.classList.contains("active5" || "active6")){
       active5.classList.remove("active5");
       active6.classList.remove("active6");
    }
}