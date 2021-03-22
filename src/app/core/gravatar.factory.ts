import { InjectionToken } from '@angular/core';

export type GravatarFactory = (email: string) => string;
export const GRAVATAR_FACTORY_TOKEN = new InjectionToken<GravatarFactory>('GRAVATAR_FACTORY');
