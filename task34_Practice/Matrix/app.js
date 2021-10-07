import {Matrix} from "./matrix.js";


let matrix = new Matrix(2,2);

matrix.setCellValue(0,0,1);
matrix.setCellValue(0,1,2);
matrix.setCellValue(1,0,3);
matrix.setCellValue(1,1,4);

matrix.show()

let matrix2 = new Matrix(2,2);

matrix2.setCellValue(0,0,5);
matrix2.setCellValue(0,1,6);
matrix2.setCellValue(1,0,7);
matrix2.setCellValue(1,1,8);

matrix2.show()

let addMat = matrix.additionMatrix(matrix2); 

let mulMat = matrix.multMatrixNumber(2);

addMat.show();

mulMat.show();

let result = matrix.multMatrixNumber(2).additionMatrix(matrix2);

result.show();