import Header from "./Header";
import Button from "./Button";
import Footer from "./Footer";
import "./style.css";

function App() {
    return (
        <div className="container">
            <Header />

            <p>Welcome to my React application.</p>

            <Button />

            <Footer />
        </div>
    );
}

export default App;