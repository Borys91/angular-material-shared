import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FooterOptions } from '../../models/footer-options';

@Component({
  selector: 'dangl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  @Input() showLegalNotice = false;
  @Input() showPrivacy = false;
  @Input() legalNoticeText = 'Legal Notice';
  @Input() privacyText = 'Privacy';
  @Input() legalNoticeLink = 'legal-notice';
  @Input() privacyLink = 'privacy';
  @Input() useLegalNoticeCallback = false;
  @Input() usePrivaceCallback = false;
  @Input() options: FooterOptions;
  @Output() legalNoticeCallback = new EventEmitter();
  @Output() privacyCallback = new EventEmitter();
}
