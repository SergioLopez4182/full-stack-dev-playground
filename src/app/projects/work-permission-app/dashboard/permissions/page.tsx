"use client";

import DashboardLayout from "@/features/projects/work-permission-app/layouts/dashboard.layout";
import CreatePermissionModal from "@/features/projects/work-permission-app/permissions/create-permission-modal";
import PermissionCard from "@/features/projects/work-permission-app/permissions/permission-card";
import { Card, SimpleGrid, Text } from "@mantine/core";

export default function Permissions() {

    const content = (
        <div className="w-full">
            <SimpleGrid
                cols={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
                spacing="md"
                verticalSpacing="md"
            >
                {Array.from({ length: 100 }).map((_, index) => (
                    <PermissionCard key={index} />
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