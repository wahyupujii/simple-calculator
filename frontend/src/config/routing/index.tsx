import {
    Routes,
    Route
} from "react-router-dom"
import { ROUTES } from "./ROUTES"
import { Home, Login, Register, ProtectedRoute, NotFound } from "../../pages"

const Routing = () => {
    return (
        <Routes>            
            <Route element={<ProtectedRoute />}>
                <Route path={ROUTES.home} element={<Home />} />
            </Route>

            <Route path={ROUTES.login} element={<Login />} />
            <Route path={ROUTES.register} element={<Register />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Routing