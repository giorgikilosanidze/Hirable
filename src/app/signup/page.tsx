import type { Metadata } from "next";
import AuthScreen from "@/components/auth/AuthScreen";
import { redirectIfAuthenticated } from "@/lib/dal";

export const metadata: Metadata = {
  title: "Create your account — Hirable",
  description: "Two minutes to set up. Your first five job analyses are free.",
};

export default async function SignupPage() {
  await redirectIfAuthenticated();

  return <AuthScreen mode="signup" />;
}
