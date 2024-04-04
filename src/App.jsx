import { Route, Routes } from "react-router-dom";
import Singin from "./components/singin/Singin";
import Logout from "./components/logout/Logout";
import Perso from "./components/perso/Perso";
import Detail from "./components/detalle/Detail";
import Home from "./components/home/Home";
import Registre from "./components/registre/Registre";
import Error from "./components/error/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Singin></Singin>} />
        <Route path="/in" element={<Perso></Perso>} />
        <Route path="/out" element={<Logout />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/landing" element={<Home></Home>} />
        <Route path="/registre" element={<Registre></Registre>} />
        <Route path="**" element={<Error/>} />
      </Routes>
    </>
  );
};

export default App;
