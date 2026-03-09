import DashboardNavbar from "@/features/projects/work-permission-app/layouts/dashboard.navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex flex-col h-screen w-full overflow-hidden">
            <DashboardNavbar />

            <main className="flex flex-1 w-full overflow-hidden">
                {children}
            </main>
        </section>
    );
}