import {Selector, t} from 'testcafe'

class HomePage {
    constructor() {
        this.addDevice = Selector('.submitButton')

    }

    async requestDevices() {
        const response = await t.request("http://localhost:3000/devices/:system_name");
        await t.expect(response.status).eql(200);
    }

    async getTextList() {

        const listNames = await Selector('.device-main-box').find('.device-name');
        await t.expect(Selector('.device-main-box').find('.device-info').visible).eql(true);

        let gettexts = listNames;
        var Count = await gettexts.count;
        console.log(Count);
        for (var i = 0; i < Count; i++) {
            var printNames = await gettexts.nth(i).textContent;
            console.log(printNames)
        }
        const listOptions = await Selector('.device-main-box').find('.device-options');
        let getOptions = listOptions;
        var Count = await getOptions.count;
        await t.expect(Count).eql(12);

        await t.expect(Selector('.device-main-box').find('.device-options').visible).eql(true);
    }

    async addDeviceUI() {
        await t
            .click(this.addDevice())
    }

    async updateDeviceAPI() {
        const responseget = await t.request("http://localhost:3000/devices/").body;
        console.log(responseget[0].system_name);

        const response = await t.request({
            url: 'http://localhost:3000/devices/e8okoP2l5',
            method: 'put',
            body: {
                "system_name": "Rename Device",
                "type": "WINDOWS",
                "hdd_capacity": "1024"
                }
            });

            await t.expect(response.status).eql(200);
            await t.eval(() => location.reload(true));
        }

    async deletedeviceAPI() {
        const responseget = await t.request("http://localhost:3000/devices/").body;
        console.log(responseget[0].system_name);

        const response = await t.request({
            url: 'http://localhost:3000/devices/Th3ngERn9',
            method: 'delete'
        });

        await t.expect(response.status).eql(200);
        await t.eval(() => location.reload(true));
    }

}

export default new HomePage();