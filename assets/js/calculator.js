const service = new  b$.BurstService({nodeHost: 'https://europe3.signum.network'})
var baseTarget = 300
var blockReward = 165
var TBCommitment = 3000
service.query('getMiningInfo').then(data => { 
    baseTarget = parseInt(data.baseTarget)
    blockReward = parseInt(data.lastBlockReward)
    TBCommitment = (parseInt(data.averageCommitmentNQT)/100000000).toFixed(0)
    document.getElementById("Reward").textContent ="Block-Reward: "+blockReward+ " Signa"
    document.getElementById("AvgCM").textContent ="Average Commitment per TiB: "+TBCommitment+" Signa"
    })


var sliderTB = document.getElementById("TBRange");
var outputTB = document.getElementById("TBSize");
var sliderCM = document.getElementById("CMRange");
var outputCM = document.getElementById("CMValue");
var CMperTiB = document.getElementById("CMperTiB");
var ShowIncome = document.getElementById("IncomeSigna");
var BtDaily = document.getElementById("DailyIncome");
var BurstPerDay = 0
var MyDaily = 0 
var MyDailyRange= 0 
var IncomeRange = 1
// 1 = daily / 2= monthly / 3 = yearly

outputTB.oninput = function() {
    CMTIB()
  POCplus()
  if (IncomeRange==1){
      MyDailyRange = MyDaily
      ShowIncome.innerHTML= MyDaily
      FIATIncome()
  }
  if (IncomeRange==2){
      MyDailyRange = (MyDaily * 30).toFixed(2)
      ShowIncome.innerHTML= (MyDaily * 30).toFixed(2)
      FIATIncome()
  }
  if (IncomeRange==3){
      MyDailyRange = (MyDaily * 360).toFixed(2)
      ShowIncome.innerHTML= (MyDaily * 360).toFixed(2)
      FIATIncome()
  }
}
outputCM.oninput = function() {
    CMTIB()
  POCplus()
  if (IncomeRange==1){
      MyDailyRange = MyDaily
      ShowIncome.innerHTML= MyDaily
      FIATIncome()
  }
  if (IncomeRange==2){
      MyDailyRange = (MyDaily * 30).toFixed(2)
      ShowIncome.innerHTML= (MyDaily * 30).toFixed(2)
      FIATIncome()
  }
  if (IncomeRange==3){
      MyDailyRange = (MyDaily * 360).toFixed(2)
      ShowIncome.innerHTML= (MyDaily * 360).toFixed(2)
      FIATIncome()
  }
}

DailyIncome.onclick =function(){
    IncomeRange = 1
    POCplus()
    ShowIncome.innerHTML= MyDaily
    MyDailyRange = MyDaily
    FIATIncome()
    document.getElementById("SignaRanges").innerHTML="<strong>Signa per day</strong"
    document.getElementById("USDRanges").innerHTML="<strong>USD per day</strong"
    
}
MonthlyIncome.onclick =function(){
    IncomeRange = 2
    POCplus()
    ShowIncome.innerHTML= (MyDaily * 30).toFixed(2)
    MyDailyRange = (MyDaily * 30).toFixed(2)
    FIATIncome()
    document.getElementById("SignaRanges").innerHTML="<strong>Signa per month</strong>"
    document.getElementById("USDRanges").innerHTML="<strong>USD per month</strong"
}
YearlyIncome.onclick =function(){
    IncomeRange = 3
    POCplus()
    ShowIncome.innerHTML= (MyDaily * 360).toFixed(2)
    MyDailyRange = (MyDaily * 360).toFixed(2)
    FIATIncome()
    document.getElementById("SignaRanges").innerHTML="<strong>Signa per year</strong"
    document.getElementById("USDRanges").innerHTML="<strong>USD per year</strong"
}

sliderTB.oninput = function() {
  if (this.value <101){
      MyTB = this.value/100
  }
  else{
      MyTB = this.value-100
  }
  outputTB.value = MyTB;
  CMTIB()
  POCplus()
  if (IncomeRange==1){
      ShowIncome.innerHTML= "<strong>"+MyDaily+"</strong>"
      MyDailyRange = MyDaily
      FIATIncome()
  }
  if (IncomeRange==2){
      ShowIncome.innerHTML="<strong>"+(MyDaily * 30).toFixed(2)+"</strong>"
      MyDailyRange = (MyDaily * 30).toFixed(2)
      FIATIncome()
  }
  if (IncomeRange==3){
      ShowIncome.innerHTML= "<strong>"+ (MyDaily * 360).toFixed(2)+"</strong>"
      MyDailyRange = (MyDaily * 630).toFixed(2)
      FIATIncome()
  }
}
sliderCM.oninput = function() {
  if (this.value <1001){
      MyCommitment = this.value
  }
  else{
      MyCommitment = 1000 + ((this.value-1001)*100)
  }
  outputCM.value = MyCommitment;
  CMTIB()
  POCplus()
  if (IncomeRange==1){
      ShowIncome.innerHTML="<strong>"+ MyDaily+"</strong>"
      MyDailyRange = MyDaily
      FIATIncome()
  }
  if (IncomeRange==2){
      ShowIncome.innerHTML="<strong>"+ (MyDaily * 30).toFixed(2)+"</strong>"
      MyDailyRange = (MyDaily * 30).toFixed(2)
      FIATIncome()
  }
  if (IncomeRange==3){
      ShowIncome.innerHTML= "<strong>"+ (MyDaily * 360).toFixed(2)+"</strong>"
      MyDailyRange = (MyDaily * 360).toFixed(2)
      FIATIncome()
  }
}
function CMTIB(){
    let ratio = outputCM.value/outputTB.value
    ratio = ratio.toFixed(0)
    CMperTiB.innerHTML='The commitment corresponds to <strong>'+ratio+'</strong> Signa per TiB'
}
function POCplus(){
    let ratio  = outputCM.value/outputTB.value/TBCommitment
    let commitmentFactor = Math.pow(ratio, 0.4515449935);
    commitmentFactor = Math.min(8.0, commitmentFactor);
    commitmentFactor = Math.max(0.125, commitmentFactor)
    let networkTbs = 18325193796.0/baseTarget/1.83;
    BurstPerDay =  360.0/networkTbs * blockReward
    MyDaily = (BurstPerDay * commitmentFactor * outputTB.value).toFixed(2)  
}
function FIATIncome(){
    let usdearning = MyDailyRange * 0.014
    // need fix//
    document.getElementById("IncomeUSD").innerHTML = (usdearning).toFixed(2)
}
