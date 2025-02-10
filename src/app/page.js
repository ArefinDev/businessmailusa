"use client"

import dynamic from 'next/dynamic'
import React from "react";

// Dynamically import all components with SSR disabled
const FirstComponent = dynamic(() => import("@/components/FirstComponent"), {
  ssr: false
});

const SecondComponent = dynamic(() => import("@/components/SecondCOmponent"), {
  ssr: false
});

const ThirdComponent = dynamic(() => import("@/components/ThirdComponent"), {
  ssr: false
});

const ForthComponent = dynamic(() => import("@/components/ForthComponent"), {
  ssr: false
});

const FifthComponent = dynamic(() => import("@/components/FifthComponent"), {
  ssr: false
});

const Home = () => {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <ForthComponent />
      <FifthComponent />
    </div>
  );
};

export default Home;
