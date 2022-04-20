const {Router} = require("express");
const {
    login,
    getProfile,
    updateProfile,
    resetPassword,
    verifyAccount,
    resendOTP,
    changePassword,
    deactivateProfile, logoutAll, logout, forgotPassword,
    register
} = require("../../../controllers/v1/admin/authentication");
const {authenticate} = require("../../../middleware/v1/auth");

const router = Router({mergeParams: true});


router.post('/register', register);
router.post('/login', login);
router.post('/logout', authenticate, logout);
router.post('/logoutAll', authenticate, logoutAll);
router.get('/profile', authenticate, getProfile);
router.put('/profile', authenticate, updateProfile);
router.delete('/profile', authenticate, deactivateProfile);
router.put('/password/change', authenticate, changePassword);
router.post('/password/forgot', forgotPassword);
router.post('/password/reset/:token', resetPassword);
router.post('/profile/verify/:token', verifyAccount);
router.post('/otp/resend', resendOTP);

module.exports = router;
