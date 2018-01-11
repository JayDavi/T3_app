
function greet(){
  var name = document.getElementById("name").value;
  document.getElementById("hello").innerHTML = 'Hello ' + name;
  document.getElementById("YtR").style.display = 'block';
  document.getElementById("Income").style.display = 'block';
}

function calAge(){
  var dob = document.getElementById("date").value;
  if (dob === ''){
    document.getElementById("theAge").innerHTML = 'Please enter Date of Birth'
    return '';
  }
  else{
    var age = new Date - new Date(dob);
    return age;
  }
}

function ageToRet() {
  var age = calAge();
  var retAge = document.getElementById("retAge").value;
  var retAge = document.getElementById("retAge").value;
  if(age != ''){
  var to65 = retAge - Math.floor(age / 1000 / 60 / 60 / 24 / 365);
  document.getElementById("theAge").innerHTML = 'You have ' + to65 +
  ' years until retirement';
  }
}

function calIncome(){
  var income = document.getElementById("income").value;
  if (income === ''){
    document.getElementById("theIncome").innerHTML =
    'Please enter income(s)';
  }
  else{
  document.getElementById("theIncome").innerHTML = 'You currently make $'+ income;
  }
}

function popRetAgeSel(){
  var currentAge = Math.floor(calAge() / 1000 / 60 / 60 / 24 / 365);
  var selString = '';
  if(currentAge != ''){
    for(var i=currentAge; i <= 65; i++){
      selString += '<option value="'+i+'">'+i+'</option>';
    }
    document.getElementById("retAge").innerHTML = selString;
  }
  else{
    document.getElementById("retAge").innerHTML = '<option value="65">65</option>';
  }
}
