function sam(){
  var s = document.getElementById("inflRate").value;
  document.getElementById("get").innerHTML = s;
}
function greet(){
  var name = document.getElementById("name").value;
  document.getElementById("hello").innerHTML = 'Hello ' + name;
  document.getElementById("YtR").style.display = 'block';
  document.getElementById("Income").style.display = 'block';
}

function showThis(id){
  var ide = document.getElementById(id).checked;
  if (ide){
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
    for(var i=currentAge; i <= 85; i++){
      if(i != 65){
        selString += '<option value="'+i+'">'+i+'</option>';
      }
      else{
        selString += '<option value="'+i+'"selected>'+i+'</option>';
      }
    }
    document.getElementById("retAge").innerHTML = selString;
  }
  else{
    document.getElementById("retAge").innerHTML = '<option value="65">65</option>';
  }
}

function popOp(){
  var s = '';
  for(var i=1; i<=100;i++){
    var perc = i/100;
    if(i != 2){
      s += '<option value="'+perc+'">'+i+'%</option>';
    }
    else{
    s += '<option value="'+perc+'"selected>'+i+'%</option>';
  }
  }
  document.getElementById("inflRate").innerHTML = s;
}

function popOp2(){
  var s = '';
  for(var i=1; i<=100;i++){
    if(i != 3){
      s += '<option value="'+(i/100)+'">'+i+'%</option>';
    }
    else{
    s += '<option value="'+(i/100)+'"selected>'+i+'%</option>';
  }
  }
  document.getElementById("growth").innerHTML = s;
}

function calInflation(num){
  var re = document.getElementById("retAge").value;
  var inflation = document.getElementById("inflRate").value;
  var numToLE = re - calAge();
  var result = num*Math.pow(1+ +inflation,numToLE);
  return Math.round(100*result)/100;
}

function calInflation2(num, age){
  var re = document.getElementById("retAge").value;
  var inflation = document.getElementById("inflRate").value;
  var numToLE = age - calAge();
  var result = num*Math.pow(1+ +inflation,numToLE);
  return Math.round(100*result)/100;
}

function section1(){
  var pamAvg = 131000;
  var result = calInflation(pamAvg);
  return result;
}

function section2(){
  var total = 0;
  var ad = document.getElementById("AD").checked;
  var al = document.getElementById("AL").checked;
  var hs = document.getElementById("HS").checked;
  var iha = document.getElementById("IHA").checked;
  var nhs = document.getElementById("NHS").checked;
  var nhp = document.getElementById("NHP").checked;
  var le = document.getElementById("LE").value;
  if(ad){
    total += calInflation2((le - document.getElementById("ageAD").value) * 17680,
  document.getElementById("ageAD").value);
  }
  if(al){
    total += calInflation2((le - document.getElementById("ageAL").value) * 43539,
  document.getElementById("ageAL").value);
  }
  if(hs){
    total += calInflation2((le - document.getElementById("ageHS").value) * 45760,
  document.getElementById("ageHS").value);
  }
  if(iha){
    total += calInflation2((le - document.getElementById("ageIHA").value) * 46332,
  document.getElementById("ageIHA").value);
  }
  if(nhs){
    total += calInflation2((le - document.getElementById("ageNHS").value) * 82125,
  document.getElementById("ageNHS").value);
  }
  if(nhp){
    total += calInflation2((le - document.getElementById("ageNHP").value) * 92378,
  document.getElementById("ageNHP").value);
  }

  return total;
}

function section3(){
  var total = 0;
  var rdc = document.getElementById("RDC").checked;
  var ha = document.getElementById("HA").checked;
  var ree = document.getElementById("REE").checked;
  if(rdc){
    total += 288;
  }
  if(ha){
    total += 3000/5;
  }
  if(ree){
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

function placeChart(){
  var retAge = document.getElementById("retAge").value;
  var le = document.getElementById("LE").value;
  var currentAge = calAge();
  var yearsToRet = retAge - currentAge;
  var yearsToLE = le - currentAge;
  var fromRetToLE = le - retAge;
  var save = totalCost()/yearsToLE;
  var labls = [];
  labls.push(+currentAge + 1);
  var num = Math.ceil(Math.round(currentAge / 10) *10);
  for(var i=0; i < Math.floor(yearsToLE/5); i++){
    if(num+5*i != +currentAge + 1)
    labls.push(num+5*i);
  }
  if(labls[labls.length-1] != le){
  labls.push(le);
  }
  var ctx = document.getElementById('myChart').getContext('2d');
  var pdata = {};
  var fpdata = [];
  var psave = section1()/yearsToRet;
  for(var i=0; i <= yearsToRet; i++){
    pdata[+currentAge+i] = Math.round(100*psave*i)/100;
  }
  for(var i=0; i < labls.length; i++){
    fpdata.push(pdata[labls[i]]);
  }

  var ldata = {};
  var fldata = [];
  var lsave = section2()/yearsToRet;
  for(var i=0; i <= yearsToRet; i++){
    ldata[+currentAge+i] = Math.round(100*lsave*i)/100;
  }
  for(var i=0; i < labls.length; i++){
    fldata.push(ldata[labls[i]]);
  }

  var rdata = {};
  var frdata = [];
  var rsave = section3()/yearsToRet;
  for(var i=0; i <= yearsToRet; i++){
    rdata[+currentAge+i] = Math.round(100*rsave*i)/100;
  }
  for(var i=0; i < labls.length; i++){
    frdata.push(rdata[labls[i]]);
  }

  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: labls,
          datasets: [{
              label: "PAM",
              fill: false,
              borderColor: "red",
              data: fpdata,
          },{
              label: "LTC",
              fill: false,
              borderColor: "blue",
              data: fldata,
          },{
              label: "NCM",
              fill: false,
              borderColor: "green",
              data: frdata,
          }]
      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Amount to Save (by thosands)'
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Dollars'
            }
          }]
        }
      }
    });
}

function showDiv(id){
  document.getElementById(id).style.display = 'block';
}
