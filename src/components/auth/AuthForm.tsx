"use client";

import { useState } from "react";
import { AtSign, Briefcase, Check, Eye, EyeOff } from "lucide-react";
import Button from "@/components/ui/Button";
import { AUTH_COPY, FIELD_LABEL_CLASS, INPUT_CLASS } from "./constants";
import type { AuthMode } from "./types";

type Props = {
  mode: AuthMode;
};

export default function AuthForm({ mode }: Props) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const copy = AUTH_COPY[mode];
  const isSignup = mode === "signup";

  return (
    <div className="mx-auto w-full max-w-[396px] py-12">
      <h1 className="m-0 mb-2 text-[30px] leading-[1.15] font-semibold tracking-[-.028em]">
        {copy.title}
      </h1>
      <p className="m-0 mb-[30px] text-[14.5px] leading-[1.6] text-text-secondary">
        {copy.subtitle}
      </p>

      <div className="mb-[22px] flex flex-col gap-[9px]">
        <Button variant="secondary" className="w-full shadow-xs">
          <AtSign size={16} strokeWidth={1.75} className="text-text-tertiary" />
          Continue with Google
        </Button>
        <Button variant="secondary" className="w-full shadow-xs">
          <Briefcase size={16} strokeWidth={1.75} className="text-text-tertiary" />
          Continue with LinkedIn
        </Button>
      </div>

      <div className="mb-[22px] flex items-center gap-3">
        <span className="h-px flex-1 bg-border-subtle" />
        <span className="font-mono text-[10.5px] font-semibold tracking-[.09em] text-text-tertiary uppercase">
          or
        </span>
        <span className="h-px flex-1 bg-border-subtle" />
      </div>

      <form className="flex flex-col gap-4">
        {isSignup && (
          <div>
            <label htmlFor="name" className={`${FIELD_LABEL_CLASS} mb-1.5`}>
              Full name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Alex Chen"
              className={INPUT_CLASS}
            />
          </div>
        )}

        <div>
          <label htmlFor="email" className={`${FIELD_LABEL_CLASS} mb-1.5`}>
            Work or personal email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={INPUT_CLASS}
          />
        </div>

        <div>
          <div className="mb-1.5 flex items-baseline justify-between gap-3">
            <label htmlFor="password" className={FIELD_LABEL_CLASS}>
              Password
            </label>
            {!isSignup && (
              <a href="#" className="text-[12.5px]">
                Forgot?
              </a>
            )}
          </div>
          <div className="relative">
            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              autoComplete={isSignup ? "new-password" : "current-password"}
              placeholder={copy.passwordPlaceholder}
              className={`${INPUT_CLASS} pr-10`}
            />
            <button
              type="button"
              onClick={() => setPasswordVisible((visible) => !visible)}
              aria-label={passwordVisible ? "Hide password" : "Show password"}
              className="absolute top-[5px] right-[5px] flex size-8 cursor-pointer items-center justify-center rounded-[7px] border-none bg-transparent text-text-tertiary hover:bg-subtle hover:text-text-primary"
            >
              {passwordVisible ? (
                <EyeOff size={15} strokeWidth={1.75} />
              ) : (
                <Eye size={15} strokeWidth={1.75} />
              )}
            </button>
          </div>

          {isSignup && (
            <>
              <div className="mt-2 flex gap-1">
                <span className="h-[3px] flex-1 rounded-[2px] bg-success" />
                <span className="h-[3px] flex-1 rounded-[2px] bg-success" />
                <span className="h-[3px] flex-1 rounded-[2px] bg-success" />
                <span className="h-[3px] flex-1 rounded-[2px] bg-muted" />
              </div>
              <div className="mt-1.5 text-[12px] text-text-tertiary">
                Strong — 8+ characters with a number.
              </div>
            </>
          )}
        </div>

        {!isSignup && (
          <label className="flex cursor-pointer items-center gap-[9px] text-[13.5px] text-text-secondary">
            <input type="checkbox" defaultChecked className="peer sr-only" />
            <span className="inline-flex size-[17px] flex-none items-center justify-center rounded-[5px] border border-border-default bg-surface text-transparent peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white">
              <Check size={12} strokeWidth={2.25} />
            </span>
            Keep me signed in for 30 days
          </label>
        )}

        <Button type="submit" className="h-[44px] w-full text-[15px] shadow-sm">
          {copy.cta}
        </Button>

        {isSignup && (
          <p className="m-0 text-center text-[12.5px] leading-[1.55] text-text-tertiary">
            By continuing you agree to our <a href="#">Terms</a> and{" "}
            <a href="#">Privacy Policy</a>. We never share your resume.
          </p>
        )}
      </form>
    </div>
  );
}
