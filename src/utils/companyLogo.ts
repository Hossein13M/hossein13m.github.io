import { companyImage } from '@/utils/assets';

export function companyLogoSrc(logo: string): string {
  const file = logo.includes('.') ? logo : `${logo}.png`;
  return companyImage(file);
}
