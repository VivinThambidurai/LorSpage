import Home  from "./Home";
import Navigation from "./Navigation.js";


 
 function App() {
    let component
    switch (window.location.pathname) {
        case "/":
            component = <Home/>
            break;
        case "/Navigation":
            component = <Navigation/>
            break;
  
    
        default:
            break;
    }
    return (<>
    {component}
        </>)
 }

 export default App;