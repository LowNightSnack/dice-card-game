import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <Link
      className="fixed top-3 left-3 flex hover:bg-red-700 rounded-lg p-3 transition"
      to="/"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      Back To Home
    </Link>
  );
};

export default BackToHome;
