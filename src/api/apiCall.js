import ApiManger from "./config";

export const signUp = async data => {
    try {
        const result = await ApiManger("/auth/signup", {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            data: data
        })
        return result.data
    }

    catch(error) {
        return error.response.data;
    }
}

export const signIn= async data => {
    try {
        const result = await ApiManger("/auth/login", {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            data: data
        })
        return result.data
    }

    catch(error) {
        return error.response.data;
    }
}