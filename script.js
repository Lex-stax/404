
// ==================sidebar================
  let link = document.querySelector('a.nav-link')
  let body = document.querySelector('body')
  let overlay = document.querySelector('#sidebar-overlay')
  link.addEventListener('click', () => {
    if(body.classList.contains('sidebar-collapse')){
      body.classList.remove('sidebar-collapse');
      body.classList.remove('sidebar-closed');
      body.classList.add('sidebar-open');
    }
  })
  overlay.addEventListener('click', () => {
    body.classList.remove('sidebar-open');
    body.classList.add('sidebar-collapse');
    body.classList.add('sidebar-closed');
  })

  // ==================dropdown================
  let dropdown = document.querySelector('.dropdown')
  let dropdownmenu = document.querySelector('.dropdown-menu')
  let dropdownToggle = document.querySelector('a[data-toggle="dropdown"]')

  dropdownToggle.addEventListener('click', (event) => {
    event.stopPropagation()
    dropdownmenu.classList.toggle('show')
    dropdown.classList.toggle('show')
  })

  body.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown') || !event.target.closest('.dropdown-menu')) {
      event.stopPropagation()
      dropdownmenu.classList.remove('show')
      dropdown.classList.remove('show')
    }
  })
  