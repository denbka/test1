const variants = ["not-valid", "success", "error"];

const form = document.forms.promocodeForm;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const mockFetch = (value) =>
  new Promise((res) => {
    const time = setTimeout(() => {
      clearTimeout(time);
      if (!value.length) res(0);
      res(getRandomInt(1, 2));
    }, Math.random() * 1500);
  });

const submitForm = async (event) => {
  event.preventDefault();

  const response = await mockFetch(form.promocode.value);
  const updatedClasses = ["form-control", variants[response]];

  form.promocode.classList = "";

  addClasses(form.promocode.classList, updatedClasses);
};

const addClasses = (classCollection, updateClasses) => {
  updateClasses.map((className) => classCollection.add(className));
};

form.button.addEventListener("click", submitForm);
form.addEventListener("submit", submitForm);
