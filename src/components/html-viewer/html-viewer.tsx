import * as React from "react";

interface HTMLViewerProps {
  data: string;
}

const HTMLViewer: React.FC<HTMLViewerProps> = ({ data }) => {
  const markup = { __html: data };
  return <div dangerouslySetInnerHTML={markup} />;
};

export default HTMLViewer;
