import { RouterProvider, RouterProviderProps } from 'react-router-dom';

export const AppInterface = (props: { router: RouterProviderProps['router'] }) => {
    return (
        <RouterProvider router={props.router} />
    )
}