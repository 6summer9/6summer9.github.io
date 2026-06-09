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