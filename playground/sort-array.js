let arr = [
    {age: 44, name: 'vinay'}, {age: 24, name: 'deepak'}, {age: 74, name: 'suresh'},{age: 55, name:'sss'}
];

function compare(a, b) {
    if (a.age < b.age)
        return -1;
    if (a.age > b.age)
        return 1;
    return 0;
}

arr = arr.sort(compare);

console.log(arr);