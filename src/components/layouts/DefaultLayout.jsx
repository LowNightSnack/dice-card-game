const DefaultLayout = ({ children }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default DefaultLayout;
