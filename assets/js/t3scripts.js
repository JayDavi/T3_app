
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
  if(age != ''){
  var to65 = 65 - Math.floor(age / 1000 / 60 / 60 / 24 / 365);
  document.getElementById("theAge").innerHTML = 'You have ' + to65 +
  ' years until retirement';
  }
}

function calIncome(){
  var cin = document.getElementById("cincome").value;
  var ein = document.getElementById("eincome").value;
  var col = document.getElementById("col").value;
  var ee = document.getElementById("ee").value;
  var calcIn = cin - (col*12 + ee*12);
  var savAmount = getAmount(calcIn);
  var final = calcIn - savAmount;

  if (cin === '' || ein === ''){
    document.getElementById("theIncome").innerHTML =
    'Please enter income(s)';
  }
  else{
  document.getElementById("theIncome").innerHTML = 'You currently make $'
   + cin + '.<br>You expect to make $'+ ein +' before retirement.<br>'
   + 'With your entered Expenses you make $' + calcIn +' currently'
   + '<br>This is what you will put aside based on your choosings $'+savAmount
   + '. Leaving you with: $' + final;
  }
}

function getAmount(amountLeft){
  var savePerc = document.getElementById("percent").value;
  var calc = Math.floor(amountLeft * savePerc);
  return calc;
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
