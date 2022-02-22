
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let out = matrix.map((item, index) => index % 2 ? item.reverse() : item).flat();
    return out;
}
