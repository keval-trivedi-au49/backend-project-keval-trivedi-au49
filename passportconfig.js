const localStrategy = require('passport-local').Strategy
const bcrypt = require("bcrypt")
function init(passport,getUserByEmail,getUserById){
    const authenticator = async (email,password,done)=>{

        //getting the logged in user
        const user = getUserByEmail(email)

        if(user==null){
            return done(null,false,{message:"wrong email address"})
        }

        //compare the password with the hashed password
        try {
            if(await bcrypt.compare(password,user.password)){
                return done(null,user);
            }else{
                return done(null,false,{message:"password is incorrect"})
            }
        } catch (e) {
            return done(e)
        }
    }
    passport.use(new localStrategy({usernameField:'email'},authenticator))

    passport.serializeUser((user,done)=>{done(null,user.id)})
    passport.deserializeUser((id,done)=>{
        return done(null,getUserById(id))})
}
module.exports = init