(function() {
    'use strict';

    if (document.getElementById('aincrad-menu-container')) return;

    const style = document.createElement('style');
    style.innerHTML = `
        #aincrad-menu-container { position: fixed; top: 20px; right: 20px; width: 250px; background: rgba(15, 15, 20, 0.95); border: 2px solid #00ffcc; border-radius: 10px; z-index: 9999999; font-family: sans-serif; color: #fff; box-shadow: 0 4px 15px rgba(0, 255, 204, 0.3); }
        #aincrad-menu-header { background: #00ffcc; color: #000; padding: 10px; text-align: center; font-weight: bold; cursor: move; display: flex; justify-content: space-between; }
        #aincrad-menu-close { cursor: pointer; }
        #aincrad-menu-content { padding: 15px; display: flex; flex-direction: column; gap: 10px; }
        .aincrad-btn { background: #1a1a24; color: #00ffcc; border: 1px solid #00ffcc; padding: 10px; border-radius: 5px; cursor: pointer; font-weight: bold; text-align: center; }
        .aincrad-btn:hover, .aincrad-btn.active { background: #00ffcc; color: #000; }
        #aincrad-status { font-size: 11px; text-align: center; color: #888; margin-top: 5px; }
    `;
    document.head.appendChild(style);

    const menuHTML = `
        <div id="aincrad-menu-container">
            <div id="aincrad-menu-header">
                <span>Aincrad AI</span>
                <div id="aincrad-menu-close">✖</div>
            </div>
            <div id="aincrad-menu-content">
                <div class="aincrad-btn" id="btn-bypass">🚀 Auto Bypass Key</div>
                <div class="aincrad-btn" id="btn-skip">⏭️ Skip Timers</div>
                <div class="aincrad-btn" id="btn-ads">🛑 Remove Ads</div>
                <div id="aincrad-status">Status: Standby</div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', menuHTML);

    const menu = document.getElementById('aincrad-menu-container');
    const header = document.getElementById('aincrad-menu-header');
    let isDragging = false, offsetX, offsetY;

    header.onmousedown = function(e) { isDragging = true; offsetX = e.clientX - menu.getBoundingClientRect().left; offsetY = e.clientY - menu.getBoundingClientRect().top; };
    document.onmousemove = function(e) { if (isDragging) { menu.style.left = (e.clientX - offsetX) + 'px'; menu.style.top = (e.clientY - offsetY) + 'px'; menu.style.right = 'auto'; } };
    document.onmouseup = function() { isDragging = false; };

    document.getElementById('aincrad-menu-close').onclick = function() { menu.remove(); };

    const statusText = document.getElementById('aincrad-status');

    document.getElementById('btn-bypass').onclick = function() {
        statusText.innerText = "Status: Bypassing...";
        this.classList.add('active');
        setTimeout(() => this.classList.remove('active'), 1000);
        
        const words = ['continue', 'proceed', 'get key', 'unlock', 'skip', 'clique', 'continuar'];
        setInterval(() => {
            document.querySelectorAll('button, a, div').forEach(el => {
                let txt = (el.innerText || '').toLowerCase();
                if (words.some(w => txt.includes(w)) && txt.length < 30) { el.click(); }
            });
        }, 1500);
    };

    document.getElementById('btn-skip').onclick = function() {
        statusText.innerText = "Status: Skipping Timers...";
        this.classList.add('active');
        setTimeout(() => this.classList.remove('active'), 1000);

        setInterval(() => {
            document.querySelectorAll('*').forEach(el => {
                if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
                    let txt = el.innerText;
                    if (txt && txt.match(/^\s*\d+\s*(s|sec|seconds)?\s*$/i)) {
                        el.innerText = '0';
                        el.style.color = '#00ffcc';
                    }
                }
            });
        }, 1000);
    };

    document.getElementById('btn-ads').onclick = function() {
        statusText.innerText = "Status: Ads Removed";
        this.classList.add('active');
        setTimeout(() => this.classList.remove('active'), 1000);
        
        const ads = ['iframe', '.adsbygoogle', 'div[id*="ad-"]', 'div[class*="ad-"]'];
        ads.forEach(sel => document.querySelectorAll(sel).forEach(e => e.remove()));
        setTimeout(() => statusText.innerText = "Status: Standby", 2000);
    };

})();
