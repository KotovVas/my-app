import React from'react'

const Prices= () =>{
    return(
        <div className="prices">
        <h2>Тарифы</h2>
        <p>Платите нам столько, сколько хотите. Главное платите :-)</p>
        <ul className="tariff">
          <li className="tariff-name">Базовый</li>
          <li><span className="important">10</span> лайков</li>
          <li><span className="important">10</span> репостов</li>
          <li><span className="important">10</span> комментариев</li>
          <li><span className="important">И еще важный</span> пункт</li>
          <li>
            <p className="price">25 рублей</p>
            <p className="period">в день</p>
          </li>
          <li>
            <a href="#">Купить</a>
          </li>
        </ul>
        <ul className="tariff">
          <li className="tariff-name best">Про</li>
          <li><span className="important">20</span> лайков</li>
          <li><span className="important">20</span> репостов</li>
          <li><span className="important">20</span> комментариев</li>
          <li><span className="important">Тоже важный</span> пункт</li>
          <li>
            <p className="price">50 рублей</p>
            <p className="period">в день</p>
          </li>
          <li>
            <a href="#">Купить</a>
          </li>
        </ul>
        <ul className="tariff">
          <li className="tariff-name">Премиум</li>
          <li><span className="important">50</span> лайков</li>
          <li><span className="important">50</span> репостов</li>
          <li><span className="important">50</span> комментариев</li>
          <li><span className="important">Мега важный </span> пункт</li>
          <li>
            <p className="price">100 рублей</p>
            <p className="period">в день</p>
          </li>
          <li>
            <a href="#">Купить</a>
          </li>
        </ul>
      </div>
    )
}
export default Prices