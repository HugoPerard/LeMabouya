import React, { Suspense } from 'react';

import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Switch } from 'react-router-dom';

import { PageLogin } from '@/app/auth/PageLogin';
import { PageLogout } from '@/app/auth/PageLogout';
import { Layout, Loader } from '@/app/layout';
import { RouteAdmin, RoutePublic, RoutePublicOnly } from '@/app/router';
import { Error404, ErrorBoundary } from '@/errors';

const AdminRoutes = React.lazy(() => import('@/app/admin/AdminRoutes'));
const AccountRoutes = React.lazy(() => import('@/app/account/AccountRoutes'));
const Routes = React.lazy(() => import('@/app/pages/Routes'));

export const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter basename="/">
        <Layout>
          <Suspense fallback={<Loader />}>
            <Switch>
              <RoutePublicOnly
                exact
                path="/login"
                render={() => <PageLogin />}
              />
              <RoutePublic exact path="/logout" render={() => <PageLogout />} />

              <RoutePublic path="/account" render={() => <AccountRoutes />} />

              <RoutePublic path="/" render={() => <Routes />} />

              <RouteAdmin path="/admin" render={() => <AdminRoutes />} />

              <RoutePublic path="*" render={() => <Error404 />} />
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools />
    </ErrorBoundary>
  );
};
