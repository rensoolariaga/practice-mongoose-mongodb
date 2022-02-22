require('../connection');

const User = require('../models/User');

const someFunction = async () => {
    let user = await User.findOne({username:'gustavo'})
    console.log(user)
    user.password = 'contraseñanueva'
    user.save()
}

const otherFunction = async () => {
    const user = await User.findOneAndUpdate({username:'rodrigo'}, {
        fullname: 'Rodrigo Bueno'
    }, {new: true})
    console.log(user)
}
async function updateUsers() {
    const user = await User.update({
        username: 'jacinto'
    }, {
        password: 'constraseña'
    })

    console.log(user)
}

otherFunction();
