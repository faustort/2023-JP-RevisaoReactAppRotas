import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import Body from './../components/Body';
import ContatoScreen from "../screens/ContatoScreen";
import ExercicioFetch from "../screens/ExercicioFetch";
import NoticiaSingle from "../screens/NoticiaSingle";

export default function RouterRoot() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Body />} path="/" >
                    <Route element={<HomeScreen />} path="/" />
                    <Route element={<ContatoScreen />} path="/contato" />
                    <Route element={<ExercicioFetch />} path="/exerciciofetch" />
                    <Route element={<NoticiaSingle />} path="/vernoticia/:idNoticia" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

