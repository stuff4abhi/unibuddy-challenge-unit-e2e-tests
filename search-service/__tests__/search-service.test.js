const {request,app} = require('../commonTest')

beforeAll(async ()=>{
    console.log("........... SETUP for ALL SUMMARY SEARCH tests...........")
});

afterAll(async () => {
    console.log("........... TEARDOWN for ALL SUMMARY SEARCH tests...........")
    await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

describe("Positive cases for search", () => {
    beforeAll(async ()=>{
        console.log("........... SETUP for ALL POSITIVE SUMMARY SEARCH cases tests...........")
    });

    afterAll(async () => {
        console.log("........... TEARDOWN for ALL POSITIVE SUMMARY SEARCH cases tests...........")
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });

    beforeEach( async () => {
        console.log("... SETUP for EACH POSITIVE SUMMARY SEARCH cases test ...")
    });

    afterEach( async () => {
        console.log("... TEARDOWN for EACH POSITIVE SUMMARY SEARCH cases tests ...")
    });

    test("Search with Valid query - 1 word", async ()=>{
        const body = {
            "query": "some",
            "results_length": 2
        }
        const res = await request(app).post("/").send(body);

        expect(res.status).toEqual(200);
        expect(res.body.length).toEqual(body.results_length);
        expect(res.body[0].summary).toContain(body.query);
        expect(res.body[1].summary).toContain(body.query);
    });

    test("Search with Valid query - multi word", async ()=>{
        const body1 = {
            "query": "the book",
            "results_length": 2
        }
        const res1 = await request(app).post("/").send(body1);

        expect(res1.status).toEqual(200);
        expect(res1.body.length).toEqual(body1.results_length);
        expect(res1.body[0].summary.toLowerCase()).toContain(body1.query.toLowerCase().split(" ")[0]);
        expect(res1.body[0].summary.toLowerCase()).toContain(body1.query.toLowerCase().split(" ")[1]);
        expect(res1.body[1].summary.toLowerCase()).toContain(body1.query.toLowerCase().split(" ")[0]);
        expect(res1.body[1].summary.toLowerCase()).toContain(body1.query.toLowerCase().split(" ")[1]);
    });
});

describe("Negative cases for search", () => {
    beforeAll(async ()=>{
        console.log("........... SETUP for ALL NEGATIVE SUMMARY SEARCH cases tests...........")
    });

    afterAll(async () => {
        console.log("........... TEARDOWN for ALL NEGATIVE SUMMARY SEARCH cases tests...........")
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });

    beforeEach( async () => {
        console.log("... SETUP for EACH NEGATIVE SUMMARY SEARCH cases test ...")
    });

    afterEach( async () => {
        console.log("... TEARDOWN for EACH NEGATIVE SUMMARY SEARCH cases tests ...")
    });

    test("Search with InValid query - 1 word", async ()=>{
        const body = {
            "query": "",
            "results_length": 2
        }
        const res = await request(app).post("/").send(body);

        expect(res.status).toEqual(200);
        expect(res.body.length).toEqual(0);

    });

    test("Search with InValid results_length - multi word", async ()=>{
        const body = {
            "query": "the book",
            "results_length": -2
        }

        const res = await request(app).post("/").send(body);

        expect(res.status).toEqual(200);
        expect(res.body.length).toEqual(body.results_length);
        expect(res.body[0].summary.toLowerCase()).toContain(body.query.toLowerCase().split(" ")[0]);
        expect(res.body[0].summary.toLowerCase()).toContain(body.query.toLowerCase().split(" ")[1]);
        expect(res.body[1].summary.toLowerCase()).toContain(body.query.toLowerCase().split(" ")[0]);
        expect(res.body[1].summary.toLowerCase()).toContain(body.query.toLowerCase().split(" ")[1]);
    });
});