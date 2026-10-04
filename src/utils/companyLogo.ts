export function companyLogoSrc(logo: string): string {
  if (logo.includes('.')) return `/images/companies/${logo}`;
  return `/images/companies/${logo}.png`;
}
