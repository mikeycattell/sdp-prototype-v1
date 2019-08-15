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
