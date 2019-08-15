/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

document.querySelectorAll('.accordian-section').forEach(function(element) {
  element.addEventListener('click', revealAccordian);
});

document.querySelectorAll('#accordianOpenAll').forEach(function(element) {
  element.addEventListener('click', accordianOpenAll);
});

function revealAccordian(e) {
  if(!document.getElementById(this.dataset.target).classList.contains('accordian-hidden')) {
    document.getElementById(this.dataset.target).classList.add('accordian-hidden');
    switchAccordianImages();
    return;
  }

  document.querySelectorAll('.accordian-section').forEach(function(element) {
    document.getElementById(element.dataset.target).classList.add('accordian-hidden');
  });
  document.getElementById(this.dataset.target).classList.remove('accordian-hidden');
  switchAccordianImages();
}

function accordianOpenAll(e) {
  if(this.innerText === 'Open all') {
    this.innerText = 'Close all';
    document.querySelectorAll('.accordian-section').forEach(function(element) {
      document.getElementById(element.dataset.target).classList.remove('accordian-hidden');
    });
  } else {
    this.innerText = 'Open all';
    document.querySelectorAll('.accordian-section').forEach(function(element) {
      document.getElementById(element.dataset.target).classList.add('accordian-hidden');
    });
  }
}

function switchAccordianImages() {
  document.querySelectorAll('.accordian-section').forEach(function(element) {
    if(document.getElementById(element.dataset.target).classList.contains('accordian-hidden')) {
      document.getElementById(element.dataset.button).style.backgroundImage = 'url(/public/images/accordian-open.svg';
    } else {
      document.getElementById(element.dataset.button).style.backgroundImage = 'url(/public/images/accordian-close.svg)';
    }
  });
}

document.querySelectorAll('.conditional-radio').forEach(function(revealer) {
    // adds the event listener for clicks
    revealer.addEventListener('change', revealHiddenOptions);
    // reveals neccesary inputs on load
    if(revealer.checked && revealer.dataset.target) {
        document.getElementById(revealer.dataset.target).classList.remove('js-hidden');
    }
});

function revealHiddenOptions(e) {
    if(this.checked && this.dataset.target) {
        this.parentNode.parentNode.childNodes.forEach(function(child) {
            if(typeof child.classList !== 'undefined' && child.classList.contains('govuk-radios')) {
                child.childNodes.forEach(function(grandchild) {
                    if(typeof grandchild.dataset !== 'undefined' && grandchild.dataset.target) {
                        document.getElementById(grandchild.dataset.target).classList.add('js-hidden');
                    }
                });
            }
        });
        document.getElementById(this.dataset.target).classList.remove('js-hidden');
    } else {
      document.getElementById(this.id.split('-')[0]).childNodes.forEach(function(child) {
        if(typeof child.classList !== 'undefined' && child.classList.contains('govuk-radios')) {
            child.childNodes.forEach(function(grandchild) {
              grandchild.childNodes.forEach(function(greatGrandchild) {
                if(typeof greatGrandchild.dataset !== 'undefined' && greatGrandchild.dataset.target) {
                    document.getElementById(greatGrandchild.dataset.target).classList.add('js-hidden');
                }
              });
            });
        }
      });
    }
    if(this.checked && this.dataset.hide) {
      document.getElementById(this.dataset.hide).classList.add('js-hidden');
    }
}
