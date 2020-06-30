import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent implements OnInit {

  arr: any[] = [-3, 5, 10, 2, 25, 16, -5, 25, 3];

  constructor() { }

  ngOnInit() {
    this.meandearingOrder(this.arr);
  }

  getMinMax(arr) {
    return arr.reduce(({min, max}, v) => ({
      min: min < v ? min : v,
      max: max > v ? max : v,
    }), { min: arr[0], max: arr[0] });
  }

  maxValue(arr) {
    let max = arr[0];

    for (const val of arr) {
      console.log(val);
      if (val > max) {
        max = val;
      }
    }
    return max;
  }

  mmMath(arr) {
    const max = Math.max.apply(null, arr);
    const min = Math.min.apply(null, arr);
    return {min, max};
  }

  meandearingOrder(arr) {
    const sortedArray = this.arr.slice(); // Copia el array
    sortedArray.sort((a, b) => a - b ); // Ordena el array de menor a mayor
    const temp: Array<number>[] = []; // Declara array temporal
    let flag = true;
    let large = arr.length - 1;
    let small = 0;

    for (let i = 0; i < arr.length; i++) {
      if (flag) {
        temp[i] = sortedArray[large--];
      } else {
        temp[i] = sortedArray[small++];
      }
      flag = !flag;
    }
    return temp;
  }
}
