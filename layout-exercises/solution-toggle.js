(function() {
  const button = document.createElement('button');
  button.id = 'solution-toggle-btn';
  
  const currentUrl = window.location.href;
  const isSolutionPage = currentUrl.includes('-solution.html');
  
  let targetUrl = '';
  let buttonText = '';
  
  if (isSolutionPage) {
    targetUrl = currentUrl.replace('-solution.html', '.html');
    buttonText = 'กลับไปที่โจทย์ (View Starter)';
  } else {
    // ป้องกันการทำงานกับกรณีเปิดหน้าตรงไม่มีนามสกุล .html
    if (currentUrl.endsWith('/') || !currentUrl.includes('.html')) {
      // คาดเดาหน้าจากเส้นทางปกติ
      targetUrl = 'midterm-shop-solution.html';
    } else {
      targetUrl = currentUrl.replace('.html', '-solution.html');
    }
    buttonText = 'ดูเฉลย (Show Solution)';
  }

  button.innerHTML = `<span>🔍</span> <span id="toggle-text">${buttonText}</span>`;
  
  // จัดสไตล์ปุ่มลอยด้วยสไตล์พรีเมียม
  Object.assign(button.style, {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: '99999',
    backgroundColor: isSolutionPage ? '#1b3b2b' : '#c49a6c',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '30px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 8px 30px rgba(27, 59, 43, 0.2)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
  });

  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-3px)';
    button.style.backgroundColor = isSolutionPage ? '#c49a6c' : '#1b3b2b';
    button.style.boxShadow = '0 12px 35px rgba(27, 59, 43, 0.3)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
    button.style.backgroundColor = isSolutionPage ? '#1b3b2b' : '#c49a6c';
    button.style.boxShadow = '0 8px 30px rgba(27, 59, 43, 0.2)';
  });

  button.addEventListener('click', () => {
    window.location.href = targetUrl;
  });

  // รันคำสั่งเพิ่มปุ่มหลังจากโหลด DOM ครบถ้วน
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => document.body.appendChild(button));
  } else {
    document.body.appendChild(button);
  }
  
  // ใส่สไตล์ตกแต่งเฉพาะตัวให้กับหน้าเฉลย
  if (isSolutionPage) {
    document.body.style.outline = '5px solid #c49a6c';
    document.body.style.outlineOffset = '-5px';
  }
})();
