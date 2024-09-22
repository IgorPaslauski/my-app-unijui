"use client";
export function HeaderPage() {
  const openMenu = () => {
    const navBar = document.querySelector(".nav-bar");
    navBar?.classList.toggle("ativo");
  };
  return (
    <div className="container-header">
      <div className="container-header-left">
        <div onClick={openMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" focusable="false">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </div>
      </div>
      <div className="container-header-right">
        <div className="container-header-right-logo">
          <img src="https://www.gstatic.com/classroom/web/10th_anniversary.png" />
          <span>Google Sala de Aula do Igor</span>
        </div>
        <div className="container-header-right-btns">
          <div>
            <svg focusable="false" width="24" height="24" viewBox="0 0 24 24">
              <path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path>
            </svg>
            <svg focusable="false" viewBox="0 0 24 24" fill="#5f6368">
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
            </svg>
          </div>
          <div>
            <img src="https://lh3.google.com/u/2/ogw/AF2bZyhYfhOZXnmasL1pvyZsNX_srG0uekPA9P40rrvVOHeR1g=s32-c-mo" />
          </div>
        </div>
      </div>
    </div>
  );
}
