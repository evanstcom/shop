import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";


const rootElement = document.getElementById("root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <BrowserRouter basename="/shop">
            <App />
        </BrowserRouter>
    );
}
