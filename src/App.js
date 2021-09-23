import React, { Suspense } from "react";
import { Route, Switch, Link } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Spinner from "./components/Spinner";
import NotFound from "./components/NotFound";
import AS from "./assets/images/cards/AS.png";
import Die1 from "./assets/images/dieFaces/Die1.svg";
const Card = React.lazy(() => import("./pages/Card"));
const Dice = React.lazy(() => import("./pages/Dice"));

const Home = () => {
  return (
    <DefaultLayout>
      <h1 className="text-2xl">Select Game</h1>
      <div className="flex items-center">
        <Link className="relative rounded-lg w-24 mr-5" to="/dice">
          <div className="h-full w-full">
            <img src={Die1} alt="Die facing 1" />
          </div>
          <div className="absolute top-0 h-full w-full flex justify-center items-center opacity-0 hover:opacity-100 transition">
            <p className="p-2 rounded-lg bg-red-700 bg-opacity-70">Dice</p>
          </div>
        </Link>
        <Link className="relative rounded-lg w-24" to="/card">
          <div className="h-full w-full">
            <img src={AS} alt="Ace of Spades" />
          </div>
          <div className="absolute top-0 h-full w-full flex justify-center items-center opacity-0 hover:opacity-100 transition">
            <p className="p-2 rounded-lg bg-red-700 bg-opacity-70">Card</p>
          </div>
        </Link>
      </div>
    </DefaultLayout>
  );
};

function App() {
  return (
    <Switch>
      <Route
        path="/card"
        render={() => (
          <Suspense fallback={<Spinner />}>
            <Card />
          </Suspense>
        )}
      />
      <Route
        path="/dice"
        render={() => <Suspense fallback={<Spinner />}>{<Dice />}</Suspense>}
      />
      <Route path="/" exact component={Home} />
      <Route
        path="*"
        render={() => (
          <Suspense fallback={<Spinner />}>
            <NotFound />
          </Suspense>
        )}
      />
    </Switch>
  );
}

export default App;
