import React, { useCallback, useEffect, useState } from "react";
import InputCus from "@/components/Input";
import AboutPage from "../about";

function HomePage() {
  const [car, setCar] = useState({ name: "BMW", price: 5000 });
  const [newPrice, setNewPrice] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // console.log("compare --->" , car)
    // console.log("run useEffect")
  }, [car.price]);

  const handleUpdateCar = useCallback(() => {
    // let newCar = {...car};
    // newCar.price = newPrice;
    setCar({
      ...car,
      price: newPrice,
    });
  }, []);

  // const a = {name: "BMW", price: 5000};
  // const b = {name: "BMW", price: 5000};
  // console.log(" compare a == b --->", a === b)

  return (
    <div>
      <h1>This is homepage</h1>
      <h2>Car name: {car.name}</h2>
      <h2>Car price: {car.price}</h2>
      {toggle && <AboutPage />}
      <InputCus type="number" placeholder="Type something..." onChange={(e: any) => setNewPrice(e.target.value)} />

      <button onClick={handleUpdateCar}>Update price</button>
      <button onClick={() => setToggle((pre) => !pre)}>Toogle component</button>
    </div>
  );
}

export default HomePage;
