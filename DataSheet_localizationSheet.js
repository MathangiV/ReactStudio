import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "barsstatuswhite_n100_341639";
    item['en'] = "100%";
    
    item = {};
    this.items.push(item);
    item['key'] = "barsstatuswhite_time_767944";
    item['en'] = "9:41 AM";
    
    item = {};
    this.items.push(item);
    item['key'] = "barsstatuswhite_carrier_762475";
    item['en'] = "Sketch";
    
    item = {};
    this.items.push(item);
    item['key'] = "iphonese_musicbasedonyour_463991";
    item['en'] = "Music based on your \nmood.";
    
    item = {};
    this.items.push(item);
    item['key'] = "iphonese_continuewithgoogle_780517";
    item['en'] = "Continue with Google";
    
    item = {};
    this.items.push(item);
    item['key'] = "iphonese_continuewithfacebo_1013132";
    item['en'] = "Continue with Facebook";
    
    item = {};
    this.items.push(item);
    item['key'] = "iphonese_bycontinueyouare_371072";
    item['en'] = "By continue, you are agree to our Terms of Service and Privacy Policy.";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
