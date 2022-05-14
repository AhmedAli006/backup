let greetUser = function () {
  console.log("greetings");
};

let TempConverter = function (fahranhiet) {
 celcius = (fahranhiet - 32) * 5 / 9;
  console.log(celcius);
  return celcius
};

TempConverter(10)
TempConverter(20)
TempConverter(60)
TempConverter(0)