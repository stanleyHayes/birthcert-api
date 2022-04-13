const {Router} = require("express");
const {
    login,
    getProfile,
    updateProfile,
    resetPassword,
    verifyAccount,
    resendOTP,
    changePassword,
    deactivateProfile
} = require("../../../controllers/v1/admin/authentication");

const router = Router({mergeParams: true});


router.post('/login', login);
router.get('/profile', getProfile);
router.put('/profile', updateProfile);
router.delete('/profile', deactivateProfile);
router.put('/password/change', changePassword);
router.post('/password/reset', resetPassword);
router.put('/profile/verify', verifyAccount);
router.post('/otp/resend', resendOTP);

module.exports = router;
