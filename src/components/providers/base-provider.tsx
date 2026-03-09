"use client";

import { ReactNode } from "react";
import { MantineProvider, MantineColorScheme } from "@mantine/core";
import { baseTheme } from "../themes/base-theme";

export default function BaseProvider({
    children,
    defaultColorScheme,
}: {
    children: ReactNode,
    defaultColorScheme: MantineColorScheme;
}) {
    return (
        <MantineProvider
            theme={baseTheme}
            defaultColorScheme={defaultColorScheme}
            withCssVariables
        >
            {children}
        </MantineProvider>
    );
}
