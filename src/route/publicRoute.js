import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './route.config';


export default function () {

    return (
        <>
            <Routes>
                {/* <Suspense fallback={<h1>Loading</h1>}> */}
                    {
                        (routes || [])
                            .filter(({ isAdmin }) => !isAdmin)
                            .map(({ key, exact, ...route }, i) => { 
                                console.log(key)
                                return (
                                <Route
                                    key={key}
                                    path={key}
                                    exact={exact}
                                    element={
                                        <route.component/>
                                    }
                                    
                                    // render={
                                    //     props => <route.component { ...props} />
                                    // }
                                />
                            )})
                    }
                {/* </Suspense> */}
            </Routes>
        </>
    )

}