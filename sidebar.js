const configuredBase = document.querySelector('meta[name="site-base"]')?.content || '';
const siteBase = configuredBase.startsWith('{{') ? '' : configuredBase;
const sourceFileMode = !siteBase && window.location.pathname.endsWith('.html');
const currentPath = window.location.pathname.replace(new RegExp(`^${siteBase}`), '').replace(/^\/|\/$/g, '');
const currentRoute = sourceFileMode ? currentPath.split('/').pop().replace(/\.html$/, '') : currentPath;
const currentPage = currentRoute || 'home';

const navigationItems = [
  ['', 'Home'],
  ['work', 'Technical Stuff'],
  ['create', 'Creative Stuff'],
  ['about', 'About'],
  ['contact', 'Contact']
];

const navigationMarkup = navigationItems.map(([href, label]) => {
  const active = currentPage === (href || 'home');
  const destination = sourceFileMode
    ? `${href || 'index'}.html`
    : `${siteBase}/${href}/`.replace(/\/+/g, '/');
  return `<li><a href="${destination}"${active ? ' class="active" aria-current="page"' : ''}>${label}</a></li>`;
}).join('');

const homeUrl = sourceFileMode ? 'index.html' : `${siteBase}/`.replace(/\/+/g, '/');

document.querySelector('#sidebar').innerHTML = `
  <nav class="sidebar">
    <a class="avatar-link" href="${homeUrl}" aria-label="Go to home page"><div class="avatar">HG</div></a>
    <a class="mark mark-link" href="${homeUrl}">Harsh Gaur</a>
    <div class="status"><span class="dot"></span>Associate Consultant, Capgemini</div>
    <ul class="filetree">
      ${navigationMarkup}
    </ul>
    <div class="sidebar-foot">
      Haryana, India
    </div>
  </nav>
`;