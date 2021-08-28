import React from 'react'
const Contact = ()=>{
    return(
        <div className="contact">
        <h2>Контакты</h2>
        <p>Не будьте скромными, пишите нам:</p>

        <p className="contact-info contact-address">
          Москва, звонят колокола
    </p>
        <p className="contact-info contact-phone">
          Телефон: <a href="tel:+79956001951">+7(995)600-19-51</a>
        </p>
        <p className="contact-info contact-mail">
          Email: <a href="mailto:hello@hwschool.online">hello@hwschool.online</a>
        </p>
        <form>
          <p>
            <input type="text" placeholder="Имя" name="name" />
          </p>
          <p>
            <input type="text" placeholder="Email" name="email" />
          </p>
          <p>
            <input type="text" placeholder="Тема" name="subject" />
          </p>
          <p>
            <input type="text" placeholder="Сообщения" name="message" />
          </p>
          <p>
            <button>
              Отправить сообщение
        </button>
          </p>
        </form>
      </div>
    )
}
export default Contact