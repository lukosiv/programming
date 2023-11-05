/*
*/
let matrix=[
    [0,1,1],
    [0,1,0],
    [1,0,0]
];
let zeroCount=0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j]===0){
            zeroCount++;
        }
    }
}
console.log(" количество нулей в очке товарища:"+zeroCount);