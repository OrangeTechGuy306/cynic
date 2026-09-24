

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initToastContainer();
  syncAgentProfileUI();
  highlightActiveNav();
});

/* Initialize Mobile Sidebar & Overlay */
function initSidebar() {
  const toggleBtn = document.getElementById('sidebarToggleBtn');
  const sidebar = document.getElementById('appSidebar');
  const overlay = document.getElementById('sidebarOverlay');

  if (toggleBtn && sidebar && overlay) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
      overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
      overlay.classList.remove('active');
    });
  }
}

/* Toast Notification Utility */
function initToastContainer() {
  if (!document.querySelector('.cynic-toast-container')) {
    const container = document.createElement('div');
    container.className = 'cynic-toast-container';
    document.body.appendChild(container);
  }
}

function showToast(message, type = 'success') {
  const container = document.querySelector('.cynic-toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `cynic-toast toast-${type}`;
  
  let iconClass = 'ri-checkbox-circle-fill text-green';
  if (type === 'danger' || type === 'error') iconClass = 'ri-error-warning-fill text-danger';
  if (type === 'warning') iconClass = 'ri-alert-fill text-warning';
  if (type === 'info') iconClass = 'ri-information-fill text-muted';

  toast.innerHTML = `
    <i class="${iconClass}" style="font-size: 1.25rem;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function showToastNotification(message, type = 'success') {
  showToast(message, type);
}

/* Synchronize Agent Profile from localStorage */
function syncAgentProfileUI() {
  const raw = localStorage.getItem('cynic_agent');
  if (!raw) return;

  try {
    const agent = JSON.parse(raw);
    const nameEls = document.querySelectorAll('.agent-name-display');
    const emailEls = document.querySelectorAll('.agent-email-display');
    const agencyEls = document.querySelectorAll('.agent-agency-display');
    const avatarEls = document.querySelectorAll('.agent-avatar-img');

    nameEls.forEach(el => el.textContent = agent.name);
    emailEls.forEach(el => el.textContent = agent.email);
    agencyEls.forEach(el => el.textContent = agent.agency);
    avatarEls.forEach(el => {
      if (agent.avatar) el.src = agent.avatar;
    });
  } catch (e) {
    console.error('Error syncing profile UI', e);
  }
}

/* Highlight Active Sidebar Item based on current URL */
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'dashboard.html';
  const navLinks = document.querySelectorAll('.nav-item a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'dashboard.html')) {
      link.parentElement.classList.add('active');
    } else {
      link.parentElement.classList.remove('active');
    }
  });
}

/* Logout Utility */
function handleAgentLogout() {
  if (confirm('Are you sure you want to sign out of Cynic Agent Portal?')) {
    showToast('Signing out...', 'info');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 600);
  }
}
