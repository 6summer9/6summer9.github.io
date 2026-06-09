// 인트라넷 로그아웃 버튼 작동 함수
function handleLogout() {
    document.getElementById('userId').value = "";
    document.getElementById('logoutForm').style.display = 'flex';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('secretTab').classList.remove('logged-in');
    
    // [연출 해제] 다크 모드 끄고 위젯 다시 감추기
    document.getElementById('mainBody').classList.remove('dark-mode');
    document.getElementById('riskWidget').style.display = 'none';
    
    switchTab('intro');
    alert("내부망 세션이 만료되어 대외 안전망으로 복귀합니다.");
}