function printArrItem(item, index) {
    console.log("배열 데이터 [" + index + "] : " + item);

}

function addArrItem(value) {
    sum += value;
}

function mapArrItem(value) {
    return value * value;
}

let data1 = ['서울', '부산', '청주', '대구'];
data1.forEach(printArrItem);

let data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
data2.forEach(addArrItem);
console.log("배열 데이터 합 :" + sum);

let mapdata = data2.map(mapArrItem);
console.log("원래 배열 :" + data2);
console.log("map 메소드 적용 배열 :" + mapdata);
