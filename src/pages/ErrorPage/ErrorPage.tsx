// @ts-nocheck
import { useNavigate, useRouteError } from "react-router-dom";
import { Button, Result } from "antd";
import Title from "antd/es/typography/Title";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);
  if (!error) {
    return (
      <Result
        status="404"
        title="404"
        subTitle={<Title>Такой страницы не существует</Title>}
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Back Home
          </Button>
        }
      />
    );
  }
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
