// import React from 'react';
// import { PageLanding } from '@/app/pages/PageLanding';
// const Index = () => {
//   return <PageLanding />;
// };
// export default Index;
import React, { useEffect } from 'react';

import { Center } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Loader } from '@/app/layout';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/app');
  }, [router]);

  return (
    <>
      <Head>
        <title>Le Mabouya</title>
      </Head>
      <Center flex="1">
        <Loader />
      </Center>
    </>
  );
};
export default Index;
