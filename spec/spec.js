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
          expect(res.body.house.house_id).to.equal(9);
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

    it("POST returns object with added person and returns a status code of 201", () => {
      return request
        .post("/api/people")
        .send({
          person: "Robin Arryn",
          picture_url:
            "https://vignette.wikia.nocookie.net/gameofthrones/images/7/74/Robin_Aaryn_Book_of_Stranger.jpg/revision/latest?cb=20160714005525",
          dead: false,
          house_id: 9,
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
          console.log(res.body);
          expect(res.body.query[0]).to.be.an("object");
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
    });
  });
});
