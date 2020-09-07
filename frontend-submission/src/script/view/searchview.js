import '../component/search-bar.js';
import SearchResult from '../data/search-result.js';

const searchBarElement = document.querySelector("search-bar");
const searchDataElement = document.querySelector(".data");

const dataFromSearch = () => {
    const getResult = async () => {
        try{
            const result = await SearchResult.searchCity(searchBarElement.value);
            showDataSearch(result);
        }catch(message){
            console.log(message);
        }   
    }

    searchBarElement.clickEvent = getResult;
};


const showDataSearch = (result) => {
    searchDataElement.innerHTML = `
        <style>
            .sunrise{
                background: url('../../images/sunrise.png');
            }
            
            .sunset{
                background: url('../../images/sunset.png');
            }

            .sun{
                background: url('../../images/sun.png');
            }
            
            .moon{
                background: url('../../images/moon.png');
            }

        </style>

        <div class="city-result">
            <div class="city-info">
                <div class="city-name">
                    <h1>${result.location.location}</h1>
                </div>
                <div class="city-kor">
                    <div class="latitude">
                        <h5>Latitude</h5>
                        ${result.location.latitude.toFixed(5)}
                    </div>
                    <div class="longitude">
                        <h5>Longitude</h5>
                        ${result.location.longitude.toFixed(5)}
                    </div>
                </div>
            </div>
            <div class="sunrise-sunset">
                <div class="card">
                    <div class="sun-img sunrise"></div>
                    <div class="card-content">
                        <h3>Sunrise</h3>
                        <p>${result.sunrise}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="sun-img sunset"></div>
                    <div class="card-content">
                        <h3>Sunset</h3>
                        <p>${result.sunset}</p>
                    </div>
                </div>
            </div>
            <div class="details">
                <div class="covers">
                    <div class="sun-img sun"></div>
                    <div class="sun-img moon"></div>
                </div>
                <div class="detail-p">
                    <h3>Altitude</h3>
                    <p>The angle of the sun/moon relative to the Earth's horizon, and is measured in degrees.</p>
                </div>
                <div class="comparison">
                    <div class="side sun-side">${result.sun_altitude.toFixed(5)}</div>
                    <div class="side moon-side">${result.moon_altitude.toFixed(5)}</div>
                </div>
                <div class="detail-p">
                    <h3>Distance</h3>
                    <p>Distance of the sun/moon, in kilometers</p>
                </div>
                <div class="comparison">
                    <div class="side sun-side">${result.sun_distance.toFixed(0)}</div>
                    <div class="side moon-side">${result.moon_distance.toFixed(0)}</div>
                </div>
                <div class="detail-p">
                    <h3>Azimuth</h3>
                    <p>Defines the sun/moon relative direction along the local horizon</p>
                </div>
                <div class="comparison">
                    <div class="side sun-side">${result.sun_azimuth.toFixed(5)}</div>
                    <div class="side moon-side">${result.moon_azimuth.toFixed(5)}</div>
                </div>
            </div>
        </div>
`;
};

export default dataFromSearch;