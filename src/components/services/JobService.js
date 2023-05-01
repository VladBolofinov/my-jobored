class JobService {
    _apiBase = 'https://startup-summer-2023-proxy.onrender.com/';
    _inputData = '?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948&hr=0';
    _secretKey = 'GEU4nvd3rej*jeh.eqp';
    _secondHeader = 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';

    getResource = async (url, header) => {
        let res = await fetch(url, header);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getToken = () => {
        return this.getResource(`${this._apiBase}2.0/oauth2/password/${this._inputData}`,
            {
                headers: {
                    'x-secret-key': `${this._secretKey}`,
                }
            });
    }
    getVacancies = () => {
        return this.getResource(`${this._apiBase}2.0/vacancies/`,
            {
                method: 'GET',
                headers: {
                    'x-secret-key': `${this._secretKey}`,
                    'X-Api-App-Id': `${this._secondHeader}`
                }
            });
    }
    getCatalogues = async () => {
        const res = await this.getResource(`${this._apiBase}2.0/catalogues/`,
            {
                headers: {
                    'x-secret-key': `${this._secretKey}`,
                }
            });
        return this.transformDataCatalogues(res);
    }

    transformDataCatalogues = (res) => {
        const arrData = [];
        res.forEach(item => {
            arrData.push(item.title);
        });
        return arrData;
    }

    transformDataVacancies = () => {

    }

//ПЕРЕПИШИ ЭТО ВСЕ НА ХУК А НЕ КЛАСС

}

export default JobService;