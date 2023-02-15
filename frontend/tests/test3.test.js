import HomePage from '../pages/home.js'
import {Selector} from "testcafe";


fixture('Update device')
    .page`http://localhost:3001`

test('Update via API a device from the list', async t =>{
    await HomePage.updateDeviceAPI()
    const updateDevice = Selector('.device-name').withText('Rename Device');
    await t.expect((updateDevice).exists).ok()
})