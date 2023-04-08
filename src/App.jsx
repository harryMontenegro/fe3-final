
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import {routes} from "./routes";
import NotFound from "./Routes/NotFound";
import {useContextGlobal} from "./global.context";


function App() {

    const {themeState} = useContextGlobal();

  return (
      <>
          <div className={themeState.theme ? 'dark' : 'App'} style={
              {
                  backgroundColor: themeState.bgColor,
                  color: themeState.color
              }
          }>
              <Navbar/>
          <Routes>
              <Route path={routes.home} element={<Home/>}/>
              <Route path={routes.contact} element={<Contact/>}/>
              <Route path={routes.detail + ':id'} element={<Detail/>}/>
              <Route path={routes.favs} element={<Favs/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Routes>
          <Footer/>
          </div>
      </>

  );
}

export default App;
