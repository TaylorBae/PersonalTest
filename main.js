// Project Name - Current Exchange
let currencyRatio = {
  USD: {
    KRW: 1216.18,
    USD: 1,
    CND: 1.26,
    unit: "USDollars",
  },
  KRW: {
    KRW: 1,
    USD: 0.00082,
    CND: 0.001,
    unit: "WON",
  },
  CND: {
    KRW: 967.12,
    USD: 0.79,
    CND: 1,
    unit: "CNDollars",
  },
};

// 1. console.log(currencyRatio.KRW.unit);
// 2. console.log(currencyRatio["CND"].unit);

let fromCurrency = "USD";
let toCurrency = "USD";

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    // 1. 버튼을 가져온다
    // 2. 버튼의 값을 바꾼다
    document.getElementById("from-button").textContent = this.textContent;

    // 3. 선택된 currency 값을 변수에 저장해준다.
    fromCurrency = this.textContent;
    convert();
  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    // 1. 버튼을 가져온다
    // 2. 버튼의 값을 바꾼다
    document.getElementById("to-button").textContent = this.textContent;

    // 3. 선택된 currency 값을 변수에 저장해준다.
    toCurrency = this.textContent;
    convert();
  })
);

// 1. 키를 입력하는 순간
// 2. 환전이되서
// 3. 환전된 값이 보인다.
function convert() {
  // 1. 환전
  // 얼마를 환전, 가지고 있는 돈이 뭔지, 바꾸려고 하는 돈이 뭔지
  // 돈 * 환율 = 환전금액
  let amount = document.getElementById("from-input").value;
  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];

  document.getElementById("to-input").value = convertedAmount;
}

// 1. 드랍다운 리스트에 값이 바뀔때마다
// 2. 환전을 다시한다.
// convert() 함수 사용
