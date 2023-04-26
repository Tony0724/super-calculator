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

function handleFractionalAddition(denom1, numer1, denom2, numer2) {
    let denomValue; // denom1과 denom2를 곱한 값을 저장하는 변수
    let numer1Value; // numer1과 denom2를 곱한 값을 저장하는 변수
    let numer2Value; // numer2와 denom1를 곱한 값을 저장하는 변수
    let numeraddValue; // numer1Value와 numer2Value 변수의 합을 저장하는 변수
    if(denom1 != denom2) {
        denomValue = denom1 * denom2;
    } else {
        denomValue = denom1;
    }
    numer1Value = numer1 * denom2;
    numer2Value = numer2 * denom1;
    numeraddValue = numer1Value + numer2Value;
    console.log(denomValue)
    console.log(numeraddValue)
}

handleFractionalAddition(2, 1, 2, 1);