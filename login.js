// 인트라넷 로그인 버튼 작동 함수
function handleLogin() {
    var val = document.getElementById('userId').value;
    if (!val || val.trim() === "") {
        alert("사원 번호 또는 인가 코드를 입력하십시오.");
        return;
    }
    
    // [2번 연출] 즉시 로그인하지 않고 보안 검증 로딩 창 켜기
    var overlay = document.getElementById('loadingOverlay');
    overlay.style.display = 'flex';
    
    // 1.5초(1500ms) 후에 비밀 내부망 해킹 모드로 전환 실행
    setTimeout(function() {
        overlay.style.display = 'none'; // 로딩창 끄기
        
        // UI 변경 (로그인 완료 상태 전환)
        document.getElementById('logoutForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'flex';
        document.getElementById('secretTab').classList.add('logged-in');
        
        // [1번 연출] 전역 다크 모드(비밀 연구소 테마) 클래스 주입
        document.getElementById('mainBody').classList.add('dark-mode');
        
        // [3번 연출] 로그인 직후 우측 상단 위험도 위젯 등장
        document.getElementById('riskWidget').style.display = 'flex';
        
        alert("보안 검증 통과.\n중앙이상감염연구청 내부망(KCIC-NET)에 강제 접속합니다.");
    }, 1500);
}