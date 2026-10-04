export const IMAGE_ROOT = '/images';

export const companyImage = (file: string) => `${IMAGE_ROOT}/companies/${file}`;
export const skillImage = (file: string) => `${IMAGE_ROOT}/skills/${file}`;
export const socialImage = (file: string) => `${IMAGE_ROOT}/social/${file}`;
export const publicationImage = (file: string) =>
  `${IMAGE_ROOT}/publications/${file}`;
export const uiImage = (file: string) => `${IMAGE_ROOT}/ui/${file}`;
