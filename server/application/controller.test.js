const getAuthorData = require('../repository/get-author-data')
const getSummaryData = require('../repository/get-summary-data')
const getLogic = require('./controller')

jest.mock('../repository/get-author-data')
jest.mock('../repository/get-summary-data')

getSummaryData.mockImplementation((q,) => {
    const data = [{
        "id": 27,
        "summary": "The Book in Three Sentences: Some things are in your power and some are not—do not confuse the two and do not desire the things that are not in your power. It is our opinion of things that determines how we feel about a particular event, not the event itself. Think carefully about how you spend your life because people often spend their lives chasing things that are neither as desirable nor as important as they seem.",
        "relvance": 2,
        "title": "The Reason I Jump"
    }]
    if (q === "no") return

    return data
})

getAuthorData.mockImplementation(() => {
    return {
            "author": "James Webb Young",
            "id": 3
        }

})

const mockReq = (body) => ({
    body
});

const mockRes = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};


test("test controller when results_length is equal to existing number of books", async () => {
    const req = mockReq(
        {
            "queries": ["some book"],
            "results_length": 1
        }
    )
    const res = mockRes();
    await getLogic(req, res);
    expect(getSummaryData).toBeCalled();
    expect(getAuthorData).toBeCalled();
})

test("test controller when results length is greater than existing", async () => {
    const req = mockReq(
        {
            "queries": ["some book", "heights of"],
            "results_length": 2
        }
    )
    const res = mockRes();
    await getLogic(req, res);
    expect(getSummaryData).toBeCalled();
    expect(getAuthorData).toBeCalled();
})


test("test controller when there is empty response from getSummaryData", async () => {
    const req = mockReq(
        {
            "queries": ["no", "heights of"],
            "results_length": 2
        }
    )
    const res = mockRes();
    await getLogic(req, res);
    expect(getSummaryData).toBeCalled();
    expect(getAuthorData).toBeCalled();
})