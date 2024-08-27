import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: any[] = [];

	show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
		this.toasts.push({ textOrTpl, ...options });
	}

	remover(toast: any) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	limpar() {
		this.toasts.splice(0, this.toasts.length);
	}
}
