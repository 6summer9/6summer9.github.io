function handleLogin() {
    var loginInput = document.getElementById('userId');
    if (!loginInput) return;
    
    var val = loginInput.value;
    if (!val || val.trim() === "") {
        alert("사원 번호 또는 인가 코드를 입력하십시오.");
        return;
    }
    
    // 로딩 오버레이 켜기
    var overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.style.display = 'flex';
    }
    
    // 1.5초 안전 딜레이 작동 후 모드 대전환
    setTimeout(function() {
        if (overlay) overlay.style.display = 'none';
        
        // 버튼 폼 스위칭
        var logoutForm = document.getElementById('logoutForm');
        var loginForm = document.getElementById('loginForm');
        var secretTab = document.getElementById('secretTab');
        var mainBody = document.getElementById('mainBody');
        var riskWidget = document.getElementById('riskWidget');
        
        if (logoutForm) logoutForm.style.display = 'none';
        if (loginForm) loginForm.style.display = 'flex';
        if (secretTab) secretTab.style.add ? secretTab.style.add : secretTab.classList.add('logged-in');
        if (mainBody) mainBody.classList.add('dark-mode');
        if (riskWidget) riskWidget.style.display = 'flex';
        
        alert("보안 검증 통과.\n중앙이상감염연구청 내부망(KCIC-NET)에 강제 접속합니다.");
    }, 1500);
}