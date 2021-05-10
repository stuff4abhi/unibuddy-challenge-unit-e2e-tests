const {request,app} = require('../commonTest')

beforeAll(async ()=>{
    console.log("........... SETUP for ALL SERVER tests...........")
});

afterAll(async () => {
    console.log("........... TEARDOWN for ALL SERVER tests...........")
    await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

describe("Positive cases for Server", () => {
    beforeAll(async ()=>{
        console.log("........... SETUP for ALL POSITIVE SERVER tests...........")
    });

    afterAll(async () => {
        console.log("........... TEARDOWN for ALL POSITIVE SERVER tests...........")
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });

    beforeEach( async () => {
        console.log("... SETUP for EACH POSITIVE SERVER test ...")
    });

    afterEach( async () => {
        console.log("... TEARDOWN for EACH POSITIVE SERVER tests ...")
    });

    test("Search Summary and Author with Valid queries and count", async ()=>{
        const body = {
            "queries": ["some book"],
            "results_length": 1
        }
        const res = await request(app).post("/").send(body);
        console.log(res.body)

        // Verify Status
        expect(res.status).toEqual(200);
        // Verify if response has data related to all queries
        expect(res.body.length).toEqual(body.queries.length);
        // Verify if response has required number of books
        expect(res.body[0].length).toEqual(body.results_length);
        // Verify if query words are really there in the summaries
        expect(res.body[0][0].summary.toLowerCase()).toContain(body.queries[0].toLowerCase().split(" ")[0]);
        expect(res.body[0][0].summary.toLowerCase()).toContain(body.queries[0].toLowerCase().split(" ")[1]);
    });
})