import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  providers:[ MatIconRegistry ]
})
export class MaterialComponent {
  token;
  role;
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { 
    
    // this.matIconRegistry.addSvgIcon(
    //   `accounting`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/home/accounting_icon.svg")
    // );

    // this.matIconRegistry.addSvgIcon(
    //   `settings`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/home/settings_icon.svg")
    // );

    // this.matIconRegistry.addSvgIcon(
    //   `properties`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/home/properties_icon.svg")
    // );

    // this.matIconRegistry.addSvgIcon(
    //   `notification`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/home/notification_icon.svg")
    // );

    // this.matIconRegistry.addSvgIcon(
    //   `profile`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/home/profile_icon.svg")
    // );

    // this.matIconRegistry.addSvgIcon(
    //   `logout`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/home/logout_icon.svg")
    // );

    // this.matIconRegistry.addSvgIcon(
    //   `user`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/user_icon.svg")
    // );

    // this.matIconRegistry.addSvgIcon(
    //   `bank`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/bank_icon.svg")
    // );
    
    // this.matIconRegistry.addSvgIcon(
    //   `search`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/home/search_icon.svg")
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `landlord`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/home/landlord_icon.svg")
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `address`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/address_icon.svg")
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `state`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/state_icon.svg")
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `city`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/city_icon.svg")
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `zip`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/zip_code_icon.svg")
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `id`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/id_icon.svg")
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `phone`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/phone_icon.svg")
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `cx`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/home/cx_icon.svg")
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `logo`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/logo.svg")
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `under`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/under-text.svg")
    // );

    // this.matIconRegistry.addSvgIcon(
    //   `landlord`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/home/landlord_icon.svg")
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `broker`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/home/broker_icon.svg")
    // );

    // this.matIconRegistry.addSvgIcon(
    //   `lease`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/home/lease_icon.svg")
    // );
  }
}
