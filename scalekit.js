export function onRouteDidUpdate({ location, previousLocation }) {
  if (location.pathname !== previousLocation?.pathname) {
    document.documentElement.dataset.insideIframe =
      document.location.href.includes('/integrations/') && window.parent !== window;
  }
  var ssoLink = document.querySelector('a.dropdown__link.sso');
  var dirSyncLink = document.querySelector('a.dropdown__link.scim');
  var dropdownNavbarItem = document.querySelector('a.navbar__link');

  function updateTextBasedOnScreenSize() {
    if (window.innerWidth <= 1350 && window.innerHeight <= 1430) {
      if (ssoLink && document.location.href.includes('/sso/')) {
        dropdownNavbarItem.innerHTML = 'SSO';
      } else if (dirSyncLink && document.location.href.includes('/scim/')) {
        dropdownNavbarItem.innerHTML = 'SCIM';
      }
    } else {
      if (ssoLink && document.location.href.includes('/sso/')) {
        dropdownNavbarItem.innerHTML = 'Single Sign-On';
      } else if (dirSyncLink && document.location.href.includes('/scim/')) {
        dropdownNavbarItem.innerHTML = 'SCIM Provisioning';
      }
    }
  }

  if (ssoLink) {
    if (document.location.href.includes('/sso/')) {
      ssoLink.classList.add('navbar__link--active');
      dirSyncLink.classList.remove('navbar__link--active');
      updateTextBasedOnScreenSize();
    } else if (document.location.href.includes('/scim/')) {
      dirSyncLink.classList.add('navbar__link--active');
      ssoLink.classList.remove('navbar__link--active');
      updateTextBasedOnScreenSize();
    } else {
      ssoLink.classList.remove('navbar__link--active');
      dirSyncLink.classList.remove('navbar__link--active');
      dropdownNavbarItem.innerHTML = 'Products';
    }
  }

  window.addEventListener('resize', updateTextBasedOnScreenSize);
  updateTextBasedOnScreenSize(); // Initial call to set the correct text
}
