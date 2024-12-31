import skinclubLogoWhite from '@/assets/skinclub-logo-white.png';
import skinclubLogo from '@/assets/skinclub-logo.png';

export interface MetaConfig {
  logo: {
    lightSrc: string;
    darkSrc: string;
  };
  title: string;
  metaKeywords: string[];
}
export const metaConfig: MetaConfig = {
  logo: {
    lightSrc: skinclubLogo,
    darkSrc: skinclubLogoWhite,
  },
  title: 'The Skin Club NI - Nurse Led Aesthetics',
  metaKeywords: ['skincare', 'Bangor', 'North Down', 'Botox', 'Filler', 'Dermal', 'Dermilogica'],
};
