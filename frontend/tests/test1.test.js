import HomePage from '../pages/home.js'


fixture('Retrieve devices - Test1')
    .page`http://localhost:3001`

test('Retrieve API device list', async t =>{
    await HomePage.requestDevices()

})

test('Visible elements and Count', async t=>{
    await HomePage.getTextList()

})