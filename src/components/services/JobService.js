class JobService {
    _apiBase = 'https://startup-summer-2023-proxy.onrender.com/';
    _inputData = '?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948&hr=0';
    _secretKey = 'GEU4nvd3rej*jeh.eqp';
    _secondHeader = 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';
    _token = '';

    getResource = async (url, header) => {
        let res = await fetch(url, header);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getToken = async () => {
        const res = await this.getResource(`${this._apiBase}2.0/oauth2/password/${this._inputData}`,
            {
                headers: {
                    'x-secret-key': `${this._secretKey}`,
                }
            });
        this._token = res.access_token;
        if (!this._token) {
            throw new Error('Failed to get access token');
        }
        //console.log(this._token);
        //console.log(res);
        return res.access_token;
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
        const arrKeys = [];
        res.forEach(item => {
            arrData.push(item.title);
            arrKeys.push(item.key);
        });
        return {
            name: arrData,
            keys: arrKeys
        };
    }

    getVacancies = async (keyword='',
                          fromValue = 0,
                          toValue=0,
                          workId=0) => {

        if (!this._token) {
            await this.getToken();
        }

        const res = await this.getResource(`${this._apiBase}2.0/vacancies/?keyword=${keyword}&payment_from=${fromValue}&payment_to=${toValue}&published=1&catalogues=${workId}&page=1&count=20`,
            {
                method: 'GET',
                headers: {
                    'x-secret-key': `${this._secretKey}`,
                    'X-Api-App-Id': `${this._secondHeader}`,
                    Authorization: `Bearer ${this._token}`
                }
            });
        console.log(res);
        //console.log(this._token);
        return res.objects.map(this.transformDataVacancies) //;
    }

    transformDataVacancies = (res) => {
        return {
            id: res.id,
            prof: (res.profession.length > 60) ? res.profession.slice(0, 60) + '...' : res.profession,
            companyName: res.firm_name,
            town: res.town.title,
            professionType: res.catalogues[0].title,//бывает не отображает эту графу
            workType: res.type_of_work.title,
            curr: res.currency,
            paymentTo: res.payment_to,
            paymentFrom: res.payment_from,
            vacancyDescr: res.vacancyRichText
        };
    }


//ПЕРЕПИШИ ЭТО ВСЕ НА ХУК А НЕ КЛАСС

}

export default JobService;