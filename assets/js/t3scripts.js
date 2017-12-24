
  function greet(){
    var name = document.getElementById("name").value;
    document.getElementById("hello").innerHTML = 'Hello ' + name;
    document.getElementById("YtR").style.display = 'block';
    document.getElementById("Income").style.display = 'block';
  }

  function ageTo65() {
    var dob = document.getElementById("date").value;
    if (dob === ''){
      document.getElementById("theAge").innerHTML = 'Please enter Date of Birth'
    }
    else{
    var age = new Date - new Date(dob);
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
    var calc = amountLeft * savePerc;
    return calc;
  }
