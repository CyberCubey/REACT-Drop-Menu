import "./styles/App.scss";
import { DropdownMenu } from "./components/Dropdown";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
            <DropdownMenu />
            <p>Hej verden</p>
    </>
  );

}


export default App;
