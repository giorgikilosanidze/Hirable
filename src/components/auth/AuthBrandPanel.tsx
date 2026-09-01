import { Check, Minus } from 'lucide-react';
import AiDiamond from '@/components/ui/AiDiamond';
import EyebrowPill from '@/components/ui/EyebrowPill';
import ScoreRing from '@/components/ui/ScoreRing';
import { AUTH_COPY, PANEL_MATCH } from './constants';
import type { AuthMode } from './types';

type Props = {
	mode: AuthMode;
};

/** The product-proof half of the auth split. Drops below 840px. */
export default function AuthBrandPanel({ mode }: Props) {
	const copy = AUTH_COPY[mode];

	return (
		<div className="relative hidden min-w-0 flex-col justify-center overflow-hidden bg-panel-dark p-[clamp(32px,5vw,56px)] min-[840px]:flex">
			<div className="absolute -top-[120px] -right-[120px] size-[380px] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,.32)_0%,transparent_68%)]" />

			<div className="relative mx-auto w-full max-w-[460px]">
				<EyebrowPill
					variant="dark"
					icon={<AiDiamond size={8} />}
					className="mb-[26px] border-white/[.14] bg-white/[.06] py-[5px] pr-3 pl-[9px]"
				>
					{copy.brandBadge}
				</EyebrowPill>

				<h2 className="m-0 mb-[18px] text-[clamp(26px,3vw,34px)] leading-[1.16] font-semibold tracking-[-.028em] text-balance text-white">
					{copy.brandHeadline}
				</h2>
				<p className="m-0 mb-[34px] text-[15.5px] leading-[1.65] text-slate-400">
					{copy.brandBody}
				</p>

				<div className="mb-5 rounded-lg border border-white/[.09] bg-slate-900 p-5">
					<div className="mb-4 flex items-center gap-[14px]">
						<ScoreRing
							score={PANEL_MATCH.score}
							size={70}
							strokeWidth={13}
							trackColor="rgba(255,255,255,.10)"
							progressColor="var(--indigo-400)"
						>
							<span className="font-mono text-[21px] font-semibold tracking-[-.04em] text-white">
								{PANEL_MATCH.score}
							</span>
						</ScoreRing>

						<div className="min-w-0 flex-1">
							<div className="text-[14.5px] leading-[1.35] font-medium text-white">
								{PANEL_MATCH.role}
							</div>
							<div className="mt-0.5 text-[12.5px] text-slate-500">
								{PANEL_MATCH.meta}
							</div>
							<div className="mt-2 inline-flex h-[21px] items-center rounded-sm border border-[rgba(27,163,81,.3)] bg-[rgba(27,163,81,.16)] px-2 text-[11px] font-medium text-[#4ADE80]">
								{PANEL_MATCH.verdict}
							</div>
						</div>
					</div>

					<div className="flex flex-wrap gap-1.5">
						{PANEL_MATCH.skills.map((skill) => (
							<span
								key={skill.label}
								className={`inline-flex h-[23px] items-center gap-1 rounded-full px-[9px] font-mono text-[10.5px] ${
									skill.present
										? 'border border-[rgba(27,163,81,.26)] bg-[rgba(27,163,81,.14)] text-[#4ADE80]'
										: 'border border-dashed border-white/[.16] bg-white/[.05] text-slate-500'
								}`}
							>
								{skill.present ? (
									<Check size={10} strokeWidth={1.75} />
								) : (
									<Minus size={10} strokeWidth={1.75} />
								)}
								{skill.label}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
