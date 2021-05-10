const getData = require('./get-data')


test("Verify calling getData", () => {
    const res = getData("book",2);
    expect(res.length).toEqual(2);
});

test("Verify calling getData with more books than existing", () => {
    const res = getData("some interesting book",100);
    expect(res.length).toEqual(55);
});

test("Verify calling getData without any query", () => {
    const res = getData("",2);
    expect(res.length).toEqual(0);
});

test("Verify calling getData with number of books as 0", () => {
    const res = getData("book",0);
    expect(res.length).toEqual(0);
});