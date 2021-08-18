'use strict'

const User = use('App/Models/User')

class UserController {
    async index(){
        return User.query().select(['id','username','email']).fetch()
    }
    
    async store({request}){
        const campos = ['username','email','password']
        const dados = request.only(campos)

        return await User.create(dados)
    }

    async token({request, auth}){
        const {email, password} = request.all()
        return await auth.attempt(email,password)
    }
}

module.exports = UserController
