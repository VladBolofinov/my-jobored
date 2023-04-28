import React, { useState, useEffect } from 'react';
const JobService = () => {

    const _apiBase = 'https://startup-summer-2023-proxy.onrender.com/',
          _inputData = '?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948&hr=0',
          _headerKey = 'GEU4snvd3rej*jeh.eqp';

    const getToken = fetch(`${_apiBase}2.0/oauth2/password/${_inputData}`, {
        headers: {
            'x-secret-key': _headerKey
        }
    })
        .then(response => response.json())
        .then(res => {
            console.log(res);
        })
        .catch(error => console.log(error));


    const request2 = fetch('https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/', {
        headers: {
            //'X-Api-App-Id': 'GEU4nvd3rej*jeh.eqp',
            //'Authorization': 'Bearer v3.r.137440105.1f7a7f9f21782885440683226ceeb55cb42abd22.c83fee25f49c5d2d6ff16e3320166e530634f1a6'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

    return (
        <div>
            {/*{data && <p>{data.message}</p>}*/}
        </div>
    );
}
export default JobService;