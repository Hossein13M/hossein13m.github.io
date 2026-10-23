import { companyImage } from '@/utils/assets';

export function companyLogoUrl(logo: string): string {
  const file = logo.includes('.') ? logo : `${logo}.png`;
  return companyImage(file);
}
