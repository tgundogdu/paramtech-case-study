import * as React from "react";
import { Box, SuccessIcon } from "../components";
import { Typography } from "antd";

interface ResultProps {}

const Result: React.FC<ResultProps> = (props) => {
  return (
    <div className="result-page">
      <Box padding="50px" alignItems="center">
        <SuccessIcon />
        <Typography.Title level={3}>Başarıyla Tamamlandı!</Typography.Title>
      </Box>
    </div>
  );
};

export default Result;
