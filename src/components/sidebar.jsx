export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="sidebar-title">SATRIO GP</div>
          <div className="sidebar-title-divider"></div>
          <div className="sidebar-subtitle">BASIC</div>
          <div className="sidebar-item">
            <ul>
              <li>
                <a href="/dashboard">
                  <i class="bi bi-house me-3"></i>Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-subtitle">FEATURES</div>
          <div className="sidebar-item">
            <ul>
              <li>
                <a href="/pembiayaan">
                  <i class="bi bi-currency-exchange me-3"></i>Ajukan Pembiayaan
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-person-circle me-3"></i>Account Settings
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-calendar-range-fill me-3"></i>Work Calendar
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-lock me-3"></i>Authentications
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
