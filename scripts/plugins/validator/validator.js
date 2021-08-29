class Validator {
  constructor({selector, pattern, method}) {
    this.form = document.querySelector(selector);
    this.pattern = pattern;
    this.method = method;
  }

  init() {
    this.applyStyle();
  }
  
  showError(elem) {
    elem.classList.remove('success');
    elem.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Ошибка в этом поле!';
    errorDiv.classList.add('validator-error');
    elem.insertAdjacentElement('afterend', errorDiv);
  }

  showSuccess(elem) {
    elem.classList.remove('error');
    elem.classList.add('success');

    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
      elem.nextElementSibling.remove();
    }
  }

  applyStyle() {
    const style = document.createElement('style');
    style.textContent = `
      body form input.success {
        border: 2px solid green;
      }
      body form input.error {
        border: 2px solid red;
      }
      .validator-error {
        font-size: 14px;
        color: red;
        z-index: 1;
        position: relative;
      }
    `;
    document.head.appendChild(style);
  }

}