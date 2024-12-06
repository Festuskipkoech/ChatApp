import axios from "axios";

const AuthPage= (props) =>{
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } =e.target[0];
        if (!value.trim()) {
            alert("Username cannot be empty!");
            return
        }
        axios
            .post("http://localhost:3000/authenticate", { username :value})
            .then((r) => props.onAuth({...r.data, secret:value}))
            .catch((e) => console.log("Auth error", e));
    };
    return(
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome 👋</div>
                <div className="form-title">Set username to get started</div>
                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input type="text" name="username" className="auth-input"/>
                    <button className="auth-button" type="submit">Enter</button>
                </div>
            </form>
        </div>
    )
}
export default AuthPage;