const configuredBase = document.querySelector('meta[name="site-base"]')?.content || '';
const siteBase = configuredBase.startsWith('{{') ? '' : configuredBase;
const sourceFileMode = !siteBase && window.location.pathname.endsWith('.html');
const currentPath = window.location.pathname.replace(new RegExp(`^${siteBase}`), '').replace(/^\/|\/$/g, '');
const currentFile = currentPath.split('/').pop();
const localRoutes = {
  'index.html': 'home',
  'work.html': 'technical-stuff',
  'create.html': 'creative-stuff',
  'about.html': 'about',
  'contact.html': 'contact'
};
const currentPage = sourceFileMode ? localRoutes[currentFile] || 'home' : currentPath || 'home';

const navigationItems = [
  ['', 'Home', 'index.html'],
  ['technical-stuff', 'Technical Stuff', 'work.html'],
  ['creative-stuff', 'Creative Stuff', 'create.html'],
  ['about', 'About', 'about.html'],
  ['contact', 'Contact', 'contact.html']
];

const navigationMarkup = navigationItems.map(([href, label, sourceFile]) => {
  const active = currentPage === (href || 'home');
  const destination = sourceFileMode
    ? sourceFile
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