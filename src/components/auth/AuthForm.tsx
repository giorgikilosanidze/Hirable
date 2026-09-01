'use client';

import { useActionState, useState } from 'react';
import { AtSign, Briefcase, Check, Eye, EyeOff } from 'lucide-react';
import { login, signInWithGoogle, signup } from '@/app/actions/auth';
import Button from '@/components/ui/Button';
import FieldError from './FieldError';
import { AUTH_COPY, FIELD_LABEL_CLASS, INPUT_CLASS } from './constants';
import type { AuthMode } from './types';
import { passwordStrength } from './utils';

type Props = {
	mode: AuthMode;
	/** False until GOOGLE_CLIENT_ID/SECRET are set — see AuthScreen. */
	googleEnabled: boolean;
};

export default function AuthForm({ mode, googleEnabled }: Props) {
	const isSignup = mode === 'signup';
	const copy = AUTH_COPY[mode];

	const [state, formAction, pending] = useActionState(isSignup ? signup : login, undefined);
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const strength = passwordStrength(password);

	return (
		<div className="mx-auto w-full max-w-[396px] py-12">
			<h1
				className={`m-0 text-[30px] leading-[1.15] font-semibold tracking-[-.028em] ${
					copy.subtitle ? 'mb-2' : 'mb-[30px]'
				}`}
			>
				{copy.title}
			</h1>
			{copy.subtitle && (
				<p className="m-0 mb-[30px] text-[14.5px] leading-[1.6] text-text-secondary">
					{copy.subtitle}
				</p>
			)}

			<div className="mb-[22px] flex flex-col gap-[9px]">
				{/* Its own form — the credentials form below is a sibling, not a parent. */}
				<form action={signInWithGoogle}>
					<Button
						type="submit"
						variant="secondary"
						className="w-full shadow-xs"
						disabled={!googleEnabled}
						title={googleEnabled ? undefined : 'Coming soon'}
					>
						<AtSign size={16} strokeWidth={1.75} className="text-text-tertiary" />
						Continue with Google
					</Button>
				</form>
				{/* Inert until the LinkedIn developer app is approved. */}
				<Button
					variant="secondary"
					className="w-full shadow-xs"
					disabled
					title="Coming soon"
				>
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

			<form action={formAction} className="flex flex-col gap-4">
				{isSignup && (
					<div>
						<label htmlFor="name" className={`${FIELD_LABEL_CLASS} mb-1.5`}>
							Full name
						</label>
						<input
							id="name"
							name="name"
							type="text"
							autoComplete="name"
							placeholder="Alex Chen"
							value={name}
							onChange={(e) => setName(e.target.value)}
							aria-invalid={Boolean(state?.errors?.name)}
							className={INPUT_CLASS}
						/>
						<FieldError messages={state?.errors?.name} />
					</div>
				)}

				<div>
					<label htmlFor="email" className={`${FIELD_LABEL_CLASS} mb-1.5`}>
						Work or personal email
					</label>
					<input
						id="email"
						name="email"
						type="email"
						autoComplete="email"
						placeholder="you@example.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						aria-invalid={Boolean(state?.errors?.email)}
						className={INPUT_CLASS}
					/>
					<FieldError messages={state?.errors?.email} />
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
							name="password"
							type={passwordVisible ? 'text' : 'password'}
							autoComplete={isSignup ? 'new-password' : 'current-password'}
							placeholder={copy.passwordPlaceholder}
							aria-invalid={Boolean(state?.errors?.password)}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className={`${INPUT_CLASS} pr-10`}
						/>
						<button
							type="button"
							onClick={() => setPasswordVisible((visible) => !visible)}
							aria-label={passwordVisible ? 'Hide password' : 'Show password'}
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
								{[0, 1, 2, 3].map((bar) => (
									<span
										key={bar}
										className={`h-[3px] flex-1 rounded-[2px] transition-colors duration-140 ease-standard ${
											bar < strength.filled ? strength.bar : 'bg-muted'
										}`}
									/>
								))}
							</div>
							<div className="mt-1.5 text-[12px] text-text-tertiary">
								{strength.label}
							</div>
						</>
					)}

					<FieldError messages={state?.errors?.password} />
				</div>

				{state?.message && (
					<p
						role="alert"
						className="m-0 rounded-md border border-danger-subtle bg-danger-subtle px-3 py-2.5 text-[13px] text-danger-text"
					>
						{state.message}
					</p>
				)}

				{!isSignup && (
					<label className="flex cursor-pointer items-center gap-[9px] text-[13.5px] text-text-secondary">
						<input
							type="checkbox"
							name="rememberMe"
							defaultChecked
							className="peer sr-only"
						/>
						<span className="inline-flex size-[17px] flex-none items-center justify-center rounded-[5px] border border-border-default bg-surface text-transparent peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white">
							<Check size={12} strokeWidth={2.25} />
						</span>
						Keep me signed in for 30 days
					</label>
				)}

				<Button
					type="submit"
					disabled={pending}
					className="h-[44px] w-full text-[15px] shadow-sm"
				>
					{pending ? `${copy.cta}…` : copy.cta}
				</Button>
			</form>
		</div>
	);
}
