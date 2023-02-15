import HomePage from '../pages/home.js'
import {Selector} from "testcafe";


fixture('Delete device')
    .page`http://localhost:3001`

test('Delete via API a device from the list', async t =>{
    await HomePage.deletedeviceAPI()
    const updateDevice = Selector('.device-name').withText('MAC-LEADER');
    await t.expect((updateDevice).exists).notOk()
})