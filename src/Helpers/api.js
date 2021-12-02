export async function call(endpoint, method = 'GET', body = undefined) {
    return new Promise((resolve, reject) => {
            const options = {
                method: method,
                headers: {
                    Authorization: "basic " + window.btoa(process.env.REACT_APP_USERNAME + ":" + process.env.REACT_APP_PASSWORD)
                }
            }
            if (body) {
                options.body = JSON.stringify(body);
                options.headers['Content-Type'] = 'application/json'
            }
            fetch(`${process.env.REACT_APP_BASE_URL}${endpoint}`, options)
                .then(response => resolve(response.json()))
                .catch(response => reject(response.json()))
        }
    )
}