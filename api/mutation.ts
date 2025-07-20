import { STRAPI_BASE_URL_WITH_API } from "@/lib/config"

const getMutationPath = (path: string) => {
    return `${STRAPI_BASE_URL_WITH_API}/${path}`
}

const mutation = async (path: string, body: string) => {
    return fetch(getMutationPath(path), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body
    })
}

export default mutation