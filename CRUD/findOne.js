require('../connection');

const User = require('../models/User');

async function getUser() {
    const user = await User.findOne({
        username: 'jacinto'
    })
    console.log(user)
}

getUser();
