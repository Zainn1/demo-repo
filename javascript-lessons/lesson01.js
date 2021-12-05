
function add(x, y) {
    const z = x + y;
    return z;
}

function sum(xs) {
    let sum = 0;

    for (let i = 0; i < xs.length; i++) {
        sum = sum + xs[i];
    }

    return sum;
}

function average(xs) {
    let total = sum(xs);
    return total/xs.length;
}

function statistics(xs) {
    const total = sum(xs);
    const avg = average(xs);

    return {
        total: total,
        average: avg,
        count: xs.length
    }
}

module.exports = {
    sum: sum,
    average: average,
    plus: add,
    statistics
}
