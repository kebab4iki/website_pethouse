document.addEventListener('DOMContentLoaded', () => {
  // База данных всех 6 питомцев с точными характеристиками со скриншотов и локальными фото из папки images/
  const PETS_DB = {
    glok: {
      id: 'glok',
      name: 'Кот Глок',
      shortName: 'Глок',
      shortInfo: 'Кошка • 3 года',
      ageGender: 'Кошка • Мальчик • 3 года',
      colorCoat: 'Полосатый • Шерсть короткая',
      sizeVet: 'Средний • Привит, обработан, есть ветпаспорт',
      temperament: 'Общительный, ласковый',
      shelter: 'Приют «Зоорассвет» (г. Москва, Рассветная аллея, 10)',
      lead: 'Этот кот с огромными глазами умеет говорить без слов — в его взгляде столько нежности и тепла, что сердце сжимается.',
      history: 'Этот кот с огромными глазами умеет говорить без слов — в его взгляде столько нежности и тепла, что сердце сжимается. Глок из тех котов, кто не навязывается, но всегда рядом — тихий, теплый, преданный. Подарите ему дом, и он подарит вам себя.',
      care: [
        'Характер: общительный, ласковый, ненавязчивый и очень преданный человеку.',
        'Уход за шерстью: короткая полосатая шерсть не требует сложного ухода.',
        'Содержание: приучен к лотку и когтеточке, отлично подойдет для уютной квартиры.'
      ],
      photos: [
        'images/Glok1.jpg',
        'images/Glok2.jpg'
      ]
    },
    groza: {
      id: 'groza',
      name: 'Собака Гроза',
      shortName: 'Гроза',
      shortInfo: 'Собака • 2 года',
      ageGender: 'Собака • Девочка • 2 года',
      colorCoat: 'Двухцветная • Шерсть короткая',
      sizeVet: 'Средний • Привита, стерилизована, есть ветпаспорт',
      temperament: 'Любопытная, осторожная, внимательная',
      shelter: 'Приют «Красная сосна» (г. Москва, ул. Красная Сосна, 30)',
      lead: 'В знакомой обстановке Гроза любопытная, ласковая, игривая и энергичная девочка, которая ищет терпеливого и чуткого человека.',
      history: 'Гроза в знакомой обстановке может быть любопытной, ласковой, игривой и энергичной, но на улице её часто накрывает паника от новых звуков, пространства и событий. Она не из тех, кто сразу доверяет. Грозе нужен терпеливый, спокойный и чуткий человек, который станет для неё опорой. Ей требуется хозяин с опытом, который не будет торопить события, сможет мягко социализировать её и поможет справляться с тревогой на прогулках. Гроза крепкая и сильная, может тянуть поводок, поэтому важна физическая подготовка и умение управлять крупной собакой.',
      care: [
        'Характер: любопытная, осторожная, внимательная.',
        'Особенности выгула: крепкая и сильная собака, требует надежной амуниции и спокойных маршрутов.',
        'Рекомендации: подойдет человеку с опытом содержания собак и бережным подходом к адаптации.'
      ],
      photos: [
        'images/Groza1.jpg',
        'images/Groza2.jpg',
        'images/Groza3.jpg',
        'images/Groza4.jpg'
      ]
    },
    kiwi: {
      id: 'kiwi',
      name: 'Собака Киви',
      shortName: 'Киви',
      shortInfo: 'Собака • 2 года',
      ageGender: 'Собака • Девочка • 2 года',
      colorCoat: 'Двухцветная • Шерсть средняя',
      sizeVet: 'Средний • Привита, здорова, есть ветпаспорт',
      temperament: 'Умна и сообразительна',
      shelter: 'Приют «Зеленоград» (г. Москва, Фирсановское ш.)',
      lead: 'Киви — настоящая отличница! Понимает все с полуслова, обожает обниматься с человеком и прекрасно гуляет в городе.',
      history: 'Киви — настоящая отличница. Понимает все с полуслова — идеальная собака. Большая ласкуша, обожает обниматься с человеком. Уже освоила прогулки в оживлённом городе, ездила в машине и показала себя замечательно.',
      care: [
        'Характер: умна и сообразительна, ориентирована на контакт с человеком.',
        'Прогулки и поездки: уверенно чувствует себя в городе и отлично переносит поездки в автомобиле.',
        'Уход: средняя шерсть, регулярное вычесывание и активные прогулки.'
      ],
      photos: [
        'images/Kiwi1.jpg',
        'images/Kiwi2.jpg',
        'images/Kiwi3.jpg',
        'images/Kiwi4.jpg'
      ]
    },
    leksi: {
      id: 'leksi',
      name: 'Собака Лекси',
      shortName: 'Лекси',
      shortInfo: 'Собака • 5 лет',
      ageGender: 'Собака • Девочка • 5 лет',
      colorCoat: 'Двухцветная • Шерсть длинная',
      sizeVet: 'Средний • Привита, стерилизована, есть ветпаспорт',
      temperament: 'Нежная, трогательная',
      shelter: 'Приют «Дубовая Роща» (г. Москва, пр-д Дубовой Рощи)',
      lead: 'Настоящая леди! Нежная, трогательная собака со внутренним стержнем, которая по характеру напоминает кошечку.',
      history: 'Настоящая леди. По характеру напоминает кошечку. Но если ее личные границы преступить, то она может показать, что ей стало некомфортно. Хорошо ходит на поводке. Нежная, трогательная собака со внутренним стержнем.',
      care: [
        'Характер: нежная, трогательная, ценит уважительное и спокойное отношение.',
        'Прогулки: хорошо и аккуратно ходит на поводке, любит размеренный темп.',
        'Уход за шерстью: длинная красивая шерсть требует периодического расчесывания.'
      ],
      photos: [
        'images/Leksi1.jpg',
        'images/Leksi2.jpeg',
        'images/Leksi3.jpg',
        'images/Leksi4.jpg'
      ]
    },
    shampusya: {
      id: 'shampusya',
      name: 'Кошка Шампуся',
      shortName: 'Шампуся',
      shortInfo: 'Кошка • 2 года',
      ageGender: 'Кошка • Девочка • 2 года',
      colorCoat: 'Полосатая • Шерсть длинная',
      sizeVet: 'Крупный • Привита, стерилизована, есть ветпаспорт',
      temperament: 'Добрая',
      shelter: 'Приют «Муркоша-Юг» (г. Москва, Варшавское ш., 145)',
      lead: 'Дома хорошо, а с кошкой будет веселей! Красавица Шампуся принесет море искрящейся радости и шквал веселого настроения.',
      history: 'Дома хорошо, а с кошкой будет веселей. Шампуся принесет море искрящейся радости и шквал веселого настроения. С ней вы всегда будете улыбаться и мыслить позитивно. Да и как не улыбаться, глядя на красавицу Шампусю. Приходите за своей радостью!',
      care: [
        'Характер: очень добрая, позитивная и уютная домашняя кошка.',
        'Уход за шерстью: длинная пушистая шерсть, рекомендуется вычесывать 1–2 раза в неделю.',
        'Содержание: приучена к лотку и когтеточке, любит внимание и ласку.'
      ],
      photos: [
        'images/Shampusya1.jpg',
        'images/Shampusya2.jpg',
        'images/Shampusya3.jpg'
      ]
    },
    uzvar: {
      id: 'uzvar',
      name: 'Кот Узвар',
      shortName: 'Узвар',
      shortInfo: 'Кошка • 5 лет',
      ageGender: 'Кошка • Мальчик • 5 лет',
      colorCoat: 'Рыжий • Шерсть короткая',
      sizeVet: 'Средний • Привит, кастрирован, есть ветпаспорт',
      temperament: 'Ласковый, добрый, общительный',
      shelter: 'Приют «ЗооДом Север» (г. Москва, ул. Полярная, 31)',
      lead: 'Мурчание — золото! А мурчание золотошубного котика Узвара — самое сладостное и бесценное, оно снимает стресс и дарит радость.',
      history: 'Мурчание — золото! А мурчание золотошубного котика Узвара — самое сладостное и бесценное! Оно чарует и увлекает, снимает стресс и дарит радость. И вы будете снова и снова наглаживать золотую шерстку, чтобы услышать эту песню. Осталось лишь взять Узвара домой. Поспешите за своей драгоценностью!',
      care: [
        'Характер: ласковый, добрый, общительный, обожает когда его гладят.',
        'Уход за шерстью: короткая рыжая шерстка, простая в уходе.',
        'Содержание: чистоплотный котик, приучен к лотку и когтеточке.'
      ],
      photos: [
        'images/Uzvar1.jpg',
        'images/Uzvar2.jpg',
        'images/Uzvar3.jpg',
        'images/Uzvar4.jpg'
      ]
    }
  };

  const NAME_TO_KEY = {
    'глок': 'glok',
    'гроза': 'groza',
    'киви': 'kiwi',
    'лекси': 'leksi',
    'шампуся': 'shampusya',
    'узвар': 'uzvar'
  };

  // Проставляем ссылки product.html?pet=... на карточках
  document.querySelectorAll('.pet-card, .card').forEach((card) => {
    const titleEl = card.querySelector('.card-title');
    const linkEl = card.querySelector('a[href^="product.html"]');
    if (titleEl && linkEl) {
      const rawName = titleEl.textContent.trim().toLowerCase();
      for (const [rusName, petKey] of Object.entries(NAME_TO_KEY)) {
        if (rawName.includes(rusName)) {
          linkEl.setAttribute('href', `product.html?pet=${petKey}`);
          break;
        }
      }
    }
  });

  // Заполнение индивидуальной страницы product.html
  const urlParams = new URLSearchParams(window.location.search);
  const currentPetKey = urlParams.get('pet') || 'glok';
  const currentPet = PETS_DB[currentPetKey] || PETS_DB.glok;

  const mainPetPhoto = document.getElementById('mainPetPhoto');
  if (mainPetPhoto && currentPet) {
    document.title = `Анкета питомца: ${currentPet.shortName} — PetHome`;

    const activeBreadcrumb = document.querySelector('.breadcrumb-item.active');
    if (activeBreadcrumb) {
      activeBreadcrumb.textContent = `${currentPet.shortName} (${currentPet.shortInfo})`;
    }

    const h1El = document.querySelector('main h1');
    if (h1El) h1El.textContent = currentPet.name;

    const leadEl = document.querySelector('main .lead');
    if (leadEl) leadEl.textContent = currentPet.lead;

    const alertWarningEl = document.querySelector('main .alert-warning');
    if (alertWarningEl) {
      alertWarningEl.innerHTML = `<strong>Где познакомиться:</strong> ${currentPet.shelter}. Посещение по предварительной заявке.`;
    }

    // Главное фото (всегда с цифрой 1) и генерация миниатюр по порядку номеров (2, 3 или 4 фото)
    mainPetPhoto.src = currentPet.photos[0];
    mainPetPhoto.alt = currentPet.name;

    const galleryContainer = document.getElementById('petGalleryThumbs') || document.querySelector('.pet-gallery-grid');
    if (galleryContainer) {
      galleryContainer.style.gridTemplateColumns = `repeat(${currentPet.photos.length}, 1fr)`;
      galleryContainer.innerHTML = currentPet.photos
        .map(
          (photoSrc, index) => `
          <img src="${photoSrc}" alt="${currentPet.shortName} фото ${index + 1}" class="pet-gallery-grid__thumb js-pet-thumb">
        `
        )
        .join('');

      galleryContainer.querySelectorAll('.js-pet-thumb').forEach((thumb) => {
        thumb.addEventListener('click', () => {
          mainPetPhoto.src = thumb.getAttribute('src');
        });
      });
    }

    // Таблица "Информация о питомце"
    const tableRows = document.querySelectorAll('main table tbody tr');
    if (tableRows.length >= 4) {
      tableRows[0].querySelector('th').textContent = 'Вид, пол и возраст';
      tableRows[0].querySelector('td').textContent = currentPet.ageGender;

      tableRows[1].querySelector('th').textContent = 'Окрас и шерсть';
      tableRows[1].querySelector('td').textContent = currentPet.colorCoat;

      tableRows[2].querySelector('th').textContent = 'Размер и ветстатус';
      tableRows[2].querySelector('td').textContent = currentPet.sizeVet;

      tableRows[3].querySelector('th').textContent = 'Характер';
      tableRows[3].querySelector('td').textContent = currentPet.temperament;
    }

    const historyPane = document.querySelector('#historyPane p');
    if (historyPane) historyPane.textContent = currentPet.history;

    const careList = document.querySelector('#carePane ul');
    if (careList) {
      careList.innerHTML = currentPet.care.map((item) => `<li>${item}</li>`).join('');
    }

    const petSelect = document.getElementById('meet-pet');
    if (petSelect) {
      petSelect.value = currentPet.id;
    }
  }

  // 1. Кнопка "Наверх"
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('scroll-top--visible', window.scrollY > 300);
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 2. Избранное
  let favorites = JSON.parse(localStorage.getItem('pethome_favorites') || '[]');
  // Очищаем старых питомцев из localStorage, если они там оставались
  favorites = favorites.filter((pet) => NAME_TO_KEY[pet.name?.toLowerCase()]);

  if (!document.getElementById('favoritesModal')) {
    const modalHTML = `
      <div class="modal fade" id="favoritesModal" tabindex="-1" aria-labelledby="favoritesModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title h5" id="favoritesModalLabel">Избранные питомцы</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
            </div>
            <div class="modal-body">
              <ul class="list-group" id="favoritesModalList"></ul>
            </div>
            <div class="modal-footer">
              <button type="button" id="clearFavoritesBtn" class="btn btn-outline-danger btn-sm">Очистить список</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  const favCounterBadge = document.getElementById('favCounter');
  if (favCounterBadge && favCounterBadge.parentElement) {
    const headerFavBtn = favCounterBadge.parentElement;
    headerFavBtn.style.cursor = 'pointer';
    headerFavBtn.setAttribute('data-bs-toggle', 'modal');
    headerFavBtn.setAttribute('data-bs-target', '#favoritesModal');
  }

  const updateFavoritesUI = () => {
    localStorage.setItem('pethome_favorites', JSON.stringify(favorites));
    if (favCounterBadge) favCounterBadge.textContent = favorites.length;

    document.querySelectorAll('.js-fav-btn').forEach((btn) => {
      const card = btn.closest('.pet-card');
      const name = card
        ? card.querySelector('.card-title')?.textContent.trim()
        : currentPet.shortName;

      const isFav = favorites.some((pet) => pet.name === name);
      btn.classList.toggle('pet-card__fav-btn--active', isFav);

      if (btn.classList.contains('pet-card__fav-btn')) {
        btn.innerHTML = isFav ? '♥' : '♡';
      } else {
        btn.innerHTML = isFav ? '♥ В избранном' : '♡ В избранное';
      }
    });

    const favListEl = document.getElementById('favoritesModalList');
    if (favListEl) {
      if (favorites.length === 0) {
        favListEl.innerHTML = `
          <li class="list-group-item text-muted text-center py-4">
            Вы пока не добавили ни одного питомца. Нажмите на сердечко на карточке животного!
          </li>
        `;
      } else {
        favListEl.innerHTML = favorites
          .map((pet, idx) => {
            const key = NAME_TO_KEY[pet.name.toLowerCase()] || 'glok';
            return `
            <li class="list-group-item d-flex align-items-center justify-content-between gap-2">
              <div class="d-flex align-items-center gap-3">
                <img src="${pet.img}" alt="${pet.name}" style="width:54px;height:54px;object-fit:cover;border-radius:8px;">
                <div>
                  <div class="fw-bold">${pet.name}</div>
                  <small class="text-muted">${pet.info}</small>
                </div>
              </div>
              <div class="d-flex gap-2">
                <a href="product.html?pet=${key}" class="btn btn-sm btn-pethome">Подробнее</a>
                <button type="button" class="btn btn-sm btn-outline-danger js-remove-fav" data-index="${idx}">✕</button>
              </div>
            </li>
          `;
          })
          .join('');

        favListEl.querySelectorAll('.js-remove-fav').forEach((removeBtn) => {
          removeBtn.addEventListener('click', (e) => {
            const idx = parseInt(e.currentTarget.dataset.index, 10);
            favorites.splice(idx, 1);
            updateFavoritesUI();
          });
        });
      }
    }
  };

  document.querySelectorAll('.js-fav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.pet-card');
      const name = card ? card.querySelector('.card-title')?.textContent.trim() : currentPet.shortName;
      const key = NAME_TO_KEY[name.toLowerCase()] || 'glok';
      const img = PETS_DB[key].photos[0];
      const info = PETS_DB[key].shortInfo;

      const existingIdx = favorites.findIndex((pet) => pet.name === name);
      if (existingIdx > -1) {
        favorites.splice(existingIdx, 1);
      } else {
        favorites.push({ name, img, info });
      }
      updateFavoritesUI();
    });
  });

  const clearFavBtn = document.getElementById('clearFavoritesBtn');
  if (clearFavBtn) {
    clearFavBtn.addEventListener('click', () => {
      favorites = [];
      updateFavoritesUI();
    });
  }

  updateFavoritesUI();

  // 3. Модальное окно краткой информации ("Кратко")
  const petModal = document.getElementById('petQuickModal');
  if (petModal) {
    petModal.addEventListener('show.bs.modal', (event) => {
      const button = event.relatedTarget;
      if (!button) return;

      const name = button.getAttribute('data-pet-name') || 'Глок';
      const petKey = NAME_TO_KEY[name.toLowerCase()] || 'glok';

      document.getElementById('modalPetName').textContent = name;
      document.getElementById('modalPetAge').textContent = button.getAttribute('data-pet-age') || '';
      document.getElementById('modalPetTemp').textContent = button.getAttribute('data-pet-temp') || '';
      document.getElementById('modalPetShelter').textContent = button.getAttribute('data-pet-shelter') || '';

      const modalImg = document.getElementById('modalPetImg');
      const img = button.getAttribute('data-pet-img');
      if (modalImg && img) modalImg.src = img;

      const modalLink = petModal.querySelector('a.btn-pethome');
      if (modalLink) {
        modalLink.setAttribute('href', `product.html?pet=${petKey}`);
      }
    });
  }

  // 4. Фильтрация и поиск в каталоге
  const filterForm = document.getElementById('catalogFilterForm');
  const petItems = document.querySelectorAll('.js-pet-item');
  const noResultsAlert = document.getElementById('noResultsAlert');

  if (filterForm && petItems.length > 0) {
    const applyFilters = () => {
      const searchVal = document.getElementById('searchInput').value.trim().toLowerCase();
      const typeVal = document.getElementById('filterType').value;
      const ageVal = document.getElementById('filterAge').value;
      const genderVal = document.getElementById('filterGender').value;

      let visibleCount = 0;
      petItems.forEach((item) => {
        const matchSearch = item.dataset.name.toLowerCase().includes(searchVal);
        const matchType = typeVal === 'all' || item.dataset.type === typeVal;
        const matchAge = ageVal === 'all' || item.dataset.age === ageVal;
        const matchGender = genderVal === 'all' || item.dataset.gender === genderVal;

        const visible = matchSearch && matchType && matchAge && matchGender;
        item.classList.toggle('d-none', !visible);
        if (visible) visibleCount++;
      });

      if (noResultsAlert) {
        noResultsAlert.classList.toggle('d-none', visibleCount > 0);
      }
    };

    filterForm.addEventListener('input', applyFilters);
    filterForm.addEventListener('reset', () => setTimeout(applyFilters, 10));
  }

  // 5. Страница "Помощь питомцам из приютов" (подарки, корзина, окно "Помочь всем")
  const wishButtons = document.querySelectorAll('.js-wish-btn');
  const giftCartBadge = document.getElementById('giftCartBadge');
  const giftCartList = document.getElementById('giftCartList');
  const giftCartTotal = document.getElementById('giftCartTotal');
  const clearGiftCartBtn = document.getElementById('clearGiftCartBtn');
  let giftCart = [];

  const updateWishUI = () => {
    wishButtons.forEach((btn) => {
      const id = btn.dataset.id;
      const price = btn.dataset.price;
      const inCart = giftCart.some((g) => g.id === id);
      const counterEl = btn.closest('.wish-item')?.querySelector('.js-wish-counter');

      btn.classList.toggle('wish-item__btn--added', inCart);
      btn.textContent = inCart ? 'В корзине ✓' : `${price} ₽ 🧺`;
      if (counterEl) counterEl.textContent = inCart ? '1 из 1' : '0 из 1';
    });

    if (giftCartBadge) giftCartBadge.textContent = giftCart.length;

    if (giftCartList) {
      if (giftCart.length === 0) {
        giftCartList.innerHTML =
          '<li class="list-group-item text-muted text-center py-3">Корзина пока пуста. Выберите подарки на карточках питомцев!</li>';
      } else {
        giftCartList.innerHTML = giftCart
          .map(
            (item, idx) => `
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>${item.name}</strong>
              <div class="small text-muted">Для питомца: ${item.pet}</div>
            </div>
            <div class="d-flex align-items-center gap-2">
              <span class="fw-bold">${item.price} ₽</span>
              <button type="button" class="btn btn-sm btn-outline-danger js-remove-gift" data-idx="${idx}">✕</button>
            </div>
          </li>
        `
          )
          .join('');

        giftCartList.querySelectorAll('.js-remove-gift').forEach((rmBtn) => {
          rmBtn.addEventListener('click', (e) => {
            const idx = parseInt(e.currentTarget.dataset.idx, 10);
            giftCart.splice(idx, 1);
            updateWishUI();
          });
        });
      }
    }

    if (giftCartTotal) {
      const sum = giftCart.reduce((acc, item) => acc + item.price, 0);
      giftCartTotal.textContent = sum;
    }
  };

  wishButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const existingIdx = giftCart.findIndex((g) => g.id === id);
      if (existingIdx > -1) {
        giftCart.splice(existingIdx, 1);
      } else {
        giftCart.push({
          id,
          pet: btn.dataset.pet,
          name: btn.dataset.name,
          price: parseInt(btn.dataset.price, 10)
        });
      }
      updateWishUI();
    });
  });

  if (clearGiftCartBtn) {
    clearGiftCartBtn.addEventListener('click', () => {
      giftCart = [];
      updateWishUI();
    });
  }

  // Модальное окно "Помочь всем"
  const donateAmountInput = document.getElementById('donateAmountInput');
  document.querySelectorAll('.js-add-amount').forEach((chip) => {
    chip.addEventListener('click', () => {
      if (!donateAmountInput) return;
      const current = parseInt(donateAmountInput.value, 10) || 0;
      donateAmountInput.value = current + parseInt(chip.dataset.add, 10);
    });
  });

  const helpAllForm = document.getElementById('helpAllForm');
  if (helpAllForm) {
    helpAllForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const alertBox = document.getElementById('helpAllAlert');
      const val = parseInt(donateAmountInput.value, 10);
      if (!val || val < 49) {
        alertBox.className = 'alert alert-danger mt-3 mb-0 py-2 small';
        alertBox.textContent = 'Введите сумму от 49 ₽ или нажмите на кнопку с суммой.';
      } else {
        alertBox.className = 'alert alert-success mt-3 mb-0 py-2 small';
        alertBox.textContent = `Спасибо! Перевод на сумму ${val} ₽ принят в обработку.`;
        helpAllForm.reset();
      }
    });
  }

  // 6. Валидация форм
  document.querySelectorAll('.js-validated-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const alertBox = form.querySelector('.js-form-alert');
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach((field) => {
        const empty = field.type === 'checkbox' ? !field.checked : !field.value.trim();
        field.classList.toggle('is-invalid', empty);
        field.classList.toggle('is-valid', !empty);
        if (empty) isValid = false;
      });

      if (!alertBox) return;

      if (!isValid) {
        alertBox.className = 'alert alert-danger mt-3 js-form-alert';
        alertBox.textContent = 'Ошибка: пожалуйста, заполните все обязательные поля (*) и подтвердите согласие.';
      } else {
        alertBox.className = 'alert alert-success mt-3 js-form-alert';
        alertBox.textContent = 'Заявка успешно отправлена! Куратор приюта свяжется с вами в ближайшее время.';
        form.reset();
        requiredFields.forEach((f) => f.classList.remove('is-valid'));
      }
    });
  });
// Автоматическое добавление пунктов "Главная" (рядом с лого) и "О нас" в меню и подвал на всех страницах
  const navList = document.querySelector('#mainNavbar .navbar-nav');
  if (navList) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // 1. Добавляем кнопку "Главная" первым пунктом рядом с лого, если её еще нет
    if (!navList.querySelector('a[href="index.html"]')) {
      const homeLi = document.createElement('li');
      homeLi.className = 'nav-item';
      const isHome = currentPage === 'index.html' || currentPage === '';
      homeLi.innerHTML = `<a class="nav-link ${isHome ? 'active fw-semibold' : ''}" href="index.html">Главная</a>`;
      navList.prepend(homeLi);
    }

    // 2. Добавляем ссылку на страницу "О нас" (about.html), если её еще нет
    if (!navList.querySelector('a[href="about.html"]')) {
      const aboutLi = document.createElement('li');
      aboutLi.className = 'nav-item';
      const isAbout = currentPage === 'about.html';
      aboutLi.innerHTML = `<a class="nav-link ${isAbout ? 'active fw-semibold' : ''}" href="about.html">О нас</a>`;
      const dropdownItem = navList.querySelector('.dropdown');
      if (dropdownItem) {
        navList.insertBefore(aboutLi, dropdownItem);
      } else {
        navList.appendChild(aboutLi);
      }
    }
  }

  // Направляем ссылку "О нас" в твоем подвале на новую страницу about.html
  document.querySelectorAll('.site-footer__nav a').forEach((link) => {
    if (link.textContent.trim() === 'О нас') {
      link.setAttribute('href', 'about.html');
    }
  });

  // Заменяем стрелочку в кнопке "Наверх" на аккуратную белую лапку
  if (scrollTopBtn) {
    scrollTopBtn.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <ellipse cx="12" cy="16.5" rx="4.5" ry="3.8"/>
        <circle cx="6.5" cy="11.5" r="2"/>
        <circle cx="9.8" cy="8" r="2"/>
        <circle cx="14.2" cy="8" r="2"/>
        <circle cx="17.5" cy="11.5" r="2"/>
      </svg>
    `;
  }

  // Плавная анимация отсчета цифр от 0 при первом появлении на экране
  const statCounters = document.querySelectorAll('.js-stat-counter');
  if (statCounters.length > 0) {
    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute('data-target'), 10) || 0;
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1600; // длительность анимации 1.6 сек
      const startTime = performance.now();

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        // Плавное замедление в конце (easeOutCubic)
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(eased * target);

        const formatted =
          target >= 1000 ? currentVal.toLocaleString('ru-RU') : currentVal.toString();
        el.textContent = formatted + suffix;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          const finalFormatted =
            target >= 1000 ? target.toLocaleString('ru-RU') : target.toString();
          el.textContent = finalFormatted + suffix;
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target); // срабатывает только при первом просмотре
          }
        });
      },
      { threshold: 0.4 }
    );

    statCounters.forEach((counter) => observer.observe(counter));
  }
});