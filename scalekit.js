var homepageURL = '/docs-staging/';
export function onRouteDidUpdate({ location, previousLocation }) {
  if (location.pathname !== previousLocation?.pathname) {
    document.documentElement.dataset.insideIframe =
      document.location.href.includes('/integrations/') && window.parent !== window;
  }
  // if (location.pathname != homepageURL) {
  //   document.querySelector('.homeLink').classList.remove('navbar__link--active');
  // }
  var ssoLink = document.querySelector('a.navbar__item.navbar__link.sso');
  if (ssoLink) {
    if (document.location.href.includes('/sso/')) {
      ssoLink.classList.add('navbar__link--active');
    } else {
      ssoLink.classList.remove('navbar__link--active');
    }
  }
}
