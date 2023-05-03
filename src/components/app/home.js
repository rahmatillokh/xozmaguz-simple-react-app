import "./App.css";
import Navbar from "../navbar/navbar";
import Products from "../products/products";
import { styles } from "../utils/style";
import Home from "../home/home";
import Statistics from "../jsx-components/statistics";
import Footer from "../footer/footer";
import Login from "../login/login";
import Swiper from '../swiper/swiper'

function App() {
  return (
      <div className=" w-full overflow-hidden">
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.container} my-2`}>
            <Navbar />
          </div>
        </div>
        <div className="bg-primary pb-4">
          <Home />
          <Statistics />
        </div>
        <Products />
        <Swiper />  
        <Login />
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.container} my-2`}>
            <Footer />
          </div>
        </div>
      </div>
  );
}

export default App;
