import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = 'MtM7LODBJT6YLO34tBippXigXf6dZVHdjDSKI4IDm5krpB6lXsHZ1CTp';
    const modifiedReq = req.clone({ 
      headers: req.headers.set('Authorization', `${userToken}`),
    });
    return next.handle(modifiedReq);
  }
}