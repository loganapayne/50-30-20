window.onload = function() {
  var buttons = document.getElementsByTagName("button");
  var calculate = buttons[0];

  calculate.onclick = function() {
    var annualIncome = document.getElementById("income").value;
    prompt(annualIncome);
  };
}
