
const url = process.env.CAT_API_URL;
const key = process.env.CAT_API_KEY;

const ApiQueries = {

    getAllBreeds: async () => {

        const response = await fetch(`https://api.thecatapi.com/v1/breeds`, {
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
        
        const response = await fetch(url + `breeds/${id}`,{
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