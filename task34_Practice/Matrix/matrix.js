class Matrix {
  m;
  n;
  cells; 
  
  constructor(m,n){
    this.m = m;
    this.n = n;
    this.cells = Array(m);

    for(let i = 0; i < m; i++){
      this.cells[i] = Array(n).fill(0);
    }
  }

setCellValue(x, y, value){
  this.cells[x][y] = value;
}
getCellValue(x, y){
  return this.cells[x][y];
}


  additionMatrix(arr){ // Сложение с другой матрицей
    let newArr = new Matrix(this.m, this.n);

    for (let i = 0; i < this.m; i++) {
      for (let j = 0; j < this.n; j++) {
        let x = this.getCellValue(i,j) + arr.getCellValue(i,j);
        newArr.setCellValue(i,j, x);
      }
    } 
    return newArr;
  }

  multMatrixNumber(c){ // Умножение матрицы на число
    let newArr = new Matrix(this.m, this.n);

    for (let i = 0; i < this.m; i++) {
      for (let j = 0; j < this.n; j++) {
        let x = this.getCellValue(i,j) * c;
        newArr.setCellValue(i,j, x);
      }
    } 
    return newArr;
  }

  show(){
    console.table(this.cells);
  }

}

export {Matrix};