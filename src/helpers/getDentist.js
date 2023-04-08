export const getAllDentist = async() => {
    const url = `https://jsonplaceholder.typicode.com/users`
    const resp =  await fetch(url);
    const  [...data]  =  await resp.json();
    return data;
}

export const getDentisById = async(id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`
    const resp =  await fetch(url);
    return await resp.json();
}