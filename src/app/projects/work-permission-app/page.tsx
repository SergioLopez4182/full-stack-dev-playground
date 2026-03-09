import { redirect } from "next/navigation";

export default function Home() {
  redirect("/projects/work-permission-app/auth/log-in");
}