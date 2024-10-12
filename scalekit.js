export function onRouteDidUpdate({ location, previousLocation }) {
  if (location.pathname !== previousLocation?.pathname) {
    document.documentElement.dataset.insideIframe =
      document.location.href.includes('/integrations/') && window.parent !== window;
  }
  var ssoLink = document.querySelector('a.dropdown__link.sso');
  var dirSyncLink = document.querySelector('a.dropdown__link.scim');
  var dropdownNavbarItem = document.querySelector('a.navbar__link');

  if (ssoLink) {
    if (document.location.href.includes('/sso/')) {
      ssoLink.classList.add('navbar__link--active');
      dirSyncLink.classList.remove('navbar__link--active');
      console.log(dropdownNavbarItem.innerHTML);
      dropdownNavbarItem.innerHTML = 'Single Sign-On';
    } else if (document.location.href.includes('/scim/')) {
      dirSyncLink.classList.add('navbar__link--active');
      ssoLink.classList.remove('navbar__link--active');
      dropdownNavbarItem.innerHTML = 'SCIM Provisioning';
    } else {
      ssoLink.classList.remove('navbar__link--active');
      dirSyncLink.classList.remove('navbar__link--active');
      dropdownNavbarItem.innerHTML = 'Products';
    }
  }
}
