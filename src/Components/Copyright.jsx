import React from "react";

const Copyright = () => {
  return (
    <footer className="bg-black py-8 text-center text-white">
      <div className="container mx-auto">
        Copyright &copy; {new Date().getFullYear()} All right reaseaved
      </div>
    </footer>
  );
};

export default Copyright;
