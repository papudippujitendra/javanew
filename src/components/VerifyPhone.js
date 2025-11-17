import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Button, TextField } from '@mui/material' // Fixed import - combined Button and TextField
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'

const VerifyPhone = () => {
    const [phone, setPhone] = useState("")
    const [user, setUser] = useState(null)
    const [otp, setOtp] = useState("")

    const sentOtp = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha) // Added await
            console.log(confirmation)
            setUser(confirmation)
        } catch (err) {
            console.error(err)
        }
    }

    const verifyOtp = async () => {
        try {
            const data = await user.confirm(otp)
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className='phone-signin justify-content-center    mx-auto'>
            <div className='phone-content mx-auto'>
                <PhoneInput
                    country={"in"}
                    value={phone}
                    onChange={(phone) => setPhone("+" + phone)}
                />

                <Button onClick={sentOtp} sx={{ marginTop: "10px" }} variant='contained'>
                    Send OTP
                </Button> {/* Fixed closing tag */}
                
                <div style={{ marginTop: "10px" }} id="recaptcha"></div>
                <br />
                
                <TextField 
                    onChange={(e) => setOtp(e.target.value)} // Fixed syntax
                    sx={{ marginTop: "10px", width: "300px" }} 
                    variant='outlined' 
                    size='small' 
                    label="Enter OTP" 
                /> {/* Fixed closing tag */}
                <br />
                
                <Button onClick={verifyOtp} sx={{ marginTop: "10px" }} variant='contained' color='success'>
                    Verify OTP
                </Button>
            </div>
        </div>
    )
}

export default VerifyPhone