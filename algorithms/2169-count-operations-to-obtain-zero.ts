function countOperations(num1: number, num2: number): number {
    if(num1 < 0 || num2 < 0 || num1 > 1e6 || num2 > 1e6) return 0; 
    let NumOfoperataions: number = 0;
    while(num1 !== 0 && num2 !== 0){
        if(num1 >= num2){
            num1 -= num2;
        } else {
            num2 -= num1;
        }
        NumOfoperataions ++;
    }
    return NumOfoperataions;
};
