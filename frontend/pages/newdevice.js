import {Selector, t} from 'testcafe'
import HomePage from "./home";
class Newdevice{
    constructor() {
        this.inputSystemName = Selector('#system_name');
        this.selectType = Selector('#type');
        this.optionMac = this.selectType.find('option');
        this.inputCapacity = Selector('#hdd_capacity');
        this.buttonSave = Selector('.submitButton');
    }

    async addNewDevice(){
        await HomePage.addDeviceUI()
        await t
            .typeText(this.inputSystemName, 'Arturo Test')
            .click(this.selectType)
            .click(this.optionMac.withText('MAC'))
            .typeText(this.inputCapacity, '500 GB')
            .click(this.buttonSave)

    }

}
export default new Newdevice();