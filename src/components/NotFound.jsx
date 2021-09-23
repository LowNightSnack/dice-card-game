import BackToHome from "./BackToHome";
import DefaultLayout from "./layouts/DefaultLayout";

const NotFound = () => {
  return (
    <DefaultLayout>
      <BackToHome />
      <h1>404 - Not Found</h1>
    </DefaultLayout>
  );
};

export default NotFound;
