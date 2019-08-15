/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  "claimants": [
    {
      "nino": "QQ123456C",
      "firstName": "Joe",
      "lastName": "Bloggs",
      "address": {
        "street": "23 River View",
        "street2": "",
        "city": "Bedlington",
        "postcode": "NE2 5LS"
      },
      "appointee": [
        "true"
      ],
      "appointeeType": "Personal",
      "appointeeName": "Richard Roe",
      "appointeeNino": "UI255634A",
      "legacyBenefits": [
        "Housing Benefit",
        "income-based Jobseeker’s Allowance (JSA)"
      ],
      "landline": "",
      "mobile": "07771900900",
      "markers": [
        "Vulnerable"
      ],
      "status": "Preparation",
      "history": [
        {
          "title": "Preparation letter sent",
          "link": "Preparation letter"
        }
      ],
      "day1": "25",
      "lastLetter": {
        "title": "Preparation letter"
      }
    },





    {
      "nino": "UU123456C",
      "firstName": "Jane",
      "lastName": "Doe",
      "address": {
        "street": "98  Wrexham Rd",
        "street2": "",
        "city": "Fairstead",
        "postcode": "NR10 0WX"
      },
      "children": [
        {
          "childDOB": [
            "2009",
            "7",
            "23"
          ],
          "childDisability": "true",
        },
        {
          "childDOB": [
            "2011",
            "9",
            "17"
          ],
          "childDisability": "false",
        }
      ],
      "appointee": "_unchecked",
      "appointeeName": "",
      "legacyBenefits": [
        "Child Tax Credit",
        "Housing Benefit",
        "Income Support"
      ],
      "landline": "0121 496 0649",
      "mobile": "07700900374",
      "markers": "_unchecked",
      "status": "Notified",
      "history": [
        {
          "title": "Preparation letter sent",
          "link": "Preparation text message"
        },
        {
          "title": "Notification letter sent",
          "link": "Notification letter"
        },
        // {
        //   "title": "Query from claimant logged",
        //   "date": "-3",
        //   "name": "Paul Mason",
        //   "body": "Claimant visited jobcentre about:",
        //   "reasons": [
        //     "Notification letter",
        //     "When they have to claim by"
        //   ]
        // },
        {
          "title": "Reminder text message sent",
          "link": "Reminder text message"
        }
      ],
      "day1": "-15",
      "lastLetter": {
        "title": "Notification letter"
      }
    },





    {
      "nino": "II123456C",
      "firstName": "Jane",
      "lastName": "Roe",
      "address": {
        "street": "23 River View",
        "street2": "",
        "city": "Bedlington",
        "postcode": "NE22 5LS"
      },
      "appointee": "_unchecked",
      "appointeeName": "",
      "legacyBenefits": [
        "income-related Employment and Support Allowance (ESA)"
      ],
      "landline": "0121 496 0649",
      "mobile": "07700900374",
      "status": "Claimed",
      "history": [
        {
          "title": "Preparation letter sent",
          "link": "Preparation letter"
        },
        {
          "title": "Notification letter sent",
          "link": "Notification letter"
        },
        {
          "title": "Reminder text message sent",
          "link": "Reminder text message"
        },
        {
          "title": "Reminder call",
          "name": "Kay Hubbard"
        },
        {
          "title": "Claimed Universal Credit"
        }
      ],
      "day1": "-55",
    }
  ]

}
