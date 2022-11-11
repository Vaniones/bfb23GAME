const version = "0.1.2"

// animation
const animationProperties = [
	    window.requestAnimationFrame ||
	    window.mozRequestAnimationFrame ||
	    window.webkitRequestAnimationFrame ||
	    window.msRequestAnimationFrame,
];
let canvas;
let ctx;
const cwidth = 960;
const cheight = 540;
let pixelRatio;
let addedZoom = 1;
let highQual = true;

let osc1, osctx1;
let osc2, osctx2;
let osc3, osctx3;
let osc4, osctx4;

let _xmouse = 0
let _ymouse = 0
let _pxmouse = 0
let _pymouse = 0
let inputText = 0
let hoverText = 0

// root
{
    // Flower
    {
        transform: true
        undefined: true
        const aimProperties = [
//  aim
[false,false,false,false,false,false,false,false,false,false,false,false,false,0,0,false,false,false,false,false,false,],
[true,true,true,true,true,true,true,true,true,true,false,0,0,true,true,true,true,true,true,true,true,true,true,true,true,true,0,1,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]],
[true,true,true,true,false,false,false,false,false,false,false,0,0,true,false,true,1,false],
[false,false,false,false,false,false,false,false,false,false,true,0,0,false,false,true,1,false],
[false,false,false,false,false,false,false,false,true,true,false,0,0,false,false,true,0,false],
[true,true,true,true,false,false,false,false,true,false,false,0,0,false,false,true,14,false,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]],
[true,true,true,true,false,false,false,false,true,false,false,0,6,false,false,true,12,true,[0,1,2,3,4,5,6,7,8,9,10,11]],
[false,false,false,false,false,false,false,false,true,false,true,0,0,false,false,true,41,true,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]],
[true,true,true,true,false,false,false,false,true,false,false,0,6,false,false,true,12,true,[0,1,2,3,4,5,6,7,8,9,10,11]],
[true,true,true,true,true,true,true,true,false,false,false,0,0,false,false,true,1,true],
[false,true,false,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
[true,true,true,true,true,false,false,false,false,false,false,0,0,false,false,true,1,false],
        // aim1
        [true,true,true,true,false,false,false,false,false,false,false,0,0,true,false,true,1,false],
        [false,false,false,false,false,false,false,false,false,false,true,0,0,false,false,true,1,false],
        [false,false,false,false,false,false,false,false,true,true,false,0,0,false,false,true,0,false],
        [true,true,true,true,false,false,false,false,true,false,false,0,0,false,false,true,14,false,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]],
        [true,true,true,true,false,false,false,false,true,false,false,0,6,false,false,true,12,true,[0,1,2,3,4,5,6,7,8,9,10,11]],
        [false,false,false,false,false,false,false,false,true,false,true,0,0,false,false,true,41,true,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]],
        [true,true,true,true,false,false,false,false,true,false,false,0,6,false,false,true,12,true,[0,1,2,3,4,5,6,7,8,9,10,11]],
        [true,true,true,true,true,true,true,true,false,false,false,0,0,false,false,true,1,true],
        [false,true,false,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
        [true,true,true,true,true,false,false,false,false,false,false,0,0,false,false,true,1,false],
        ];
    }
}

