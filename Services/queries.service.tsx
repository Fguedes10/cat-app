
const url = "http://localhost:8080/api/v1/";

const QueriesService = {

    //GET
    
  getAll: async (endpoint: string) => {

    const response = await fetch(url + endpoint + "/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        
    });
        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    },


    getById: async (endpoint: string, id: string) => {

        const response = await fetch(url + endpoint + "/" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            
        });
            if (!response.ok) {
                throw new Error(response.statusText);
            }

            return response.json();
    },

    getPets: async (data : FormData) => {

        const searchCriteria = {
            speciesNames: data.getAll("speciesNames").length > 0 ? data.getAll("speciesNames") : null, 
            breedNames: data.getAll("breedNames").length > 0 ? data.getAll("breedNames") : null,     
            colorNames: data.getAll("colorNames").length > 0 ? data.getAll("colorNames") : null,    
            gender: data.get("gender") || null,                 
            coats: data.getAll("coats").length > 0 ? data.getAll("coats") : null,                
            sizes: data.getAll("sizes").length > 0 ? data.getAll("sizes") : null,                
            ages: data.getAll("ages").length > 0 ? data.getAll("ages") : null,                 
            isAdopted: data.get("isAdopted") === "true" ? true : null, 
            isPureBreed: data.get("isPureBreed") === "true" ? true : null,
            attributes: {
                isSterelized: data.get("isSterelized") === "true" ? true : null,
                isVaccinated: data.get("isVaccinated") === "true" ? true : null,
                isChipped: data.get("isChipped") === "true" ? true : null,
                specialNeeds: data.get("specialNeeds") === "true" ? true : null,
                houseTrained: data.get("houseTrained") === "true" ? true : null,
                goodWithKids: data.get("goodWithKids") === "true" ? true : null,
                goodWithDogs: data.get("goodWithDogs") === "true" ? true : null,
                goodWithCats: data.get("goodWithCats") === "true" ? true : null
                
            },
            states: data.getAll("states").length > 0 ? data.getAll("states") : null,     
            cities: data.getAll("cities").length > 0 ? data.getAll("cities") : null,               
        };

        const response = await fetch(url + "pet/search", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(searchCriteria),
        });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
    },



   
    //POST

    postColor: async (data: FormData) => {
        const response = await fetch(url + "color/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.get("name"),
          }),
        });
    
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      },

      postSpecies: async (data: FormData) => {
        const response = await fetch(url + "species/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.get("name"),
          }),
        });
    
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      },

      postBreed: async (data: FormData) => {
        const response = await fetch(url + "breed/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.get("name"),
            speciesId: data.get("speciesId"),
          }),
        });
    
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      },

      postOrganization: async (data: FormData) => {
          
        const response = await fetch(url + "organization/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.get("name"),
            email: data.get("email"),
            nipc: data.get("nipc"),
            phoneNumber: data.get("phoneNumber"),
            address: {
              street: data.get("street"),
              city: data.get("city"),
              state: data.get("state"),
              postalCode: data.get("postalCode"),
            },
            websiteUrl: data.get("websiteUrl"),
            socialMedia: {
              facebook: data.get("facebook"),
              twitter: data.get("twitter"),
              instagram: data.get("instagram"),
              youtube: data.get("linkedin"),
            }
          }),
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      },

    postUser: async (data: FormData) => {
        const response = await fetch(url + "user/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            nif: data.get("nif"),
            email: data.get("email"),
            dateOfBirth: data.get("dateOfBirth"),
            address: {
              street: data.get("street"),
              city: data.get("city"),
              state: data.get("state"),
              postalCode: data.get("postalCode"),
            },
            phoneNumber: data.get("phoneNumber"),
          }),
        });
    
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        return response.json();
      },


};
export default QueriesService;