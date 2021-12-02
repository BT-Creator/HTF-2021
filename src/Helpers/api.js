export async function call(endpoint, method = 'GET') {
    return new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_BASE_URL}${endpoint}`, {
                method: method,
                headers: {
                    Authorization:"basic " + window.btoa(process.env.REACT_APP_USERNAME + ":" + process.env.REACT_APP_PASSWORD)
                }
            }).then(response => resolve(response.json()))
                .catch(response => reject(response.json()))
        }
    )
}