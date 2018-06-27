process.env.NODE_ENV = "test";
const app = require("../app");
const request = require("supertest")(app);
const { expect } = require("chai");

describe("/api", () => {
  describe("/houses", () => {
    it("GET returns object with houses and returns a status code of 200", () => {
      return request
        .get("/api/houses")
        .expect(200)
        .then(res => {
          expect(res.body.houses.length).to.equal(8);
          expect(res.body.houses[1].house_id).to.equal(2);
        });
    });
    it("POST returns object with added house and returns a status code of 201", () => {
      return request
        .post("/api/houses")
        .send({
          house_name: "Arryn",
          sigil_img:
            "https://www.google.co.uk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiztpyan_HbAhUQecAKHb_JAswQjRx6BAgBEAU&url=http%3A%2F%2Fgameofthrones.wikia.com%2Fwiki%2FHouse_Arryn&psig=AOvVaw3w76hm4DEjR8DYypHHaJ6q&ust=1530099564868661",
          words: "As High as Honor",
          seat: "The Eyrie",
          region: "The Vale of Arryn"
        })
        .expect(201)
        .then(res => {
          expect(res.body.house).to.be.an("object");
          expect(res.body).to.have.all.keys("house");
        });
    });

    it("GET returns object with house and returns a status code of 200", () => {
      return request
        .get("/api/houses/1")
        .expect(200)
        .then(res => {
          expect(res.body.house.house_id).to.equal(1);
          expect(res.body.house).to.be.an("object");
          expect(res.body).to.have.all.keys("house");
        });
    });
    it("GET responds with status 404 for a a valid id that is not there", () => {
      const ID = 200;
      return request
        .get(`/api/houses/${ID}`)
        .expect(404)
        .then(res => {
          expect(res.body.message).to.equal(`Page for house ${ID} not found`);
        });
    });
    it("GET responds with status 400 for a bad ID", () => {
      const ID = "mitch";
      return request
        .get(`/api/houses/${ID}`)
        .expect(400)
        .then(res => {
          expect(res.body.message).to.equal(
            `Bad request : house ${ID} is invalid`
          );
        });
    });
  });
  it("POST responds with status 400 for a body which has a value that is too long", () => {
    return request
      .post(`/api/houses/`)
      .send({
        a:
          "asdadasdadasdasdadasadsadasdsadasdasdasdasdasdasdadasdasdasdasdadsadafasfasfasdasdadsa",
        b: 2,
        c: 3,
        d: 4,
        e: 5
      })
      .expect(400)
      .then(res => {
        expect(res.body.message).to.equal(
          "Value in House Name, Sigil, Seat or Region is over character limit within body"
        );
      });
  });
  it("POST responds with status 400 for invalid elements withing the body", () => {
    return request
      .post(`/api/houses/`)
      .send({ a: null, b: null, c: null, d: null, e: null })
      .expect(400)
      .then(res => {
        expect(res.body.message).to.equal(
          `Did not expect Null within an element within the body`
        );
      });
  });
  describe("/people", () => {
    it("GET returns object with people and returns a status code of 200", () => {
      return request
        .get("/api/people")
        .expect(200)
        .then(res => {
          expect(res.body.people.length).to.equal(21);
          expect(res.body.people[1].person).to.equal("Catelyn Stark");
        });
    });
    it("GET responds with status 404 for a a valid id that is not there", () => {
      const ID = 200;
      return request
        .get(`/api/people/${ID}`)
        .expect(404)
        .then(res => {
          expect(res.body.message).to.equal(`Page for people ${ID} not found`);
        });
    });
    it("GET responds with status 400 for a bad ID", () => {
      const ID = "mitch";
      return request
        .get(`/api/people/${ID}`)
        .expect(400)
        .then(res => {
          expect(res.body.message).to.equal(
            `Bad request : people ${ID} is invalid`
          );
        });
    });

    it("GET responds with status 404 for a a valid id that is not there", () => {
      const ID = 200;
      return request
        .get(`/api/people/houses/${ID}`)
        .expect(404)
        .then(res => {
          expect(res.body.message).to.equal(`Page for house ${ID} not found`);
        });
    });
    it("GET responds with status 400 for a bad ID", () => {
      const ID = "mitch";
      return request
        .get(`/api/people/houses/${ID}`)
        .expect(400)
        .then(res => {
          expect(res.body.message).to.equal(
            `Bad request : house ${ID} is invalid`
          );
        });
    });
    it("POST returns object with added person and returns a status code of 201", () => {
      return request
        .post("/api/people")
        .send({
          person: "Robin Arryn",
          picture_url:
            "https://vignette.wikia.nocookie.net/gameofthrones/images/7/74/Robin_Aaryn_Book_of_Stranger.jpg/revision/latest?cb=20160714005525",
          dead: false,
          house_id: 1,
          religion_id: 2
        })
        .expect(201)
        .then(res => {
          expect(res.body.person.people_id).to.equal(22);
          expect(res.body.person).to.be.an("object");
          expect(res.body).to.have.all.keys("person");
        });
    });

    it("GET returns object with person and returns a status code of 200", () => {
      return request
        .get("/api/people/1")
        .expect(200)
        .then(res => {
          expect(res.body.person.person).to.equal("Ned Stark");
          expect(res.body.person).to.be.an("object");
          expect(res.body).to.have.all.keys("person");
        });
    });
    it("GET /api/people?dead=true", () => {
      return request
        .get("/api/people?dead=true")
        .expect(200)
        .then(res => {
          expect(res.body.query[0]).to.be.an("object");
        });
    });
    it("GET /api/people?religion_id=1", () => {
      return request
        .get("/api/people?dead=true")
        .expect(200)
        .then(res => {
          expect(res.body.query[0]).to.be.an("object");
        });
    });
  });
  describe("/religions", () => {
    it("GET returns object with religions and returns a status code of 200", () => {
      return request
        .get("/api/religions")
        .expect(200)
        .then(res => {
          expect(res.body.religion.length).to.equal(5);
          expect(res.body).to.have.all.keys("religion");
        });
    });
    it("POST returns a single Object with an added religion and returns a status code of 201", () => {
      return request
        .post("/api/religions")
        .send({ religion: "Jedi", religion_type: "The Force", god: "Yoda" })
        .expect(201)
        .then(res => {
          expect(res.body.religion.religion).to.equal("Jedi");
          expect(res.body.religion).to.be.an("object");
          expect(res.body).to.have.all.keys("religion");
        });
    });
    it("GET responds with status 404 for a a valid id that is not there", () => {
      const ID = 200;
      return request
        .get(`/api/religions/houses/${ID}`)
        .expect(404)
        .then(res => {
          expect(res.body.message).to.equal(`Page for house ${ID} not found`);
        });
    });
    it("GET responds with status 400 for a bad ID", () => {
      const ID = "mitch";
      return request
        .get(`/api/religions/houses/${ID}`)
        .expect(400)
        .then(res => {
          expect(res.body.message).to.equal(
            `Bad request : house ${ID} is invalid`
          );
        });
    });
    it("GET returns object with religions for a specific house and returns a status code of 200", () => {
      return request
        .get("/api/religions/houses/1")
        .expect(200)
        .then(res => {
          expect(res.body.house[0].religion).to.equal("Old Gods of the Forest");
          expect(res.body.house.length).to.equal(6);
          expect(res.body).to.have.all.keys("house");
        });
    });
  });
});
