document.addEventListener('DOMContentLoaded', () => {
  // База данных всех 6 питомцев
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
      photos: ['images/Glok1.jpg', 'images/Glok2.jpg']
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
      history: 'Гроза в знакомой обстановке может быть любопытной, ласковой, игривой и энергичная, но на улице её часто накрывает паника от новых звуков, пространства и событий. Она не из тех, кто сразу доверяет. Грозе нужен терпеливый, спокойный и чуткий человек, который станет для неё опорой. Ей требуется хозяин с опытом, который не будет торопить события, сможет мягко социализировать её и поможет справляться с тревогой на прогулках. Гроза крепкая и сильная, может тянуть поводок, поэтому важна физическая подготовка и умение управлять крупной собакой.',
      care: [
        'Характер: любопытная, осторожная, внимательная.',
        'Особенности выгула: крепкая и сильная собака, требует надежной амуниции и спокойных маршрутов.',
        'Рекомендации: подойдет человеку с опытом содержания собак и бережным подходом к адаптации.'
      ],
      photos: ['images/Groza1.jpg', 'images/Groza2.jpg', 'images/Groza3.jpg', 'images/Groza4.jpg']
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
      photos: ['images/Kiwi1.jpg', 'images/Kiwi2.jpg', 'images/Kiwi3.jpg', 'images/Kiwi4.jpg']
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
      photos: ['images/Leksi1.jpg', 'images/Leksi2.jpeg', 'images/Leksi3.jpg', 'images/Leksi4.jpg']
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
      photos: ['images/Shampusya1.jpg', 'images/Shampusya2.jpg', 'images/Shampusya3.jpg']
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
      photos: ['images/Uzvar1.jpg', 'images/Uzvar2.jpg', 'images/Uzvar3.jpg', 'images/Uzvar4.jpg']
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

  // 1. Плавная кнопка "Наверх" с иконкой лапки
  const scrollTopBtn = document.getElementById('scrollTopBtn');
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
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('scroll-top--visible', window.scrollY > 300);
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 2. Избранное
  let favorites = JSON.parse(localStorage.getItem('pethome_favorites') || '[]');
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

  // 3. Модальное окно "Кратко"
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

  // 5. Помощь питомцам из приютов (подарки, корзина, окно "Помочь всем")
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
        alertBox.textContent = 'Заявка успешно отправлена! Координатор свяжется с вами в ближайшее время.';
        form.reset();
        requiredFields.forEach((f) => f.classList.remove('is-valid'));
      }
    });
  });

  // 7. Синхронизация верхнего меню и подвала (добавление "Главная" и "О нас" везде)
  const navList = document.querySelector('#mainNavbar .navbar-nav');
  if (navList) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (!navList.querySelector('a[href="index.html"]')) {
      const homeLi = document.createElement('li');
      homeLi.className = 'nav-item';
      const isHome = currentPage === 'index.html' || currentPage === '';
      homeLi.innerHTML = `<a class="nav-link ${isHome ? 'active fw-semibold' : ''}" href="index.html">Главная</a>`;
      navList.prepend(homeLi);
    }

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

    if (!navList.querySelector('a[href="reviews.html"]')) {
      const reviewsLi = document.createElement('li');
      reviewsLi.className = 'nav-item';
      const isReviews = currentPage === 'reviews.html';
      reviewsLi.innerHTML = `<a class="nav-link ${isReviews ? 'active fw-semibold' : ''}" href="reviews.html">Отзывы</a>`;
      navList.appendChild(reviewsLi);
    }
  }

  // Гарантируем наличие ссылки "О нас" в футере на КАЖДОЙ странице сайта + делаем адрес ссылкой на Яндекс.Карты
  const footerEl = document.querySelector('footer');
  if (footerEl) {
    // Ищем список разделов в футере (поддерживает оба варианта верстки подвала)
    const footerNavLists = footerEl.querySelectorAll('ul');
    if (footerNavLists.length > 0) {
      const sectionsUl = footerNavLists[0];
      let hasAboutLink = false;

      sectionsUl.querySelectorAll('a').forEach((a) => {
        if (a.textContent.trim().toLowerCase() === 'о нас' || a.getAttribute('href') === 'about.html') {
          a.setAttribute('href', 'about.html');
          hasAboutLink = true;
        }
      });

      if (!hasAboutLink) {
        const sampleLink = sectionsUl.querySelector('a');
        const linkClass = sampleLink ? sampleLink.className : 'text-white-50 text-decoration-underline';
        const li = document.createElement('li');
        li.innerHTML = `<a href="about.html" class="${linkClass}">О нас</a>`;
        sectionsUl.appendChild(li);
      }
    }

    // Делаем адрес "Москва, проспект Вернадского, 78" в футере кликабельным переходом на Яндекс.Карты
    footerEl.querySelectorAll('div, span, li').forEach((node) => {
      if (node.children.length === 0 && node.textContent.includes('проспект Вернадского, 78')) {
        node.innerHTML = `<a href="https://yandex.ru/maps/?pt=37.480064,55.669986&z=16&l=map" target="_blank" rel="noopener noreferrer" class="text-white-50 text-decoration-underline">Москва, проспект Вернадского, 78 ↗</a>`;
      }
    });
  }

  // 8. Плавная анимация отсчета цифр при первом скролле
  const statCounters = document.querySelectorAll('.js-stat-counter');
  if (statCounters.length > 0) {
    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute('data-target'), 10) || 0;
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1600;
      const startTime = performance.now();

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(eased * target);
        const formatted = target >= 1000 ? currentVal.toLocaleString('ru-RU') : currentVal.toString();
        el.textContent = formatted + suffix;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          const finalFormatted = target >= 1000 ? target.toLocaleString('ru-RU') : target.toString();
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
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    statCounters.forEach((counter) => observer.observe(counter));
  }
});

