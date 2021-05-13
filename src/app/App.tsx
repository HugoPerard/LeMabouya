import React, { Suspense } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import { Layout, Loader } from '@/app/layout';
import { Error404, ErrorBoundary } from '@/errors';

import { Route } from './router';

const Routes = React.lazy(() => import('@/app/pages/Routes'));

export const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter basename="/">
        <Layout>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/" render={() => <Routes />} />
              <Route path="*" render={() => <Error404 />} />
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
};
