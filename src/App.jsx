import { useState } from "react";
import CustomTabs from "./components/CustomTab";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [balance, setBalance] = useState(0);

  return (
    <div>
      <ToastContainer position="top-center" />
      <Header balance={balance} />
      <Hero balance={balance} setBalance={setBalance} />
      <CustomTabs balance={balance} setBalance={setBalance} />
      <Newsletter />
      <Footer />
    </div>
  );
}
