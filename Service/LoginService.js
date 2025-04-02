export default async function LoginData(){
    const loginData = await fetch("http://96.9.81.187:8080/api/v1/auth/login")
    const loginFetched = await registerData.json()
    console.log(loginFetched)
    return loginFetched;
}