document.addEventListener("DOMContentLoaded", () => {
    const sayilar = document.querySelectorAll(".sayi");
    const sumBtn = document.getElementById("arti");
    const subBtn = document.getElementById("eksi");
    const mulBtn = document.getElementById("carpma");
    const divBtn = document.getElementById("bolme");
    const eqBtn = document.getElementById("equal");
    const ekran = document.getElementById("index");
    const dotBtn = document.getElementById("dot")
    const indexClear = document.getElementById("clear")


    ekran.textContent = "0"
        let first = '';
        let second = '';
        let operator = '';
        let result = 0;

    sayilar.forEach(button => {
        button.addEventListener('click', () => {
            if (!operator) {
                first += button.textContent;
                ekran.textContent = first;
            }
            else {
                second += button.textContent;
                ekran.textContent = second;
            }

        })
    });


dotBtn.addEventListener("click", () => {
    if (!operator) {
        if (!first.includes(".")) {
            first = first === "" ? '0.' : first + '.';
            ekran.textContent = first;
        }
    } else {
        if (!second.includes(".")) {
            second = second === "" ? '0.' : second + '.';
            ekran.textContent = second;
        }
    }
});

sumBtn.addEventListener("click", () => {
    operator = '+';
});

subBtn.addEventListener("click", () => {
    operator = '-';
});

mulBtn.addEventListener('click', () => {
    operator = '*';
});

divBtn.addEventListener("click", () => {
    operator = '/';
})

indexClear.addEventListener("click", () => {
    ekran.textContent = "0";
    first = '';
    second = '';
    operator = '';
    result = 0;
})


eqBtn.addEventListener('click', () => {
    let sonuc = 0;
    if (operator === '+') {
        sonuc = Number(first) + Number(second);
    } else if (operator === '-') {
        sonuc = Number(first) - Number(second);
    } else if (operator === '*') {
        sonuc = Number(first) * Number(second);
    } else if (operator === '/') {
        sonuc = Number(first) / Number(second);
    }
    ekran.textContent = sonuc;
    first = sonuc.toString();
    second = '';
    operator = '';
    result = sonuc;
});

ekran.addEventListener('click', () => {

    ekran.textContent = "0";
    first = '';
    second = '';
    operator = '';
    result = 0;
});

});