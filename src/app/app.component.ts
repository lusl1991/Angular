import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public translateService : TranslateService
  ){}
   
  ngOnInit() {
  // --- set i18n begin ---
  this.translateService.addLangs(["zh-CN", "en"]);
  this.translateService.setDefaultLang("zh-CN");
  const browserLang = this.translateService.getBrowserLang();
  this.translateService.use(browserLang.match(/en|zh-CN/) ? browserLang : 'zh-CN');
  // --- set i18n end ---
  }
}
