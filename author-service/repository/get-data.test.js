const getData = require('./get-data')


test("Verify calling getData", async () => {
    const res = await getData(2);
    // console.log(res);
    expect(res.id).toEqual(2);
});

test("Verify calling getData with non existing book id", async() => {
    const res = await getData(100);
    // console.log(res);
    expect(res.id).toEqual(100);
});

test("Verify calling getData with no book id", async () => {
    const res = await getData();
    // console.log(res);
    expect(res.id).toEqual(undefined);
});

test("Verify calling getData with invalid book id", async () => {
    const res = await getData('w');
    // console.log(res);
    expect(res.id).toEqual("w");
});