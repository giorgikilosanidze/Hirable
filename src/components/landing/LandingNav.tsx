import { logout } from '@/app/actions/auth';
import Logo from '@/components/brand/Logo';
import ThemeToggle from '@/components/theme/ThemeToggle';
import Button from '@/components/ui/Button';
import ButtonLink from '@/components/ui/ButtonLink';
import { getSession } from '@/lib/dal';
import { CONTENT_WIDTH, NAV_LINKS } from './constants';

export default async function LandingNav() {
	const session = await getSession();

	return (
		<header className="sticky top-0 z-40 border-b border-border-subtle bg-nav backdrop-blur-[12px]">
			<nav className={`${CONTENT_WIDTH} flex h-16 items-center gap-[clamp(16px,3vw,40px)]`}>
				<Logo />

				{/* Below 900px the links go away entirely — only the logo,
            the theme toggle and "Get started" survive. */}
				<div className="flex min-w-0 flex-1 items-center gap-1 overflow-hidden">
					{NAV_LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="hidden rounded-[7px] px-[11px] py-[7px] text-[14px] font-medium whitespace-nowrap text-text-secondary no-underline transition-colors duration-140 ease-standard hover:bg-muted hover:text-text-primary hover:no-underline md:inline-flex"
						>
							{link.label}
						</a>
					))}
				</div>

				<div className="flex flex-none items-center gap-2">
					<ButtonLink href={session ? '/dashboard' : '/signup'} size="sm">
						{session ? 'Go to dashboard' : 'Get started'}
					</ButtonLink>
					{!session && (
						<ButtonLink
							href="/login"
							variant="ghost"
							size="sm"
							className="px-[13px] max-md:hidden"
						>
							Log in
						</ButtonLink>
					)}
					{session && (
						<form action={logout} className="max-md:hidden">
							<Button type="submit" variant="ghost" size="sm" className="px-[13px]">
								Log out
							</Button>
						</form>
					)}

					<ThemeToggle />
				</div>
			</nav>
		</header>
	);
}
