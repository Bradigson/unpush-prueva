export type User = {
    username : string,
    password : string
}


export type UserContextType = {
    UserContext : User
    setUserContext : ( value : User)=> void
}