const express = require('express')
const app = express();

app.get('', (req: any, res: any) => {
    res.send('Helo world')
})

app.listen(3000, () => {
    console.log('server started on port 3000')
})
