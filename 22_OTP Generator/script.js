let generateOTP = () => {
    //define the length of the OTP
    const otpLength = 6;

    // generate a random numeric otp
    const otp = Math.floor(Math.random() * Math.pow(10, otpLength));

    // display the generated otp
    document.getElementById("otpDisplay").innerText = `${otp}`;

};

document.getElementById("generateBtn").addEventListener("click", generateOTP);

window.addEventListener("load", generateOTP);