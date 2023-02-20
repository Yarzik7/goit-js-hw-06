const form = document.querySelector('.login-form');

const handleSubmit = event => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value)
    return alert('В формі є незаповнені поля. Будь ласка заповніть всі поля!');

  const formData = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log(formData);
  event.currentTarget.reset();
};

form.addEventListener('submit', handleSubmit);
