import { redirect } from "next/navigation";

export default function Home() {
  redirect("/projects/rental-admin-app/auth/log-in");
}