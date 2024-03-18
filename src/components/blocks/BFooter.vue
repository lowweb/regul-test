<script setup></script>

<template>
  <footer class="footer">
    <p class="footer__copy">© Annonce 2023</p>
    <ul class="footer__pages">
      <li>
        <a href="/" class="footer__link">Документы</a>
      </li>
      <li>
        <a href="/" class="footer__link">О компании</a>
      </li>
      <li>
        <a href="/" class="footer__link footer__link--mob">Продавцам</a>
      </li>
      <li>
        <a href="/" class="footer__link footer__link--mob">Покупателям</a>
      </li>
      <li>
        <a href="/" class="footer__link footer__link--mob">Разместить объявление</a>
      </li>
    </ul>
    <p class="footer__lang">Русский</p>
  </footer>
</template>

<style lang="scss">
.footer {
  display: flex;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 15px;
  line-height: 160%;
  color: var(--color-dark-grey);
  padding: 24px 32px 40px 32px;
  border-top: 1px solid #dbdbdb;
  background: var(--color-dark-grey2);
  gap: 20px;

  &__copy {
    color: var(--color-light-black);
  }

  &__pages {
    display: flex;
    list-style: none;
    gap: 20px;
  }
  &__link {
    color: inherit;
    text-decoration: none;
    &--mob {
      display: none;
    }
  }

  &__lang {
    display: none;
    color: var(--color-light-black);
    &::before {
      content: '';
      background-image: url('@/assets/icn/icn-flag.svg');
      background-size: cover;
      width: 16px;
      height: 16px;
      object-fit: cover;
      display: block;
      margin-right: 6px;
    }
  }
}

@media screen and (max-width: 933px) {
  .footer {
    flex-direction: column;
    padding: 24px 16px 40px 16px;

    &__pages {
      flex-direction: column;
    }

    &__link {
      &--mob {
        display: block;
      }
    }

    &__lang {
      display: flex;
      align-items: center;
    }
  }
}
</style>
