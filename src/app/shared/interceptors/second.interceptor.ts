import { HttpInterceptorFn } from '@angular/common/http';

export const secondInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
