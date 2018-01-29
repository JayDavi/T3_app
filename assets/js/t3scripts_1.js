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

var agel = [];
var subs = 0;
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
    total += (le - document.getElementById("ageAD").value) * 17680;
    agel.push(document.getElementById("ageAD").value);
    subs += le - document.getElementById("ageAD").value;
  }
  if(al){
    total += (le - document.getElementById("ageAL").value) * 43539;
    agel.push(document.getElementById("ageAL").value);
    subs += le - document.getElementById("ageAL").value;
  }
  if(hs){
    total += (le - document.getElementById("ageHS").value) * 45760;
    agel.push(document.getElementById("ageHS").value);
    subs += le - document.getElementById("ageHS").value;
  }
  if(iha){
    total += (le - document.getElementById("ageIHA").value) * 46332;
    agel.push(document.getElementById("ageIHA").value);
    subs += le - document.getElementById("ageIHA").value;
  }
  if(nhs){
    total += (le - document.getElementById("ageNHS").value) * 82125;
    agel.push(document.getElementById("ageNHS").value);
    subs += le - document.getElementById("ageNHS").value;
  }
  if(nhp){
    total += (le - document.getElementById("ageNHP").value) * 92378;
    agel.push(document.getElementById("ageNHP").value);
    subs += le - document.getElementById("ageNHP").value;
  }
  var num = Math.min(...agel);
  return calInflation2(total, num);
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
    total += 1950/5;
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
  cost + '<br>Preniums Above Medicare Cost: $' +section1() + '<br>Long Term Care $'
  +section2() + '<br>Not Covered Under Medicare: $' + section3();
}

function section4(){
  var retAge = document.getElementById("retAge").value;
  var byYear = totalCost()/(retAge-calAge());
  var byMonth = byYear/12;
  var byWeek = byMonth/4;
  var byDay = byWeek/7;
}

function placeChart(){
  var sec1 = section1();
  var sec2 = section2();
  var sec3 = section3();
  var retAge = document.getElementById("retAge").value;
  var le = document.getElementById("LE").value;
  var currentAge = calAge();
  var yearsToRet = retAge - currentAge;
  var yearsToLE = le - currentAge;
  var fromRetToLE = le - retAge;
  var ageLTC = Math.min(...agel);
  var labls = [];
  labls.push(+retAge + 1);
  var num = Math.ceil(Math.round(retAge / 10) *10);
  for(var i=0; i < Math.floor(fromRetToLE/5); i++){
    if(num+5*i != +retAge + 1){
      labls.push(num+5*i);
    }
  }
  if(labls[labls.length-1] != le){
  labls.push(le);
  }
  var ctx = document.getElementById('myChart').getContext('2d');
  var pdata = {};
  var fpdata = [];
  var psave = section1();
  for(var i=0; i <= fromRetToLE; i++){
    pdata[+retAge+i] = Math.round(100*psave+ +psave*i)/100;
  }
  for(var i=0; i < labls.length; i++){
    fpdata.push(pdata[labls[i]]);
  }

  var ldata = {};
  var fldata = [];
  var lsave = section2()/yearsToRet;
  for(var i=0; i <= fromRetToLE; i++){
    if(+retAge+i < ageLTC){
      ldata[+retAge+i] = 0;
    }
    else{
      if(subs != 0){
      ldata[+retAge+i] = Math.round(100*(sec2/ +subs)+ (sec2/ +subs)*i)/100;
    }
    else{ldata[+retAge+i] = 0;}
    }
  }
  for(var i=0; i < labls.length; i++){
    fldata.push(ldata[labls[i]]);
  }

  var rdata = {};
  var frdata = [];
  var rsave = section3()/yearsToRet;
  for(var i=0; i <= fromRetToLE; i++){
    rdata[+retAge+i] = Math.round(100*sec3 + sec3*i)/100;
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
              label: "Preniums Above Medicare",
              fill: false,
              borderColor: "red",
              data: fpdata,
          },{
              label: "Long Term Care",
              fill: false,
              borderColor: "blue",
              data: fldata,
          },{
              label: "Not Covered Under Medicare",
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

var $form = $( "#flex" );

    var $input = $form.find( "input" );



    $input.on( "keyup", function( event ) {





        // When user select text in the document, also abort.

        var selection = window.getSelection().toString();

        if ( selection !== '' ) {

            return;

        }



        // When the arrow keys are pressed, abort.

        if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {

            return;

        }





        var $this = $( this );



        // Get the value.

        var input = $this.val();



        var input = input.replace(/[\D\s\._\-]+/g, "");

                input = input ? parseInt( input, 10 ) : 0;



                $this.val( function() {

                    return ( input === 0 ) ? "" : input.toLocaleString( "en-US" );

                } );

    } );
