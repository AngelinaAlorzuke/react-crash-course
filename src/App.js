import Header from "./components/Header";
import Button from "./components/Button"
// import {Button1,Button2,Button3} from "./components/Button";
import { Image } from "./components/image";
import NavBar from "./components/NavBar";

function App(){
    return (
    <div>
        <NavBar/>
        <Header/>
        <Button label="Add to Cart"/>
        <Button label="Register"/>
        <Button label="Login"/>
        <Button label="Read more...ar"/>
        
        <Image/>
        

    </div>
    )

}

export default App;