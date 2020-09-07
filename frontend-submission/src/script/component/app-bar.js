class AppBar extends HTMLElement{
    
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "closed"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
                .parallax{
                    position:relative;
                    background-position:center;
                    background-size:cover;
                    background-repeat:no-repeat;
                    background-attachment:fixed;
                    background-image:url('../../images/parallax-img.jpg');
                    min-height:300px;
                    z-index: 0;
                }
                
                .ptext{
                    position: absolute;
                    top: 10%;
                    width: 100%;
                    text-align: center;
                    color: #ffffff;
                    font-size: 50px;
                    letter-spacing: 8px;
                    text-transform: uppercase;
                    font-weight: bolder;
                }

                @media screen and (max-width: 768){
                    .ptext{
                        font-size: 20px;
                    }
                }
                
                @media screen and (max-width: 576px){
                    .ptext{
                        font-size: 20px;
                    }
                }
            </style>


            <div class="parallax">
                <div class="ptext">
                    Today's Solar & Lunar Position
                </div>
            </div>
        `;
    }
}

customElements.define("app-bar", AppBar);