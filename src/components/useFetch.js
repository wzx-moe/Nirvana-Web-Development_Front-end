import {useEffect, useMemo, useState} from "react";

const useFetch = (method, url, body) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const headers = useMemo(() => {
        const headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });
        if (localStorage.getItem('token')) {
            headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'))
        }
        return headers;
    }, [])


    method = method.toUpperCase();
    if (method === 'GET') {
        // fetch的GET不允许有body，参数只能放在url中
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }

    const request = useMemo(() => {
        return new Request(url, {
            method,
            mode: "cors",
            headers,
            body,
            credentials: "include",
        });
    }, [body, headers, method, url]);

    useEffect(() => {
        setError(null);
        setData(null);
        setIsPending(true);
        setTimeout(() => {
            if (url !== null) {
                fetch(request)
                    .then(res => {
                        if (!res.ok) {
                            throw Error(res.status + " " + res.statusText);
                        }
                        return res.json();
                    })
                    .then(data => {
                        if (!data.success) {
                                throw Error(data.message);
                        }
                        setData(data.data);
                        setIsPending(false);
                    })
                    .catch(err => {
                        localStorage.clear()
                        setIsPending(false);
                        setError(err.message);
                    })
            } else {
                setIsPending(false)
            }
        }, 0)
    }, [url, request])
    return {data, isPending, error}
}

export default useFetch;