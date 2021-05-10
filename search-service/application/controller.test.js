const getLogic = require('./controller')
const getData = require('../repository/get-data')

jest.mock('../repository/get-data')
// getData.mockImplementation(() => {
//     return {
//         getData: jest.fn()
//     }
// })

const mockReq = (body) => ({
    body
});

const mockRes = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

test("Verify calling getData", async () => {
    const req = mockReq(
        { "query": "some", "results_length": 2}
    );
    const res = mockRes();
    await getLogic(req,res);

    expect(getData).toBeCalled();
});

test("Verify calling getData when query is absent in req", async () => {
    const req = mockReq(
        { "results_length": 2}
    );
    const res = mockRes();
    await getLogic(req,res);

    expect(getData).toBeCalled();
});

test("Verify calling getData when results_length is absent in req", async () => {
    const req = mockReq(
        { "query": "some"}
    );
    const res = mockRes();
    await getLogic(req,res);

    expect(getData).toBeCalled();
});

test("Verify calling getData when both query and results_length are absent in req", async () => {
    const req = mockReq(
        {}
    );
    const res = mockRes();
    await getLogic(req,res);

    expect(getData).toBeCalled();
});

