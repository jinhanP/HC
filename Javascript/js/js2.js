function company(){
  // 객체참조변수선언
  let name = document.getElementById("name");
  let since = document.getElementById("since");
  let department = document.getElementById("department");
  let biz = document.getElementById("biz");

  // 서버에서 데이터는 (AJAX) 에서 가져오고 JSON방식으로 온다.
  let data = {
"name" : "(주)굿디자인", 
"since" : "2015년",
"department" : ["기획팀", "영업팀", "디자인팀", "개발팀"],
"biz" : ["소프트웨어개발", "통신판매업", "위치정보서비스"]
  };
  // 정보 데이터에서 추가 할때
  name.innerText += data.name;
  since.innerText += data.since;
  
  // 상향된 for 문
  let _value = "";
  for(let value of data.department){
    department.innerHTML += "<li>"+value+"</li>";
  }

  // let _biz = "";
  // for(let value of data.biz){
  //   biz.innerHTML += "<li>"+value+"</li>";
  // }

  //  for 문
  for(let i=0 ; i < data.biz.length ; i++){
    biz.innerHTML += "<li>"+data.biz[i]+"</li>";
    console.log(data.biz[i]);
  }
  
  // UL 화면 객체 스타일 속성변경
  // department.style.listStyleType = "none";
  biz.style.listStyleType = "none";
  biz.style.margin = 0;
  biz.style.padding = 0;
}