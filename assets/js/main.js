// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    }
  });
}

// Interest form: submit in the background and thank the visitor in place.
// Without JavaScript the form still posts normally and returns here via _next.
const form = document.getElementById('interest-form');
if (form) {
  const status = form.querySelector('.form-status');
  form.querySelector('input[name="_next"]').value =
    location.href.split('#')[0] + '?thanks=1#interest';

  if (new URLSearchParams(location.search).has('thanks')) showThanks();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.querySelector('.honey').value) return;
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    status.className = 'form-status';
    status.textContent = 'Sending…';
    try {
      const res = await fetch(form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/'), {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(res.statusText);
      showThanks();
    } catch (err) {
      button.disabled = false;
      status.className = 'form-status err';
      status.textContent = 'Sorry, that didn’t send. Please try again, or email us directly.';
    }
  });

  function showThanks() {
    form.innerHTML =
      '<div class="form-thanks" role="status"><h3>Thank you!</h3>' +
      '<p>We got your note and will be in touch soon about visiting a meeting.</p></div>';
  }
}

// Gallery: click a photo to see it larger. Without JavaScript the link opens the image.
const lightbox = document.getElementById('lightbox');
const zoomLinks = [...document.querySelectorAll('a.zoom')];
if (lightbox && lightbox.showModal && zoomLinks.length) {
  const lbImg = lightbox.querySelector('img');
  const lbCap = lightbox.querySelector('figcaption');
  let current = 0;
  const show = (i) => {
    current = (i + zoomLinks.length) % zoomLinks.length;
    const link = zoomLinks[current];
    const thumb = link.querySelector('img');
    lbImg.src = link.href;
    lbImg.alt = thumb.alt;
    const caption = link.closest('figure').querySelector('figcaption');
    lbCap.textContent = link.dataset.caption || (caption ? caption.textContent : thumb.alt);
  };
  zoomLinks.forEach((link, i) => link.addEventListener('click', (e) => {
    e.preventDefault();
    show(i);
    lightbox.showModal();
  }));
  lightbox.querySelector('.lb-close').addEventListener('click', () => lightbox.close());
  lightbox.querySelector('.lb-prev').addEventListener('click', () => show(current - 1));
  lightbox.querySelector('.lb-next').addEventListener('click', () => show(current + 1));
  // Clicking the dark backdrop (not the photo or buttons) closes it
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
}
