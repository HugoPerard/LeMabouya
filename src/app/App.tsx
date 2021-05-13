import React, { Suspense } from 'react';

import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

import { Layout, Loader } from '@/app/layout';
import { Error404, ErrorBoundary } from '@/errors';

import { Route } from './router';

const Routes = React.lazy(() => import('@/app/pages/Routes'));

export const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/app" render={() => <Redirect to="/" />} />
              <Route path="/" render={() => <Routes />} />
              <Route path="*" render={() => <Error404 />} />
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
};
