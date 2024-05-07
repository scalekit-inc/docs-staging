// Prism curl
Prism.languages.curl = {
  'curl': /\bcurl\b/,
  'url': /https?:[a-zA-Z0-9:.?=\/\-_{}]*/,
  'parameter': {
    pattern: /[A-Za-z0-9\[\]-_]+ *(?=[=])/,
  },
  'value': [
    {
      pattern: /([=])([A-Za-z0-9-_.]*)/,
      lookbehind: true,
    },
    {
      pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    },
    {
      pattern: /(\-u )([A-Za-z0-9-_.{}]*)/,
      lookbehind: true,
    }
  ],
  'option': / *-[a-zA-Z]*\b/,
};