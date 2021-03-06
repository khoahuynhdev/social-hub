/* 3rd party modules */
const express = require('express');
const router = express.Router();
/* app modules */
const _userHandle = require('./userHandle');
const _middlware = require('./userMiddleware');

/*  auth actions */

// login fb
router.post('/loginfb',
  _userHandle.handleLogInFB)

// update fb
router.post('/updatefb',
  _middlware.authenticating,
  _userHandle.handleUpdateFB);

router.get('/update',
  _middlware.authenticating,
  _userHandle.handleGetUpdate)

// update account
router.post('/update',
  _middlware.validateUpdateInput,
  _middlware.authenticating,
  _userHandle.handleUpdate);

router.get('/getJoinyc',
  _middlware.authenticating,
  _userHandle.handleGetJoinYoungCommunist);

router.post('/joinyc',
  _middlware.authenticating,
  _userHandle.handleJoinYoungCommunist);


router.get('/getJoinstdc',
  _middlware.authenticating,
  _userHandle.handleGetStudentCommunity);
// tham gia hoi sinh vien  
router.post('/joinstdc',
  _middlware.authenticating,
  _userHandle.handleJoinStudentCommunity);

router.post('/resetpassword', 
  _middlware.authenticating,
  _userHandle.handleResetPassword);

/* un-auth actions */

// first time update account
router.post('/updateInfo',
  _userHandle.handleUpdateFirstTime)

router.post('/activate',
  _middlware.validateRegisterInput,
  _userHandle.handleActivate);

router.post('/login',
  _userHandle.handleLogIn);

module.exports = router;