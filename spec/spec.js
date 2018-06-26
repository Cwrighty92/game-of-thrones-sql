process.env.NODE_ENV = "test";
const app = require("../app");
const request = require("supertest")(app);
const { expect } = require("chai");

describe("/api", () => {
  describe("/houses", () => {
    it("Get returns object with houses and returns a status code of 200", () => {
      return request
        .get("/api/houses")
        .expect(200)
        .then(res => {
          expect(res.body.houses.length).to.equal(8);
          expect(res.body.houses[1].house_id).to.equal(2);
        });
    });
    it("Post returns object with added house and returns a status code of 201", () => {
      return request
        .post("/api/houses")
        .send({
          house_name: "Arryn",
          sigil_img:
            "https://www.google.co.uk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiztpyan_HbAhUQecAKHb_JAswQjRx6BAgBEAU&url=http%3A%2F%2Fgameofthrones.wikia.com%2Fwiki%2FHouse_Arryn&psig=AOvVaw3w76hm4DEjR8DYypHHaJ6q&ust=1530099564868661",
          words: "As High as Honor",
          seat: "The Eyrie",
          religion: "Faith of the Seven"
        })
        .expect(201)
        .then(res => {
          expect(res.body.house.house_id).to.equal(9);
          expect(res.body.house).to.be.an("object");
          expect(res.body).to.have.all.keys("house");
        });
    });

    it("Get returns object with house and returns a status code of 200", () => {
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
});
