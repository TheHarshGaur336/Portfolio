const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const navigationItems = [
  ['index.html', 'Home'],
  ['work.html', 'Work'],
  ['create.html', 'Create'],
  ['about.html', 'About'],
  ['contact.html', 'Contact']
];

const navigationMarkup = navigationItems.map(([href, label]) => {
  const active = currentPage === href;
  return `<li><a href="${href}"${active ? ' class="active" aria-current="page"' : ''}>${label}</a></li>`;
}).join('');

document.querySelector('#sidebar').innerHTML = `
  <nav class="sidebar">
    <div class="avatar">HG</div>
    <div class="mark">Harsh Gaur</div>
    <div class="status"><span class="dot"></span>Associate Consultant, Capgemini</div>
    <ul class="filetree">
      ${navigationMarkup}
    </ul>
    <div class="sidebar-foot">
      Haryana, India
    </div>
  </nav>
`;