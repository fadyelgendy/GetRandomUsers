const app = Vue.createApp({
    data() {
        return {
            firstName: "Fady",
            lastName: "Gendy",
            email: "fadyelgendy2017@gmail.com",
            gender: "male",
            image: "https://randomuser.me/api/portraits/men/10.jpg"
        }
    },

    methods: {
        async getUser() {
            const res = await fetch("https://randomuser.me/api");
            try {
                const { results } = await res.json();
                this.firstName =  results[0].name.first;
                this.lastName =  results[0].name.last;
                this.email =  results[0].email;
                this.gender =  results[0].gender;
                this.image =  results[0].picture.large;
            } catch(error) {
                console.log(`ERROR: ${error}`);
            }
        }
    }
});

app.mount('#app');