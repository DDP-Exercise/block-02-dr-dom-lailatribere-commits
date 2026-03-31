"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Laila Tribere - 2026-03-15
 *******************************************************/

const X = "Savior (X)";
const O = "Dr. DOM (O)";

//Some of your epic battles:
const BATTLEFIELD =
    [
        [O, X, O],
        [X, X, X],
        [O, O, X],
    ];
// const BATTLEFIELD =
//     [
//         [null, X, X],
//         [X, O, null],
//         [O, O, O],
//     ];
// const BATTLEFIELD =
//     [
//         [O, O, X],
//         [X, O, X],
//         [O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X],
//         [X, O, X],
//         [O, X, O],
//     ];
//
// const BATTLEFIELD =
//     [
//         [O, X, X, X],
//         [X, O, X, O],
//         [O, X, O, X],
//         [X, O, X, X],
//     ];
// const BATTLEFIELD =
//    [
//        [O, X, X, X, null],
//        [X, O, X, O, O],
//        [O, X, O, null, X],
//        [X, null, X, O, O],
//        [X, null, O, X, O],
//    ];

//TODO: Check if the battle is over, and if so, announce the winner!

// instead of using counter === 3 , 4, 5 for 3x3 4x4 5x5
// const size = BATTLEFIELD.length; gets array sizze, will adapt to all sizes
const size = BATTLEFIELD.length;

// Check Horizontal - rows
for (let row = 0; row < size; row++) { // goes on loop, starts at first row, runs till row < size, increases row by 1 after each loop
    let first  = BATTLEFIELD[row][0]; // checks the first cel of row, like [O, X, O],
    if (first !== null){ // comparing //if the wor is empty, skips
        let win = true; // basic assumption

        for (let col = 0; col < size; col++){ // again loop but for columns
            if (BATTLEFIELD[row][col] !== first){ // checks the cells, if diff then win = false
                win = false;
               // break;
            }
        }
        if(win === true){
            document.write("<p>" + first + " wins hotizontally </p>"); // document.write writes result on page in <p></p>
        }
    }
}


// Check Vertical - columns
for (let col = 0; col < size; col++){
    let first = BATTLEFIELD[0][col]; // same as horizontal but reversed
    if (first !== null) {
        let win = true;
        for (let row = 0; row < size; row++){
            if (BATTLEFIELD[row][col] !== first){
                win = false;
                //break;
            }
        }
        if (win === true){
            document.write("<p>" + first + " wins vertically </p>");
        }
    }
}
// Check Main Diagonal
// row/ col          0       1        2
//     0     start [0][0]  [0][1]   [0][2]
//     1      mid  [1][0]  [1][1]   [1][2]
//     2      end  [2][0]  [2][1]   [2][2]

let mainDiagonal = BATTLEFIELD[0][0];
if (mainDiagonal !== null){ // null = empty
    let diagonalWin =true;

    for (let row = 0; row < size; row++){ // goes trough each row line
        let col = row;
        if (BATTLEFIELD[row][col] !== mainDiagonal){ // for diff cells
            diagonalWin = false;
            //break;
        }
    }
    if (diagonalWin === true){
        document.write("<p>" + mainDiagonal + " wins on main diagonal </p>");
    }
}
// Check Anti Diagonal
// row/ col     0       1        2
//     0      [0][0]  [0][1]   [0][2] start
//     1      [1][0]  [1][1]   [1][2] mid
//     2      [2][0]  [2][1]   [2][2] end
// col = size - 1 - row
let antiDiagonal = BATTLEFIELD[0][size -1]; // top right
if (antiDiagonal !== null){
    let antiDiagonalWin =true;

    for (let row = 0; row < size; row++){
        let col = size - 1 - row; // moves left when row is increasing
        if (BATTLEFIELD[row][col] !== antiDiagonal){
            antiDiagonalWin = false;
            break;
        }
    }
    if (antiDiagonalWin === true){
        document.write ("<p>" + antiDiagonal + " wins on anti diagonal </p>");
    }
}

// would be nice to have an example how it should look like, since some of had no idea how this should look like
// should it be visible in console ? or on page ? CONFUSED