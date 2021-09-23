import BackToHome from "../components/BackToHome";
import DefaultLayout from "../components/layouts/DefaultLayout";

const Card = () => {
  return (
    <DefaultLayout>
      <BackToHome />
      <h1 className="text-3xl">Card Game</h1>
      <div>
        <label className="mr-3">Enter Number of Players:</label>
        <input
          className="text-black w-10"
          type="number"
          min="1"
          max="10"
          defaultValue="1"
        />
      </div>
    </DefaultLayout>
  );
};

export default Card;
