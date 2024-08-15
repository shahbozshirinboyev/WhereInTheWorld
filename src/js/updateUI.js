const cardsEl = document.querySelector('.cards');

export const createCountries = (countries) => {
    cardsEl.innerHTML = '';
    countries.forEach((country) => {
        const flag = country.flags.svg
        const commonName = country.name.common;
        const population = country.population;
        const region = country.region;
        const capital = country.capital ? country.capital[0] : 'No Capital';

        // create List items
        const li = document.createElement('li');
        li.classList.add('cards__item');
        li.innerHTML = 
        `
        <a href="./about.html">
                <img src=${flag} alt="algeria-flag" width="267" height="160">
                <div class="cards__item-inner">
                    <h3 class="cards__title">${commonName}</h3>
                    <p class="population">Population: <span>${population}</span></p>
                    <p class="region">Region: <span>${region}</span></p>
                    <p class="capital">Capital: <span>${capital}</span></p>
                </div>
        </a>
        `;
        //ul add
        cardsEl.appendChild(li);
    });
};

/*
<li class="cards__item">
                    <a href="./about.html">
                        <img src="./images/jpg/algeria-flag.jpg" alt="algeria-flag" width="267" height="160">
                        <div class="cards__item-inner">
                            <h3 class="cards__title">Algeria</h3>
                            <p class="population">Population: <span>40,400,000</span></p>
                            <p class="region">Region: <span>Africa</span></p>
                            <p class="capital">Capital: <span>Algiers</span></p>
                        </div>
                    </a>
</li>
*/