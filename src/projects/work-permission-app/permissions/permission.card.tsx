"use client";

import { Badge, Card, Grid, Group, Modal, Select, Stack, Text, Textarea, TextInput } from "@mantine/core";
import PermissionActionsMenu from "./permission.menu.actions";
import { useDisclosure } from "@mantine/hooks";
import { DatePickerInput, getTimeRange, TimeGrid } from "@mantine/dates";
import { Permission } from "./permission.model";
import PermissionStatusBadge from "./permission.card.status-badge";
import { permissionTypes } from "./permission.types.repository";

interface Props {
    permission: Permission;
}

export default function PermissionCard({ permission }: Props) {
    const [opened, { open, close }] = useDisclosure(false);

    const type = permissionTypes.find(s => s.id === permission.typeId);

    if (!type) return null;

    return (<>
        <Modal opened={opened} onClose={close} title="Crear permiso de trabajo" centered>
            <Stack
                align="stretch"
                justify="center"
                gap="md"
            >
                <TextInput
                    label="Nombre del solicitante"
                    description="Input description"
                    placeholder="Input placeholder"
                />
                <Select
                    label="Proyecto"
                    placeholder="Pick value"
                    data={['React', 'Angular', 'Vue', 'Svelte']}
                />
                <Select
                    label="Local"
                    placeholder="Pick value"
                    data={['React', 'Angular', 'Vue', 'Svelte']}
                />
                <Select
                    label="Tipo de permiso"
                    placeholder="Pick value"
                    data={['React', 'Angular', 'Vue', 'Svelte']}
                />
                <Textarea
                    label="Descripción del trabajo"
                    description="Input description"
                    placeholder="Input placeholder"
                />
                <DatePickerInput
                    type="multiple"
                    label="Pick dates"
                    placeholder="Pick dates"
                />
                <TimeGrid
                    data={getTimeRange({ startTime: '10:00', endTime: '21:00', interval: '01:00' })}
                    simpleGridProps={{
                        type: 'container',
                        cols: { base: 1, '180px': 2, '320px': 3 },
                        spacing: 'xs',
                    }}
                    format="12h"
                    withSeconds={false}
                    size="md"
                    radius="md"
                />
            </Stack>
        </Modal>

        <Card
            shadow="lg"
            className="border-2 border-transparent hover:border-cyan-800"
        >
            <Card.Section withBorder px="md" py="xs" className="border-b-2 border-cyan-800">
                <Group justify="space-between" preventGrowOverflow={false} wrap="nowrap">
                    <Text fw={700} size="lg" c='cyan'>
                        Folio #{permission.id}
                    </Text>
                    <Group gap={4}>
                        <PermissionStatusBadge statusId={permission.statusId}/>
                        <PermissionActionsMenu />
                    </Group>
                </Group>
            </Card.Section>

            <Card.Section onClick={open} px="md" py="xs" className="hover:bg-cyan-800/10 h-full cursor-pointer">
                <Grid grow>
                    <Grid.Col span={6}>
                        <Stack gap={0}>
                            <Text fw={700} c="dimmed" size="sm">
                                Centro comercial
                            </Text>
                            <Text c="dimmed" size="sm">
                                {permission.shoppingCenter}
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Stack gap={0}>
                            <Text fw={700} c="dimmed" size="sm">
                                Espacio comercial
                            </Text>
                            <Text c="dimmed" size="sm">
                                {permission.retailSpace}
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Stack gap={0}>
                            <Text fw={700} c="dimmed" size="sm">
                                Tipo
                            </Text>
                            <Text c="dimmed" size="sm">
                                {type.label}
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Stack gap={0}>
                            <Text fw={700} c="dimmed" size="sm">
                                Periodo
                            </Text>
                            <Text c="dimmed" size="sm">
                                {permission.startDate.format("YYYY/MM/DD")} - {permission.endDate.format("YYYY/MM/DD")}
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Stack gap={0}>
                            <Text fw={700} c="dimmed" size="sm">
                                Descripción
                            </Text>
                            <Text c="dimmed" size="sm">
                                {permission.description}
                            </Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Card.Section>
        </Card>
    </>);
}