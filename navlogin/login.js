function sample6_execDaumPostcode() {
	new daum.Postcode({
		oncomplete: function (data) {
			// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
			// 각 주소의 노출 규칙에 따라 주소를 조합한다.
			// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로,이를 참고하여 분기
			var addr = ''; // 주소 변수
			var extraAddr = ''; // 참고항목 변수
			//사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
			if (data.userSelectedType === 'R') { //사용자가 도로명주소를 선택경우
				addr = data.roadAddress;
			} else { // 사용자가 지번 주소를 선택했을 경우(J)
				addr = data.jibunAddress;

			}
			// 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
			if (data.userSelectedType === 'R') {
				// 법정동명이 있을 경우 추가한다. (법정리는 제외)
				// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
				// test() ㅡ 찾는 문자열이, 들어있는지 아닌지를 알려준다.
				// var reg = /패턴/; var testing = reg.test( string );
				// g 플래그가 붙으면 패턴과 일치하는 모든 것들을 찾음
				if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
					extraAddr += data.bname;
				}
				// 건물명이 있고, 공동주택일 경우 추가한다.
				if (data.buildingName !== '' && data.apartment === 'Y') {
					extraAddr +=
					(extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
				}
				// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
				if (extraAddr !== '') {
					extraAddr = ' (' + extraAddr + ')';
				}
				// 조합된 참고항목을 해당 필드에 넣는다.
				document.getElementById("sample6_extraAddress").value = extraAddr;

			} else {
				document.getElementById("sample6_extraAddress").value = '';
			}

			// 우편번호와 주소 정보를 해당 필드에 넣는다. 
			document.getElementById('sample6_postcode').value = data.zonecode; document.getElementById("sample6_address").value = addr;
			// 커서를 상세주소 필드로 이동한다. 
			document.getElementById("sample6_detailAddress").focus();
		}
	}).open();
}

// 아이디
function idCheck() {
	let id = document.getElementById("id");
	let idCheck = document.getElementById("idCheck");
	idCheck.style.display = 'none';
	id.style.outline = 'none';
	id.style.borderColor = 'red';
	id.style.borderWidth = '1px';
}
function patternIdCheck() {
	let id = document.getElementById("id");
	let idCheck = document.getElementById("idCheck");
	idCheck.style.display = 'block';
	// 아이디 정규식
	var regID = /^[a-z][a-z0-9]{4,7}$/g;
	if (!regID.test(id.value)) {
		idCheck.innerHTML = "다시 입력";
	}
	else {
		idCheck.innerHTML = "통과";
	}

}

//비밀번호
function pwCheck() {
	let pw = document.getElementById("password");
	let pwCheck = document.getElementById("pwCheck");
	pwCheck.style.display = 'none';
	pw.style.outline = 'none';
	pw.style.borderColor = 'red';
	pw.style.borderWidth = '1px';
}
function patternPwCheck() {
	let pw = document.getElementById("password");
	let pwCheck = document.getElementById("pwCheck");
	pwCheck.style.display = 'block';
	// 비밀번호 정규식
	var regID = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
	if (!regID.test(pw.value)) {
		pwCheck.innerHTML = "다시 입력";
	}
	else {
		pwCheck.innerHTML = "통과";
	}

}


//이름
function nameCheck() {
	let name = document.getElementById("name");
	let nameCheck = document.getElementById("nameCheck");
	nameCheck.style.display = 'none';
	name.style.outline = 'none';
	name.style.borderColor = 'red';
	name.style.borderWidth = '1px';
}
function patternNameCheck() {
	let name = document.getElementById("name");
	let nameCheck = document.getElementById("nameCheck");
	nameCheck.style.display = 'block';
	// 이름 정규식
	var regID = /[ㄱ-힣]/;
	if (!regID.test(name.value)) {
		nameCheck.innerHTML = "다시 입력";
	}
	else {
		nameCheck.innerHTML = "통과";
	}

}


//email
function emailCheck() {
	let email = document.getElementById("email");
	let emailCheck = document.getElementById("emailCheck");
	emailCheck.style.display = 'none';
	email.style.outline = 'none';
	email.style.borderColor = 'red';
	email.style.borderWidth = '1px';
}
function patternEmailCheck() {
	let email = document.getElementById("email");
	let emailCheck = document.getElementById("emailCheck");
	emailCheck.style.display = 'block';
	// 주소 정규식
	var regID = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	if (!regID.test(email.value)) {
		emailCheck.innerHTML = "다시 입력";
	}
	else {
		emailCheck.innerHTML = "통과";
	}

}



function check() {
	/* 아이디 유효성 검사 */
	if (myform.id.value.length == 0) {
		alert("아이디가 누락됐습니다.");
		myform.id.focus(); // 포커스를 이동시켜 바로 아이디를 입력할 수 있게
		return false;
	}




	/* 비밀번호유효성 검사 */
	if (myform.password.value.length == 0) {
		alert("비밀번호가 누락됐습니다.");
		myform.password.focus();
		return false;
	}


	/* 이름 유효성 */
	if (myform.name.value.length == 0) {
		alert("이름이 누락됐습니다.");
		myform.name.focus();
		return false;
	}

	/* 전화번호 유효성 */
	if (myform.areacode.value == "") {
		alert("지역번호를 선택해야 합니다.");
		myform.areacode.focus();
		return false;
	}

	if (myform.phone1.value.length == 0 || myform.phone2.value.length == 0) {
		alert("전화번호가 누락됐습니다.");
		myform.phone1.focus();
		return false;
	}

	if (isNaN(myform.phone1.value) || isNaN(myform.phone2.value)) {
		alert("전화번호는 숫자만 입력가능합니다.");
		myform.phone1.focus();
		return false;
	}


	/* 이메일 유효성 검사 */
	if (myform.email.value.length == 0) {
		alert("이메일이 누락됐습니다.");
		myform.email.focus();
		return false;
	}


	if (myform.email.value.indexOf('@') == -1) {
		alert("이메일 형식이 아닙니다.");
		myform.email.focus();
		return false;
	}


	/* 성별 검사 */
	flag = false;
	for (i = 0; i < myform.gender.length; i++) {
		if (myform.gender[i].checked) {
			str += myform.gender[i].value + "\n";
			flag = true;
			break; // 라디오박스에서는 1개만 선택될 수 있으므로 사용가능
		}
	}

	if (flag == false) {
		alert("성별을 체크가 누락됐습니다.");
		return false;
	}

}
