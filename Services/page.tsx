
const url = "https://api.thecatapi.com/v1/breeds"

const ApiQueries = {

    getAllBreeds: async () => {

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if(!response.ok){
            throw new Error (response.statusText);
        }
        return response.json();
    },

    getBreedById: async (id: number) => {
        
        const response = await fetch(url + `/${id}`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if(!response.ok){
            throw new Error(response.statusText);
        }
        return response.json();
    }


}
export default ApiQueries;