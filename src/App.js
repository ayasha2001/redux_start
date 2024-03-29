import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuthneticated = useSelector((state) => state.auth.isAuthneticated);

  return (
    <>
      <Header />
      {isAuthneticated && <UserProfile />}
      {!isAuthneticated && <Auth />}
      <Counter />
    </>
  );
}

export default App;
