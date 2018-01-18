
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
  else{
    document.getElementById("p"+id).style.display = 'none';
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
    return Math.floor(age / 1000 / 60 / 60 / 24 / 365);
  }
}

function popRetAgeSel(){
  var currentAge = calAge();
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

function calInflation(num){
  var re = document.getElementById("retAge").value;
  var inflation = document.getElementById("inflRate").value;
  var numToLE = re - calAge();
  var result = num*Math.pow(1+inflation,numToLE);
  return Math.round(100*result)/100;
}

function calInflation2(num, age){
  var re = document.getElementById("retAge").value;
  var inflation = document.getElementById("inflRate").value;
  var numToLE = age - calAge();
  var result = num*Math.pow(1+inflation,numToLE);
  return Math.round(100*result)/100;
}

function section1(){
  var pamAvg = 262000;
  var result = calInflation(pamAvg);
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
  var le = document.getElementById("LE").value;
  if(ad === '1'){
    total += calInflation2((le - document.getElementById("ageAD").value) * 17680,
  document.getElementById("ageAD").value);
  }
  if(al === '1'){
    total += calInflation2((le - document.getElementById("ageAL").value) * 43539,
  document.getElementById("ageAL").value);
  }
  if(hs === '1'){
    total += calInflation2((le - document.getElementById("ageHS").value) * 45760,
  document.getElementById("ageHS").value);
  }
  if(iha === '1'){
    total += calInflation2((le - document.getElementById("ageIHA").value) * 46332,
  document.getElementById("ageIHA").value);
  }
  if(nhs === '1'){
    total += calInflation2((le - document.getElementById("ageNHS").value) * 82125,
  document.getElementById("ageNHS").value);
  }
  if(nhp === '1'){
    total += calInflation2((le - document.getElementById("ageNHP").value) * 92378,
  document.getElementById("ageNHP").value);
  }

  return total;
}

function section3(){
  var total = 0;
  var rdc = document.getElementById("RDC").value;
  var ha = document.getElementById("HA").value;
  var ree = document.getElementById("REE").value;
  if(rdc === '1'){
    total += 288;
  }
  if(ha === '1'){
    total += 3000/5;
  }
  if(ree === '1'){
    total += 200;
  }
  return calInflation(total);
}

function totalCost(){
  var income = document.getElementById("income").value;
  var cost = Math.round(100*(section1() + section2() + section3()))/100;
  return cost;
}

function report(){
  var income = document.getElementById("income").value;
  var cost = totalCost();
  document.getElementById("theIncome").innerHTML = 'Your income is ' +
  income + '.<br><br> Total HeathCare Cost is $' +
  cost + '<br>' +section1() + '<br>' +section2() + '<br>' + section3();
}

function section4(){
  var retAge = document.getElementById("retAge").value;
  var byYear = totalCost()/(retAge-calAge());
  var byMonth = byYear/12;
  var byWeek = byMonth/4;
  var byDay = byWeek/7;
}
