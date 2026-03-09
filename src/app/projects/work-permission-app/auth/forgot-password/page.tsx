"use client";

import GoBackButton from '@/components/buttons/go-back';
import { Button, Group, TextInput, Title, Text, Anchor, Stack, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconArrowLeft } from "@tabler/icons-react";

export default function ForgotPassword() {
    const form = useForm({
        mode: 'controlled',
        initialValues: {
            email: ''
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <section className="flex flex-col items-start w-1/4 gap-1">
            <GoBackButton href="/auth/log-in" />
            <article className="flex rounded-2xl bg-cyan-800 gap-8 p-12">

                <section className="flex bg-white rounded-2xl p-8">
                    <form
                        onSubmit={form.onSubmit((values) => console.log(values))}
                        className="flex flex-col gap-4"
                    >
                        <Stack gap={0}>
                            <Title order={1} c="cyan.8">
                                ¿Olvidaste tu contraseña?
                            </Title>

                            <Text>
                                Ingresa tu correo electronico registrado y te enviaremos un código para reestablecer tu contraseña.
                            </Text>
                        </Stack>

                        <TextInput
                            label="Correo electronico"
                            withAsterisk
                            placeholder="example@email.com"
                            key={form.key('email')}
                            {...form.getInputProps('email')}
                        />

                        <Group>
                            <Button
                                type="submit"
                                fullWidth
                                color="cyan.8"
                            >
                                Restablecer contraseña
                            </Button>
                        </Group>

                        <Group gap="xs">
                            <Text size="sm" c="dimmed">
                                ¿No tienes cuenta?
                            </Text>
                            <Anchor href="/auth/sign-up" underline="hover" size="sm">
                                Registrate
                            </Anchor>
                        </Group>
                    </form>
                </section>
            </article>
        </section>
    );
}