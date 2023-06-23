import "./style.scss";

function changeTextContent(element: HTMLTitleElement | Element | null) {
  if (!element) return;

  element.textContent = import.meta.env.VITE_PROJECT_NAME;
}

function setInputState(formData: FormData, inputName: string) {
  const input = document.querySelector(`input[name=${inputName}]`);
  if (!input) return;

  if (!formData.get(inputName)) {
    input.classList.add("form__input--invalid");
    return;
  }

  input.classList.remove("form__input--invalid");
}

(function () {
  const title = document.querySelector("title");
  changeTextContent(title);

  const heading = document.querySelector(".sr-only");
  changeTextContent(heading);

  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputNames = ["firstName", "lastName", "email", "password"];

    const formData = new FormData(this);

    for (const inputName of inputNames) {
      setInputState(formData, inputName);
    }
  });
})();
