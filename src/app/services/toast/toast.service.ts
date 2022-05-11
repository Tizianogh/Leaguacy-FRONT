import {Injectable} from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) {
  }

  showSucces(message: string) {
    this.toastr.success(message)
  }

  showError(message: string) {
    this.toastr.error(message)
  }
}
