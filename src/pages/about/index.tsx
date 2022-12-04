import React, { useEffect } from "react";

function AboutPage() {
  useEffect(() => {
    console.log("AboutPage mount ---");

    return () => {
      console.log("AboutPage Unmount ---");
    };
  }, []);

  return <div>AboutPage</div>;
}

export default AboutPage;
