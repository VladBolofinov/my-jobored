import React, { useState, useEffect } from 'react';
const JobService = () => {

    const _apiBase = 'https://startup-summer-2023-proxy.onrender.com/',
          _inputData = '?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2231&client_secret=v3.r.137440105.399b9c5f19384345afe0ad0339e619e71c66af1d.800f8642a38256679e908c370c44267f705c2909&hr=0',
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