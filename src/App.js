
import './App.css';
import { useData } from './Components/context/Mycontext';
import Admin from './Pages/Admin';

import Register from './Pages/Register';
import TeamPage from './Pages/TeamPage';

function App() {
const {radio,state,open}=useData()
  const renderComponent = () => {
    switch (radio) {
      case "admin":
        return <Admin />;
      case "member":
        return <TeamPage/>;
      default:
        return null;
    }
  };
  return (
    <div className="App">
      {
         state&&<Register/> 
      }
   

     {
         open&& renderComponent()
     }
    </div>
  );
}

export default App;
