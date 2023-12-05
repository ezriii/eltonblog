const login = () => {
    return (
        <div class="container">
        <div class="form-box">
            <form action="" name="Formfill" onsubmit="return validation()">
                <h2>Register</h2>
                <p id="result"></p>
                <div class="input-box">
                    <i class='bx bxs-user'></i>
                    <input type="text"name="username" placeholder="userName"/>
                </div>
                <div class="input-box">
                    <i class='bx bx-key'></i>
                    <input type="text"name="password" placeholder="Password"/>
                </div>
                <div class="input-box">
                    <i class='bx bx-key'></i>
                    <input type="text"name="cPassword" placeholder="Confirm Password"/>
                </div>
                <div class="button">
                    <input type="submit" class="btn" value="Register"/>
                </div>
                <div class="group">
                    <span><a href="#">Forget Password</a></span>
                    <span><a href="#">Log in</a></span>
                </div>
            </form>
        </div>
        <div class="popup" id="popup">
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            <h2>Thank You!</h2>
            <p>Your were Successfully Registered!</p>
            <a href="#"><button>OK</button></a>
        </div>
    </div>
    );
}
 
export default login;