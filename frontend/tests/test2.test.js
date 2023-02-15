import Newdevice from "../pages/newdevice.js";
import {Selector, t} from "testcafe";


fixture('Add New device using UI')
    .page`http://localhost:3001`

    test('Add one new device', async t =>{
        await Newdevice.addNewDevice()
        const newDevice = Selector('.device-name').withText('Arturo Test');
        const newDeviceInfo = Selector('.device-info').find('.device-name').withText('Arturo Test');
        await t
            .expect((newDevice).exists).ok()
            .expect((newDeviceInfo).visible).eql(true);
})