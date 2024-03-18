import { createServer } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = 'api'

      this.get('/company-main-info', () => ({
        name: 'Наследие',
        logo: 'img-company-logo.png'
      }))

      this.get('/company-rating-review', () => ({
        docCheckStatus: true,
        rating: 4.7,
        review: 19
      }))

      this.get('/company-about', () => ({
        about:
          'Копкой занимаемся 15 лет. Все началось с хобби и плавно переросло в любимую работу. Работаем с профессиональной техникой. ',
        time: 'Сегодня с 8:00 до 23:00',
        addres: 'Ростов на Дону, Воронежская ул., 42А корп. 1'
      }))

      this.get('/agents', () => [
        {
          id: 1,
          fullName: 'Дмитрий Хитрый',
          img: 'img-agent1.png',
          docCheckStatus: true,
          rating: 4.7,
          reviews: 19,
          info: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания текста до самого конца чтобы мо...'
        },
        {
          id: 2,
          fullName: 'Апполинарий Землеперекопский',
          img: 'img-agent2.png',
          docCheckStatus: true,
          rating: 0,
          reviews: 0,
          info: 'Помог справиться с потерей и организовать похороны для 126 семей.'
        },
        {
          id: 3,
          fullName: 'Фёдор Сумкин',
          img: 'img-agent3.png',
          docCheckStatus: true,
          rating: 4.7,
          reviews: 19,
          info: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания текста до самого конца чтобы мо...'
        },
        {
          id: 4,
          fullName: 'Василий Копушин',
          img: 'img-agent4.png',
          docCheckStatus: true,
          rating: 4.7,
          reviews: 19,
          info: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания текста до самого конца чтобы мо...'
        },
        {
          id: 5,
          fullName: 'Феофан Кусакин',
          img: 'img-agent5.png',
          docCheckStatus: true,
          rating: 4.3,
          reviews: 19,
          info: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания текста до самого конца чтобы мо...'
        },
        {
          id: 6,
          fullName: 'Василиса Землеперекопская',
          img: 'img-agent6.png',
          docCheckStatus: true,
          rating: 0,
          reviews: 0,
          info: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания текста до самого конца чтобы мо...'
        }
      ])

      this.get('/goods', () => [
        {
          id: 1,
          name: 'Сlavia Nord Grand сценическое цифровое пианино',
          price: '450 500 ₽',
          dateStatus: '2 дня',
          reviews: 750,
          status: 'pulling',
          img: 'img-piano.png'
        },
        {
          id: 2,
          name: 'Hyundai Sonata 2.0 AT, 2023, 30 км',
          price: '3 285 000 ₽',
          dateStatus: '4 дня',
          reviews: 255,
          status: 'pull',
          img: 'img-car.png'
        },
        {
          id: 3,
          name: '2-к. квартира, 46 м², 1/5 эт.',
          price: '4 800 000 ₽',
          dateStatus: '2 дня',
          reviews: 255,
          status: 'pull',
          img: 'img-house.png'
        },
        {
          id: 4,
          name: 'Старые барабаны',
          price: '7 500 ₽',
          dateStatus: '3 дня',
          reviews: 750,
          status: 'pull',
          img: 'img-drum.png'
        },
        {
          id: 5,
          name: 'DMX сплиттер RJ45 to 4x XLR Stairville',
          price: '7 500 ₽',
          dateStatus: '2 дня',
          reviews: 750,
          status: 'pull',
          img: 'img-dmx.png'
        },
        {
          id: 6,
          name: 'Мотоцикл honda',
          price: '217 500 ₽',
          dateStatus: '3 дня',
          reviews: 300,
          status: 'pulling',
          img: 'img-moto-01.png'
        },
        {
          id: 7,
          name: 'Иж юпитер 5',
          price: '17 900 ₽',
          dateStatus: '2 дня',
          reviews: 200,
          status: 'pulling',
          img: 'img-moto-02.png'
        },
        {
          id: 8,
          name: 'Пылесос кёрхер с водяным мешком для сбора пыли',
          price: '7 500 ₽',
          dateStatus: '2 дня',
          reviews: 200,
          status: 'hide',
          img: 'img-karcher.png'
        }
      ])
    }
  })

  return server
}
