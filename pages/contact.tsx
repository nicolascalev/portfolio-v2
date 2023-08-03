import { Title, Text, Group, SimpleGrid, TextInput, Textarea, Button } from '@mantine/core';
import AppBackButton from 'components/AppBackButton';
import AppBookCallButton from 'components/AppBookCallButton';
import { contactSchema } from 'lib/joiSchemas';
import { useForm, joiResolver } from '@mantine/form';
import React, { useState } from 'react';
import { showNotification } from '@mantine/notifications';
import axios from 'axios';
import AppLinks from 'components/AppLinks';

function ContactPage() {
  const form = useForm({
    validate: joiResolver(contactSchema),
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validateInputOnChange: true,
  });

  const [loading, setLoading] = useState(false);
  async function onContactSubmit(e: any) {
    e.preventDefault();
    if (form.validate().hasErrors) return;
    try {
      setLoading(true);
      await axios.post('/api/contact', form.values);
      showNotification({
        color: 'teal',
        title: 'Thank you for reaching out',
        message: 'I will be in touch shortly',
      });
      form.reset();
    } catch (err) {
      const error: any = err;
      // eslint-disable-next-line no-console
      console.log(error?.response?.data || err);
      showNotification({
        color: 'red',
        title: 'There was an error',
        message: 'Please try again later',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <AppBackButton />
      <Title my="3rem" fw={500}>
        What are we building next?
      </Title>
      <Text>
        Wether you need automation, an api, frontend development, or you just have an idea. I would
        like to get to know you and collaborate.
      </Text>
      <Group my="md">
        <AppBookCallButton />
        <Text>or...</Text>
      </Group>
      <form onSubmit={onContactSubmit}>
        <SimpleGrid cols={1} breakpoints={[{ minWidth: 'sm', cols: 2 }]}>
          <TextInput required name="name" placeholder="Name" {...form.getInputProps('name')} />
          <TextInput required name="email" placeholder="Email" {...form.getInputProps('email')} />
        </SimpleGrid>
        <Textarea
          mt="md"
          name="message"
          placeholder="Message"
          autosize
          minRows={5}
          {...form.getInputProps('message')}
        />
        <Button type="submit" fullWidth mt="md" loading={loading}>
          Send
        </Button>
      </form>
      <Text mt="3rem" mb="sm" fw={500} size="lg">
        Join me
      </Text>
      <AppLinks />
    </>
  );
}

export default ContactPage;
