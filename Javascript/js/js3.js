function loadTableDate(){
  // 서버에서 json 객체 데이터 가져오기
  var bbs = {
    "title": "Javascript",
    "description": "교육원에서 진행중인 Javascript 강의 자료입니다. 각 게시판의 다운로드 권한은 매 강의 개강시마다 부여됩니다.",
    "total": 4,
    "item": [
    {"no": "공지", "subject": "'Javascript' 강의 자료실입니다.","hit": 3, "date": "2015.10.29"},
    {"no": 3, "subject": "Javascript 3일차 강의자료입니다.", "hit": 6,"date": "2015.11.08"},
    {"no": 2, "subject": "Javascript 2일차 강의자료입니다.", "hit": 15, "date": "2015.11.07"},
    {"no": 1, "subject": "Javascript 1일차 강의자료입니다.", "hit": 19, "date": "2015.11.05"}
    ]
    };
}