import type { Metadata } from "next";
import AuthScreen from "@/components/auth/AuthScreen";

export const metadata: Metadata = {
  title: "Create your account — Hirable",
  description: "Two minutes to set up. Your first five job analyses are free.",
};

export default function SignupPage() {
  return <AuthScreen mode="signup" />;
}
