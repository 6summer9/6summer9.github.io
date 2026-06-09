// 인트라넷 로그아웃 버튼 작동 함수
function handleLogout() {
    // 입력창 초기화
    document.getElementById('userId').value = "";
    
    // 원래 로그인 창 폼으로 되돌리기
    document.getElementById('logoutForm').style.display = 'flex';
    document.getElementById('loginForm').style.display = 'none';
    
    // 기밀 아카이브 탭 다시 은닉
    document.getElementById('secretTab').classList.remove('logged-in');
    
    // 일반 '청 소개' 페이지로 리다이렉트
    switchTab('intro');
    
    alert("내부망 세션이 만료되었습니다.");
}