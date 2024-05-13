import Movies from "../pages";
import Add from "../pages/AddPage";
import Detail from "../pages/detail";
import Sliders from "../pages/sliders";

export const routes = [
    {
        path: "/",
        element: <Movies />,
        children: [
            {
                index: true,
                element: <Sliders />
            },
            {
                path: "add-movie",
                element: <Add />
            },
            {
                path:"movies/:id",
                element:<Detail/>
            }

        ]
    }
]