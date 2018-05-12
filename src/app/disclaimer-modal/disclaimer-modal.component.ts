import {Component, OnInit, Input, ViewChild} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'disclaimer-modal',
  templateUrl: './disclaimer-modal.component.html',
  styleUrls: ['./disclaimer-modal.component.css']
})
export class DisclaimerModalComponent {
  @Input() isAutoOpen: boolean;
  @ViewChild('content') content;
  isModalIgnoreSelected: boolean;
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    if (this.isAutoOpen && !this.isModalIgnored()) {
      this.open(this.content);
    }
  }

  open(dialogHtmlContent) {
    this.modalService.open(dialogHtmlContent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (this.isModalIgnoreSelected) {
        this.ignoreModal();
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  private isModalIgnored(): boolean {
    return sessionStorage.getItem("isDisclaimerModalIgnored") == "true";
  }

  private ignoreModal(): void {
    sessionStorage.setItem("isDisclaimerModalIgnored", "true");
  }
}