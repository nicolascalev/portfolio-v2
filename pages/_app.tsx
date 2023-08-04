import 'styles/globals.css';
import 'animate.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { AppShell, MantineProvider, Container, Group, Text, Anchor } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import { AppRouterTransition } from 'components/ui/AppRouterTransition';
import AppHeaderLinks from 'components/AppHeaderLinks';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const title =
    'Nicolas Guillen @nicolascalev | Software Developer | Web Developer (Next js, Node, Javascript, React, SQL...)';
  const description =
    'I have been coding since 2017, I have worked for 3 different companies and launched my own projects. I am available for new opportunities.';
  const url = 'https://nicolascalev.com';
  const image = `${url}/thumbnail.png`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="Nicolas Guillen" />
        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@nicolascalev" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
        theme={{
          colorScheme: 'dark',
          primaryColor: 'lime',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif !important',
        }}
      >
        <AppRouterTransition />
        <Notifications position="bottom-center" />
        <ModalsProvider>
          <AppShell
            footer={
              <Container size="600px" py="4rem">
                <Group position="apart" align="start">
                  <div>
                    <Text fw={500}>nicolascalev</Text>
                    <Text>
                      <Anchor c="dimmed" href="mailto:nicolascalevg@gmail.com">
                        nicolascalevg@gmail.com
                      </Anchor>
                    </Text>
                    <Text>
                      <Anchor c="dimmed" href="tel:+14702359990">
                        +1 470 235-9990
                      </Anchor>
                    </Text>
                  </div>
                  <Group>
                    <AppHeaderLinks showHomeLink />
                  </Group>
                </Group>
              </Container>
            }
            styles={{
              main: {
                padding: 0,
              },
            }}
          >
            <Container size="600px" className="lpt">
              <Component {...pageProps} />
            </Container>
          </AppShell>
        </ModalsProvider>
      </MantineProvider>
    </>
  );
}
