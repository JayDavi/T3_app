
function greet(){
  var name = document.getElementById("name").value;
  document.getElementById("hello").innerHTML = 'Hello ' + name;
  document.getElementById("YtR").style.display = 'block';
  document.getElementById("Income").style.display = 'block';
}

function showThis(id){
  var ide = document.getElementById(id).value;
  if (ide === '1'){
    document.getElementById("p"+id).style.display = 'block';
  }
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

function section1(){
  var pamAvg = 262000;
  var le = document.getElementById("LE").value;
  var numToLE = le - 65;
  var result = pamAvg / numToLE;
  return result;
}

function section2(){
  var total = 0;
  var ad = document.getElementById("AD").value;
  var al = document.getElementById("AL").value;
  var hs = document.getElementById("HS").value;
  var iha = document.getElementById("IHA").value;
  var nhs = document.getElementById("NHS").value;
  var nhp = document.getElementById("NHP").value;
  if(ad === '1'){
    total += document.getElementById("ageAD").value * 17680;
  }
  if(al === '1'){
    total += document.getElementById("ageAL").value * 43539;
  }
  if(hs === '1'){
    total += document.getElementById("ageHS").value * 45760;
  }
  if(iha === '1'){
    total += document.getElementById("ageIHA").value * 46332;
  }
  if(nhs === '1'){
    total += document.getElementById("ageNHS").value * 82125;
  }
  if(nhp === '1'){
    total += document.getElementById("ageNHP").value * 92378;
  }
  return total;
}

function totalCost(){
  var income = document.getElementById("income").value;
  var cost = section1() + section2();
  document.getElementById("theIncome").innerHTML = 'Your income is ' +
  income + '.<br><br> Total HeathCare Cost is $' +
  cost;
}
