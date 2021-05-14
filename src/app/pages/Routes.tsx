import React from 'react';

import { Switch, useRouteMatch } from 'react-router-dom';

import { PageAbout } from '@/app/pages/PageAbout';
import { PageKudos } from '@/app/pages/PageKudos';
import { PageLanding } from '@/app/pages/PageLanding';
import { Route } from '@/app/router';
import { Error404 } from '@/errors';

const Routes = () => {
  const { url } = useRouteMatch();
  console.log({ url });
  return (
    <Switch>
      <Route exact path={url} render={() => <PageLanding />} />
      <Route exact path="/kudos" render={() => <PageKudos />} />
      <Route exact path="/about" render={() => <PageAbout />} />
      <Route path="*" render={() => <Error404 />} />
    </Switch>
  );
};

export default Routes;
