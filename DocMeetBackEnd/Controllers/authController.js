const { userSignUpModel, userSignUpValidation, userSigninValidation } = require('../Models/authModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const admin = require('../firebaseadmin');
const nodemailer = require('nodemailer')


function generateOTP1() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

const transporter1 = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'modikrish1964@gmail.com',
        pass: 'oehs anto mluf wfaa' 
    }
});
const userSignUp = async (req, res) => {
    const { email } = req.body;
    
    const securePass = bcrypt.hashSync(req.body.password, 10)

    let storedSignUpData = new userSignUpModel({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
    })

    const { error, value } = userSignUpValidation.validate(storedSignUpData, { allowUnknown: true })
    if (!error) 
    {
        const existingUser = await userSignUpModel.findOne({ email:req.body.email });

        if(!existingUser){
            storedSignUpData.password = securePass
            storedSignUpData.save()
            .then(() => {
                res.send({ isSuccess: true, msg: "Added User Data Succssfully" })
            })
            .catch((err) => {
                res.send({ isSuccess: false, msg: "Added in creating user" })
            })
        }else{
            res.send({isSuccess:false})
        }
    }
    else {
        res.send({
            msg: error.details[0].message
        })
    }
}

const userSignin = async (req, res) => {
    const { email, password } = req.body


    if (email && password) {
        const { error } = userSigninValidation.validate({ email: email, password: password }, { allowUnknown: true })
        if(!error){
            const getUserData = await userSignUpModel.findOne({
                email
            })
            try{
                if(getUserData){
                    const checkPass = bcrypt.compareSync(password,getUserData.password)

                    if(checkPass){
                        const token = jwt.sign({email:getUserData.email},
                            "abc",{ expiresIn:'1h'}
                        )
                        res.status(200).send({
                            token:token
                        })
                    }
                    else{
                        res.status(404).send({
                            msg:"Password Error"
                        })
                    }
                }
            }
            catch{
                res.status(404).send({
                    "msg":"Email & Password Not Found"
                })
            }
        }
    }
    else {
        res.send({ "msg": "All Fields Must Be Filled" })
    }
}

const userGoogleSignin = async (req, res) => {
    const { token } = req.body;
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      const email = decodedToken.email;
      const existingUser = await userSignUpModel.findOne({ email });
      if (!existingUser) {
        const newUser = new userSignUpModel({
          fullname: decodedToken.name || "Google User",
          email,
          password: "google_auth",
          picture: decodedToken.picture,
          loginMethod: 'google'
        });
        await newUser.save();
      }
      const jwtToken = jwt.sign({ email }, "abc", { expiresIn: '1h' });
      res.status(200).send({ isSuccess: true,token: jwtToken });
    } catch (error) {
      res.status(401).send({ isSuccess: false,msg: "Google authentication failed" });
    }
};

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'panditdarshil5454@gmail.com',
        pass: 'lhyt vpsq ftht uxqn' 
    }
});

const resetpassword=async(req,res)=>{
    const { email } = req.body;

   try {
       const user = await userSignUpModel.findOne({ email });
       if (!user) return res.status(404).json({ message: 'User not found' });

       const otp = generateOTP();
       const expiry = new Date(Date.now() + 5 * 60 * 1000); // 5 min from now

       user.otp = otp;
       user.otpExpiresAt = expiry;
       await user.save();

       await transporter.sendMail({
           to: email,
           subject: 'DocMeet OTP for Password Reset',
           html: `<p>Your OTP is <b>${otp}</b>. It will expire in 5 minutes.</p>`
       });

       res.status(200).json({ message: 'OTP sent to email' });

   } catch (error) {
       res.status(500).json({ message: 'Internal server error', error });
   }
}

const verifyotp = async (req, res) => {
    const { email, otp } = req.body;

    try {
        const user = await userSignUpModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Make sure comparison is done correctly (both strings, trimmed)
        const userOtp = String(user.otp).trim();
        const inputOtp = String(otp).trim();

        if (userOtp !== inputOtp) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        if (new Date() > user.otpExpiresAt) {
            return res.status(400).json({ message: 'OTP expired' });
        }

        res.status(200).json({ message: 'OTP verified' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error });
    }
};

const newpassword=async(req,res)=>{
    const { email, newPassword } = req.body;

   try {
       const user = await userSignUpModel.findOne({ email });
       if (!user) return res.status(404).json({ message: 'User not found' });

       const hashedPassword = await bcrypt.hash(newPassword, 10);
       user.password = hashedPassword;
       user.otp = null;
       user.otpExpiresAt = null;
       await user.save();

       res.status(200).json({ message: 'Password updated successfully' });

   } catch (error) {
       res.status(500).json({ message: 'Internal server error', error });
   }
}


module.exports = { userSignUp, userSignin, userGoogleSignin, resetpassword,verifyotp,newpassword }