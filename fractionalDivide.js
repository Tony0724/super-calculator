const fractionalBtn = document.querySelector("#fractional");
const numerSpan = document.querySelector("#numer");
const denomSpan = document.querySelector(".bottom");
const NumberSpan = document.querySelector("#Number");
const fracDiv = document.querySelector(".frac");
const denom1Input = document.querySelector("#denom1");
const numer1Input = document.querySelector("#numer1");
const denom2Input = document.querySelector("#denom2");
const numer2Input = document.querySelector("#numer2");
const homeBtn = document.querySelector("#home");

function handleFractionalDivide(num1, num2, num3, num4) {
    let denomValue = num1 * num4;
    let numerValue = num2 * num3;
    for(let i = 1; i<=numerValue; i++) {
        if(numerValue % i === 0 && denomValue % i === 0) {
            denomValue = denomValue / i;
            numerValue = numerValue / i;
        }
    }
    if(denomValue < numerValue) {
        fracDiv.style.display = 'inline-block'
        NumberSpan.hidden = false;
        let NumberOfShare = Math.floor(numerValue / denomValue);
        NumberSpan.innerText = Math.floor(NumberOfShare);
        let RestOfNumberShare = numerValue - (NumberOfShare * denomValue);
        numerValue = RestOfNumberShare;
    } else if(denomValue == numerValue) {
        numerValue = null;
        denomValue = null;
        NumberSpan.hidden = false;
        NumberSpan.innerText = 1;
        fracDiv.style.display = 'none'
    } else {
        fracDiv.style.display = 'inline-block';
        NumberSpan.innerText = 0;
        NumberSpan.hidden = true;
    }
    denomSpan.innerText = denomValue;
    numerSpan.innerText = numerValue;
}

function handleFractionalCalculator() {
    fracDiv.style.display = 'inline-block';
    if(numer1Input.value === '' || numer2Input.value === '' || isNaN(Number(denom1Input.value)) || isNaN(Number(numer1Input.value)) || isNaN(Number(denom2Input.value)) || isNaN(Number(numer2Input.value))) {
        NumberSpan.hidden = false;
        NumberSpan.innerHTML = '<b>This value is null or NaN!!!</b>';
        numerSpan.innerText = '';
        denomSpan.innerText = '';
        denom1Input.value = '';
        numer1Input.value = '';
        denom2Input.value = '';
        numer2Input.value = '';
        denom1Input.focus()
    } else if(denom1Input.value === '' && denom2Input.value === '') {
        denom1Input.value = 1;
        denom2Input.value = 1;
        handleFractionalDivide(denom1Input.value, numer1Input.value, denom2Input.value, numer2Input.value);
        denom1Input.value = '';
        numer1Input.value = '';
        denom2Input.value = '';
        numer2Input.value = '';
    } else if(denom1Input.value === '') {
        denom1Input.value = 1;
        handleFractionalDivide(denom1Input.value, numer1Input.value, denom2Input.value, numer2Input.value);
        denom1Input.value = '';
        numer1Input.value = '';
        denom2Input.value = '';
        numer2Input.value = '';
    } else if(denom2Input.value === '') {
        denom2Input.value = 1;
        handleFractionalDivide(denom1Input.value, numer1Input.value, denom2Input.value, numer2Input.value);
        denom1Input.value = '';
        numer1Input.value = '';
        denom2Input.value = '';
        numer2Input.value = '';
    } else {
        handleFractionalDivide(denom1Input.value, numer1Input.value, denom2Input.value, numer2Input.value);
        denom1Input.value = '';
        numer1Input.value = '';
        denom2Input.value = '';
        numer2Input.value = '';
    }
}

fractionalBtn.addEventListener("click", handleFractionalCalculator)
homeBtn.addEventListener("click", () => {
    location.href = 'index.html'
})