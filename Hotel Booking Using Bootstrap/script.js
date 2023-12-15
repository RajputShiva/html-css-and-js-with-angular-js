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
const hide1 = document.querySelector("[hide1]");
const hide2 = document.querySelector("[hide2]");
const hide3 = document.querySelector("[hide3]");
const hide4 = document.querySelector("[hide4]");
const hide5 = document.querySelector("[hide5]");
const hide6 = document.querySelector("[hide6]");
function changed() {
    hide1.classList.add("hide1");
    hide2.classList.add("hide2");
    hide3.classList.add("hide3");
    hide4.classList.add("hide4");
    hide5.classList.add("hide5");
    hide6.classList.add("hide6");

    firstClick1();
    firstClick3();
    firstClick5();
}

discount.addEventListener('click',changed);


function change() {
    hide1.classList.remove("hide1");
    hide2.classList.remove("hide2");
    hide3.classList.remove("hide3");
    hide4.classList.remove("hide4");
    hide5.classList.remove("hide5");
    hide6.classList.remove("hide6");

    firstClick2();
    firstClick4();
    firstClick6();
}

discount.addEventListener('dblclick',change);



// All function call for discount amount

// All function call for actual amount
// const price = document.getElementsByClassName('price');


// All function define
const p1 = document.getElementById('price1');
const p2 = document.getElementById('price2');
const p3 = document.getElementById('price3');

function firstClick1() {
    let val = 10+","+500;
    p1.innerText = `₹ ${val+"/"+"night"}`;
}

ap1.addEventListener('click',firstClick1)

function firstClick2() {
    let val = `14,000`
    p1.innerText = `₹ ${val+"/"+"night"}`;
}

ap1.addEventListener('dblclick',firstClick2)

function firstClick3() {
    let val = 11+","+250;
    p2.innerText = `₹ ${val+"/"+"night"}`;
}

ap2.addEventListener('click',firstClick3)

function firstClick4() {
    let val = `15,000`;
    p2.innerText = `₹ ${val+"/"+"night"}`;
}

ap2.addEventListener('dblclick',firstClick4)

function firstClick5() {
    let val = 12+","+750;
    p3.innerText = `₹ ${val+"/"+"night"}`;
}

ap3.addEventListener('click',firstClick5)

function firstClick6() {
    let val = `17,000`
    p3.innerText = `₹ ${val+"/"+"night"}`;
}

ap3.addEventListener('dblclick',firstClick6)
