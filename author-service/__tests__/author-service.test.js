const {request,app} = require('../commonTest')

beforeAll(async ()=>{
    console.log("........... SETUP for ALL AUTHOR SEARCH tests...........")
});

afterAll(async () => {
    console.log("........... TEARDOWN for ALL AUTHOR SEARCH tests...........")
    await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

describe("Positive cases for Author search", () => {
    beforeAll(async ()=>{
        console.log("........... SETUP for ALL POSITIVE AUTHOR SEARCH cases tests...........")
    });

    afterAll(async () => {
        console.log("........... TEARDOWN for ALL POSITIVE AUTHOR SEARCH cases tests...........")
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });

    beforeEach( async () => {
        console.log("... SETUP for EACH POSITIVE SUMMARY AUTHOR cases test ...")
    });

    afterEach( async () => {
        console.log("... TEARDOWN for EACH POSITIVE SUMMARY AUTHOR cases tests ...")
    });

    test("Search Author Valid Book id", async ()=>{
        const body = {
            "book_id": 2
        }
        const res = await request(app).post("/").send(body);
        console.log(res.body)
        expect(res.status).toEqual(200);
        expect(res.body.id).toEqual(body.book_id);
    });
})

describe("Negative cases for Author search", () => {
    beforeAll(async ()=>{
        console.log("........... SETUP for ALL NEGATIVE AUTHOR SEARCH cases tests...........")
    });

    afterAll(async () => {
        console.log("........... TEARDOWN for ALL NEGATIVE AUTHOR SEARCH cases tests...........")
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });

    beforeEach( async () => {
        console.log("... SETUP for EACH NEGATIVE AUTHOR SEARCH cases test ...")
    });

    afterEach( async () => {
        console.log("... TEARDOWN for EACH NEGATIVE AUTHOR SEARCH cases tests ...")
    });

    test("Search Author Valid Book id", async ()=>{
        const body = {
            "book_id": -2
        }
        const res = await request(app).post("/").send(body);
        console.log(res.body)
        expect(res.status).toEqual(200);
        expect(res.body.id).toEqual(body.book_id);
    });
})