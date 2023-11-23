function calDate(){
  let toDate = new Date();
  let year = toDate.getFullYear();
  let value = getDate(year,12,31);
  let h1Array = document.getElementsByTagName("h1");
  h1Array[0].innerHTML = "올해까지" + value +"일 남았음"


}

function getDate(year,month,date){
  // 오늘날짜
  let todate = new Date();

  // 선택된 날짜
  let selectDate = new Date(year,month-1,date);

  // 두 날짜의 차이((일) 로 계산하기)
  let value = selectDate.getTime() - todate.getTime();
  
  //날짜 차이 
  let value2 = Math.round(value/(24*60*60*1000))
  return value2;
}

function clear1(){
  let h1Array = document.getElementsByTagName("h1");
  h1Array[0].innerHTML = "클릭하면 올해까지 몇일 남았는지 알 수 있음"
}