import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Page/Home";
import Login from "../Components/Login";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate replace to="/login" />} />
            </Routes>
        </BrowserRouter>
    )

}