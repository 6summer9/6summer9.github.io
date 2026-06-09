// 인트라넷 로그인 버튼 작동 함수
function handleLogin() {
    var val = document.getElementById('userId').value;
    
    // 빈칸 검사
    if (!val || val.trim() === "") {
        alert("사원 번호 또는 인가 코드를 입력하십시오.");
        return;
    }
    
    // 로그인 창 숨기고 사용자 정보 띄우기
    document.getElementById('logoutForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'flex';
    
    // 숨겨져 있던 [기밀 아카이브] 탭 잠금 해제!
    document.getElementById('secretTab').classList.add('logged-in');
    
    alert("중앙이상감염연구청 내부망(KCIC-NET)에 접속되었습니다.\n[인가 등급: 유나비 연구원 - 제한 구역 접근 허가]");
}