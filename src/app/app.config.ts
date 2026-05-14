import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
<<<<<<< HEAD
import { provideHttpClient } from '@angular/common/http';
=======
>>>>>>> 3f59c1e49920f99067e461b54ffa5d706d893ba2

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
<<<<<<< HEAD
    provideRouter(routes),
    provideHttpClient()
=======
    provideRouter(routes)
>>>>>>> 3f59c1e49920f99067e461b54ffa5d706d893ba2
  ]
};
