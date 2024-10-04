import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { JsonEditor } from 'json-edit-react';
import './JsonViewer.css';

const JsonViewer = ({ src }) => {
  if (!src) {
    return <div>No data available</div>;
  }

  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => <JsonEditor data={src} className="json-editor-viewer" theme="default" rootName="" />}
    </BrowserOnly>
  );
};

export default JsonViewer;
