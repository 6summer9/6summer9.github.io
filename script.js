// 상단 메뉴 탭 전환 함수
function switchTab(tabId) {
    // 모든 본문 화면 블록 감추기
    var contents = document.querySelectorAll('.tab-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    
    // 모든 네비 버튼 파란줄 강조 제거
    var navs = document.querySelectorAll('.nav-item');
    for (var j = 0; j < navs.length; j++) {
        navs[j].classList.remove('active');
    }
    
    // 타겟 본문 화면만 활성화
    document.getElementById(tabId).classList.add('active');
    
    // 매칭되는 네비 버튼에 활성화 불 켜기
    if (tabId === 'intro') {
        document.getElementById('btn-intro').classList.add('active');
    } else if (tabId === 'organization') {
        document.getElementById('btn-organization').classList.add('active');
    } else if (tabId === 'secret-archive') {
        document.getElementById('secretTab').classList.add('active');
    }
}