import type { Metadata } from "next";
import AuthScreen from "@/components/auth/AuthScreen";
import { redirectIfAuthenticated } from "@/lib/dal";

export const metadata: Metadata = {
  title: "Log in — Hirable",
  description:
    "Pick up where you left off — your resume, scores and board are waiting.",
};

export default async function LoginPage() {
  await redirectIfAuthenticated();

  return <AuthScreen mode="login" />;
}
