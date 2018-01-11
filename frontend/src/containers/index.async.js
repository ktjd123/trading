import asyncRoute from 'lib/asyncRoute'

export const AppContainer = asyncRoute(() => import('./AppContainer'))