// [1] - animation frames
// [2] - loop?
// [3] - loop frame order
// [4] - animation frame order
const blockProperties = [
	// tile0
	[false,false,false,false,false,false,false,false,false,false,false,0,0,false,false,true,0,false],
	[true,true,true,true,false,false,false,false,false,false,false,0,0,true,false,true,1,false],
	[true,true,true,true,true,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[true,true,true,true,false,true,false,false,false,false,false,0,0,false,false,true,1,false],
	[true,true,true,true,false,false,true,false,false,false,false,0,0,false,false,true,1,false],
	[true,true,true,true,false,false,false,true,false,false,false,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,true,false,0,0,false,false,true,0,false],
	[false,false,false,false,false,false,false,false,true,true,false,0,0,false,false,true,120,true,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119]],
	[false,false,false,false,false,false,false,false,false,false,false,0,0,false,false,true,0,false],
	[false,false,false,false,false,false,false,false,false,false,true,0,0,false,false,true,1,false],
	// tile1
	[true,true,true,true,false,false,false,false,false,false,false,0,0,true,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,true,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,true,false,0,0,false,false,true,0,false],
	[true,true,true,true,false,false,false,false,true,false,false,0,0,false,false,true,14,false,[0,1,2,3,4,5,6,7,8,9,10,11,12,13]],
	[true,true,true,true,false,false,false,false,true,false,false,0,6,false,false,true,12,true,[0,1,2,3,4,5,6,7,8,9,10,11]],
	[false,false,false,false,false,false,false,false,true,false,true,0,0,false,false,true,41,true,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]],
	[true,true,true,true,false,false,false,false,true,false,false,0,6,false,false,true,12,true,[0,1,2,3,4,5,6,7,8,9,10,11]],
	[true,true,true,true,true,true,true,true,false,false,false,0,0,false,false,true,1,true],
	[false,true,false,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[true,true,true,true,true,false,false,false,false,false,false,0,0,false,false,true,1,false],
	// tile2
	[true,true,true,true,false,true,false,false,false,false,false,0,0,false,false,true,1,false],
	[true,true,true,true,false,false,true,false,false,false,false,0,0,false,false,true,1,false],
	[true,true,true,true,false,false,false,true,false,false,false,0,0,false,false,true,1,false],
	[true,true,true,true,true,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	// tile3
	[false,false,false,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[true,true,true,true,false,false,false,false,true,false,false,0,1,false,false,true,1,false],
	[true,true,true,true,false,false,false,false,true,false,false,0,1,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,false,false,0,1,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,false,false,0,1,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,true,false,1,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,true,false,7,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,true,false,2,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,true,false,8,0,false,false,true,1,false],
	[false,true,false,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	// tile4
	[true,true,true,true,false,false,false,false,true,true,false,13,0,false,false,true,5,false],
	[true,true,true,true,false,false,false,false,true,true,false,14,0,false,false,true,5,false],
	[true,true,true,true,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[true,true,true,true,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[false,false,true,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[true,true,true,true,false,true,false,true,false,true,false,0,0,false,false,true,1,false],
	[true,true,true,true,false,true,true,false,false,true,false,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,true,false,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,true,0,0,false,false,true,1,false],
	[true,true,true,true,false,false,false,false,true,false,false,0,0,false,false,true,3,true,[0,0,0,0,0,1,1,2,2,1,1]],
	// tile5
	[false,false,false,false,false,false,false,false,false,true,false,0,0,false,false,true,1,false],
	[true,true,true,true,false,false,false,false,true,false,false,0,2,false,false,true,1,false],
	[true,true,true,true,false,false,false,false,true,false,false,0,2,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,false,false,0,2,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,false,false,0,2,false,false,true,1,false],
	[false,true,false,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[true,true,true,true,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,true,false,3,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,true,false,9,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,true,false,0,0,false,false,true,120,true,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119]],
	// tile6
	[true,true,true,true,false,false,false,false,true,false,false,0,3,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,false,false,0,3,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,false,false,0,3,false,false,true,1,false],
	[false,true,false,false,false,false,false,false,true,false,false,0,3,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,false,false,0,3,false,false,true,1,false],
	[true,true,true,true,false,false,false,false,true,false,false,0,3,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,true,false,0,0,false,false,true,2,true,[0,0,0,1,1,1]],
	[true,true,true,true,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[false,false,false,true,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[true,false,false,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	// tile7
	[false,false,false,true,false,false,false,false,false,false,true,0,0,false,false,true,1,false],
	[true,true,true,true,false,false,false,false,true,true,false,15,0,false,false,true,5,false],
	[true,true,true,true,true,true,true,true,false,false,false,0,0,false,false,true,1,false],
	[true,true,true,true,false,false,false,false,false,false,false,0,0,true,false,true,1,false],
	[true,true,true,true,false,false,false,false,true,false,false,0,0,false,false,true,30,true,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]],
	[false,false,false,false,true,true,true,true,true,false,false,0,0,false,false,true,20,true,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],
	[false,false,false,false,true,true,true,true,true,false,false,0,0,false,false,true,20,true,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],
	[false,false,false,false,false,false,false,false,false,false,true,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,false,false,0,1,false,false,true,1,false],
	[true,true,true,true,true,true,true,true,true,false,false,0,1,false,false,true,1,false],
	// tile8
	[false,false,false,false,false,false,false,false,true,true,false,0,0,false,false,true,120,true,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119]],
	[false,true,false,false,false,false,false,false,true,false,false,0,1,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,false,false,0,1,false,false,true,1,false],
	[false,true,false,false,false,false,false,false,true,false,false,0,6,false,false,true,12,true,[0,1,2,3,4,5,6,7,8,9,10,11]],
	[false,true,false,false,false,false,false,false,true,false,false,0,6,false,false,false,1,false],
	[false,true,false,false,false,false,false,false,true,false,false,0,6,false,false,true,12,true,[0,1,2,3,4,5,6,7,8,9,10,11]],
	[false,true,false,false,false,false,false,false,true,false,false,0,6,false,false,false,1,false],
	[false,false,false,false,false,false,false,false,false,false,true,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,true,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	// tile9
	[false,false,false,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,false,0,0,false,false,true,1,false],
	[true,true,true,true,false,false,false,false,false,false,false,0,0,true,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,true,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,true,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,true,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,true,0,0,false,false,true,1,false],
	[true,true,true,true,false,false,false,false,false,false,false,0,0,true,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,true,0,0,false,false,false,1,false],
	// tile10
	[false,false,false,false,true,true,true,true,false,false,false,0,1,false,true,true,1,false],
	[false,false,false,false,false,false,false,false,true,false,false,0,0,false,false,true,60,true,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]],
	[true,true,true,true,false,false,false,false,false,false,false,0,0,true,false,true,1,false],
	[false,false,false,false,true,true,true,true,false,false,false,0,1,false,true,true,1,false],
	[false,false,false,false,false,false,false,false,true,false,false,0,0,false,false,true,60,true,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]],
	[true,true,true,true,false,false,false,false,false,false,false,0,0,true,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,false,true,0,0,false,false,true,1,false],
	[true,true,true,true,false,false,false,false,false,false,false,0,0,true,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,true,false,6,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,true,false,12,0,false,false,true,1,false],
	// tile11
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	// tile12
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,0,false],
	// tile13
	[false,false,false,false,false,false,false,false,false,false,false,0,0,false,true,true,1,false],
	[true,true,true,true,false,false,false,false,false,false,false,0,0,true,false,true,1,false],
	[false,false,false,false,false,false,false,false,false,true,true,0,0,false,false,false,1,false],
	[false,true,false,false,false,false,false,false,true,false,false,0,2,false,false,true,1,false],
	[false,false,false,false,false,false,false,false,true,false,false,0,2,false,false,true,1,false],
];
const switches = [[31,33,32,34,79,78,81,82],[51,53,52,54,133,134],[65,61,60,62,63,64],[],[],[14,16,83,85]];

function saveGame() {
	bfb23.setItem('gotCoin', gotCoin);
	bfb23.setItem('coins', coins);
	bfb23.setItem('levelProgress', levelProgress);
	bfb23.setItem('bonusProgress', bonusProgress);
	bfb23.setItem('bonusesCleared', bonusesCleared);
	bfb23.setItem('deathCount', deathCount);
    bfb23.setItem('timer', timer);
}

function Timer() {
    bfb23.setItem('Timer', timer)
}
if (bfb.getItem('Timer', timer) == undefined) {
    clearTimeout();
} else {
    Timeout = parseInt(bfb23.getItem('Timer', timer))
}

if (bfb23.getItem('levelProgress') == undefined) {
	clearVars();
} else {
	levelProgress = parseInt(bfb23.getItem('levelProgress'));
	bonusProgress = parseInt(bfb23.getItem('bonusProgress'));
	deathCount = parseInt(bfb23.getItem('deathCount'));
	timer = parseFloat(bfb23.getItem('timer'));
	gotCoin = new Array(levelCount);
	let gotCoinRaw = bfb23.getItem('gotCoin').split(',');
	coins = 0;
	for (let i = 0; i < levelCount; i++) {
		gotCoin[i] = gotCoinRaw[i] === 'true';
		if (gotCoin[i]) coins++;
	}
	bonusesCleared = new Array(33);
	let bonusesClearedRaw = bfb23.getItem('bonusesCleared').split(',');
	for (let i = 0; i < 33; i++) {
		bonusesCleared[i] = bonusesClearedRaw[i] === 'true';
	}
}

let white_alpha = 0;

let mdao1 = 0
let mdao2 = 0;
let levelProgress;
let bonusProgress;
let bonusesCleared;
let gotCoin;
let gotThisCoin = false;
let deathCount;
let timer;
let coins;
let longMode = false;
let quirksMode = false;
let enableExperimentalFeatures = false;
