import React from 'react'
import member from './img/member1.jpg'
const Team = () => {
    return(
        <div className="team">
        <h2>Команда</h2>
        <p>Не стоит прогибать под изменчивый мир</p>
        <div className="member">
          <img src={member} />
          <h3>Слава Федоров</h3>
          <p className="position">Директор</p>
          <p className="description">
            Люблю создавать технологичные продукты и выводить их на новые рынки.
      </p>
          <a href="mailto:hello@hwschool.online">Напиши мне</a>
        </div>
        <div className="member">
          <img src={member} />
          <h3>Слава Федоров</h3>
          <p className="position">Директор</p>
          <p className="description">
            Люблю создавать технологичные продукты и выводить их на новые рынки.
      </p>
          <a href="mailto:hello@hwschool.online">Напиши мне</a>
        </div>
        <div className="member">
          <img src={member} />
          <h3>Слава Федоров</h3>
          <p className="position">Директор</p>
          <p className="description">
            Люблю создавать технологичные продукты и выводить их на новые рынки.
      </p>
          <a href="mailto:hello@hwschool.online">Напиши мне</a>
        </div>

      </div>
    )
}
export default Team