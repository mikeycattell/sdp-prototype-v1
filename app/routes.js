const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Branching
router.post('claim-eligible', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let claimeligible = req.session.data['claim-eligible']

  if (claimeligible === 'false') {
    res.redirect('claim-live-no')
  } else {
    res.redirect('claim-live-yes')
  }
})

router.post('/check-eligibility-single', (req, res) => {
  if(req.body.gettingUc === 'No' || req.body.bereavement === 'No') {
    return res.redirect('/QQ423881A/notify-claimant-no');
  } else {
    return res.redirect('/QQ423881A/raise-payment-single');
  }
  res.send(req.body);
});

module.exports = router

router.post('/check-eligibility-monthly', (req, res) => {
  if(req.body.gettingUc === 'No' || req.body.bereavement === 'No') {
    return res.redirect('/QQ423881A-ongoing/notify-claimant-no');
  } else {
    return res.redirect('/QQ423881A-ongoing/raise-payment-single');
  }
  res.send(req.body);
});

module.exports = router

router.post('/sprint26/agent/confirm-answer', function (req, res) {

  let agent = req.session.data['agent']

  if (agent === 'true') {
    res.redirect('notify-claimant-no')
  } else {
    res.redirect('check-elig-pay')
  }
})

router.post('/sprint26/agent/confirm-answer', function (req, res) {

  let agents = req.session.data['agents']

  if (agents === 'true') {
    res.redirect('notify-claimant-no')
  } else {
    res.redirect('check-elig-pay')
  }
})

router.post('/sprint26/agent/claimant-carer-answer', function (req, res) {

  let claimantcareranswer = req.session.data['claimantcareranswer']

  if (claimantcareranswer === 'true') {
    res.redirect('notify-claimant-no')
  } else {
    res.redirect('success-exclude123213')
  }
})

router.post('/sprint26/agent/verify-claimant', function (req, res) {

  let verifyclaimant = req.session.data['verifyclaimant']

  if (verifyclaimant === 'true') {
    res.redirect('check-carer-element')
  } else {
    res.redirect('success-exclude11')
  }
})

module.exports = router

router.post('/sprint26/agent/edit-notify-claimant', function (req, res) {

  let editnotifyclaimant = req.session.data['editnotifyclaimant']

  if (editnotifyclaimant === 'true') {
    res.redirect('check-carer-history')
  } else {
    res.redirect('check-carer-element')
  }
})

module.exports = router

router.post('/sprint26/agent/raise-edit-payment', function (req, res) {

  let wantsPayment = req.session.data['wantsPayment']

  if (wantsPayment === 'true') {
    res.redirect('check-carer-history')
  } else {
    res.redirect('check-elig-pay')
  }
})

module.exports = router

router.post('/sprint26/agent/claimant-cap-LCWRA', function (req, res) {

  let isInLcwra = req.session.data['isInLcwra']

  if (isInLcwra === 'true') {
    res.redirect('claimant-eligible')
  } else {
    res.redirect('claimant-eligible-single-LCWRAno')
  }
})

router.post('/sprint26/agent/claimant-single-couple', function (req, res) {

  let relationshipChanged = req.session.data['relationshipChanged']

  if (relationshipChanged === 'true') {
    res.redirect('notify-claimant-no')
  }
})

module.exports = router
