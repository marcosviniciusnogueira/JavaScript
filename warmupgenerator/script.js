function sortear() {
    var min = 0;
    var max = 23;
    var res = Math.floor(Math.random() * (max - min + 1)) + min;
    var arr = [
        "1-2-3-4",
        "1-2-4-3",
        "1-3-2-4",
        "1-3-4-2",
        "1-4-2-3",
        "1-4-3-2",
        "2-1-3-4",
        "2-1-4-3",
        "2-3-1-4",
        "2-3-4-1",
        "2-4-1-3",
        "2-4-3-1",
        "3-1-2-4",
        "3-1-4-2",
        "3-2-1-4",
        "3-2-4-1",
        "3-4-1-2",
        "3-4-2-1",
        "4-1-2-3",
        "4-1-3-2",
        "4-2-1-3",
        "4-2-3-1",
        "4-3-1-2",
        "4-3-2-1"
    ]
    document.getElementById("sorteado").innerHTML = arr[res];
}