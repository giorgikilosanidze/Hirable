import type { Metadata } from "next";
import AuthScreen from "@/components/auth/AuthScreen";

export const metadata: Metadata = {
  title: "Log in — Hirable",
  description:
    "Pick up where you left off — your resume, scores and board are waiting.",
};

export default function LoginPage() {
  return <AuthScreen mode="login" />;
}