/* PetHome: глобальные улучшения интерфейса */
document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('pethome_theme');
  if (savedTheme === 'dark' || savedTheme === 'light') html.dataset.theme = savedTheme;

  // Переключатель темы в шапке на всех страницах
  const navActions = document.querySelector('#mainNavbar .d-flex.align-items-center.gap-2');
  if (navActions && !document.getElementById('themeToggle')) {
    const themeBtn = document.createElement('button');
    themeBtn.type = 'button';
    themeBtn.id = 'themeToggle';
    themeBtn.className = 'theme-toggle';
    themeBtn.setAttribute('aria-label', 'Переключить тему');
    navActions.prepend(themeBtn);
    const paintThemeButton = () => {
      const dark = html.dataset.theme === 'dark';
      themeBtn.innerHTML = `${dark ? '☀️' : '🌙'} <span class="d-none d-xl-inline">${dark ? 'Светлая' : 'Тёмная'}</span>`;
      themeBtn.title = dark ? 'Включить светлую тему' : 'Включить тёмную тему';
    };
    paintThemeButton();
    themeBtn.addEventListener('click', () => {
      const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
      html.dataset.theme = next;
      localStorage.setItem('pethome_theme', next);
      paintThemeButton();
    });
  }

  // Единственный курсор: системный скрыт CSS, кастомная лапка следует за мышью.
  if (window.matchMedia('(pointer: fine)').matches) {
    const cursor = document.createElement('div');
    cursor.className = 'paw-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.innerHTML = `<svg viewBox="0 0 40 40" fill="currentColor"><ellipse cx="20" cy="25" rx="8.5" ry="7.2"/><ellipse cx="8.5" cy="16" rx="4.1" ry="5.1" transform="rotate(-24 8.5 16)"/><ellipse cx="16.5" cy="9.5" rx="4" ry="5" transform="rotate(-8 16.5 9.5)"/><ellipse cx="25" cy="9.5" rx="4" ry="5" transform="rotate(8 25 9.5)"/><ellipse cx="32" cy="16" rx="4.1" ry="5.1" transform="rotate(24 32 16)"/></svg>`;
    document.body.appendChild(cursor);
    window.addEventListener('mousemove', e => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.classList.add('is-active');
    }, { passive: true });
    window.addEventListener('mousedown', () => cursor.classList.add('is-pressed'));
    window.addEventListener('mouseup', () => cursor.classList.remove('is-pressed'));
    window.addEventListener('blur', () => cursor.classList.remove('is-pressed'));
    document.addEventListener('mouseover', e => {
      if (e.target.closest('a,button,[role="button"],input,select,textarea,.pet-gallery-grid__thumb')) cursor.classList.add('is-link');
      else cursor.classList.remove('is-link');
    });
  }

  // Помечаем все карточки с переходом на страницу конкретного питомца.
  document.querySelectorAll('.card, article, .wish-card').forEach(card => {
    if (card.matches('.pet-card, .wish-card') || card.querySelector('a[href*="product.html"], a[href*="pet="]')) {
      card.classList.add('animal-profile-card');
    }
  });

  // Появление секций и карточек при прокрутке
  const revealTargets = document.querySelectorAll('main > section, main > .row, main > form, main > .alert, .pet-card, .step-card, .volunteer-card, .wish-card, .stats-grid__item, .review-card');
  revealTargets.forEach(el => el.classList.add('js-reveal'));
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
    revealTargets.forEach(el => revealObserver.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

  // Небольшой переход между локальными страницами
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') ||
        link.target === '_blank' || link.hasAttribute('data-bs-toggle') ||
        /^(https?:|javascript:)/i.test(href)) return;
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname && url.search === window.location.search) return;
      event.preventDefault();
      document.body.classList.add('page-leaving');
      window.setTimeout(() => { window.location.href = url.href; }, 180);
    });
  });

  // Отзывы: демонстрационные записи + пользовательские отзывы в localStorage.
  const reviewList = document.getElementById('allReviewsList');
  if (reviewList) {
    const starterReviews = [
      {name:'Анна К.', topic:'Знакомство с питомцем', rating:5, text:'Очень удобно, что в анкете сразу можно узнать характер питомца и особенности ухода. Благодаря этому мы нашли своего хвостатого друга.'},
      {name:'Максим Р.', topic:'Помощь приюту', rating:5, text:'Понравилось, что можно не только выбрать животное, но и адресно помочь приюту. Всё понятно и без лишних шагов.'},
      {name:'Екатерина С.', topic:'Выбор питомца', rating:5, text:'Подробные фотографии и описание помогли подготовиться к знакомству. Теперь дома появился новый член семьи.'},
      {name:'Дмитрий П.', topic:'Каталог животных', rating:5, text:'Удобный каталог, фильтры и понятные анкеты. Смогли быстро подобрать собаку по характеру и размеру.'},
      {name:'Мария В.', topic:'Усыновление', rating:5, text:'Очень душевный проект. Координаторы ответили на вопросы, а процесс знакомства прошёл спокойно и комфортно.'},
      {name:'Илья Н.', topic:'Работа сервиса', rating:4, text:'Понравилась идея сервиса и возможность помочь животным даже если пока не готов взять питомца домой.'}
    ];
    const stored = () => { try { return JSON.parse(localStorage.getItem('pethome_reviews') || '[]'); } catch (_) { return []; } };
    const escapeHtml = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
    const renderReviews = () => {
      const reviews = [...stored(), ...starterReviews];
      reviewList.innerHTML = reviews.map(r => `<div class="col-12 col-md-6 col-lg-4"><article class="review-card h-100"><div class="review-stars mb-3" aria-label="${r.rating} из 5 звёзд">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div><p class="mb-4">«${escapeHtml(r.text)}»</p><div class="d-flex align-items-center gap-3"><div class="review-avatar">${escapeHtml(r.name.split(/\s+/).map(x=>x[0]).slice(0,2).join('').toUpperCase())}</div><div><strong class="d-block">${escapeHtml(r.name)}</strong><span class="review-note">${escapeHtml(r.topic || 'Отзыв о PetHome')}</span></div></div></article></div>`).join('');
      const count = document.getElementById('reviewsCount'); if (count) count.textContent = reviews.length;
    };
    renderReviews();
    const form = document.getElementById('reviewForm');
    if (form) form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const entry = {name:data.get('reviewName').trim(), topic:data.get('reviewTopic').trim(), rating:Number(data.get('reviewRating')), text:data.get('reviewText').trim(), createdAt:new Date().toISOString()};
      const reviews = stored(); reviews.unshift(entry); localStorage.setItem('pethome_reviews', JSON.stringify(reviews));
      form.reset(); renderReviews();
      const notice = document.getElementById('reviewNotice');
      if (notice) { notice.className = 'alert alert-success mt-3'; notice.textContent = 'Спасибо! Ваш отзыв добавлен и отображается в списке.'; }
    });
  }

});

// Компактная плавающая шапка появляется после небольшого скролла.
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  let ticking = false;
  const updateNavState = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 90);
    ticking = false;
  };
  updateNavState();
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNavState);
      ticking = true;
    }
  }, { passive: true });
});
