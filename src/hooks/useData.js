import { useEffect, useState } from 'react';
import md5 from 'md5';

const useData = (method, url, body = null, userSecret, userKey) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (url !== '/signup') {
          const headers = new Headers();
          headers.append('Key', userKey);

          if (body) {
            const bodyJson = JSON.stringify(body);
            const stringToSign = `${method}+${url}+${bodyJson}+${userSecret}`;
            const sign = md5(stringToSign);
            headers.append('Sign', sign);
            headers.append('Content-Type', 'application/json');
          } else {
            const stringToSign = `${method}+${url}++${userSecret}`;
            const sign = md5(stringToSign);
            headers.append('Sign', sign);
          }

          const requestOptions = {
            method: method,
            headers: headers,
            body: body ? JSON.stringify(body) : null,
            redirect: 'follow',
          };

          const response = await fetch(url, requestOptions);
          const result = await response.text();
          setData(result);
        } else {
          const myHeaders = new Headers();
          myHeaders.append("Key", "{Key}");
          myHeaders.append("Sign", "{Sign}");
          myHeaders.append("Content-Type", "application/json");

          let raw = JSON.stringify({
            "name": "Jackson",
            "email": "jackson@gmail.com",
            "key": "MyKey",
            "secret": "MySecret"
          });

          let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };

          fetch("/signup", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [method, url, body]);

  return { data, error };
};



export default useData;
