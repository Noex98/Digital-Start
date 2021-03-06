import Header from "../components/Header.js"
import Spinner from "../components/Spinner.js"
import { cities } from "../Store.js"
import Link from "../utils/Link.js"

export default function Home(){

    let city_data = cities.get()
    if (city_data.loaded === false){
        return Spinner()
    }

    function returnCities(){
        let output = ""
        for (const city of city_data){
            output += (/*html*/`
                <div class="home__city">
                    <h3>${city.name.da}</h3>
                    <img src="${city.img.url}" alt="${city.img.alt}" />
                    <p>${city.description.short}</p>
                    ${Link('/city?' + city.name.en, /*html*/`
                        <div class="btn1">SE MERE<i class="fas fa-chevron-right"></i></div>
                    `)}
                </div>
            `)
        }

        return output
    }

    return (/*html*/`
        ${Header()}
        <div class="root__home">
            <h2>Where are Denmark's best places to go?</h2>
            ${returnCities()}
        </div>
    `)
}