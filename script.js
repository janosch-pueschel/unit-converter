const meterFeet = 3.281;
const literGallon = 0.264;
const kilogramPound = 2.204;

const meterFeetEl = document.getElementById("m-ft");
const feetMeterEl = document.getElementById("ft-m");
const literGallonEl = document.getElementById("l-gal");
const gallonLiterEl = document.getElementById("gal-l");
const kilogramPoundEl = document.getElementById("kg-lbs");
const poundKilogramEl = document.getElementById("lbs-kg");

const convertBtn = document.getElementById("convert-btn");
const inputValue = document.getElementsByClassName("input-value");

convertBtn.addEventListener("click", () => {
  setInputValue();
  convertUnit(meterFeet, meterFeetEl);
  convertUnit(meterFeet, feetMeterEl);
  convertUnit(literGallon, literGallonEl);
  convertUnit(literGallon, gallonLiterEl);
  convertUnit(kilogramPound, kilogramPoundEl);
  convertUnit(kilogramPound, poundKilogramEl);
});

function setInputValue() {
  const input = document.getElementById("input").value;
  for (let i = 0; i < inputValue.length; i++) {
    inputValue[i].innerText = input;
  }
}

function convertUnit(conversionNumber, resultEl) {
  if (
    resultEl == meterFeetEl ||
    resultEl == literGallonEl ||
    resultEl == kilogramPoundEl
  ) {
    const input = document.getElementById("input").value;
    result = input * conversionNumber;
    resultEl.innerText = result.toFixed(3);
  } else {
    const input = document.getElementById("input").value;
    result = input / conversionNumber;
    resultEl.innerText = result.toFixed(3);
  }
}
