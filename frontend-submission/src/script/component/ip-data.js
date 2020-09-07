class IpData extends HTMLElement{

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "closed"});
    }

    set data(data){
        this._data = data;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
                .card-side{
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 5px;
                    max-width: 300px;
                    overflow: hidden;
                    margin: 30px auto;
                    font-size: 18px;
                    background-color: #ffffff;
                    font
                }
                
                .ip-span{
                    text-align: center;
                    font-size: 30px;
                    padding: 5px;
                    margin-bottom: 5px;
                    background-color: rgb(119, 9, 146);
                    color: white;
                }
                
                td{
                    padding-left: 20px;
                    margin-top: 10px;
                }
                
                table{
                    margin: 10px auto;
                }

                .at{
                    font-size: 30px;
                    padding: 5px 0px;
                }
                
                .sunset-title, .sunrise-title, .at{
                    text-align: center;
                }
                
                .sunrise-title{
                    background-color: #59f3c5;
                    color: white;
                }
                
                .sunset-title{
                    background-color: #e95339;
                    color: white;
                }
                
                img{
                    width: 300px;
                    height: 300px;
                }
                
                .sun-bg{
                    background-color: #72e5f5;
                }
                
            </style>

            <div class="ipresult">
                <div class="card-side">
                    <div class="ip-span">
                        <p><strong>Your IP</strong></p>
                        <p>${this._data.location.ip}</p>
                    </div>
                    <table>
                        <tr>
                            <td>Country</td>
                            <td>: ${this._data.location.country_name}</td>
                        </tr>
                        <tr>
                            <td>State Prov</td>
                            <td>: ${this._data.location.state_prov}</td>
                        </tr>
                        <tr>
                            <td>District</td>
                            <td>: ${this._data.location.district}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>: ${this._data.location.city}</td>
                        </tr>
                        <tr>
                            <td>Latitude</td>
                            <td>: ${this._data.location.latitude}</td>
                        </tr>
                        <tr>
                            <td>Longitude</td>
                            <td>: ${this._data.location.longitude}</td>
                        </tr>
                    </table>
                </div>

                <div class="card-side">
                    <div class="sunrise-title">
                        <strong>Sunrise</strong>
                    </div>
                    <div class="at">
                        ${this._data.sunrise}
                    </div>
                </div>
                <div class="card-side">
                    <div class="sunset-title">
                        <strong>Sunset</strong> 
                    </div>
                    <div class="at">
                        ${this._data.sunset}
                    </div>
                </div>

                <div class="card-side">
                    <div class="cover-animation sun-bg">
                        <img src="../../images/sun.gif" alt="sun">
                    </div>
                    <table>
                        <tr>
                            <td>Altitude</td>
                            <td>${this._data.sun_altitude.toFixed(5)}</td>
                        </tr>
                        <tr>
                            <td>Distance</td>
                            <td>${this._data.sun_distance.toFixed(5)}</td>
                        </tr>
                        <tr>
                            <td>Azimuth</td>
                            <td>${this._data.sun_azimuth.toFixed(5)}</td>
                        </tr>
                    </table>
                </div>

                <div class="card-side">
                    <div class="cover-animation">
                        <img src="../../images/moon.gif" alt="moon">
                    </div>
                    <table>
                        <tr>
                            <td>Altitude</td>
                            <td>${this._data.moon_altitude.toFixed(5)}</td>
                        </tr>
                        <tr>
                            <td>Distance</td>
                            <td>${this._data.moon_distance.toFixed(5)}</td>
                        </tr>
                        <tr>
                            <td>Azimuth</td>
                            <td>${this._data.moon_azimuth.toFixed(5)}</td>
                        </tr>
                    </table>
                </div>
            </div>    
        `
    }

    renderError(message){
        this.shadowDOM.innerHTML = `
        <style>
             .placeholder {
                   font-weight: lighter;
                   color: rgba(0,0,0);
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("ip-data", IpData);