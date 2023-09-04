import { RouterProvider, RouterProviderProps } from 'react-router-dom';

export * from './app';


export const AppInterface = (props: { router: RouterProviderProps['router'] }) => {
    return (
        <RouterProvider router={props.router} />
    )
}
