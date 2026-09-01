import Link from 'next/link';
import { Download, Lock } from 'lucide-react';
import Logo from '@/components/brand/Logo';
import ThemeToggle from '@/components/theme/ThemeToggle';
import AuthBrandPanel from './AuthBrandPanel';
import AuthForm from './AuthForm';
import { AUTH_COPY } from './constants';
import type { AuthMode } from './types';

type Props = {
	mode: AuthMode;
};

export default function AuthScreen({ mode }: Props) {
	const copy = AUTH_COPY[mode];
	// Mirrors the socialProviders guard in lib/auth.ts, so the button is never
	// offered when the provider isn't registered to answer it.
	const googleEnabled = Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);

	return (
		<div className="grid min-h-screen flex-1 grid-cols-1 min-[840px]:grid-cols-2">
			<div className="flex min-w-0 flex-col bg-surface p-[clamp(24px,4vw,40px)]">
				<div className="mb-auto flex items-center justify-between gap-4">
					<Logo size={28} wordmarkSize={16} gap={9} />
					<div className="flex flex-wrap items-center gap-[14px]">
						<span className="text-[13.5px] text-text-tertiary">
							{copy.switchPrompt}{' '}
							<Link href={copy.switchHref} className="ml-1 font-medium">
								{copy.switchLabel}
							</Link>
						</span>
					</div>
				</div>

				<AuthForm mode={mode} googleEnabled={googleEnabled} />
			</div>

			<AuthBrandPanel mode={mode} />
		</div>
	);
}
