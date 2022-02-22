require('./connection')

const User = require('./models/User')

async function createUsers() {
    const userOne = new User({
        username: 'jacinto',
        password: 'asd12345'
    })
    await userOne.save()

    const userTwo = new User({ 
        username: 'rodrigo',
        password: '12345'
    })
    await userTwo.save()

    const userThree = new User({ 
        username: 'gustavo',
        password: '12345'
    })
    await userThree.save()

}

createUsers ();