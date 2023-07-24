import React, { useEffect, useState } from "react";

const UseCollegeData = () => {
  const [colleges, setcolleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://server-code-college-booking-web.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => {
        setcolleges(data);
        setLoading(false);
      });
  }, []);
  return [colleges, loading];
};

export default UseCollegeData;
