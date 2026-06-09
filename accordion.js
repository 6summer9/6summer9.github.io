// 조직도 하위 부서 아코디언 열고 닫기 함수
function toggleAccordion(panelId) {
    var panel = document.getElementById(panelId);
    var arrow = document.getElementById('arrow-' + panelId);
    
    // 다른 부서가 열려 있다면 자동으로 접어줌
    var panels = document.querySelectorAll('.accordion-content');
    for (var k = 0; k < panels.length; k++) {
        if (panels[k].id !== panelId && panels[k].classList.contains('open')) {
            panels[k].classList.remove('open');
            panels[k].style.maxHeight = null;
            var otherArrow = document.getElementById('arrow-' + panels[k].id);
            if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
        }
    }

    // 현재 선택한 아코디언 열고 닫기 토글
    if (panel.classList.contains('open')) {
        panel.classList.remove('open');
        panel.style.maxHeight = null;
        arrow.style.transform = 'rotate(0deg)';
    } else {
        panel.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + "px";
        arrow.style.transform = 'rotate(180deg)';
    }
}