const getAuthorData = require('./get-author-data')


test("Verify calling getAuthorData", async () => {
    const res = await getAuthorData(2);
    // console.log(res);
    expect(res.id).toEqual(2);
});

test("Verify calling getAuthorData with non existing book id", async() => {
    const res = await getAuthorData(100);
    // console.log(res);
    expect(res.id).toEqual(100);
});

test("Verify calling getAuthorData with no book id", async () => {
    const res = await getAuthorData();
    // console.log(res);
    expect(res.id).toEqual(undefined);
});

test("Verify calling getAuthorData with invalid book id", async () => {
    const res = await getAuthorData('w');
    // console.log(res);
    expect(res.id).toEqual("w");
});