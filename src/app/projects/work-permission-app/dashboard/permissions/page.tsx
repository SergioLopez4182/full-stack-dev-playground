"use client";

import DashboardLayout from "@/projects/work-permission-app/layouts/dashboard.layout";
import CreatePermissionModal from "@/projects/work-permission-app/permissions/permission.modal.create";
import PermissionCard from "@/projects/work-permission-app/permissions/permission.card";
import { Card, SimpleGrid, Text } from "@mantine/core";
import { permissionsMock } from "@/projects/work-permission-app/permissions/permission.repository";

export default function Permissions() {

    const content = (
        <div className="w-full">
            <SimpleGrid
                cols={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
                spacing="md"
                verticalSpacing="md"
            >
                {permissionsMock.map((p, i) => (
                    <PermissionCard key={i} permission={p} />
                ))}
            </SimpleGrid>
        </div>
    );

    const actions = (<div>
        <CreatePermissionModal />
    </div>);

    return (
        <DashboardLayout
            title="Permisos de trabajo"
            subtitle="Última actualización: 2026-02-12 20:03"
            actions={actions}
            content={content}
            footer={<div>footer</div>}
        />

    );
}