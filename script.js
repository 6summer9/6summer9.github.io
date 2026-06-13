function switchTab(tabId) {
    var contents = document.querySelectorAll('.tab-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    
    var navs = document.querySelectorAll('.nav-item');
    for (var j = 0; j < navs.length; j++) {
        navs[j].classList.remove('active');
    }
    
    document.getElementById(tabId).classList.add('active');
    
    if (tabId === 'intro') document.getElementById('btn-intro').classList.add('active');
    else if (tabId === 'organization') document.getElementById('btn-organization').classList.add('active');
    else if (tabId === 'secret-archive') document.getElementById('secretTab').classList.add('active');
}

// 1. 입력창의 데이터(이름, 사번, 부서, 등급)를 사원증에 실시간으로 반영하는 함수
function updateCardData() {
    // 입력창에서 값 가져오기
    var name = document.getElementById('cardName').value;
    var idNum = document.getElementById('cardIdNum').value;
    var dept = document.getElementById('cardDept').value;
    var level = document.getElementById('cardLevel').value;

    // 사원증(HTML) 자리에 실시간으로 글자 꽂아넣기
    document.getElementById('viewName').innerText = name ? name : "유나비";
    document.getElementById('viewIdNum').innerText = idNum ? idNum : "KCIC-2026-0812";
    document.getElementById('viewDept').innerText = dept;
    document.getElementById('viewLevel').innerText = level;
}

// 2. 사용자가 올린 증명사진 파일을 읽어서 사원증 프레임에 넣는 함수
function loadCardImage(event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        
        // 파일을 다 읽으면 실행되는 규칙
        reader.onload = function(e) {
            var userImg = document.getElementById('cardUserImg');
            var defIcon = document.getElementById('cardDefIcon');
            
            userImg.src = e.target.result; // 읽어온 사진 주소를 넣고
            userImg.style.display = 'block'; // 사진을 보여준 뒤
            defIcon.style.display = 'none';  // 기본 사람 아이콘은 숨깁니다
        }
        reader.readAsDataURL(file); // 파일을 주소 형태로 변환하여 읽기 시작
    }
}

// 1. 사용자가 '국'을 바꿨을 때 '과' 선택지를 실시간으로 갈아 끼워주는 연동 함수
function handleBureauChange() {
    var bureauSelect = document.getElementById('cardDeptBureau');
    var sectionSelect = document.getElementById('cardDeptSection');
    var selectedBureau = bureauSelect.value;
    
    // 기존 과 선택지 비우기
    sectionSelect.innerHTML = "";
    
    // 사용자가 선택한 국에 맞춰 알맞은 과 배열 매칭
    var sections = [];
    if (selectedBureau === "오염현상조사국") {
        sections = ["오염현상탐지과", "현장조사과", "오염원추적과"];
    } else if (selectedBureau === "오염체연구국") {
        sections = ["오염체분석과", "임상연구과", "오염데이터관리과"];
    } else if (selectedBureau === "오염확산방지국") {
        sections = ["오염자격리관리과", "민간피해조사과", "오염확산감시과"];
    } else if (selectedBureau === "치료개발국") {
        sections = ["치료제연구과", "약물효과분석과", "오염면역연구과"];
    }
    
    // 새로운 과 선택지 주입
    sections.forEach(function(sectionName) {
        var opt = document.createElement('option');
        opt.value = sectionName;
        opt.innerHTML = sectionName;
        sectionSelect.appendChild(opt);
    });
    
    // 데이터 즉시 동기화
    updateCardData();
}

// 2. 텍스트 정보들을 사원증 앞·뒷면에 정밀 매칭하는 함수
function updateCardData() {
    var name = document.getElementById('cardName').value;
    var idNum = document.getElementById('cardIdNum').value;
    var bureau = document.getElementById('cardDeptBureau').value;
    var section = document.getElementById('cardDeptSection').value;
    var level = document.getElementById('cardLevel').value;

    // 앞면 갱신
    document.getElementById('viewName').innerText = name ? name : "유나비";
    document.getElementById('viewIdNum').innerText = idNum ? idNum : "KCIC-2026-0812";
    document.getElementById('viewBureau').innerText = bureau;
    document.getElementById('viewSection').innerText = section;
    
    // 뒷면 보안 권한 등급 갱신
    document.getElementById('viewLevel').innerText = level;
}

// 3. 증명사진 파일 업로드 제어 함수
function loadCardImage(event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var userImg = document.getElementById('cardUserImg');
            var defIcon = document.getElementById('cardDefIcon');
            userImg.src = e.target.result;
            userImg.style.display = 'block';
            defIcon.style.display = 'none';
        }
        reader.readAsDataURL(file);
    }
}

// 4. 사원증 다운로드용 이미지 캡처 렌더링 함수
function downloadIdCard(side) {
    var targetId = (side === 'front') ? 'idCardFront' : 'idCardBack';
    var targetElement = document.getElementById(targetId);
    var userName = document.getElementById('cardName').value || '요원';
    var fileName = 'KCIC_사원증_' + userName + '_' + (side === 'front' ? '앞면' : '뒷면') + '.png';

    html2canvas(targetElement, {
        scale: 2, 
        backgroundColor: null, 
        useCORS: true 
    }).then(function(canvas) {
        var link = document.createElement('a');
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }).catch(function(error) {
        console.error('사원증 캡처 에러:', error);
        alert('🚨 장치 보안 프로토콜 오류가 발생했습니다.');
    });
}