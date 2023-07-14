"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var inputs = [];
var lines = 0;
var count = 0;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var dx = [0, 0, -1, 1];
var dy = [-1, 1, 0, 0];
var dfs = function (array, x, y) {
    var stack = [[x, y]];
    var result = 0;
    while (stack.length > 0) {
        var _a = stack.pop(), x_1 = _a[0], y_1 = _a[1];
        if (array[y_1][x_1] === true)
            continue;
        if (array[y_1][x_1] === false) {
            array[y_1][x_1] = true;
            for (var i = 0; i < 4; i++) {
                var nx = x_1 + dx[i];
                var ny = y_1 + dy[i];
                if (nx < 0 || ny < 0 || nx >= array[0].length || ny >= array.length) {
                    continue;
                }
                if (array[ny][nx] === false) {
                    stack.push([nx, ny]);
                }
            }
        }
        result += 1;
    }
    return result;
};
var solution = function (inputs) {
    var count = 1;
    var result = 0;
    var _loop_1 = function (i) {
        var _a = inputs[count].split(" ").map(function (e) { return +e; }), m = _a[0], n = _a[1], k = _a[2];
        var array = Array.from({ length: n }, function () { return Array(m).fill(true); });
        for (var j = count + 1; j < +inputs[count].split(" ")[2] + count + 1; j++) {
            var _b = inputs[j].split(" ").map(function (e) { return +e; }), x = _b[0], y = _b[1];
            array[y][x] = false;
        }
        for (var k_1 = 0; k_1 < m; k_1++) {
            for (var l = 0; l < n; l++) {
                if (dfs(array, k_1, l) > 0) {
                    result += 1;
                }
            }
        }
        console.log(result);
        result = 0;
        count += +inputs[count].split(" ")[2] + 1;
    };
    for (var i = 0; i < +inputs[0]; i++) {
        _loop_1(i);
    }
};
rl.on("line", function (line) {
    lines++;
    if (line.split(" ").length === 1) {
        count += +line + 1;
    }
    if (line.split(" ").length === 3) {
        count += +line.split(" ")[2];
    }
    inputs.push(line);
    if (lines === count) {
        rl.close();
    }
}).on("close", function () {
    solution(inputs);
    process.exit();
});
