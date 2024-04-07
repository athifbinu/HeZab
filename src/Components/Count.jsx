import React, { useState, useEffect } from "react";

const Count = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const limitedCount1 = 57;
  const limitedCount2 = 1500;
  const limitedCount3 = 20;

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (count1 < limitedCount1) {
        setCount1((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval1);
      }
    }, 20);

    const interval2 = setInterval(() => {
      if (count2 < limitedCount2) {
        setCount2((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval2);
      }
    }, 20);

    const interval3 = setInterval(() => {
      if (count3 < limitedCount3) {
        setCount3((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval3);
      }
    }, 20);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [count1, count2, count3, limitedCount1, limitedCount2, limitedCount3]);

  return (
    <div className="">
      <div className=" bg-gradient-to-r from-slate-200 to-gray-300">
        <div className="flex justify-between p-8">
          <div className="text-black">
            <h1 className="text-center text-6xl font-bold mb-4 fs">{count1}</h1>
            <p>Books Written</p>
          </div>

          <div className="text-black">
            <h1 className="text-center text-6xl font-bold mb-4 fs">{count2}</h1>
            <p>Books Written</p>
          </div>

          <div className="text-black">
            <h1 className="text-center text-6xl font-bold mb-4 fs">{count3}</h1>
            <p>Books Written</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
