class SearchBar extends HTMLElement {
    
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "closed"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
                .search-container{
                    background: rgb(159,30,177);
                    background: linear-gradient(90deg, rgba(159,30,177,1) 26%, rgba(0,212,255,1) 100%);
                    border-radius: 5px; 
                    text-align: center;
                    padding: 0px;
                    width: 300px;
                    margin: 0px auto;
                    box-shadow: 5px 5px 20px #7cb5ff, 0 0 0 20px #ffffffeb;
                }
                
                input[type="search"]{
                    width: 200px;
                    background: transparent;
                    margin: 5px;
                    border: none;
                    padding: 10px;
                    color: white;
                    font-weight: bolder;
                    font-size: 20px;
                }
                
                button[type="submit"]{
                    text-align: center;
                    font-size: 30px;
                    width: 40px;
                    background: transparent;
                    cursor: pointer;
                    border: none;
                    color: #ffffff;
                }
                
                ::placeholder {
                    color: rgba(246, 240, 247, 0.548);
                    opacity: 1; /* Firefox */
                }
                
                :-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: rgba(246, 240, 247, 0.548);
                }
                
                ::-ms-input-placeholder { /* Microsoft Edge */
                color: rgba(246, 240, 247, 0.548);
                }
            </style>

            <div id="search-container" class="search-container">
                <input placeholder="Search city name" id="searchElement" type="search">
                <button id="searchButtonElement" type="submit"><strong>&#x2192;</strong></button>
            </div>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);