import React from 'react';
import { JsonEditor } from 'json-edit-react';
import './JsonViewer.css';

const JsonViewer = ({ src }) => {
  if (!src) {
    return <div>No data available</div>;
  }

  return <JsonEditor data={src} className="json-editor-viewer" theme="default" />;
};

export default JsonViewer;
