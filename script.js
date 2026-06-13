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

// 3. 완성된 사원증을 캡처해서 PC/폰에 .png 이미지로 자동 저장해주는 함수
function downloadIdCard(side) {
    // 앞면('front')인지 뒷면('back')인지 판별하여 타겟 상자 지정
    var targetId = (side === 'front') ? 'idCardFront' : 'idCardBack';
    var targetElement = document.getElementById(targetId);
    
    // 다운로드할 때 파일 이름 설정 (예: KCIC_사원증_앞면.png)
    var userName = document.getElementById('cardName').value || '요원';
    var fileName = 'KCIC_사원증_' + userName + '_' + (side === 'front' ? '앞면' : '뒷면') + '.png';

    // html2canvas 라이브러리를 사용해 해당 구역을 고화질 이미지로 굽기
    html2canvas(targetElement, {
        scale: 2, // 숫자를 2로 두어 다운로드 시 글씨가 깨지지 않고 아주 선명하게 나오도록 조절
        backgroundColor: null, // 카드 테두리 바깥은 투명하게 처리
        useCORS: true // 외부 아이콘(FontAwesome)이 캡처에서 깨지는 걸 방지
    }).then(function(canvas) {
        // 이미지가 완성되면 가상의 다운로드 링크를 브라우저에 몰래 생성해서 클릭하게 만듦
        var link = document.createElement('a');
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }).catch(function(error) {
        console.error('사원증 발급 중 오류 발생:', error);
        alert('🚨 시스템 오류: 인가된 장치에서 캡처 프로토콜이 거부되었습니다. 다시 시도하십시오.');
    });
}