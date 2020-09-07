import '../component/ip-data.js';
import IpData from '../data/ip-result.js';

const ipDataElement = document.querySelector("ip-data");

const dataFromIP = async () => {
    try{
        const result = await IpData.getFromIP();
        renderIpResult(result);
    }catch(message){
        fallbackIpResult(message);
    }
}

const renderIpResult = result => {
    ipDataElement.data = result;
}

const fallbackIpResult = message => {
    ipDataElement.renderError(message);
}

export default dataFromIP;