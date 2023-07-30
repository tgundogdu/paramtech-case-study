import { Button, Form, FormInstance } from "antd";
import { useEffect, useState } from "react";

const PaymentButton = ({ form }: { form: FormInstance }) => {
  const [submittable, setSubmittable] = useState(false);
  const values = Form.useWatch([], form);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return (
    <Button
      block
      type="primary"
      size="large"
      htmlType="submit"
      disabled={!submittable}
    >
      Ödeme Yap
    </Button>
  );
};

export default PaymentButton;
