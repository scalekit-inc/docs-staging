export function onRouteDidUpdate({ location, previousLocation }) {
  if (location.pathname !== previousLocation?.pathname) {
    document.documentElement.dataset.insideIframe =
      document.location.href.includes('/integrations/') &&
      window.parent !== window;
  }
  var ssoLink = document.querySelector(
    'a.navbar__item.navbar__link.sso',
  );
  var dirSyncLink = document.querySelector(
    'a.navbar__item.navbar__link.dir-sync',
  );
  if (ssoLink) {
    if (document.location.href.includes('/sso/')) {
      ssoLink.classList.add('navbar__link--active');
      dirSyncLink.classList.remove('navbar__link--active');
    } else if (document.location.href.includes('/dir-sync/')) {
      dirSyncLink.classList.add('navbar__link--active');
      ssoLink.classList.remove('navbar__link--active');
    } else {
      ssoLink.classList.remove('navbar__link--active');
      dirSyncLink.classList.remove('navbar__link--active');
    }
  }
}
