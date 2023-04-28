class TestService {
    _apiBase = 'https://startup-summer-2023-proxy.onrender.com/';
    _inputData = '?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948&hr=0';
    _secretKey = 'GEU4snvd3rej*jeh.eqp';

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
                //method: 'GET',
                headers: {
                    'x-secret-key': `${this._secretKey}`,
                    //'Authorization': 'Bearer v3.r.137440105.1f7a7f9f21782885440683226ceeb55cb42abd22.c83fee25f49c5d2d6ff16e3320166e530634f1a6'
                }
            });
    }
    getVacancies = () => {
        return this.getResource('https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/',
            {
                method: 'GET',
                headers: {
                    'x-secret-key': `${this._secretKey}`,
                    'Authorization': 'Bearer v3.r.137440105.1f7a7f9f21782885440683226ceeb55cb42abd22.c83fee25f49c5d2d6ff16e3320166e530634f1a6'
                }
            });
    }
    getCatalogues = async () => {
        const res = await this.getResource(`${this._apiBase}2.0/catalogues/`,
            {
                method: 'GET',
                headers: {
                    'x-secret-key': `${this._secretKey}`,
                    'Authorization': 'Bearer v3.r.137440105.1f7a7f9f21782885440683226ceeb55cb42abd22.c83fee25f49c5d2d6ff16e3320166e530634f1a6'
                }
            });
        return this.transformDataCatalogues(res);
    }

    transformDataCatalogues = (res) => {
        const arrData = [];
        res.forEach(item => {
            arrData.push(item.title);
        });
        console.log(arrData);
    }

//ПЕРЕПИШИ ЭТО ВСЕ НА ХУК А НЕ КЛАСС

}

export default TestService;