import { Button, Title, Text, Divider, Box, SimpleGrid, Group, Anchor } from '@mantine/core';
import AppAvailability from 'components/AppAvailability';
import AppBackButton from 'components/AppBackButton';
import React, { useState } from 'react';

const courses = [
  {
    label: 'Software architecture course',
    issuedBy: 'Platzi',
    date: 'Mar 2021',
  },
  {
    label: 'Introduction to Solidity course',
    issuedBy: 'Platzi',
    date: 'Feb 2022',
  },
  {
    label: 'React.js course',
    issuedBy: 'Platzi',
    date: 'Feb 2021',
  },
  {
    label: 'Vue 3 course',
    issuedBy: 'Platzi',
    date: 'Feb 2021',
  },
  {
    label: 'SQL and MySQL course',
    issuedBy: 'Platzi',
    date: 'Oct 2020',
  },
  {
    label: 'Node js course',
    issuedBy: 'Platzi',
    date: 'Oct 2020',
  },
  {
    label: 'Full-stack  JavaScript development with Sails js course',
    issuedBy: 'Platzi',
    date: 'Jul 2020',
  },
];

function AboutPage() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <AppBackButton />
      <Title my="3rem" fw={500}>
        Be directionally correct rather than absolutely correct
      </Title>
      <Text size="xl" fw={500}>
        About me
      </Text>
      <Text mt="sm" lineClamp={showAbout ? undefined : 6}>
        My developer journey started in a Technical Highschool in Costa Rica, where I took 3 years
        of computer science starting on 2017. I learned about the basics of programming. We started
        with LAMP stack. On the second year we learned Node js and the basics of Git and GitHub. On
        my senior year I coded my graduation project with .NET Core (C#) which was a full-stack app
        following the MVC pattern. <br />
        <br />
        In my first job, I worked with a small team that created in-house automation tools for the
        entire organization that lived on the web under a VPN. I developed frontend, APIs and more.
        <br />
        <br />I used those skills I learned, in my next job, where I would do my day to day job and
        also automate some of the repetitive tasks I did daily. That led me to contribute to our
        team in a way that others could use the tools I developed. <br />
        <br />
        On 2022 I got authorized to migrate and work in the US, so I quit my last job at Kyndryl,
        and I have been looking for new opportunities ever since. <br />
        <br />
        To stay updated, and pursue my dreams. I haven&apos;t stopped coding, learning, designing
        and launching new products with the hope of growing my portfolio and landing my first tech
        job in the US. <br />
        <br />I want my next job to take me closer to my professional goals. For me that looks like
        learning more about entrepreneurship, growing a user base, building user experiences that
        convert, and making decisions that build an amazing product. <br />
        <br />I have my favorite set of tools but I have proven to learn fast and adapt and I like
        that challenge. <br />
        <br /> Even if I was rich and had all the options in the world, I am sure I would still be
        coding and building good stuff.
      </Text>
      <Anchor onClick={() => setShowAbout((sa) => !sa)} mb="sm" size="sm">
        {showAbout ? 'Less' : 'More'}
      </Anchor>
      <Group position="apart" align="center">
        <AppAvailability />
        <Button
          variant="default"
          component="a"
          href="/resume.pdf"
          target="_blank"
        >
          Resume
        </Button>
      </Group>
      <Text mt="3rem" size="xl" fw={500}>
        Experience
      </Text>
      <Text mb="sm" c="dimmed">
        Even though my experience is important, I consider my projects to be equally meaningful to
        my career. Please check my work page.
      </Text>
      <Divider />
      <Box py="lg">
        <SimpleGrid cols={1} breakpoints={[{ minWidth: 'sm', cols: 2 }]}>
          <div>
            <Text>Jan 2023 - Present</Text>
            <Text fw={500} size="lg">
              Applied to YC
            </Text>
            <Text>Entrepreneur</Text>
          </div>
          <div>
            <Text c="dimmed">
              I launched 3 SaaS in the past year. <br /> I automated, integrated, and coded a lot of
              features by myself. I chose to keep coding while finding a job is complicated. The one
              common technology my projects have in common is Next js.
            </Text>
          </div>
        </SimpleGrid>
      </Box>
      <Divider />
      <Box py="lg">
        <SimpleGrid cols={1} breakpoints={[{ minWidth: 'sm', cols: 2 }]}>
          <div>
            <Text>Mar 2022 - Dec 2022</Text>
            <Text fw={500} size="lg">
              Kyndryl
            </Text>
            <Text>Frontend developer</Text>
          </div>
          <div>
            <Text c="dimmed">
              Worked on a cloud related project.
              <br />
              Consume apis and manage data with state manager.
              <br />
              Fix css and javascript bugs.
              <br />
              Worked on different components for new and existing features.
            </Text>
          </div>
        </SimpleGrid>
      </Box>
      <Divider />
      <Box py="lg">
        <SimpleGrid cols={1} breakpoints={[{ minWidth: 'sm', cols: 2 }]}>
          <div>
            <Text>Mar 2021 - Mar 2022</Text>
            <Text fw={500} size="lg">
              Accenture
            </Text>
            <Text>Web developer associate</Text>
          </div>
          <div>
            <Text c="dimmed">
              Creation of an automation toolset to optimize production time.
              <br />
              AEM - Web development and maintenance of web applications.
              <br />
              Implemented new practices to improve performance and efficiency
            </Text>
          </div>
        </SimpleGrid>
      </Box>
      <Divider />
      <Box py="lg">
        <SimpleGrid cols={1} breakpoints={[{ minWidth: 'sm', cols: 2 }]}>
          <div>
            <Text>Oct 2019 - Apr 2021</Text>
            <Text fw={500} size="lg">
              Telefónica
            </Text>
            <Text>Systems assistant</Text>
          </div>
          <div>
            <Text c="dimmed">
              Full-stack web development with Sails js.
              <br />
              Rest APIs development with Node.
              <br />
              Open source integration of a Gitea instance.
              <br />I used Vue js in multiple applications.
            </Text>
          </div>
        </SimpleGrid>
      </Box>

      <Text mt="3rem" size="xl" fw={500}>
        Courses
      </Text>
      <Text mb="sm" c="dimmed">
        All my courses are posted on LinkedIn and can be verified there.
      </Text>
      <Divider />
      {courses.map((course, i) => (
        <div key={i}>
          <Group py="lg" position="apart" align="top" noWrap>
            <div>
              <Text fw={500}>{course.label}</Text>
              <Text c="dimmed">{course.issuedBy}</Text>
            </div>
            <Text className="text__nowrap">{course.date}</Text>
          </Group>
          <Divider />
        </div>
      ))}
    </>
  );
}

export default AboutPage;
