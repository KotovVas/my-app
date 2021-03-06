import React from 'react'
import logo from './img/logo.jpg'
const Company = () =>{
    return(
        <div className="about-company">
        <div className="text">
          Систе́ма комплеме́нта —
          комплекс защитных белков, постоянно присутствующих в крови. Это каскадная система протеолитических ферментов, предназначенная для гуморальной защиты организма от действия чужерета организма. Является важным компонентом как врождённого, так и приобретённого иммунитета. Выделяют три основных пути активации системы комплемента: классический, альтернативный[en] и лектиновый. Для запуска классического пути комплемента необходима опсонизация чужеродной клетки антителами, а альтернативный и лектиновый пути могут активироваться в отсутствие антител. Поздние стадии у всех трёх путей активации системы комплемента одинаковы и включают образование мембраноатакующего комплекса, который нарушает целостность мембраны клетки-патогена и приводит к её гибели.
		    </div>
        <div className="image">
          <img src={logo} />
        </div>
      </div>
    )
}
export default Company