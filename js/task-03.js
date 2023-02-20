const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

const galleryMarcup = images
  .map(
    ({ url, alt }) =>
      `<li>
        <img src = "${url}" alt = "${alt}" width = "450" height = "250"/>
      </li>`
  )
  .join(''); // Додає в масив рядок з тегами li і об'єднує їх в одну строку

const linkStyles = `<link rel="stylesheet" href="css/styles.css" />`; // Строка для підключення файлу стилів CSS

galleryEl.insertAdjacentHTML('beforeend', galleryMarcup); // Додає створену розмітку в ul.gallery за одну операцію
document.head.insertAdjacentHTML('beforeend', linkStyles); // Додає тег для підключення файлу CSS
