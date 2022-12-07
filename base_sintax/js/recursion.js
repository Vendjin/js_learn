function pow(a, b) {
    let res = 1;
    for (let i = 0; i < b; i++) {
        res *= a;
    }
    return res;
}

console.log(pow(2, 2));


function powRec(x, n) {
    if (n === 1) {
        return x
    } else {
        return x * powRec(x, n - 1);
    }
}

console.log(powRec(2, 3));


let students = {
    js: [{
        name: 'John',
        progress: 100
    },
        {
            name: 'Ivan',
            progress: 60
        }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        },
            {
                name: 'Ann',
                progress: 18
            }],
        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};


function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for(let course of Object.values(data)){
        console.log(course);
        if (Array.isArray(course)){
            students += course.length;
            for(let i =0; i < course.length; i++){
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)){
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++){
                    total += subCourse[i].progress;
                }
                console.log(subCourse);
            }
        }
    }

    return total / students;
}

console.log(getTotalProgressByIteration(students));


function getTotalProgressByRecursion(data){
    if (Array.isArray(data)){
        let total = 0;
        for (let i = 0; i < data.length; i++){
            total += data[i].progress;
        }

        return [total, data.length];

    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)){
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total
    }
}

const result  = getTotalProgressByRecursion(students);
console.log(result[0]/ result[1]);


function factorial(n) {
    if (!Number.isInteger(n) || typeof n !== 'number'){
        return 'Формат должен быть не дробный и число';
    } else if (n === 0 || n < 0){
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));