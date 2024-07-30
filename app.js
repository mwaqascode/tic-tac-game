let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset_btn');
let newgamebtn = document.querySelector('#new-game');
let msg = document.querySelector('#msg');
let msgcontainer = document.querySelector('.msg-container');
let trun0 = true;

const resetgame =()=>{
    trun0 = true;
    enabledbtn();
    msgcontainer.classList.add("hide");
}

const winpattren = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 5, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        //    console.log('click');
        if (trun0) {
            box.innerText = "O";
            box.style.color="red";
            trun0 = false;

        } else {
            box.innerText = "X";
            box.style.color="blue";

            trun0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const enabledbtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}





const disabledbtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}


const showwinner = (winner) => {
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbtn();

}



const checkwinner = () => {

    for (let pattren of winpattren) {
        let pos1val = boxes[pattren[0]].innerText;
        let pos2val = boxes[pattren[1]].innerText;
        let pos3val = boxes[pattren[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log('winner', pos1val);
                showwinner(pos1val);
            }
        }


        // console.log(pattren[0], pattren[1], pattren[2]);
        // console.log(
        //     boxes[pattren[0]].innerText,
        //     boxes[pattren[1]].innerText,
        //     boxes[pattren[2]].innerText
        // );

    }


} 

newgamebtn.addEventListener("click",resetgame );
resetbtn.addEventListener("click",resetgame );
