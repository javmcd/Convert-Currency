const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const resultDiv = document.getElementById('result');

// Hardcoded currency list
const currencies = [
  "USD", "EUR", "GBP", "CAD", "AUD", "JPY", "INR", "ZAR", "CNY", "KRW"
];

function populateCurrencies() {
  currencies.forEach(code => {
    const option1 = new Option(code, code);
    const option2 = new Option(code, code);
    fromCurrency.add(option1.cloneNode(true));
    toCurrency.add(option2.cloneNode(true));
  });

  fromCurrency.value = 'USD';
  toCurrency.value = 'EUR';
}

async function convertCurrency() {
  const amount = document.getElementById('amount').value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (!amount) return alert('Please enter an amount');

  const res = await fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`);
  const data = await res.json();

  resultDiv.innerText = `${amount} ${from} = ${data.result.toFixed(2)} ${to}`;
}

populateCurrencies();
