const getLogic = require('./controller')
const getData = require('../repository/get-data')

jest.mock('../repository/get-data')

const mockReq = (body) => ({
    body
});

const mockRes = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

test("verify if getData is called when book Id is present in the request", async () => {
    const req = mockReq(
        {"book_id": 2}
    )
    const res = mockRes();
    await getLogic(req, res);

    expect(getData).toBeCalled();
})

test("verify if getData is called when book Id is absent in the request", async () => {
    const req = mockReq(
        {}
    )
    const res = mockRes();
    await getLogic(req, res);

    expect(getData).toBeCalled();
})