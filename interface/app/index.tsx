import { RouteObject } from "react-router-dom"
import Counter from "../components/Counter"


const Index = () => {
    return (
        <div>
            <Counter />
        </div>
    )
}

const Error = () => {
    return (
        <div>
            <h1>404</h1>
        </div>
    )
}


export const routes = [
    {
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Index />,
            }
        ]
    }
] satisfies RouteObject[];
