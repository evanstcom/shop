import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Catalog } from "./Pages/Catalog";
import { Cart } from "./Pages/Cart";
import { Adminka } from "./Pages/Adminka";
import { Item } from "./Pages/Item";
import { NotFound } from "./Pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./context";
import "./scss/style.sass";

function App() {
    return (
        <>
            <ContextProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Adminka />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/catalog/:id" element={<Item />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </ContextProvider>
        </>
    );
}

export default App;
