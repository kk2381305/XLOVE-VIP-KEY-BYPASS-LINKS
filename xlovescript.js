(function () {
  "use strict";

  if (typeof window.XLOVE_BOOKMARK_LOAD === "undefined") {
    console.log("%cAccess Denied - Bookmark Required", "color:#ff0000;font-size:15px;font-weight:bold");
    return;
  }
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  const _0x5e548e = {
    k: "https://raw.githubusercontent.com/kk2381305/key/refs/heads/main/key.txt",
    r: "https://raw.githubusercontent.com/kk2381305/xlovevip.txt/refs/heads/main/xlovevip.txt",
    t: "https://raw.githubusercontent.com/kk2381305/button.txt/refs/heads/main/button.txt",
    s: "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#02040a;color:#fff;padding:25px;border-radius:12px;z-index:2147483647;font-family:sans-serif;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,0.8);border:2px solid #00ffcc;width:280px;box-sizing:border-box;"
  };


  (async function () {
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  
    // REMOVE EXISTING AUTH BOX IF PRESENT
    const _0x40e08f = document.getElementById("xlove-auth-box");
    if (_0x40e08f) {
      _0x40e08f.remove();
    }

    // CREATE AUTH BOX
    const _0xd9eed1 = document.createElement("div");
    _0xd9eed1.id = "xlove-auth-box";
    _0xd9eed1.style.cssText = _0x5e548e.s;
    _0xd9eed1.innerHTML = `
      <h3 style="margin:0 0 10px 0;color:#00ffcc;font-size:18px;letter-spacing:1px;font-weight:bold;"> XLOVE VIP </h3>
      <p style="margin:0 0 15px 0;color:#64748b;font-size:11px;">ENTER LICENSE KEY</p>
      <input type="text" id="xlove-key-input" placeholder="ENTER KEY HERE"
        style="width:100%;padding:10px;margin-bottom:15px;border:1px solid #00ffcc;border-radius:6px;background:#070b19;color:#fff;text-align:center;box-sizing:border-box;font-size:13px;outline:none;">
      <button id="xlove-login-btn"
        style="width:100%;background:#00ffcc;color:#000;border:none;padding:12px;border-radius:6px;font-weight:bold;cursor:pointer;font-size:13px;margin-bottom:10px;">VERIFY</button>
      <button id="xlove-telegram-btn"
        style="width:100%;background:#229ED9;color:#fff;border:none;padding:12px;border-radius:6px;font-weight:bold;cursor:pointer;font-size:13px;"> CONTACT ME WHATSAPP</button>
      <div id="xlove-status" style="margin-top:12px;font-size:12px;font-weight:bold;color:#64748b;">READY</div>
    `;
    document.body.appendChild(_0xd9eed1);

  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  
    // RESPONSIVE ADJUSTMENT
    setTimeout(() => {
      _0xd9eed1.style.zIndex = "2147483647";
      if (window.innerWidth < 600) {
        _0xd9eed1.style.width = "90%";
        _0xd9eed1.style.maxWidth = "280px";
      }
    }, 10);

    const _0x115557 = document.getElementById("xlove-login-btn");
    const _0xa73a22 = document.getElementById("xlove-telegram-btn");
    const _0x4e244b = document.getElementById("xlove-key-input");
    const _0x55c81e = document.getElementById("xlove-status");

    // TELEGRAM BUTTON
    _0xa73a22.addEventListener("click", async () => {
      try {
        const _0x3c4ae2 = await fetch(_0x5e548e.t + "?t=" + Date.now());
        const _0x5ca472 = (await _0x3c4ae2.text()).trim();
        if (_0x5ca472.startsWith("http")) {
          window.open(_0x5ca472, "_blank");
        }
      } catch (_0x4daefe) {}
    });
    
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP

    // LOGIN BUTTON
    _0x115557.addEventListener("click", async () => {
      const _0x485046 = _0x4e244b.value.trim();

      if (!_0x485046) {
        _0x55c81e.innerHTML = "<span style='color:#ff4444;'>PLEASE INPUT KEY!</span>";
        return;
      }

      _0x55c81e.innerHTML = "<span style='color:#00ffcc;'>CONNECTING SERVER...</span>";
      _0x115557.disabled = _0xa73a22.disabled = true;

      try {
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP 
  
        // FETCH AND VALIDATE KEY
        const _0x4a3e2c = await fetch(_0x5e548e.k + "?t=" + Date.now());
        const _0x85f258 = await _0x4a3e2c.text();
        const _0x1b9391 = _0x85f258.split("\n").map(_0x217070 => _0x217070.trim()).filter(_0x4297b4 => _0x4297b4 !== "");

        if (_0x1b9391.includes(_0x485046)) {
          _0x55c81e.innerHTML = "<span style='color:#00ffcc;'>KEY VALIDATED! ✓</span>";

          setTimeout(async () => {
            _0xd9eed1.remove();
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  
            // LOADING OVERLAY
            const _0x4761a5 = document.createElement("div");
            _0x4761a5.style.cssText = `
              position:fixed; top:0; left:0; width:100%; height:100%;
              background:rgba(2,4,10,0.85); z-index:2147483647;
              display:flex; align-items:center; justify-content:center;
              font-family:sans-serif;
            `;
            _0x4761a5.innerHTML = `
              <div style="text-align:center; background:#02040a; padding:30px; border-radius:12px; border:2px solid #00ffcc; box-shadow:0 10px 30px rgba(0,0,0,0.8); width:280px;">
                <div style="width:50px; height:50px; border:5px solid #1a2338; border-top:5px solid #00ffcc; border-radius:50%; margin:0 auto 20px auto; animation:xlove-spin 1s linear infinite;"></div>
                <p id="xlove-check-text" style="color:#00ffcc; font-size:16px; font-weight:bold; margin:0; letter-spacing:1px;">CHECKING UPDATE...</p>
              </div>
              <style>
                @keyframes xlove-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
              </style>
            `;
            document.body.appendChild(_0x4761a5);
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  
            // CHECK FOR UPDATE
            let _0x566f72 = false;
            try {
              const _0x33201b = await fetch("https://rm.xlove-modz.workers.dev/");
              const _0x5a22f2 = await _0x33201b.text();
              if (_0x5a22f2.includes("GitHub Updated")) {
                _0x566f72 = true;
              }
            } catch (_0x3e3f08) {}

            await new Promise(_0x49f3d4 => setTimeout(_0x49f3d4, 5000));

            const _0x2b7697 = document.getElementById("xlove-check-text");
            if (_0x566f72) {
              _0x2b7697.innerHTML = "<span style='color:#00ffcc;'>Link Updated Successfully! ✓</span>";
            } else {
              _0x2b7697.innerHTML = "<span style='color:#ff4444;'>No Update Available!</span>";
            }

            await new Promise(_0x36ccc0 => setTimeout(_0x36ccc0, 1500));
            _0x4761a5.remove();
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  
            // FETCH REDIRECT URL
            const _0x3c8fd6 = await fetch(_0x5e548e.r + "?t=" + Date.now());
            const _0x4165b7 = (await _0x3c8fd6.text()).trim();

            if (_0x4165b7.startsWith("http")) {
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP            
              // Countdown overlay
              const _0x384096 = document.createElement("div");
              _0x384096.style.cssText = `
                position:fixed; top:0; left:0; width:100%; height:100%;
                background:rgba(2,4,10,0.02); z-index:2147483647;
                display:flex; align-items:center; justify-content:center;
              `;

              const _0x4779a6 = Math.floor(Math.random() * 4) + 22;
              _0x384096.innerHTML = `
                <div style="text-align:center;">
                  <div style="position:relative; width:220px; height:220px; margin:0 auto;">
                    <svg width="220" height="220" style="transform:rotate(-90deg);">
                      <circle cx="110" cy="110" r="98" fill="none" stroke="#1a2338" stroke-width="18"></circle>
                      <circle id="progress" cx="110" cy="110" r="98" fill="none"
                        stroke="#00ffcc" stroke-width="18"
                        stroke-dasharray="615" stroke-dashoffset="615"
                        stroke-linecap="round"></circle>
                    </svg>
                    <div id="countdown-text" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-size:46px; font-weight:bold; color:#00ffcc;">${_0x4779a6}</div>
                  </div>
                  <p style="margin-top:25px; color:#00ffcc; font-size:18px; font-weight:bold;">REDIRECTING...</p>
                </div>
              `;
              document.body.appendChild(_0x384096);

              let _0x48150c = _0x4779a6;
              const _0x22958b = _0x384096.querySelector("#progress");
              const _0x17b3dc = _0x384096.querySelector("#countdown-text");
              const _0x3094fb = 615;
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  // CREDIT: XLOVE VIP
  
              // COUNTDOWN TIMER
              const _0x16f2c2 = setInterval(() => {
                _0x48150c--;
                _0x17b3dc.textContent = _0x48150c;
                const _0x9aa335 = _0x3094fb * (_0x48150c / _0x4779a6);
                _0x22958b.style.strokeDashoffset = _0x9aa335;
                if (_0x48150c <= 0) {
                  clearInterval(_0x16f2c2);
                  _0x384096.remove();
                  window.location.replace(_0x4165b7);
                }
              }, 1000);
            }
          }, 800);

        } else {
          _0x55c81e.innerHTML = "<span style='color:#ff4444;'>INVALID LICENSE KEY!</span>";
          _0x115557.disabled = _0xa73a22.disabled = false;
        }

      } catch (_0x5efef6) {
        _0x55c81e.innerHTML = "<span style='color:#ff4444;'>SERVER ERROR!</span>";
        _0x115557.disabled = _0xa73a22.disabled = false;
      }
    });

  })();
})();
