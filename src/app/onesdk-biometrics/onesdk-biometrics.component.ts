import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OneSDK } from '@frankieone/one-sdk'
import { getSessionToken } from './onesdk-session';

@Component({
  selector: 'app-onesdk-biometrics',
  standalone: true,
  imports: [],
  templateUrl: './onesdk-biometrics.component.html',
  styleUrl: './onesdk-biometrics.component.css'
})
export class OnesdkBiometricsComponent implements OnInit {
  @ViewChild('onboardingComponent', { static: true }) sdkContainer!: ElementRef;

  constructor() { }

  async ngOnInit(): Promise<void> {
  }

  async ngAfterViewInit(): Promise<void> {
       // Initialize OneSDK
       const recipe = {
        recipe: {
          idv: {
              provider: {name: "incode"},
          },
          biometrics: {
              provider: {name: "incode"},
          },
          ocr: {
              provider: {name: "incode"},
              provideReviewScreen: true
          },
          form: {
              provider: {
                  name: 'legacy',
                  version: 'v4'
              },
          }
        }
      }
  
      const sessionToken = await getSessionToken();
  
      const modeConfig = {"mode":"development"}
      const sessionConfig = {session:{token:sessionToken}}
      const oneSdkConfig =  {...sessionConfig,...modeConfig,...recipe};
      var oneSdk = await OneSDK(oneSdkConfig);
  
      const oneSdkIndividual = oneSdk.individual();
  
      oneSdkIndividual.addConsent("general");
      oneSdkIndividual.addConsent("docs");
      oneSdkIndividual.addConsent("creditheader");
  
      const idv = oneSdk.flow('idv');
  
      idv.mount(this.sdkContainer.nativeElement);
  }
}
