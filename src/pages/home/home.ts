import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Clipboard } from '@ionic-native/clipboard';
import { ColoredBrowserTabs } from '@ionic-native/colored-browser-tabs';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController,private callNumber: CallNumber,private sms: SMS,
    private socialSharing: SocialSharing, private clipboard: Clipboard,private browserTabs: ColoredBrowserTabs) {

  }
  callnum(){
    this.callNumber.callNumber("0965415441", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  };

  send(){
    this.sms.send("0965415441","SMS From Ionic native")
    .then(()=>{
      console.log("done");
    }).catch((err)=>{
      alert("1:" + JSON.stringify(err));
    });
  };

  share(){
    // Check if sharing via email is supported
this.socialSharing.canShareViaEmail().then(() => {
  // Sharing via email is possible
}).catch(() => {
  // Sharing via email is not possible
});

// Share via email
this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
  // Success!
}).catch(() => {
  // Error!
});
  };
  
  copy(){
    this.clipboard.copy('Hello i am a robot welcome to exostar of me');

this.clipboard.paste().then(
   (resolve: string) => {
      alert(resolve);
    },
    (reject: string) => {
      alert('Error: ' + reject);
    }
  );

this.clipboard.clear();
  };

  color(){
    this.browserTabs.openTab('https://www.youtube.com/watch?v=6fdAjyXwMoI', '#66FF99')
  .subscribe()

this.browserTabs.openTabWithAnimation('https://www.youtube.com/watch?v=6fdAjyXwMoI', 'slide_x', '#66FF99')
  .subscribe()
  };
}


